import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Post } from '@/lib/models';

export const GET = async (req, { params }) => {
  const { slug } = params;

  console.log(slug);

  try {
    dbConnect();
    const post = await Post.findOne({ slug });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong, failed to fetch post');
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;

  console.log(slug);

  try {
    dbConnect();
    const post = await Post.deleteOne({ slug });

    return NextResponse.json('Post deleted');
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong, failed to delete post');
  }
};

export const teste = async () => {};
