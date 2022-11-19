import React from 'react';
import Chips from './Chips';
import Videos from './Videos';

const MainContent = () => {
  return (
    <div className="w-full h-fit flex flex-col">
      <Chips />
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
      <Videos />
    </div>
  );
};

export default MainContent;
