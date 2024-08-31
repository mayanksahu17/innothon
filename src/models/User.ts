import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  mobileNumber: Number;
  verifyCode: string;
  registeredTournaments: string;
  isAdmin: boolean;
  role: string;
  proposals : any;
  notifications : any;
  projectHistory : any;
  projects : any;
  testimonials : any;
  


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
    match: [/.+\@.+\..+/,"Please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  mobileNumber: {
    type: Number,
    required: [true, "Please provide mobile number"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"],
  },
  role: {
    type: String,
    enum: ["user", "admin", "business"],
    default: null,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export const User = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);
