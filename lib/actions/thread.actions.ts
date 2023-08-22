'use server';

import { revalidatePath } from 'next/cache';

import Thread from '../models/thread.model';
import User from '../models/user.model';
import { connectToDB } from '../mongoose';

interface Params {
  text: string;
  author: string;
  path: string;
}

export const createThread = async ({ text, author, path }: Params) => {
  try {
    connectToDB();

    const createdThread = await Thread.create({
      text,
      author,
    });

    await User.findByIdAndUpdate(author, {
      // eslint-disable-next-line no-underscore-dangle
      $push: { threads: createdThread._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`);
  }
};
