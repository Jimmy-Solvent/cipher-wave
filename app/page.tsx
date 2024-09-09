import Image from "next/image";
import {BiMenu, BiSolidUserPlus} from "react-icons/bi";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import BgLottie, {CipherLottie} from "@/app/ui/bg-lottie";
import TechCard from "@/app/ui/tech-card";

export default function Home() {
    return (
        <>
            <div className="bg-[#181b2f] flex items-center gap-3 p-4 sticky">
                <Image src="/appicon.svg" alt={"app icon"} width={100} height={100} className="size-auto"/>
                <div className="grow"/>
                <BiMenu className="fill-white size-7"></BiMenu>
            </div>

            <BgLottie/>

            <h1 className="font-medium text-4xl leading-tight text-center m-5">
                Intelligent, straightforward, and safe cryptocurrency investment
            </h1>

            <h3 className="text-center mx-5">
                <p className="m-5">
                    Orama Capital Trust stands at the forefront of Bitcoin and blockchain technology worldwide. Our
                    innovative products and services lay the groundwork for the financial systems of tomorrow.
                </p>

                <p className="m-5">
                    As the cryptocurrency landscape expands, we are committed to providing everyone with an
                    accessible, user-friendly entry point. Our solutions are expertly crafted, clearly communicated,
                    and professionally managed. We simplify the crypto experience.
                </p>
            </h3>

            <h2 className="mt-60 text-center text-3xl">
                Enhancing Bitcoin’s functionality
            </h2>
            <p className="text-center text-xl m-4">
                Our range of technologies improves the Bitcoin ecosystem, simplifying the process for individuals and businesses to secure and manage their digital assets.
            </p>

            <TechCard
                title={"Orama Capital Trust Mining"}
                body={"Premium Bitcoin Mining Hosting"}
                animation={"/animations/animation-mining.json"}
                borderColor={"border-[#00f]"}
            />

            <TechCard
                title={"Orama Capital Trust Satellite"}
                body={"Access Bitcoin offline"}
                animation={"/animations/animation-earn.json"}
                borderColor={"border-[#9ff]"}
            />

            <TechCard
                title={"Liquid Network"}
                body={"Adcanced layer Solution for Issuing Digital Assets"}
                animation={"/animations/animation-explore.json"}
                borderColor={"border-[#f0f]"}
            />

            <TechCard
                title={"Core Lightning"}
                body={"High-Performance Lightning Network Deployment"}
                animation={"/animations/animation-wallet.json"}
                borderColor={"border-[#f60]"}
            />

            <h2 className="text-3xl mt-32 text-center">
                The Liquid Network
            </h2>
            <p className="text-center m-4">
                The premier sidechain for Bitcoin, facilitating rapid, private transactions and asset issuance.
            </p>

            <div className="radialBackground relative p-16 size-96 mt-8 mx-auto">
                <CipherLottie
                src="/animations/animation-planetary.json"
                tailwind="m-auto absolute inset-0"
            />
            </div>

            <h2 className="text-3xl mt-32 text-center">
                Set up a Wallet
            </h2>
            <p className="text-center m-4">
                Handle your Bitcoin and Liquid assets effortlessly with our top-tier wallet applications.
            </p>
            <Image
                src="/main-landing-mockup.png"
                alt="screenshot of app"
                width="500"
                height="500"
                className="mx-auto size-auto"
            />

            <a href="" className="flex items-center gap-2 p-4 mx-auto mt-16 w-min rounded-lg bg-[#5f52a7] hover:bg-[#332f50]">
                <BiSolidUserPlus className="fill-white"/>
                <p className="text-white">Register</p>
            </a>

            <div className="mt-32 p-4">
                <h2 className="font-bold border-b-2 mb-4 pb-1">
                Products
                </h2>
                <ul>
                    <li className="mt-3">Liquid Network</li>
                    <li className="mt-3">Orama Capital Trust Finance</li>
                    <li className="mt-3">Orama Capital Trust Mining</li>
                    <li className="mt-3">Orama Capital Trust Satellite</li>
                    <li className="mt-3">Core Lightning</li>
                </ul>
            </div>

            <div className="mt-8 p-4">
                <h2 className="font-bold border-b-2 mb-4 pb-1">
                    Company
                </h2>
                <ul>
                    <li className="mt-3">About</li>
                </ul>
            </div>

            <div className="mt-8 p-4">
                <h2 className="font-bold border-b-2 mb-4 pb-1">
                    Resources
                </h2>
                <ul>
                    <li className="mt-3">Support</li>
                </ul>
            </div>

            <Image
                src="/appicon.svg"
                alt={"app icon"}
                width={10} height={10}
                className="size-auto ms-4 my-16"/>

            <div className="flex gap-3 mt-8 ms-4">
                <a>Terms</a>
                |
                <a>Privacy</a>
            </div>

            <p className="my-8 ms-4">
                © 2024 OramaCapitalTrust Corporation Inc. <br/>
                All rights reserved.
            </p>
        </>
    );
}
