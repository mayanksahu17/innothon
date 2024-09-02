// import mongoose, { Schema, Document } from "mongoose";
// import { User } from "./User";

// // Define the interface for the Freelancer model
// export interface Freelancer extends User {
//   skills: string[];
//   portfolio: string[];
//   proposals: mongoose.Types.ObjectId[]; // Proposals submitted by the freelancer
//   projectHistory: mongoose.Types.ObjectId[]; // Completed projects
//   testimonials: {
//     client: mongoose.Types.ObjectId;
//     feedback: string;
//     rating: number;
//   }[];
//   rating: number;
// }

// // Define the Freelancer schema by extending the User schema
// const FreelancerSchema: Schema<Freelancer> = new Schema({
//   skills: {
//     type: [String],
//     default: [],
//   },
//   portfolio: {
//     type: [String],
//     default: [],
//   },
//   proposals: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Proposal",
//   }],
//   projectHistory: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Project",
//   }],
//   testimonials: [{
//     client: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User", // Refers to the client who gave the testimonial
//       required: true,
//     },
//     feedback: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//     },
//   }],
//   rating: {
//     type: Number,
//     default: 0,
//   },
// });

// // Create the Freelancer model using the discriminator feature
// export const Freelancer = User.discriminator<Freelancer>("Freelancer", FreelancerSchema);

import mongoose, { Schema, Document,Types } from "mongoose";

export interface profile extends Document {
  name: string;
  bio: string;
  skills: string;
  experience: string;
  domain:string;
  education: string;
  projectTitle:string;  
  projectDescription:string;
  
}

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  projectTitle: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  }
});



const Profile = (mongoose.models.FreelancerPfp as mongoose.Model<profile>) || mongoose.model<profile>("FreelancerPfp", profileSchema);

export default Profile;

