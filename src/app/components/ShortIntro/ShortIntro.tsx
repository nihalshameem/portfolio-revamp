"use client"
import "./ShortIntro.css";
import Image from "next/image";
import React, { FC, useState } from "react";
import Logo from "@/app/assets/images/logo.png";
import { Col, Row } from "antd";

interface ShortIntroProps {}

const ShortIntro: FC<ShortIntroProps> = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    setPosition({
      x: (clientX - window.innerWidth / 2) / 20, // Adjust the divisor for more/less movement
      y: (clientY - window.innerHeight / 2) / 20,
    });
  };

  const imageStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: "transform 0.1s ease-out", // Smooth transition
  };
  return (
    <Row gutter={[10, 50]}>
      <Col
        xl={15}
        lg={15}
        md={24}
        sm={24}
        className="intro-card flex items-center justify-center min-h-screen p-10"
      >
        <Image
          src={Logo}
          alt="logo_image"
          priority
          className="absolute lg:hidden md:flex sm:flex"
          style={{ zIndex: "-1" }}
        />
        <div className="details flex items-center justify-center p-10">
          <div>
            <h4 className="slide-in delay-1">Hi, I&apos;m Nihal Shameem</h4>
            <br />
            <p className="m4 slide-in delay-2 text-lg">
              Senior Software Engineer with 5 years of experience in crafting
              innovative and scalable software solutions. Let&apos;s build
              something amazing together!
            </p>
            <div className="grid grid-cols-4 gap-8 mt-5 content-start">
              <button className="ease-linear transform hover:scale-125 transition duration-300 col-auto hire-me-button slide-in delay-3">
                Hire me
              </button>
              <button className="ease-linear transform hover:scale-125 transition duration-300 col-auto work-button slide-in delay-4">
                Latest works
              </button>
            </div>
          </div>
        </div>
      </Col>
      <Col
        xl={9}
        lg={9}
        md={24}
        sm={24}
        className="intro-card lg:flex items-center justify-center p-10 md:hidden sm:hidden"
      >
        <div
          className="flex items-center justify-center slide-in delay-5"
          onMouseMove={handleMouseMove}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <Image src={Logo} alt="logo_image" style={imageStyle} priority />
        </div>
      </Col>
    </Row>
  );
};

export default ShortIntro;
