import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  mobileNumber: number;
  verifyCode: string;
  role: "client" | "freelancer";
  isVerified: boolean;
  proposals?: mongoose.Types.ObjectId[]; // For freelancers
  skills?: string[]; // For freelancers
  portfolio?: string[]; // For freelancers
  projectsPosted?: mongoose.Types.ObjectId[]; // For clients
  notifications: string[];
  projectHistory: mongoose.Types.ObjectId[]; // History of completed projects
  currentProjects: mongoose.Types.ObjectId[]; // Ongoing projects
  testimonials: { client: mongoose.Types.ObjectId, feedback: string, rating: number }[]; // Testimonials left by clients
  rating?: number; // For freelancers
  companyName?: string; // For clients
}

const UserSchema: Schema<User> = new Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  mobileNumber: {
    type: Number,
    required: [true, "Please provide a mobile number"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"],
  },
  role: {
    type: String,
    enum: ["client", "freelancer"],
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  portfolio: {
    type: [String],
    default: [],
  },
  projectsPosted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  }],
  proposals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proposal",
  }],
  companyName: {
    type: String,
    default: "",
  },
  skills: {
    type: [String],
    default: [],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  notifications: {
    type: [String],
    default: [],
  },
  projectHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  }],
  currentProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  }],
  testimonials: [{
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Refers to the client who gave the testimonial
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  }],
}, { timestamps: true });

export const User = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);
