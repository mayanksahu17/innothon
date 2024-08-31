import mongoose, { Schema, Document } from "mongoose";
import { User } from "./User";

// Define the interface for the Client model
export interface Client extends Document {
  companyName?: string;
  projectsPosted: mongoose.Types.ObjectId[]; // Projects posted by the client
  currentProjects: mongoose.Types.ObjectId[]; // Ongoing projects
}

// Define the Client schema by extending the User schema
const ClientSchema: Schema<Client> = new Schema({
  companyName: {
    type: String,
    default: "",
  },
  projectsPosted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  }],
  currentProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  }],
});

// Create the Client model using the discriminator feature
export const Client = User.discriminator<Client>("Client", ClientSchema);
