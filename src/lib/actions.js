'use server';

import { revalidatePath } from 'next/cache';

import bcrypt from 'bcryptjs';

import dbConnect from './dbConnect';
import { Post, User } from './models';
import { signIn, signOut } from './auth';

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    dbConnect();
    await Post.deleteMany({ user_id: id });
    await User.findByIdAndDelete(id);
    revalidatePath('/admin');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }
};

export const addUser = async (previousState, formData) => {
  const {
    username, email, password, img, isAdmin,
  } = Object.fromEntries(formData);

  try {
    dbConnect();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    });

    await newUser.save();
    console.log('User saved to db');
    revalidatePath('/admin');
  } catch (error) {
    console.log('Error');
    throw new Error('Something went wrong');
  }

  console.log(formData);
};

export const getPosts = async () => {
  const posts = await Post.find();

  console.log('Posts found: ', posts);
};

export const createPost = async (previousState, formData) => {
  const {
    title, desc, slug, user_id,
  } = Object.fromEntries(formData);

  try {
    dbConnect();
    const newPost = new Post({
      title,
      desc,
      slug,
      user_id,
    });

    await newPost.save();
    console.log('Post saved to db');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    return { error: 'Something went wrong, could not create a post' };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  console.log(id);

  try {
    dbConnect();
    await Post.findByIdAndDelete(id);
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.log('Error');
    return { error: 'Something went wrong' };
  }
};

export const handleLogout = async () => {
  'use server';

  await signOut('github');
};

export const handleRegister = async (previousState, formData) => {
  const {
    username, email, password, img, passwordRepeat,
  } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match' };
  }

  try {
    const user = await User.findOne({ username });

    if (user) {
      return { error: 'Username already exists' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    dbConnect();

    await newUser.save();

    return { success: true };
  } catch (error) {
    console.log('Error');
    throw new Error('Something went wrong');
  }
};

export const handleLogin = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    if (error.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }
    throw error;
  }

  console.log(formData);
};
