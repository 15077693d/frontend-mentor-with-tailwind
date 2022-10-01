import React from 'react';

import ExerciseLayout from '@/components/common/ExerciseLayout';
import QrCodeComponent from '@/components/ex2/QRCodeComponent';

import { exerciseSummarys } from '@/constant/exerciseSummary';

export default function Ex2Page() {
  return (
    <ExerciseLayout
      templateTitle={exerciseSummarys.ex2.title}
      className='flex h-screen w-screen items-center justify-center bg-ex2-lightGrey'
    >
      <QrCodeComponent />
    </ExerciseLayout>
  );
}
