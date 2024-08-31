import mongoose, { Schema, Document } from "mongoose";

export interface ProposalSchema extends Document {
  freelancer: mongoose.Types.ObjectId;
  project: mongoose.Types.ObjectId;
  Amount: number;
  coverLetter: string;
  status: "pending" | "accepted" | "rejected";
}

const ProposalSchema: Schema<ProposalSchema> = new Schema({
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model, where role would be "freelancer"
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
}, { timestamps: true });

export const Proposal = (mongoose.models.Proposal as mongoose.Model<ProposalSchema>) || mongoose.model<ProposalSchema>("Proposal", ProposalSchema);
