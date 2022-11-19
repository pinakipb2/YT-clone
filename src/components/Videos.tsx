import cuid from 'cuid';
import Image from 'next/image';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface Video {
  id: string;
  title: string;
  channelName: string;
  channelImg: string;
  thumbnailImg: string;
  isVerified?: boolean;
  isSinger?: boolean;
  duration: string;
  views: string;
  uploaded: string;
}

const Videos = () => {
  const videos: Video[] = [
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
    {
      id: cuid(),
      title: 'The Bhediya Legend: Pre-Release Promo 4K | Varun D | Kriti S | Advance Booking Open Now | 25-Nov',
      channelName: 'Maddock Films',
      channelImg: '/c1.jpg',
      thumbnailImg: '/t1.jpg',
      isVerified: true,
      duration: '1:30',
      views: '1.5M views',
      uploaded: '1 hour ago',
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white w-full h-full mt-6 gap-y-10 gap-x-4 px-8">
      {videos.map((vid) => (
        <div className="flex flex-col items-center gap-2 hover:cursor-pointer " key={vid.id}>
          <div className="relative w-[300px] xs:w-[365px]">
            <Image src={vid.thumbnailImg} alt={vid.channelName} width={1280} height={720} className="w-[300px] xs:w-[365px] rounded-xl z-0" priority={true} />
            <div className="absolute bottom-1 right-1.5 text-xs bg-[#0A0908] rounded-[4px] px-1 py-[1.5px] font-semibold tracking-wide">{vid.duration}</div>
          </div>
          <div className="flex w-[300px] xs:w-[365px]">
            <div className="text-sm">{vid.title}</div>
            <div className="text-sm">
              <BsThreeDotsVertical className="w-[26px] h-[18px]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
