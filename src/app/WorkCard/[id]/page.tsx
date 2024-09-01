"use client"
import { useSearchParams } from 'next/navigation'; // Correct hook for query parameters in App Router
import React from 'react';
import { ArrowLeftIcon, CheckCircleIcon, Cog6ToothIcon, HeartIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import StarCount from '@/components/ui/RenderStar';

const WorkCardDetail = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get('title');
  const skills = searchParams.get('skills');
  const timePeriod = searchParams.get('timePeriod');
  const projectSize = searchParams.get('projectSize');
  const budgetType = searchParams.get('budgetType');
  const experienceLevel = searchParams.get('experienceLevel');
  const description = searchParams.get('description');
  const fixedRate = searchParams.get('fixedRate');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-gray-800">

      <div className="bg-white p-6 rounded-lg shadow-lg w-[85%] h-[80%]">
        <div className=' flex '>
          <div className='flex flex-col gap-y-4 w-[50%]'>
            <div>
              <Link href={'/HeroFreelencer'}>
                <ArrowLeftIcon className="h-8 w-8" />
              </Link>
            </div>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className='flex gap-x-4'>
              <div className="text-sm text-gray-500 mb-2">Posted {timePeriod} ago</div>
              <div className='flex gap-x-2'>
                <MapPinIcon className='h-4 w-5 mt-1' />
                <span>WorldWide</span>
              </div>
            </div>
            <hr />
            <p className="text-gray-600">{description}</p>
            <hr />

            <div className='flex gap-x-6'>
              {fixedRate && (
                <div className='flex gap-x-2'>
                  <TagIcon className='w-4 h-4 mt-1' />
                  <span>${fixedRate}</span>
                </div>
              )}

              <div className='flex gap-x-2'>
                <Cog6ToothIcon className='h-4 w-4 mt-1' />
                <span>{experienceLevel}</span>
              </div>
            </div>
          </div>


          <div className='w-[50%] bg-gray-100 flex text-white flex-col ml-3'>
            <div className='flex flex-col justify-center items-center gap-y-3'>
              <div className='bg-indigo-500 px-5 py-2 w-[80%] flex justify-center items-center mt-4 rounded-md cursor-pointer'>Apply Now</div>
              <div className='flex gap-x-2 border border-black w-[80%] justify-center items-center rounded-md cursor-pointer'>
                <HeartIcon className='h-4 w-4 text-red-700 ' />
                <span className='text-black'>Save Job</span>
              </div>
            </div>
            <div className='flex flex-col text-gray-800 p-4 ml-6 mt-4 text-sm'>
              <div>
                Required Connects to submit a proposal: 14
              </div>
              <div>
                Available Connects: 21
              </div>
            </div>

            <div className='flex flex-col ml-8'>
              <h1 className='text-gray-800 font-bold'>About the Client</h1>
              <div className='flex flex-row gap-x-3'>
                <CheckCircleIcon className='h-4 w-4 mt-1 text-indigo-500' />
                <p className='text-gray-400'>Payment Method Verified</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <CheckCircleIcon className='h-4 w-4  mt-1 text-indigo-500' />
                <p className='text-gray-400'>Phone Number Verified</p>
              </div>
              <div className='flex gap-x-3 mt-3'>
                <StarCount ratings={4} />
                <p>4.0</p>
              </div>
              <p className='text-gray-400 text-sm'>455 of 1 reviews</p>

              <div className='flex flex-col mb-1 text-gray-400 mt-3'>
                <p className='text-gray-800 font-medium'>Skills</p>
                <p className='text-sm gray-400'>{skills}</p>
              </div>
              <div className='flex flex-col mb-1 pt-1'>
                <p className='text-gray-800 font-medium'>Project Size</p>
                <p className='text-sm text-gray-400'>{projectSize}</p>
              </div>
              <div className='flex flex-col mb-1 pb-2 pt-1'>
                <p className='text-gray-800 font-medium'>Pay</p>
                <p className='text-sm text-gray-400'>{budgetType}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCardDetail;
