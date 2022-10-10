import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

import Button from '@/components/ex4/Button';
import Input from '@/components/ex4/Input';
import Label from '@/components/ex4/Label';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const onSubmit = handleSubmit((data) => data);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSubmit();
      }
    };
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [onSubmit]);
  return (
    <form
      onSubmit={onSubmit}
      className={clsxm(
        'flex h-[328px] w-[327px] flex-col justify-between',
        'lg:h-[384px] lg:w-[381px]'
      )}
    >
      <div>
        <Label htmlFor='cardholder-name'>cardholder name</Label>
        <Input
          matchRegexRule={new RegExp('[a-zA-Z ]')}
          useFormMethods={register('cardholderName')}
          error={{
            flag: !!errors.cardholderName,
            message: (errors.cardholderName?.message as string) || '',
          }}
          placeholder='e.g. Jane Appleseed'
          id='cardholder-name'
        />
      </div>
      <div>
        <Label htmlFor='card-number'>card number</Label>
        <Input
          valueTransform={(value) => {
            if (
              value.replaceAll(' ', '').length % 4 === 0 &&
              value.length !== 0
            ) {
              return value + ' ';
            }
            return value;
          }}
          matchRegexRule={new RegExp(/[0-9]/)}
          useFormMethods={register('cardNumber')}
          error={{
            flag: !!errors.cardNumber,
            message: (errors.cardNumber?.message as string) || '',
          }}
          placeholder='e.g. 1234 5678 9123 0000'
          id='card-number'
          maxLength={19}
        />
      </div>
      <div className='flex justify-between'>
        <div className='w-[49%]'>
          <Label htmlFor='exp-data'>Exp. Date (MM/YY)</Label>
          <div className='flex justify-between'>
            <span className='inline-flex w-[48%]'>
              <Input
                matchRegexRule={new RegExp(/[0-9]/)}
                maxLength={2}
                useFormMethods={register('expDataMm')}
                error={{
                  flag: !!errors.expDataMm,
                  message: (errors.expDataMm?.message as string) || '',
                }}
                placeholder='MM'
                id='exp-data-mm'
              />
            </span>
            <span className='inline-flex w-[48%]'>
              <Input
                matchRegexRule={new RegExp(/[0-9]/)}
                maxLength={2}
                useFormMethods={register('expDataYy')}
                error={{
                  flag: !!errors.expDataYy,
                  message: (errors.expDataYy?.message as string) || '',
                }}
                placeholder='YY'
                id='exp-data-yy'
              />
            </span>
          </div>
        </div>
        <div className='w-[49%]'>
          <Label htmlFor='cvc'>CVC</Label>
          <Input
            maxLength={3}
            useFormMethods={register('cvc')}
            error={{
              flag: !!errors.cvc,
              message: (errors.cvc?.message as string) || '',
            }}
            placeholder='e.g. 123'
            id='cvc'
          />
        </div>
      </div>
      <Button onClick={onSubmit}>Confirm</Button>
    </form>
  );
}
