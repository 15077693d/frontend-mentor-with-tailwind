import * as React from 'react';

import ExerciseLayout from '@/components/common/ExerciseLayout';
import { ProductPreviewCard } from '@/components/ex1/ProductPreviewCard';

import { exerciseSummarys } from '@/constant/exerciseSummary';

export default function Ex1Page() {
  return (
    <ExerciseLayout
      className='flex h-screen w-screen items-center justify-center bg-ex1-cream'
      templateTitle={exerciseSummarys.ex1.title}
    >
      <ProductPreviewCard />
    </ExerciseLayout>
  );
}
