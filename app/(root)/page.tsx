import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default Home;
