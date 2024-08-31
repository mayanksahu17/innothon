'use client'
import React from 'react'
import mongoose from 'mongoose';
import Link from 'next/link';

const projectPosts = [
  {
    title: "E-commerce Website Development",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    timePeriod: "3 months",
    projectSize: "Medium",
    budgetType: "Fixed",
    fixedRate: 5000,
    experienceLevel: "intermediate",
    description: "Develop an e-commerce platform with payment gateway integration, user authentication, and an admin dashboard.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla officia laboriosam, adipisci cupiditate, tempora commodi fugiat modi vitae quos, aliquam animi excepturi beatae voluptatum nisi blanditiis sunt sit veniam officiis. Obcaecati, sit?",
    createdBy: new mongoose.Types.ObjectId(),
    createdAt: new Date("2024-08-15T08:00:00Z"),
    updatedAt: new Date("2024-08-20T12:00:00Z"),
  },
  {
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
    description: "Create a mobile app for tracking fitness activities, including step count, calories burned, and workout sessions. Develop an e-commerce platform with payment gateway integration, user authentication, and an admin dashboard.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla officia laboriosam, adipisci cupiditate, tempora commodi fugiat modi vitae quos, aliquam animi excepturi beatae voluptatum nisi blanditiis sunt sit veniam officiis. Obcaecati, sit?",
    createdBy: new mongoose.Types.ObjectId(),
    createdAt: new Date("2024-08-10T10:30:00Z"),
    updatedAt: new Date("2024-08-25T15:45:00Z"),
  },
  {
    title: "Enterprise CRM System",
    skills: ["Java", "Spring Boot", "MySQL", "RESTful APIs"],
    timePeriod: "6 months",
    projectSize: "Large",
    budgetType: "Fixed",
    fixedRate: 15000,
    experienceLevel: "expert",
    description: "Build a comprehensive CRM system for managing customer relationships, sales, and support with advanced reporting capabilities. Develop an e-commerce platform with payment gateway integration, user authentication, and an admin dashboard.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla officia laboriosam, adipisci cupiditate, tempora commodi fugiat modi vitae quos, aliquam animi excepturi beatae voluptatum nisi blanditiis sunt sit veniam officiis. Obcaecati, sit?",
    createdBy: new mongoose.Types.ObjectId(),
    createdAt: new Date("2024-07-01T09:00:00Z"),
    updatedAt: new Date("2024-08-28T16:30:00Z"),
  }
];

const BestMatchesCard = () => {
  return (
    <div className="grid gap-4">
      {projectPosts.map((project, index) => (
        <Link
          key={index}
          href={{
            pathname: `/WorkCard/${index}`, // You might want to use project.title or a unique identifier instead of index
            query: {
              title: project.title,
              skills: project.skills.join(', '), // Convert the array to a comma-separated string
              timePeriod: project.timePeriod,
              projectSize: project.projectSize,
              budgetType: project.budgetType,
              experienceLevel: project.experienceLevel,
              description: project.description,
              fixedRate: project.fixedRate || '', // Only if the budget type is fixed
            },
          }}
        >
          <div className="border p-4 rounded-lg shadow-lg cursor-pointer">
            <div className="text-sm text-gray-500 mb-2">Posted {project.timePeriod} ago</div>
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

