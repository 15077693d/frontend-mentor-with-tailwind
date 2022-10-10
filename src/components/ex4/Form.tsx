import clsxm from '@/lib/clsxm';

import Button from '@/components/ex4/Button';
import Input from '@/components/ex4/Input';
import Label from '@/components/ex4/Label';

export default function Form() {
  return (
    <div
      className={clsxm(
        'flex h-[328px] w-[327px] flex-col justify-between',
        'lg:h-[384px] lg:w-[381px]'
      )}
    >
      <div>
        <Label htmlFor='cardholder-name'>cardholder name</Label>
        <Input
          error={{
            flag: false,
            message: undefined,
          }}
          placeholder='e.g. Jane Appleseed'
          type='text'
          id='cardholder-name'
        />
      </div>
      <div>
        <Label htmlFor='card-number'>card number</Label>
        <Input
          error={{
            flag: false,
            message: undefined,
          }}
          placeholder='e.g. 1234 5678 9123 0000'
          type='number'
          id='card-number'
        />
      </div>
      <div className='flex justify-between'>
        <div className='w-[49%]'>
          <Label htmlFor='exp-data'>Exp. Date (MM/YY)</Label>
          <div className='flex justify-between'>
            <span className='inline-flex w-[48%]'>
              <Input
                error={{
                  flag: false,
                  message: undefined,
                }}
                placeholder='MM'
                type='number'
                id='cardholder-name'
              />
            </span>
            <span className='inline-flex w-[48%]'>
              <Input
                error={{
                  flag: false,
                  message: undefined,
                }}
                placeholder='YY'
                type='text'
                id='cardholder-name'
              />
            </span>
          </div>
        </div>
        <div className='w-[49%]'>
          <Label htmlFor='cvc'>CVC</Label>
          <Input
            error={{
              flag: false,
              message: undefined,
            }}
            placeholder='e.g. 123'
            type='number'
            id='cvc'
          />
        </div>
      </div>
      <Button>Confirm</Button>
    </div>
  );
}
