import { SignedIn, SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

const TopBar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-tc-dark-300 px-6 py-3">
      <Link href="/" className="flex items-center gap-4">
        <Image
          className="h-auto w-auto"
          src="/img/logo.svg"
          alt="threads clone logo"
          width={28}
          height={28}
        />
        <p className="hidden text-tc-light-100 sm:block">Threads Clone</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/img/logout.svg"
                  alt="logout icon"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
