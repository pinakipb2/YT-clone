import Feedback from './SVGS/Feedback';
import Help from './SVGS/Help';
import History from './SVGS/History';
import Home from './SVGS/Home';
import Later from './SVGS/Later';
import Library from './SVGS/Library';
import LikedVideos from './SVGS/LikedVideos';
import Live from './SVGS/Live';
import More from './SVGS/More';
import Report from './SVGS/Report';
import Settings from './SVGS/Settings';
import Shorts from './SVGS/Shorts';
import Subscriptions from './SVGS/Subscriptions';
import Trending from './SVGS/Trending';
import YourVideos from './SVGS/YourVideos';
import YTKids from './SVGS/YTKids';
import YTMusic from './SVGS/YTMusic';
import YTTV from './SVGS/YTTV';

const Divider = () => {
  return <div className="hidden xl:block bg-[#323232] h-[0.8px] w-[85%] my-2.5 shrink-0"></div>;
};

const Sidebar = () => {
  return (
    <div className="bg-[#0F0F0F] hidden py-[10px] w-[75px] xl:w-[235px] h-fit xl:max-h-[91vh] text-white md:flex flex-col items-center shrink-0 gap-7 xl:gap-[13px] sticky top-[56px] scrollbar-hide hover:scrollbar-default scrollbar-thin scrollbar-thumb-[#CACACA] scrollbar-track-[#0F0F0F] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thumb-h-[100px] overflow-x-hidden scroll-smooth xl:pr-2 xl:pb-5">
      <div className="flex flex-col w-full items-center gap-1 hover:cursor-pointer xl:hidden">
        <Home className="w-[26px] h-[26px]" />
        <span className="text-[10px]">Home</span>
      </div>
      <div className="flex flex-col w-full items-center gap-1 hover:cursor-pointer xl:hidden">
        <Shorts className="w-[26px] h-[26px]" />
        <span className="text-[10px]">Shorts</span>
      </div>
      <div className="flex flex-col w-full items-center gap-1 hover:cursor-pointer xl:hidden">
        <Subscriptions className="w-[26px] h-[26px]" />
        <span className="text-[10px]">Subscriptions</span>
      </div>
      <div className="flex flex-col w-full items-center gap-1 hover:cursor-pointer xl:hidden">
        <Library className="w-[26px] h-[26px]" />
        <span className="text-[10px]">Library</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-[90%] pl-3 gap-[25px] bg-[#272727] py-2 rounded-xl">
        <Home className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Home</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Shorts className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Shorts</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Subscriptions className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Subscriptions</span>
      </div>
      <Divider />
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Library</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <History className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">History</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <YourVideos className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Your videos</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Later className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Watch later</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <LikedVideos className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Liked videos</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <More className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show more</span>
      </div>
      <Divider />
      <div className="hidden xl:flex items-center w-full pl-6">
        <span className="text-base font-medium">Subscriptions</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show more</span>
        <Live className="w-[18px] h-[18px] justify-start" />
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show more</span>
        <Library className="w-[24px] h-[24px] justify-start" />
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show more</span>
        <Library className="w-[24px] h-[24px] justify-start" />
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show more</span>
        <Library className="w-[24px] h-[24px] justify-start" />
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show more</span>
        <Library className="w-[24px] h-[24px] justify-start" />
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show more</span>
        <Library className="w-[24px] h-[24px] justify-start" />
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show more</span>
        <Library className="w-[24px] h-[24px] justify-start" />
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <More className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Show 21 more</span>
      </div>
      <Divider />
      <div className="hidden xl:flex items-center w-full pl-6">
        <span className="text-base font-medium">Explore</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Trending className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Trending</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Music</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Movies</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Live</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Gaming</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">News</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Sports</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Learning</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Fashion & Beauty</span>
      </div>
      <Divider />
      <div className="hidden xl:flex items-center w-full pl-6">
        <span className="text-base font-medium">More from YouTube</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">YouTube Premium</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Library className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Creator Studio</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <YTMusic className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">YouTube Music</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <YTKids className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Youtube Kids</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <YTTV className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">YouTube TV</span>
      </div>
      <Divider />
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Settings className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Settings</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Report className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Report history</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Help className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Help</span>
      </div>
      <div className="hidden xl:flex items-center hover:cursor-pointer w-full pl-6 gap-[25px]">
        <Feedback className="w-[24px] h-[24px] justify-start" />
        <span className="text-sm font-medium">Send feedback</span>
      </div>
      <div className="hidden xl:flex text-xs text-white/50 mt-5">Created by Pinaki Bhattacharjee</div>
    </div>
  );
};

export default Sidebar;
