import React from 'react'
import { ReactDOM } from 'react'
import Script from 'next/script'

type Props = {}

const Typewriter = (props: Props) => {
  return (
    <div>
        <span id='typewriter' className='font-mono text-white'>
            I am a...
        </span>
        <span id="cursor" className='font-mono text-white'>|</span>
        <Script>
            type();
        </Script>
    </div>
  )
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let time = 100;
let ind = 0;
const el = document.getElementById('typewriter')!;

const words = [
    'Scientist',
    'Hacker',
    'All-Around Eccentric',
]

const writeloop = async () => {
    for (let i = 0; i < words[ind].length; i++) {
        el.innerText += words[ind][i];
        while(true){
            let currentWord = words[ind];
            for(let i = 0; i < currentWord.length; i++){
                el.innerHTML += currentWord.substring(0, i);
                await sleep(time);
            }
            await sleep(1000);
            for(let i = currentWord.length; i >= 0; i--){
                el.innerHTML = currentWord.substring(0, i);
                await sleep(time);
            }
            if(ind == words.length - 1){
                ind = 0;
            }else{
                ind++;
            }
        }
    }
}

export default Typewriter