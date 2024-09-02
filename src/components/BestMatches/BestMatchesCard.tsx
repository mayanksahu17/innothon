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
    },
    {
      title: "AI-powered Customer Support Chatbot",
      skills: ["Python", "TensorFlow", "Natural Language Processing", "Django"],
      timePeriod: "4 months",
      projectSize: "Large",
      budgetType: "Fixed",
      fixedRate: 12000,
      experienceLevel: "advanced",
      description: "Develop an AI-powered chatbot for customer support with natural language processing capabilities. The chatbot should handle various customer queries, provide relevant solutions, and escalate complex issues to human agents. The system must be scalable and easily integrable with existing platforms. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut felis ac urna vulputate scelerisque.",
      createdBy: new mongoose.Types.ObjectId(),
      createdAt: new Date("2024-06-01T12:00:00Z"),
      updatedAt: new Date("2024-07-15T14:30:00Z"),
    },
    {
      title: "Real-time Stock Market Analysis Tool",
      skills: ["JavaScript", "React", "Node.js", "WebSocket", "D3.js"],
      timePeriod: "5 months",
      projectSize: "Medium",
      budgetType: "Hourly",
      hourlyRate: {
        from: 50,
        to: 75,
      },
      experienceLevel: "intermediate",
      description: "Create a real-time stock market analysis tool that visualizes stock data with live updates. The tool should support various chart types, allow users to track different stocks, and provide advanced filtering options. The platform needs to be highly responsive and handle large volumes of data efficiently. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut felis ac urna vulputate scelerisque.",
      createdBy: new mongoose.Types.ObjectId(),
      createdAt: new Date("2024-05-20T11:00:00Z"),
      updatedAt: new Date("2024-08-15T10:00:00Z"),
    },
    {
      title: "Blockchain-based Voting System",
      skills: ["Solidity", "Ethereum", "React", "Smart Contracts", "Web3.js"],
      timePeriod: "7 months",
      projectSize: "Large",
      budgetType: "Fixed",
      fixedRate: 20000,
      experienceLevel: "expert",
      description: "Build a secure, transparent, and decentralized voting system using blockchain technology. The system should support the creation of multiple voting sessions, ensure anonymity, and provide real-time vote counting. Security and scalability are paramount, along with a user-friendly interface for administrators and voters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut felis ac urna vulputate scelerisque.",
      createdBy: new mongoose.Types.ObjectId(),
      createdAt: new Date("2024-04-10T08:00:00Z"),
      updatedAt: new Date("2024-09-01T12:00:00Z"),
    },
    {
      title: "Online Learning Management System",
      skills: ["PHP", "Laravel", "MySQL", "Vue.js"],
      timePeriod: "6 months",
      projectSize: "Large",
      budgetType: "Fixed",
      fixedRate: 18000,
      experienceLevel: "advanced",
      description: "Develop a comprehensive online learning management system (LMS) that includes course creation, user enrollment, progress tracking, and assessment tools. The system should support multimedia content, offer analytics for instructors, and ensure a seamless user experience for students. Security and data privacy are critical components. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut felis ac urna vulputate scelerisque.",
      createdBy: new mongoose.Types.ObjectId(),
      createdAt: new Date("2024-03-01T09:30:00Z"),
      updatedAt: new Date("2024-08-05T13:45:00Z"),
    },
    {
      title: "Social Media Platform for Artists",
      skills: ["Ruby on Rails", "PostgreSQL", "JavaScript", "Tailwind CSS"],
      timePeriod: "4 months",
      projectSize: "Medium",
      budgetType: "Hourly",
      hourlyRate: {
        from: 40,
        to: 60,
      },
      experienceLevel: "intermediate",
      description: "Create a social media platform dedicated to artists where they can showcase their work, connect with other artists, and engage with followers. The platform should include features like user profiles, content feeds, messaging, and event organization. It must be visually appealing, easy to use, and scalable to handle a large user base. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut felis ac urna vulputate scelerisque.",
      createdBy: new mongoose.Types.ObjectId(),
      createdAt: new Date("2024-04-20T14:00:00Z"),
      updatedAt: new Date("2024-07-30T17:30:00Z"),
    }
  ];

const BestMatchesCard = () => {
  return (
    <div className='flex justify-center items-center p-5'> 
      <div className='flex justify-center items-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {projectPosts.map((project, index) => (
            <Link
              key={index}
              href={{
                pathname: `/WorkCard/${index}`,
                query: {
                  title: project.title,
                  skills: project.skills.join(', '),
                  timePeriod: project.timePeriod,
                  projectSize: project.projectSize,
                  budgetType: project.budgetType,
                  experienceLevel: project.experienceLevel,
                  description: project.description,
                  fixedRate: project.fixedRate || '',
                },
              }}
              className="p-5"
            >
              <div className="border p-4 rounded-lg shadow-lg cursor-pointer h-full flex flex-col transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:translate-y-1 hover:shadow-xl hover:shadow-indigo-200">
                <div className="text-sm text-gray-500 mb-2">
                  Posted {project.timePeriod} ago
                </div>
                <h2 className="text-xl font-bold mb-2 text-indigo-500">
                  {project.title}
                </h2>
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
                <p className="text-gray-600">
                  {project.description.split(' ').slice(0, 10).join(' ')}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestMatchesCard;


