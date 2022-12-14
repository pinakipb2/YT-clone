import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdMic } from 'react-icons/md';
import Bell from './SVGS/Bell';
import Camera from './SVGS/Camera';
import Menu from './SVGS/Menu';
import Search from './SVGS/Search';
import YTLogo from './SVGS/YTLogo';

const Navbar = () => {
  const [isInputFocussed, setIsInputFocussed] = useState<boolean>(false);
  return (
    <div className="flex bg-[#0F0F0F] h-[57px] w-full px-[8px] md:px-[19px] items-center sticky py-2 top-0 z-50">
      <div className="flex items-center gap-5 w-full">
        <Menu className="text-white h-[24px] w-[24px] m-[8px] shrink-0 hover:cursor-pointer" />
        <Link href="/">
          <div className="relative shrink-0 hover:cursor-pointer">
            <YTLogo />
            <span className="absolute text-[10px] text-white/60 -top-2 -right-3">IN</span>
          </div>
        </Link>
        <div className="hidden sm:flex text-white justify-center items-center w-full pl-[80px] xl:pl-[210px] pr-[100px] xl:pr-[240px]">
          <div className="flex relative w-full">
            <input
              className="h-[20px] py-[19px] rounded-l-full px-4 border-[1.3px] border-[#303030] placeholder:text-white/50 outline-0 focus:border-blue-500 text-white bg-[#121212] caret-white w-full mr-[65px] focus:-ml-[40px] focus:pl-[55px]"
              placeholder="Search"
              onFocus={() => setIsInputFocussed(true)}
              onBlur={() => setIsInputFocussed(false)}
            />
            <div className={`${isInputFocussed ? '' : 'hidden'} flex items-center justify-center absolute h-full w-[65px] -left-[40px] rounded-r-full outline-0`}>
              <Search className="text-white h-[24px] w-[24px] p-[1.5px] shrink-0 hover:cursor-pointer" />
            </div>
            <button className="flex items-center justify-center absolute bg-[#222222] h-full w-[65px] right-[0px] rounded-r-full outline-0 border-[1.3px] border-[#303030] border-l-0">
              <Search className="text-white/80 h-[24px] w-[24px] p-[0.5px] shrink-0 hover:cursor-pointer" />
            </button>
          </div>
          <MdMic className="text-white h-[40px] w-[40px] ml-[20px] p-[8px] shrink-0 hover:cursor-pointer bg-[#181818] rounded-full hover:bg-[#3F3F3F]" />
        </div>
      </div>
      <div className="flex justify-end w-fit gap-5 xs:gap-5 sm:gap-8 items-center">
        <Search className="sm:hidden text-white h-[25px] w-[25px] ml-[20px] p-[0.5px] shrink-0 hover:cursor-pointer" />
        <MdMic className="hidden xs:block sm:hidden bg-[#212121] text-white h-[40px] w-[40px] p-[8px] shrink-0 hover:cursor-pointer" />
        <Camera className="text-white h-[25px] w-[25px] p-[0.5px] shrink-0 hover:cursor-pointer" />
        <Bell className="hidden xs:block text-white h-[24px] w-[24px] p-[0.5px] shrink-0 hover:cursor-pointer" />
        <Image src="/user.png" alt="user" width="600" height="100" className="rounded-full w-[32px] h-[32px] mr-[25px] hover:cursor-pointer" priority={true} />
      </div>
    </div>
  );
};

export default Navbar;
