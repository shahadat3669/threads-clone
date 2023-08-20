'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import sidebarLinks from '@/constants';

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-tc-dark-100 bg-tc-dark-300 pb-5 pt-28 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-6 text-white">
        {sidebarLinks.map((link) => (
          <Link
            href={link.route}
            key={link.id}
            className={clsx(
              'relative flex justify-start gap-4 rounded-lg p-4',
              {
                'bg-tc-primary': pathname === link.route,
              },
            )}
          >
            <Image src={link.iconURL} alt={link.label} width={24} height={24} />
            <p className="text-tc-light-100 max-lg:hidden">{link.label}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;
