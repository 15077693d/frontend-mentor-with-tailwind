import { ReactNode } from 'react';

import Text from '@/components/ex4/Text';

export default function BaseButton({ children }: { children?: ReactNode }) {
  return (
    <button className=' flex w-[100%] items-center justify-center rounded-[8px] bg-ex4-DeepViolet py-3 text-ex4-White'>
      <Text type='HeadingL'>{children}</Text>
    </button>
  );
}
