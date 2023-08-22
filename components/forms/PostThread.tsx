'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
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
import { createThread } from '@/lib/actions/thread.actions';
import { threadValidation } from '@/lib/validations/thread';

import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

type Props = {
  userId: string;
  btnTitle: string;
};

const PostThread = ({ userId, btnTitle }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof threadValidation>>({
    resolver: zodResolver(threadValidation),
    defaultValues: {
      thread: '',
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof threadValidation>) => {
    await createThread({
      text: values.thread,
      author: userId,
      path: pathname,
    });
    router.push('/');
  };

  return (
    <Form {...form}>
      <form
        className="mt-10 flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base font-semibold leading-[140%] text-tc-light-200">
                Content
              </FormLabel>
              <FormControl className="border !border-tc-dark-300 !bg-tc-dark-300 text-tc-light-100 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0">
                <Textarea rows={15} {...field} />
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

export default PostThread;
