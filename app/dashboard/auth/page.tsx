import AppIcon from "@/app/ui/app-icon";
import Interceptors from "undici-types/interceptors";
import Link from "next/link";

export default function ok(){
    return <div className="p-10 bg-[#181b2f]">
        <div className="w-max mx-auto mb-4">
            <AppIcon/>
        </div>

        <div className="bg-white flex-col p-10 rounded">
            <h1 className="text-center font-bold text-lg mb-8">
                User Login
            </h1>
            <p className="text-xs mb-2">
                Your Email
            </p>
            <input placeholder="name@example.com"
                   className="border-2
                   rounded
                   w-full
                   relative
                   p-2
                   placeholder:text-[0.7rem]
                   placeholder:translate-y-[-15%]
                   mb-8
                   "
            />

            <p className="text-xs mb-2">
                Password
            </p>
            <input placeholder="Enter Password"
                   className="border-2
                   rounded
                   w-full
                   relative
                   p-2
                   placeholder:text-[0.7rem]
                   placeholder:translate-y-[-15%]
                   mb-4
                   "
            />


            <p className="text-[0.7rem] mb-8">
                Forgot password?
            </p>

            <Link href="/dashboard"
               className="
               block
               rounded
               bg-[#181b2f]
               text-white
               text-center
               p-3
               mb-12
               "
            >
                Sign in
            </Link>

            <div className="flex items-end justify-center mb-8">
                <p className="text-[0.7rem] me-3">
                    Don't have an account?
                </p>

                <p className="font-bold text-sm mb">
                    Sign Up
                </p>
            </div>

            <p className="text-[0.7rem] text-center">
                © 2024 OramaCapitalTrust Corporation Inc. <br/>
                All rights reserved.
            </p>

        </div>
    </div>

}