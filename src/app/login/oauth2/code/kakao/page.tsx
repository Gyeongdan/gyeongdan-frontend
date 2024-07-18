'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = ({ searchParams }: { searchParams: { code: string } }) => {
  const router = useRouter();
  const { code } = searchParams;

  useEffect(() => {
    if (code) {
      console.log(code);
    }
    console.log('code is empty');
  }, [code, router]);

  return <div>Logging in with Kakao...</div>;
};

export default Page;
