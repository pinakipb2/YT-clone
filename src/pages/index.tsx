import React from 'react';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="flex flex-col bg-[#0F0F0F] h-screen scrollbar-thin scrollbar-thumb-[#CACACA] scrollbar-track-[#0F0F0F] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thumb-h-[100px] pb-3 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      {/* MainContent */}
      <MainContent />
      {/* <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum
        perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid
        atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla
        fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora,
        facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium?
        Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni
        error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem
        quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore
        eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum
        perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid
        atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla
        fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora,
        facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium?
        Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni
        error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem
        quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore
        eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum
        perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid
        atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla
        fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora,
        facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium?
        Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni
        error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem
        quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore
        eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum
        perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid
        atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla
        fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora,
        facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium?
        Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni
        error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem
        quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore
        eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum
        perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid
        atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla
        fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora,
        facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium?
        Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni
        error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem
        quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore
        eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum
        perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid
        atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla
        fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora,
        facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium?
        Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni
        error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem
        quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore
        eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum
        perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid
        atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla
        fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora,
        facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium?
        Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni
        error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem
        quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore
        eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum
        perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora, facilis nam deleniti exercitationem quaerat id qui, similique aliquid
        atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam blanditiis pariatur ipsam magnam, nulla
        fugit perspiciatis. Eveniet veniam magni error odio expedita quia, ipsum perspiciatis repudiandae odit nam qui adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit tempora,
        facilis nam deleniti exercitationem quaerat id qui, similique aliquid atque dolorem maiores possimus accusantium? Incidunt ut velit eius dolore eveniet?
      </p> */}
    </div>
  );
};

export default Home;
