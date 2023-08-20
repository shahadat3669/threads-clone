'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import sidebarLinks from '@/constants';

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-tc-dark-300 p-4 px-7 backdrop-blur-lg md:hidden">
      <div className="gap-3sm:gap-5 flex items-center justify-between">
        {sidebarLinks.map((link) => (
          <Link
            href={link.route}
            key={link.id}
            className={clsx(
              'relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5',
              {
                'bg-tc-primary': pathname === link.route,
              },
            )}
          >
            <Image src={link.iconURL} alt={link.label} width={24} height={24} />
            <p className="text-xs font-medium leading-4 text-tc-light-100 max-md:hidden">
              {link.label.split(/\s+/)[0]}
            </p>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default BottomBar;
