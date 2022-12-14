import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import Button from '@/components/ex4/Button';
import Text from '@/components/ex4/Text';

export default function ThankYouCard() {
  const router = useRouter();
  const onSubmit = useCallback(() => {
    router.push('/exercises/ex4');
  }, [router]);
  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSubmit();
      }
    };
    document.addEventListener('keypress', handleEnter);
    return () => {
      document.removeEventListener('keypress', handleEnter);
    };
  }, [onSubmit]);
  return (
    <div className='flex h-[291px] w-[327px] flex-col items-center justify-between lg:w-[381px]'>
      <Image
        width='80px'
        height='80px'
        alt='tick-logo'
        src='/images/projects/ex4/icon-complete.svg'
      />
      <div>
        <Text
          type='HeadingXL'
          className='mb-5 block text-center text-ex4-DeepViolet'
        >
          THANK YOU!
        </Text>
        <Text type='HeadingL' className='text-ex4-PurplishGrey'>
          We’ve added your card details
        </Text>
      </div>

      <Button onClick={onSubmit}>Continue</Button>
    </div>
  );
}
