import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiVideoAddLine } from 'react-icons/ri';
import { MdMic } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';
import YTLogo from './YTLogo';
import Image from 'next/image';

const Navbar = () => {
  const [isInputFocussed, setIsInputFocussed] = useState<boolean>(false);
  return (
    <div className="flex h-[57px] w-full px-[8px] lg:px-[15px] items-center">
      <div className="flex items-center gap-5 w-full">
        <FiMenu className="text-white h-[24px] w-[24px] m-[8px] shrink-0 hover:cursor-pointer" />
        <div className="relative shrink-0 hover:cursor-pointer">
          <YTLogo />
          <span className="absolute text-[10px] text-white/60 -top-2 -right-3">IN</span>
        </div>
        <div className="hidden sm:flex text-white justify-center items-center w-full pl-[80px] xl:pl-[210px] pr-[100px] xl:pr-[240px]">
          <div className="flex relative w-full">
            <input
              className="h-[20px] py-[19px] rounded-l-full px-4 border-[1.3px] border-[#303030] outline-0 focus:border-blue-500 text-[#303030] bg-[#121212] caret-white w-full mr-[65px] focus:-ml-[40px] focus:pl-[55px]"
              placeholder="Search"
              onFocus={() => setIsInputFocussed(true)}
              onBlur={() => setIsInputFocussed(false)}
            />
            <div className={`${isInputFocussed ? '' : 'hidden'} flex items-center justify-center absolute h-full w-[65px] -left-[40px] rounded-r-full outline-0`}>
              <AiOutlineSearch className="text-white h-[24px] w-[24px] p-[1.5px] shrink-0 hover:cursor-pointer" />
            </div>
            <button className="flex items-center justify-center absolute bg-[#222222] h-full w-[65px] right-[0px] rounded-r-full outline-0 border-[1.3px] border-[#303030] border-l-0">
              <AiOutlineSearch className="text-white h-[24px] w-[24px] p-[0.5px] shrink-0 hover:cursor-pointer" />
            </button>
          </div>
          <MdMic className="text-white h-[40px] w-[40px] ml-[20px] p-[8px] shrink-0 hover:cursor-pointer bg-[#181818] rounded-full" />
        </div>
      </div>
      <div className="flex justify-end w-fit gap-5 xs:gap-3.5 sm:gap-8 items-center">
        <AiOutlineSearch className="sm:hidden text-white h-[24px] w-[24px] ml-[20px] p-[0.5px] shrink-0 hover:cursor-pointer" />
        <MdMic className="hidden xs:block sm:hidden bg-[#212121] text-white h-[40px] w-[40px] p-[8px] shrink-0 hover:cursor-pointer" />
        <RiVideoAddLine className="text-white h-[24px] w-[24px] p-[0.5px] shrink-0 hover:cursor-pointer" />
        <BiBell className="hidden xs:block text-white h-[24px] w-[24px] p-[0.5px] shrink-0 hover:cursor-pointer" />
        <Image src="/user.png" alt="user" width="600" height="100" className="rounded-full w-[32px] h-[32px] mr-[8px] hover:cursor-pointer" priority={true} />
      </div>
    </div>
  );
};

export default Navbar;
