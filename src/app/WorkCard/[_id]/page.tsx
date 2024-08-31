"use client"
import { useSearchParams } from 'next/navigation'; // Correct hook for query parameters in App Router
import React from 'react';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-sm text-gray-500 mb-2">Time Period: {timePeriod}</div>
        <div className="text-sm text-gray-500 mb-2">Project Size: {projectSize}</div>
        <div className="text-sm text-gray-500 mb-2">Budget Type: {budgetType}</div>
        {budgetType === "Fixed" && (
          <div className="text-sm text-gray-500 mb-2">Fixed Rate: ${fixedRate}</div>
        )}
        <div className="text-sm text-gray-500 mb-2">Experience Level: {experienceLevel}</div>
        <div className="text-sm text-gray-500 mb-2">Skills: {skills}</div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default WorkCardDetail;
