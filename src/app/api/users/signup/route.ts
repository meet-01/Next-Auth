import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/userModal';
import {NextRequest, NextResponse} from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {username, email, password} = reqBody;
    console.log(reqBody);

    // check if user already exist
    const user = await User.findOne({email: email});
    if (user) {
      return NextResponse.json({error: 'user already exist'}, {status: 400});
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    console.log({savedUser});

    return NextResponse.json({
      message: 'user created sucessfully',
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 500});
  }
}
