import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

import Text from '@/components/ex4/Text';

export default function BaseButton({ children }: { children?: ReactNode }) {
  return (
    <button
      className={clsxm(
        'flex w-[100%] items-center justify-center rounded-[8px] bg-ex4-DeepViolet py-3 text-ex4-White',
        'transition-all hover:scale-105 active:scale-95'
      )}
    >
      <Text type='HeadingL'>{children}</Text>
    </button>
  );
}
