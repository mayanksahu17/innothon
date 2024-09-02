import mongoose, { Schema, Document,Types } from "mongoose";

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  mobileNumber: number;
  avatar : string;
  bio : string;
  experience : string;
  verifyCode: string;
  role: "client" | "freelancer";
  rating?: number;
  portfolio?: string;
  projectsPosted?: Types.ObjectId[];
  proposals?: Types.ObjectId[];
  companyName?: string;
  skills?: string[];
  isVerified?: boolean;
  notifications?: string[];
  projectHistory?: Types.ObjectId[];
  currentProjects?: Types.ObjectId[];
  testimonials?: {
    client: Types.ObjectId;
    feedback: string;
    rating: number;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}





// name,
// imageUrl/ avatar,
// bio, 
// skills,
// experience,
// projectTitle,    
// projectDescription,
// techStacks,
// degree,
// school,
// graduationYear,
// language,



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
  // mobileNumber: {
  //   type: Number,
  //   required: [true, "Please provide mobile number"],
  // },
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
    type: String,
    default: null,
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
     
    },
    feedback: {
      type: String,
     
    },
    rating: {
      type: Number,
   
    },
  }],
}, { timestamps: true });

export const User = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);
