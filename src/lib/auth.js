import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

import bcrypt from 'bcryptjs';
import dbConnect from './dbConnect';
import { User } from './models';

import { authConfig } from './auth.config';

const login = async (credentials) => {
  try {
    dbConnect();

    const user = await User.findOne({ username: credentials.username });
    const checkPassword = await bcrypt.compare(credentials.password, user.password);

    if (!user || !checkPassword) {
      throw new Error('Wrong credentials');
    }

    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Wrong credentials');
  }
};

export const {
  handlers: { GET, POST }, auth, signIn, signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(profile);

      if (account.provider === 'github') {
        dbConnect();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = User({
              username: profile.name,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
