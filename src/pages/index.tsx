import React from 'react';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="flex flex-col bg-[#0F0F0F] h-screen scrollbar-thin scrollbar-thumb-[#CACACA] scrollbar-track-[#0F0F0F] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thumb-h-[100px] pb-10 overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      {/* MainContent */}
      <MainContent />
    </div>
  );
};

export default Home;
