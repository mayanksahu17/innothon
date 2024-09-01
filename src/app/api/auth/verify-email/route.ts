import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models/User';
import dbConnect from '@/lib/dbConnect';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { otp } = await req.json();

    if (!otp) {
      return NextResponse.json({ error: 'OTP is required' }, { status: 400 });
    }

    const user = await User.findOne({ verifyCode: otp });

    if (!user) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }

    user.isVerified = true;
    user.verifyCode = ''; // Clear the verification code
    await user.save();

    return NextResponse.json({ message: 'User verified successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
