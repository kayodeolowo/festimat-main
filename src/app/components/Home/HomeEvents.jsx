import React from "react";
import { Container } from "../Layouts/Container";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { PrimaryButton } from "../Layouts/PrimaryButton";

const HomeEvents = () => {
  return (
<section>
<Container>
      

      
      <div>
      <div className=" mt-10 flex justify-between items-center">
              <h1 className=" md:text-3xl font-semibold ">
              Popular Events Around You.
              </h1>
      
              <PrimaryButton className="bg-inherit border hover:bg-gray-200  text-sm"> View more </PrimaryButton>
            </div>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mt-4">
              {/* Event Card */}
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
      </div>
      
      
      
           <div>
           <div className="flex justify-between items-center">
              <h1 className=" md:text-3xl font-semibold ">
              Discover Best of Online Events
              </h1>
      
              <PrimaryButton className="bg-inherit border hover:bg-gray-200  text-sm"> View more </PrimaryButton>
            </div>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mt-4">
              {/* Event Card */}
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
           </div>
      
      
      
      
           <div>
           <div className="flex justify-between items-center">
              <h1 className="  md:text-3xl font-semibold ">
              Free Events
              </h1>
      
              <PrimaryButton className="bg-inherit border hover:bg-gray-200  text-sm"> View more </PrimaryButton>
            </div>
      
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mt-4">
              {/* Event Card */}
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="group relative hover:shadow-lg hover:cursor-pointer text-gray-800 shadow bg-gray-100 rounded-lg">
                {/* Event Image */}
                <div className="relative">
                  <Image
                    alt="event image"
                    src="/assets/images/events.jpg"
                    width={200}
                    height={100}
                    className="h-[12rem] w-full rounded-t-lg object-cover"
                  />
                  
                  {/* Favorite Icon - Always visible on mobile, hover-only on desktop */}
                  <div className="absolute top-2 right-2 md:hidden">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
      
                  {/* Favorite Icon - Hidden by default, shows on desktop hover */}
                  <div className="hidden md:group-hover:block absolute top-2 right-2">
                    <div className="bg-white/80 rounded-full shadow-md p-2">
                      <CiStar className="text-2xl text-purple-600" />
                    </div>
                  </div>
                </div>
      
                {/* Event Details */}
                <div className="p-4">
                  <h1 className="line-clamp-1 text-purple-600 text-lg font-semibold">
                    Lakeside Camping at Pawna
                  </h1>
                  <p className="line-clamp-2">
                    Adventure Geek - Explore the Unexplored, Paris
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <h1>Nov 30, 2025</h1>
                    <p>8:30 AM - 7:40 PM</p>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <p className="font-semibold text-gray-500 uppercase">FREE</p>
                    <div className="flex text-gray-500 space-x-1 items-center">
                      <GoDotFill className="text-xs" />
                      <CiStar className="-mt-1" />
                      <p className="font-semibold">14 Interested</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
           </div>
      
      
      
          
      
          </Container>
           <div className="md:bg-[url('/assets/images/eventcta.png')] max-md:bg-[#2B293D]  bg-cover md:h-[15rem]">
           <Container>
              <div className="flex md:flex-row flex-col md:justify-between md:items-center">
                <div className="text-yellow">
                  <h1 className="text-2xl md:text-3xl pt-10 md:pt-20 font-semibold"> Create an event with Festimat </h1>
                  <p className="mt-4 md:text-lg"> Got a show, event, activity or a great experience? Partner with us & get listed on Festimat </p>
                </div>

                <PrimaryButton className="md:text-xl text-lg max-md:mt-8 mb-10 w-fit mx-auto font-medium py-1  md:py-2"> +  Create an Event </PrimaryButton>
              </div>
           </Container>
           </div>
</section>
  );
};

export default HomeEvents;