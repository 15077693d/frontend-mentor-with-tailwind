import Image from 'next/image';
import React from 'react';

import Text from '@/components/ex2/Text';

export default function QRCOdeComponent() {
  return (
    <main className='s h-[497px] w-[320px] rounded-[10px] bg-ex2-white p-[15px] shadow-2xl'>
      <section>
        <Image
          className='rounded-[10px]'
          alt='qrcode'
          width={288}
          height={288}
          src='/images/projects/ex2/image-qr-code.png'
        />
      </section>
      <section className='p-5'>
        <Text className='text-center text-ex2-darkNavy' type='Heading'>
          Improve your front-end skills by building projects
        </Text>
        <Text className='mt-2 text-center text-ex2-grey' type='Body'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Text>
      </section>
    </main>
  );
}
