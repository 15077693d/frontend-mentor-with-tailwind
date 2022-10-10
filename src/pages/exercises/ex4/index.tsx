import clsxm from '@/lib/clsxm';

import ExerciseLayout from '@/components/common/ExerciseLayout';
import BackCreditCard from '@/components/ex4/Card/BackCreditCard';
import { FrontCreditCard } from '@/components/ex4/Card/FrontCreditCard';
import Form from '@/components/ex4/Form';

export default function InteractiveCardDetailsForm() {
  return (
    <ExerciseLayout
      className={clsxm(
        'relative flex flex-col items-center bg-ex3-White  pt-9 font-SpaceGrotesk font-medium',
        'lg:h-[100vh] lg:flex-row lg:justify-center lg:pt-0'
      )}
      templateTitle='Interactive Card Details Form'
    >
      <div
        className={clsxm(
          'absolute top-0 h-[240px] w-[100%] bg-ex4-bgMainMobile bg-cover',
          'lg:left-0 lg:h-[100%] lg:w-[35%] lg:bg-ex4-bgMainDesktop'
        )}
      />
      <div
        className={clsxm(
          'relative mb-[40px] h-[245px] w-[327px]',
          'lg:m-[unset] lg:mr-[100px] lg:h-[541px] lg:w-[527px]'
        )}
      >
        <BackCreditCard
          className={clsxm(
            'absolute right-0 top-0 h-[157px] w-[268px]',
            'lg:top-[unset] lg:bottom-0 lg:h-[245px] lg:w-[447px]'
          )}
        />
        <FrontCreditCard
          className={clsxm(
            'absolute left-0 bottom-0 h-[157px] w-[286px]',
            'lg:bottom-[unset] lg:top-0 lg:h-[245px] lg:w-[447px]'
          )}
        />
      </div>
      <Form />
    </ExerciseLayout>
  );
}
