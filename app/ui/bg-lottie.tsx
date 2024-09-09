'use client';

import {DotLottieReact} from "@lottiefiles/dotlottie-react";

export default function BgLottie(){
    return <DotLottieReact
        className="h-screen absolute inset-0 opacity-25 z-[-1]"
        src="/animations/animation-background.json"
        loop
        autoplay
    />
}

 export function CipherLottie({src, tailwind}: {src: string, tailwind: string}) {
    return <DotLottieReact
        className={tailwind}
         src={src}
         loop
         autoplay
     />
 }