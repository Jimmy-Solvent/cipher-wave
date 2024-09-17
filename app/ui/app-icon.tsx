import Image from "next/image";

export default function AppIcon() {
    return <Image src="/appicon.svg" alt={"app icon"} width={100} height={100} className="size-auto"/>;
}