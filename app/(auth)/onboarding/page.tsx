import { currentUser } from '@clerk/nextjs';

import AccountProfile from '@/components/forms/AccountProfile';
import { fetchUser } from '@/lib/actions/user.actions';

const page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  const userData = {
    id: user.id,
    // eslint-disable-next-line no-underscore-dangle
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? '',
    bio: userInfo ? userInfo?.bio : '',
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="text-4xl font-bold leading-[140%] text-tc-light-100">
        Onboarding
      </h1>
      <p className="mt-3 text-base font-normal leading-[140%] text-tc-light-200">
        Complete your profile now to use Threads
      </p>
      <section className="mt-9 bg-tc-dark-100 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default page;
