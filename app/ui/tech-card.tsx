'use client';

import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import { BiRightArrowAlt } from "react-icons/bi";
import {useEffect} from "react";
export default function TechCard({title, body, animation, borderColor}: {
    title: string,
    body: string,
    animation: string,
    borderColor: string
}) {

    console.log('card is running...')
    let thisElement: Element;

    useEffect(() => {
        console.log(`use effect is running... window is ${window}`)

        function setElementAndCreateObservers() {
            console.log('window load listener called')
            thisElement = document.getElementById(title)!;
            createObserver();
        }

        if(document.readyState === "complete"){
            console.log("document is already ready")
            setElementAndCreateObservers();
        } else {
            window.addEventListener(
                "load",
                (event) => {
                    setElementAndCreateObservers();
                },
                false,
            );
        }
    }, [])

    //
    // while(typeof window === "undefined"){
    //     delay(300);
    //     setTimeout(function() {
    //
    //     }, 500);
    // }

    // let attempts = 0;
    //
    // const delay = (delayInms: number) => {
    //     return new Promise(resolve => setTimeout(resolve, delayInms));
    // };
    //
    // let thisWindow = window;
    // async function ensureWindow() {
    //     while (typeof thisWindow === "undefined") {
    //         attempts++
    //         console.log(`this attempt ${attempts}`)
    //         await delay(500);
    //         thisWindow = window;
    //     }
    // }
    //
    // await ensureWindow();



    // window.addEventListener(
    //     "load",
    //     (event) => {
    //         console.log('window load listener called')
    //         thisElement = document.getElementById(title)!;
    //
    //         createObserver();
    //     },
    //     false,
    // );

    // useEffect(() => {
    //     const onLoad = () => {
    //
    //     }
    // })
    function createObserver() {
        let observer;

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: [0],
        };

        observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(thisElement);
    }

    function handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let className = entry.target.className;
                // entry.target.className = className + " techCardAnim";
                // (entry.target as HTMLElement).style.top = "0";
                (entry.target as HTMLElement).style.transform = "translateY(0)";
                (entry.target as HTMLElement).style.opacity = "1";
            }
        });
    }

    return <div
        id={title}
        className={
            `
        flex
        flex-col
        p-4
        items-start
        size-80
        ${borderColor}
        border-2
        m-auto
        mt-10
        bg-slate-50
        z-[-1]
        translate-y-24
        opacity-0
        transition-all
        duration-[800ms]
        ease-out
        `
        }
    >
        <DotLottieReact
            className="absolute inset-0 opacity-10"
            src={animation}
            loop
            autoplay
        />

        <p className="font-bold mb-5">
            {title}
        </p>
        <p className="text-2xl">
            {body}
        </p>
        <div className="flex flex-row mt-auto items-center">
            <p className="">
                Learn More
            </p>
            <BiRightArrowAlt/>
        </div>

    </div>
}