'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import type { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { userValidation } from '@/lib/validations/user';

import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

type Props = {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
};

const AccountProfile = ({ user, btnTitle }: Props) => {
  const form = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      profile_photo: user?.image || '',
      name: user?.name || '',
      username: '',
      bio: '',
    },
  });

  const onSubmit = (values: z.infer<typeof userValidation>) => {
    console.log(values);
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void,
  ) => {
    e.preventDefault();
    console.log(fieldChange);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-10 text-white"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="flex h-24 w-24 items-center justify-center rounded-full bg-tc-dark-300">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile_icon"
                    width={96}
                    height={96}
                    priority
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Image
                    src="/img/profile.svg"
                    alt="profile_icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base font-semibold leading-[140%] !text-tc-gray-100">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Add profile photo"
                  className="cursor-pointer !border-none  !bg-transparent !outline-none file:rounded-md  file:text-tc-primary"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base font-semibold leading-[140%] text-tc-light-200">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border !border-tc-dark-300 !bg-tc-dark-300 text-tc-light-100 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base font-semibold leading-[140%] text-tc-light-200">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border !border-tc-dark-300 !bg-tc-dark-300 text-tc-light-100 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base font-semibold leading-[140%] text-tc-light-200">
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className="border !border-tc-dark-300 !bg-tc-dark-300 text-tc-light-100 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="!bg-tc-primary !text-tc-light-100">
          {btnTitle}
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
