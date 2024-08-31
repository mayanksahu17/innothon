'use client'
import React from 'react';
import Link from 'next/link';

const projectPosts = [
  {
    _id: '1',
    title: "E-commerce Website Development",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    timePeriod: "3 months",
    projectSize: "Medium",
    budgetType: "Fixed",
    fixedRate: 5000,
    experienceLevel: "intermediate",
    description: "Develop an e-commerce platform with payment gateway integration, user authentication, and an admin dashboard.",
  },
  {
    _id: '2',
    title: "Mobile App for Fitness Tracking",
    skills: ["Flutter", "Firebase", "API Integration"],
    timePeriod: "2 months",
    projectSize: "Small",
    budgetType: "Hourly",
    hourlyRate: {
      from: 20,
      to: 35,
    },
    experienceLevel: "beginner",
    description: "Create a mobile app for tracking fitness activities, including step count, calories burned, and workout sessions.",
  },
  {
    _id: '3',
    title: "Enterprise CRM System",
    skills: ["Java", "Spring Boot", "MySQL", "RESTful APIs"],
    timePeriod: "6 months",
    projectSize: "Large",
    budgetType: "Fixed",
    fixedRate: 15000,
    experienceLevel: "expert",
    description: "Build a comprehensive CRM system for managing customer relationships, sales, and support with advanced reporting capabilities.",
  }
];

const BestMatchesCard = () => {
  return (
    <div className="grid gap-4">
      {projectPosts.map((project, index) => (
        <Link key={index} href={`/WordCard/${project._id}`}>
          <div className="border p-4 rounded-lg shadow-lg cursor-pointer">
            <div className="text-sm text-gray-500 mb-2">{project.timePeriod} project</div>
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <div className="flex text-sm mb-2 font-medium">
              <span className="text-gray-700">{project.projectSize}</span> {"-"}
              <span className="text-gray-700">{project.budgetType}</span> {"-"}
              <span className="text-gray-700 capitalize">{project.experienceLevel}</span>
              {project.budgetType === "Fixed" && (
                <>
                  <span>-</span>
                  <span className="text-gray-700">${project.fixedRate}</span>
                </>
              )}
            </div>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BestMatchesCard;
