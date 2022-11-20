import Chips from './Chips';
import Videos from './Videos';

const MainContent = () => {
  return (
    <div className="w-full md:w-[92%] lg:w-[94%] xl:w-[82%] h-fit flex flex-col pb-10">
      <Chips />
      <Videos />
    </div>
  );
};

export default MainContent;
