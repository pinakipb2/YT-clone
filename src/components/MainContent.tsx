import Chips from './Chips';
import Videos from './Videos';

const MainContent = () => {
  return (
    <div className="w-full md:w-[92%] lg:w-[94%] h-fit flex flex-col">
      <Chips />
      <Videos />
    </div>
  );
};

export default MainContent;
