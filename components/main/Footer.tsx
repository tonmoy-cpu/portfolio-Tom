import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://www.youtube.com/@tonmoy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px]"
            >
              <FaYoutube className="mr-2" />
              <span className="text-[15px]">YouTube</span>
            </a>
            <a
              href="https://github.com/tonmoy-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px]"
            >
              <RxGithubLogo className="mr-2" />
              <span className="text-[15px]">GitHub</span>
            </a>
            <a
              href="https://discord.com/invite/tonmoy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px]"
            >
              <RxDiscordLogo className="mr-2" />
              <span className="text-[15px]">Discord</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/tonmoymukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px]"
            >
              <RxInstagramLogo className="mr-2" />
              <span className="text-[15px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com/tonmoymukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px]"
            >
              <RxTwitterLogo className="mr-2" />
              <span className="text-[15px]">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tonmoymukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px]"
            >
              <RxLinkedinLogo className="mr-2" />
              <span className="text-[15px]">LinkedIn</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px]">Learn about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px]">tonmoymukherjee31@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Tonmoy 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
