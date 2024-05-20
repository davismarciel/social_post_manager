import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Post } from '@/lib/models';

export const GET = async (req) => {
  try {
    dbConnect();
    const posts = await Post.find();

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
};

export const teste = async () => {};
