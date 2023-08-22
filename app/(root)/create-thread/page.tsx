import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import PostThread from '@/components/forms/PostThread';
import { fetchUser } from '@/lib/actions/user.actions';

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboard) redirect('/onboarding');
  // eslint-disable-next-line no-underscore-dangle
  const id = userInfo._id.toString();
  return (
    <section className="flex min-h-screen flex-1 flex-col items-center bg-tc-dark-400 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold leading-[140%] text-tc-light-100">
          Create Threads
        </h1>
        <PostThread userId={id} btnTitle="Post Thread" />
      </div>
    </section>
  );
};

export default page;
