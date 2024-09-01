import mongoose, { Schema } from "mongoose";
import { User } from "./User"; // Import the User model

// Define the interface for the Client model
export interface Client extends User {
  companyName?: string;
  projectsPosted: mongoose.Types.ObjectId[]; // Projects posted by the client
  currentProjects: mongoose.Types.ObjectId[]; // Ongoing projects
  profilePhoto?: string; // URL or path to the profile photo
}

// Define the Client schema by extending the User schema
const ClientSchema: Schema<Client> = new Schema({
  companyName: {
    type: String,
    default: "",
  },
  projectsPosted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectPost", // Reference to the ProjectPost model
  }],
  currentProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectPost",
  }],
  profilePhoto: {
    type: String,
    default: "",
  },
});

// Create the Client model using the discriminator feature
export const Client = User.discriminator<Client>("Client", ClientSchema);
