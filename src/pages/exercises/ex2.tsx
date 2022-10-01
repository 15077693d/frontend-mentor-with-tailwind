import React from 'react';

import ExerciseLayout from '@/components/common/ExerciseLayout';
import QrCodeComponent from '@/components/ex2/QRCodeComponent';

export default function Ex2Page() {
  return (
    <ExerciseLayout
      templateTitle='QrCode Component'
      className='flex h-screen w-screen items-center justify-center bg-ex2-lightGrey'
    >
      <QrCodeComponent />
    </ExerciseLayout>
  );
}
