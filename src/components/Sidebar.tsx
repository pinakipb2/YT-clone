import Home from './SVGS/Home';
import Library from './SVGS/Library';
import Shorts from './SVGS/Shorts';
import Subscriptions from './SVGS/Subscriptions';

const Sidebar = () => {
  return (
    <div className="bg-[#0F0F0F] hidden py-[20px] w-[75px] h-fit text-white md:flex flex-col items-center shrink-0 gap-7 sticky top-[56px]">
      <div className="flex flex-col w-full items-center gap-1 hover:cursor-pointer">
        <Home className="w-[26px] h-[26px]" />
        <span className="text-[10px]">Home</span>
      </div>
      <div className="flex flex-col w-full items-center gap-1 hover:cursor-pointer">
        <Shorts className="w-[26px] h-[26px]" />
        <span className="text-[10px]">Shorts</span>
      </div>
      <div className="flex flex-col w-full items-center gap-1 hover:cursor-pointer">
        <Subscriptions className="w-[26px] h-[26px]" />
        <span className="text-[10px]">Subscriptions</span>
      </div>
      <div className="flex flex-col w-full items-center gap-1 hover:cursor-pointer">
        <Library className="w-[26px] h-[26px]" />
        <span className="text-[10px]">Library</span>
      </div>
    </div>
  );
};

export default Sidebar;
