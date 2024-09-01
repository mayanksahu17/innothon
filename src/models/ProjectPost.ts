import mongoose, { Schema, Document, Model } from "mongoose";
import { Client } from "./Client"; // Import the Client model

// Define the interface for the ProjectPost document
export interface ProjectPost extends Document {
  title: string;
  skills: string[];
  timePeriod: string;
  projectSize: string;
  budgetType: "Hourly" | "Fixed";
  hourlyRate?: {
    from: number;
    to: number;
  };
  fixedRate?: number;
  experienceLevel: "beginner" | "intermediate" | "expert"; // Enum for experience levels
  description: string;
  milestone: string;
  currentProposals: any;
  clientId: mongoose.Types.ObjectId; // Reference to the Client who created the post
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema for the ProjectPost model
const ProjectPostSchema: Schema<ProjectPost> = new Schema({
  title: {
    type: String,
    required: [true, "Project title is required"],
    trim: true,
  },
  skills: {
    type: [String], // Array of skills (strings)
    required: [true, "At least one skill is required"],
  },
  timePeriod: {
    type: String,
    required: [true, "Time period is required"],
  },
  projectSize: {
    type: String,
    required: [true, "Project size is required"],
  },
  budgetType: {
    type: String,
    enum: ["Hourly", "Fixed"], // Enum to restrict values
    required: [true, "Budget type is required"],
  },
  hourlyRate: {
    from: {
      type: Number,
      required: function () {
        return this.budgetType === "Hourly";
      },
      min: [0, "Hourly rate must be a positive number"],
    },
    to: {
      type: Number,
      required: function () {
        return this.budgetType === "Hourly";
      },
      min: [0, "Hourly rate must be a positive number"],
    },
  },
  fixedRate: {
    type: Number,
    required: function () {
      return this.budgetType === "Fixed";
    },
    min: [0, "Fixed rate must be a positive number"],
  },
  experienceLevel: {
    type: String,
    enum: ["beginner", "intermediate", "expert"], // Enum to restrict values
    required: [true, "Experience level is required"],
  },
  description: {
    type: String,
    required: [true, "Project description is required"],
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "Client",   
 // Reference to the Client model
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps automatically
});

// Create and export the ProjectPost model
export const ProjectPost: Model<ProjectPost> = mongoose.models.ProjectPost as Model<ProjectPost> || mongoose.model<ProjectPost>("ProjectPost", ProjectPostSchema);
