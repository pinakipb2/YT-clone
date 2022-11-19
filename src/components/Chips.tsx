import cuid from 'cuid';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

interface TChips {
  id: string;
  name: string;
}

const Chips = () => {
  const chips: TChips[] = [
    { id: cuid(), name: 'All' },
    { id: cuid(), name: 'Music' },
    { id: cuid(), name: 'Mixes' },
    { id: cuid(), name: 'Gaming' },
    { id: cuid(), name: 'Live' },
    { id: cuid(), name: 'Computer Programming' },
    { id: cuid(), name: 'Trailers' },
    { id: cuid(), name: 'Comedy' },
    { id: cuid(), name: 'Pop Music' },
    { id: cuid(), name: 'Unboxing' },
    { id: cuid(), name: 'Motivation' },
    { id: cuid(), name: 'Cooking' },
    { id: cuid(), name: 'Watched' },
    { id: cuid(), name: 'New to You' },
    { id: cuid(), name: 'Website' },
    { id: cuid(), name: 'Cartoon' },
  ];
  return (
    <div className="flex bg-[#0F0F0F] w-full h-[57px] gap-3 px-[10px] py-[14px] pb-5 pl-6 items-center sticky top-[56px] z-50">
      {chips.map((chip, idx) => (
        <div key={chip.id} className={`shrink-0 ${idx === 0 ? 'text-black bg-[#F1F1F1]' : 'text-white bg-[#272727] hover:bg-[#3F3F3F]'} rounded-lg px-3 py-[5px] text-sm hover:cursor-pointer`}>
          {chip.name}
        </div>
      ))}
      <div className="absolute right-10 h-full bg-gradient-to-r from-transparent via-[#0F0F0F]/80 to-[#0F0F0F] w-[100px]"></div>
      <div className="flex absolute right-0 bg-[#0F0F0F] h-full items-center px-3 gap-2 pl-[10px] pr-[60px] -mr-[40px]">
        <MdOutlineArrowForwardIos className="text-white h-[17px] w-[17px] shrink-0 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Chips;
