import ExerciseLayout from '@/components/common/ExerciseLayout';
import BaseButton from '@/components/ex4/Button';
import BackCreditCard from '@/components/ex4/Card/BackCreditCard';
import { FrontCreditCard } from '@/components/ex4/Card/FrontCreditCard';
import Input from '@/components/ex4/Input';
import Text from '@/components/ex4/Text';

export default function InteractiveCardDetailsForm() {
  return (
    <ExerciseLayout
      className='bg-ex3-White font-SpaceGrotesk font-medium'
      templateTitle='Interactive Card Details Form'
    >
      <FrontCreditCard />
      <BackCreditCard />
      <div className='w-[200px]'>
        <BaseButton>Confirm</BaseButton>
      </div>
      <label htmlFor='cardholder name'>
        <Text type='BodyM' className='uppercase text-ex4-DeepViolet'>
          Cardholder Name
        </Text>
      </label>
      <Input
        error={{
          flag: false,
          message: undefined,
        }}
        type='number'
      />
    </ExerciseLayout>
  );
}
