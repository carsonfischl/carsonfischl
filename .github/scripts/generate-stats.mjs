// Generates self-hosted GitHub stats cards for the profile README.
// Usage: GITHUB_TOKEN=... GH_USER=carsonfischl node generate-stats.mjs <outDir>
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const user = process.env.GH_USER || 'carsonfischl'
const token = process.env.GITHUB_TOKEN
const outDir = process.argv[2] || 'dist'
if (!token) throw new Error('GITHUB_TOKEN is required')

const HIDE_LANGS = new Set(['HTML', 'CSS', 'SCSS', 'Jupyter Notebook', 'Makefile', 'Dockerfile', 'Shell'])

async function gql(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  })
  const json = await res.json()
  if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors || json))
  return json.data
}

const { user: u } = await gql(
  `query($login: String!) {
    user(login: $login) {
      name
      createdAt
      followers { totalCount }
      pullRequests { totalCount }
      issues { totalCount }
      contributionsCollection {
        totalCommitContributions
        restrictedContributionsCount
        contributionCalendar { totalContributions }
      }
      repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) {
        totalCount
        nodes {
          stargazerCount
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            edges { size node { name color } }
          }
        }
      }
    }
  }`,
  { login: user },
)

const repos = u.repositories.nodes
const stars = repos.reduce((n, r) => n + r.stargazerCount, 0)
const langTotals = new Map()
for (const r of repos) {
  for (const { size, node } of r.languages.edges) {
    if (HIDE_LANGS.has(node.name)) continue
    const cur = langTotals.get(node.name) || { size: 0, color: node.color || '#8b949e' }
    cur.size += size
    langTotals.set(node.name, cur)
  }
}
const topLangs = [...langTotals.entries()].sort((a, b) => b[1].size - a[1].size).slice(0, 8)
const langSum = topLangs.reduce((n, [, v]) => n + v.size, 0) || 1

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
const fmt = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n))
const updated = new Date().toISOString().slice(0, 10)

const theme = { bg: '#0d1117', border: '#30363d', title: '#58a6ff', text: '#c9d1d9', muted: '#8b949e', accent: '#7ee787' }
const font = `font-family="'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif"`

function card(width, height, title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" ${font}>
  <rect x="0.5" y="0.5" rx="10" width="${width - 1}" height="${height - 1}" fill="${theme.bg}" stroke="${theme.border}"/>
  <text x="25" y="38" fill="${theme.title}" font-size="18" font-weight="600">${esc(title)}</text>
  ${body}
  <text x="${width - 20}" y="${height - 12}" fill="${theme.muted}" font-size="10" text-anchor="end">updated ${updated}</text>
</svg>
`
}

const yearsOnGitHub = Math.floor((Date.now() - new Date(u.createdAt)) / (365.25 * 24 * 3600 * 1000))
const cc = u.contributionsCollection
const statRows = [
  ['⭐', 'Total stars', stars],
  ['📦', 'Public repos', u.repositories.totalCount],
  ['🔨', 'Commits (last 12 mo)', cc.totalCommitContributions + cc.restrictedContributionsCount],
  ['🟩', 'Contributions (last 12 mo)', cc.contributionCalendar.totalContributions],
  ['🔀', 'Pull requests', u.pullRequests.totalCount],
  ['🐛', 'Issues', u.issues.totalCount],
  ['🗓️', 'Years on GitHub', yearsOnGitHub],
]
const statsBody = statRows
  .map(
    ([icon, label, value], i) => `<g transform="translate(25, ${70 + i * 26})">
    <text font-size="14" fill="${theme.text}">${icon}  ${esc(label)}</text>
    <text x="400" font-size="14" font-weight="700" fill="${theme.accent}" text-anchor="end">${fmt(value)}</text>
  </g>`,
  )
  .join('\n  ')

const barW = 400
let x = 0
const barSegs = topLangs
  .map(([, v]) => {
    const w = (v.size / langSum) * barW
    const seg = `<rect x="${x.toFixed(2)}" width="${w.toFixed(2)}" height="10" fill="${v.color}"/>`
    x += w
    return seg
  })
  .join('')
const langRows = topLangs
  .map(([name, v], i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    return `<g transform="translate(${25 + col * 210}, ${100 + row * 26})">
    <circle cx="5" cy="-4" r="5" fill="${v.color}"/>
    <text x="16" font-size="13" fill="${theme.text}">${esc(name)} <tspan fill="${theme.muted}">${((v.size / langSum) * 100).toFixed(1)}%</tspan></text>
  </g>`
  })
  .join('\n  ')
const langsBody = `<clipPath id="bar"><rect width="${barW}" height="10" rx="5"/></clipPath>
  <g clip-path="url(#bar)" transform="translate(25, 60)">${barSegs}</g>
  ${langRows}`

const statsH = 70 + statRows.length * 26 + 14
const langsH = 100 + Math.ceil(topLangs.length / 2) * 26 + 10

mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'stats.svg'), card(450, Math.max(statsH, langsH), `${process.env.DISPLAY_NAME || u.name || user}'s GitHub Stats`, statsBody))
writeFileSync(join(outDir, 'top-langs.svg'), card(450, Math.max(statsH, langsH), 'Most Used Languages', langsBody))
console.log(`Wrote stats.svg and top-langs.svg to ${outDir}`)
