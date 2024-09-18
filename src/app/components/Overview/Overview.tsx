import "./Overview.css";
import Image from "next/image";
import React, { FC } from "react";
import Logo from "@/app/assets/images/logo.png";

interface OverviewProps {}

const Overview: FC<OverviewProps> = () => {
  return (
    <div className="intro-card flex items-center justify-center min-h-screen">
      <h4 className="align-middle text-4xl firstLetter">Overview</h4>
    </div>
  );
};

export default Overview;
