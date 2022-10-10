import clsxm from '@/lib/clsxm';

import Text from '@/components/ex4/Text';

export default function BackCreditCard({
  cvc = '000',
  className,
}: {
  cvc?: string;
  className?: string;
}) {
  return (
    <div
      className={clsxm(
        className,
        'rounded-[6px] bg-ex4-bgCardBack bg-cover bg-center shadow-2xl'
      )}
    >
      <Text
        className='absolute right-[8%] top-[43%] text-ex4-White lg:right-[12%] lg:top-[44%]'
        type='BodyL'
      >
        {cvc}
      </Text>
    </div>
  );
}
