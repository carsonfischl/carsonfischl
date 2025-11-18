/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true }, // linting step (ESLint)
  typescript: { ignoreBuildErrors: true }, // type-checking step (TypeScript)
}

