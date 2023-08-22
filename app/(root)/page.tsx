import ThreadCard from '@/components/cards/ThreadCard';
import { fetchThreads } from '@/lib/actions/thread.actions';

const Home = async () => {
  const results = await fetchThreads(1, 30);
  return (
    <section className="flex min-h-screen flex-1 flex-col items-center bg-tc-dark-400 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
      <div className="w-full max-w-4xl">
        <div className="mt-9 flex flex-col gap-10">
          {results.threads.length === 0 ? (
            <p className="text-center !text-base !font-normal !leading-[140%] text-tc-light-300">
              No threads found
            </p>
          ) : (
            <>
              {results.threads.map((thread) => (
                <ThreadCard
                  key={thread._id}
                  id={thread._id}
                  content={thread.text}
                  author={thread.author}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
