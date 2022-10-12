import clsxm from '@/lib/clsxm';

import Text from '@/components/ex4/Text';

type FrontCreditCard = {
  className?: string;
  cardNumber?: string;
  cardholderName?: string;
  expDataMm?: string;
  expDataYy?: string;
};

export function FrontCreditCard({
  cardNumber = '0000 0000 0000 0000',
  cardholderName = 'JANE APPLESEED',
  expDataMm = '00',
  expDataYy = '00',
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
          <Text className='uppercase text-ex4-White' type='BodyL'>
            {cardholderName}
          </Text>
          <Text
            className='text-ex4-White'
            type='BodyL'
          >{`${expDataMm}/${expDataYy}`}</Text>
        </div>
      </div>
    </div>
  );
}
