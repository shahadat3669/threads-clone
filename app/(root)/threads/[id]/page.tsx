import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import ThreadCard from '@/components/cards/ThreadCard';
import { fetchThreadById } from '@/lib/actions/thread.actions';
import { fetchUser } from '@/lib/actions/user.actions';

type Props = {
  params: { id: string };
};

const page = async ({ params }: Props) => {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboard) redirect('onboarding');
  const thread = await fetchThreadById(params.id);
  if (!thread) redirect('/');

  return (
    <section className="flex min-h-screen flex-1 flex-col items-center bg-tc-dark-400 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
      <div className="w-full max-w-4xl">
        <ThreadCard
          key={thread._id}
          id={thread._id}
          content={thread.text}
          author={thread.author}
        />
      </div>
    </section>
  );
};

export default page;
