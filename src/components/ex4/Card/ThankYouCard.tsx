import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/ex4/Button';
import Text from '@/components/ex4/Text';

export default function ThankYouCard() {
  const router = useRouter();
  const handleClick = () => {
    router.push({ pathname: '/exercises/ex4/' });
  };
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

      <Button onClick={handleClick}>Continue</Button>
    </div>
  );
}
