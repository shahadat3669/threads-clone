'use client';

const BottomBar = () => {
  return (
    <footer className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-tc-dark-300 p-4 px-7 backdrop-blur-lg md:hidden">
      <div className="gap-3sm:gap-5 flex items-center justify-between text-white">
        Bottom bar
      </div>
    </footer>
  );
};

export default BottomBar;
