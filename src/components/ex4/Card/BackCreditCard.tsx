import Text from '@/components/ex4/Text';

export default function BackCreditCard({ cvc = '000' }: { cvc?: string }) {
  return (
    <div className='relative h-[157px] w-[268px] rounded-[6px] bg-ex4-bgCardBack bg-cover bg-center'>
      <Text
        className='absolute right-[8%] top-[43%] text-ex4-White'
        type='BodyL'
      >
        {cvc}
      </Text>
    </div>
  );
}
