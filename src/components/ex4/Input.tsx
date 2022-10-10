import clsx from 'clsx';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import Text from '@/components/ex4/Text';

type InputType = {
  className?: string;
  placeholder?: string;
  error: {
    flag: boolean;
    message?: string;
  };
  type: 'text' | 'number';
  id: string;
};
export default function Input({
  className,
  placeholder,
  error,
  type,
  id,
}: InputType) {
  const inputRef = React.useRef(null);
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    const updateInputRefIsActive = () => {
      if (typeof window !== 'undefined') {
        setActive(inputRef.current === document.activeElement);
      }
    };
    const unsetInputRefIsActive = () => {
      setActive(false);
    };
    window.addEventListener('focusout', unsetInputRefIsActive);
    window.addEventListener('focusin', updateInputRefIsActive);

    return () => {
      window.removeEventListener('focusin', updateInputRefIsActive);
      window.removeEventListener('focusout', unsetInputRefIsActive);
    };
  }, []);
  return (
    <div className={clsxm('w-[100%]', className)}>
      <div
        className={clsx(
          'mb-[5px] w-[100%] rounded-[9px] p-[1.5px]',
          !active && !error.flag && 'bg-ex4-LightGrey',
          active &&
            !error.flag &&
            'bg-gradient-to-r from-[#6348FE] to-[#610595]',
          error.flag && 'bg-ex4-Red'
        )}
      >
        <input
          id={id}
          ref={inputRef}
          type={type}
          className={clsx(
            'w-[100%] rounded-[8px] border-none p-[7px] px-[13px] outline-none',
            'placeholder-ex4-DeepViolet placeholder-opacity-25'
          )}
          placeholder={placeholder}
        />
      </div>
      <Text type='BodyS' className='text-ex4-Red'>
        {error.message || ''}
      </Text>
    </div>
  );
}
