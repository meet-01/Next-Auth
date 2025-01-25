import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/userModal';
import {NextRequest, NextResponse} from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();
