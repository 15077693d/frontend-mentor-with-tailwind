import clsxm from '@/lib/clsxm';

import Text from '@/components/ex4/Text';

type FrontCreditCard = {
  className?: string;
  cardNumber?: string;
  cardName?: string;
  expMM?: string;
  expYY?: string;
};

export function FrontCreditCard({
  cardNumber = '0000 0000 0000 0000',
  cardName = 'JANE APPLESEED',
  expMM = '00',
  expYY = '00',
  className,
}: FrontCreditCard) {
  return (
    <div
      className={clsxm(
        'box-border flex flex-col justify-between rounded-[6px] bg-ex4-bgCardFront bg-cover p-[18px] shadow-2xl',
        className
      )}
    >
      {/* eslint-disable  @next/next/no-img-element */}
      <img
        className='w-[20%]'
        alt='credit-card-logo'
        src='/images/projects/ex4/card-logo.svg'
      />
      <div>
        <div className='mb-3 text-[18px] tracking-[2.2px] text-ex4-White'>
          {cardNumber}
        </div>
        <div className='flex justify-between'>
          <Text className='text-ex4-White' type='BodyL'>
            {cardName}
          </Text>
          <Text
            className='text-ex4-White'
            type='BodyL'
          >{`${expMM}/${expYY}`}</Text>
        </div>
      </div>
    </div>
  );
}
