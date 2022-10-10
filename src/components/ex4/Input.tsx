import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

import Text from '@/components/ex4/Text';

type InputType = {
  matchRegexRule?: RegExp;
  valueTransform?: (value: string) => string;
  maxLength?: number;
  useFormMethods: UseFormRegisterReturn;
  className?: string;
  placeholder?: string;
  error: {
    flag: boolean;
    message?: string;
  };
  id: string;
};
export default function Input({
  className,
  placeholder,
  error,
  id,
  useFormMethods,
  maxLength,
  matchRegexRule,
  valueTransform,
}: InputType) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={clsxm('w-[100%]', className)}>
      <div
        className={clsx(
          'mb-[5px] w-[100%] rounded-[9px] p-[1.8px]',
          !error.flag && 'bg-ex4-LightGrey',
          'from-[#6348FE] to-[#610595] focus-within:bg-gradient-to-r',
          error.flag && 'bg-ex4-Red'
        )}
      >
        <input
          value={inputValue}
          onKeyPress={(e) => {
            if (matchRegexRule && !matchRegexRule.test(e.key)) {
              e.preventDefault();
            }
          }}
          {...useFormMethods}
          onChange={(e) => {
            useFormMethods.onChange(e);
            if (valueTransform) {
              setInputValue(valueTransform(e.target.value));
            } else {
              setInputValue(e.target.value);
            }
          }}
          id={id}
          type='text'
          className={clsx(
            'w-[100%] rounded-[8px] border-none p-[7px] px-[13px] outline-none focus:ring-0',
            'placeholder-ex4-DeepViolet placeholder-opacity-25'
          )}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      </div>
      <Text type='BodyS' className='text-ex4-Red'>
        {error.message || ''}
      </Text>
    </div>
  );
}
