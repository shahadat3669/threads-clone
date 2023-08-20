import '../globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import BottomBar from '@/components/shared/BottomBar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import TopBar from '@/components/shared/TopBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads Clone',
  description:
    'Welcome to the Threads Clone Project, a full-stack web application that aims to replicate the functionality of the popular social media platform "Threads". This project is built using React, Next.js, TypeScript, MongoDB, and Tailwind CSS. Additionally, development best practices such as ESLint, Prettier, lint-staged, commitlint are also configured.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main>
            <LeftSidebar />
            {children}
            <RightSidebar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
