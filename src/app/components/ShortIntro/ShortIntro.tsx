import "./ShortIntro.css";
import Image from "next/image";
import React, { FC } from "react";
import Logo from "@/app/assets/images/logo.png";

interface ShortIntroProps { }

const ShortIntro: FC<ShortIntroProps> = () => {
    return (
        <div className="intro-card flex items-center justify-center min-h-screen">
            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
                <div className="details flex items-center justify-center">
                    <div>
                        <h4 className="text-lg lg:text-xl slide-in delay-1">Hi, I'm Nihal Shameem</h4>
                        <br />
                        <p className="m4 slide-in delay-2">Senior Software Engineer with 5 years of experience in crafting innovative and scalable software solutions. Let's build something amazing together!</p>
                        <div className="grid grid-cols-3 gap-8 mt-5">
                            <button className="ease-linear transform hover:scale-125 transition duration-300 col-auto hire-me-button slide-in delay-3">Hire me</button>
                            <button className="ease-linear transform hover:scale-125 transition duration-300 col-auto work-button slide-in delay-4">Latest works</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center slide-in delay-5">
                    <Image src={Logo} alt="logo_image" priority />
                </div>
            </div>
        </div>
    )
}

export default ShortIntro;
