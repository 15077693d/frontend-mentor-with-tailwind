import { ReactNode } from 'react';

import Text from '@/components/ex4/Text';

export default function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children?: ReactNode;
}) {
  return (
    <label className='mb-2 inline-block' htmlFor={htmlFor}>
      <Text type='BodyM' className='uppercase text-ex4-DeepViolet'>
        {children}
      </Text>
    </label>
  );
}
