import '../globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads Clone: sign-up page',
  description:
    'Welcome to the Threads Clone Project, a full-stack web application that aims to replicate the functionality of the popular social media platform "Threads". This project is built using React, Next.js, TypeScript, MongoDB, and Tailwind CSS. Additionally, development best practices such as ESLint, Prettier, lint-staged, commitlint are also configured.',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(inter.className, 'bg-tc-dark-400')}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default layout;
