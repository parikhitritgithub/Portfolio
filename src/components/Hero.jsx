"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Roboto } from "next/font/google";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skillhero from "./Skillhero";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100'],
});

export default function Hero() {
  const words = ["Build", "Collab", "Code"];

  return (
    <main className="p-8">
      <div className="grid gap-5 mt-16 sm:grid-cols-12">
        <div className="min-h-[15rem] mt-6 p-3 sm:col-span-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl p-2">Hello I&apos;m</h1>
            <h1 className="text-3xl p-2">Parikhit Kurmi</h1>
            <h1 className="text-3xl p-2 text-cyan-400"></h1>
            <div className="text-3xl p-2">
              Welcome to My Portfolio, Let&apos;s <FlipWords words={words} />
            </div>
          </div>
          <div className="flex flex-row p-3 space-x-2">
            <Button variant="ghost" className="bg-gray">
              <FaLinkedin />
            </Button>
            <Button variant="ghost" className="bg-gray">
              <FaInstagramSquare />
            </Button>
            <Button variant="ghost" className="bg-gray">
              <FaInstagramSquare />
            </Button>
            <Button variant="ghost" className="bg-gray p-2">
              <FaInstagramSquare />
            </Button>
          </div>
          <div className="grid grid-flow-col w-1/2 sm:grid-cols-12 gap-3">
            <button className="sm:w-[8rem] shadow-[inset_0_0_0_2px_#19f3f3] px-1 py-2 rounded-lg tracking-widest font-medium bg-transparent hover:bg-[#60c8ee] hover:text-white dark:text-neutral-200 transition duration-200 sm:col-span-6">
              Play
            </button>
            <button className="sm:w-[8rem] px-1 py-2 rounded-lg bg-[#19f3f3] text-white font-medium transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-cyan-500 sm:col-span-6">
              Invert it
            </button>
          </div>
        </div>
        <div className="min-h-[5rem] sm:col-span-6">
          <Image
            src="/mainIconsdark.svg"
            alt="Main Icon Dark"
            className="h-[28.5rem] w-[38rem]"
            width={380}
            height={285}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <SlArrowDown className="w-[2rem] text-white" />
      </div>
      <Skillhero />
    </main>
  );
}
