import * as React from 'react';

import ExerciseLayout from '@/components/common/ExerciseLayout';
import { ProductPreviewCard } from '@/components/ex1/ProductPreviewCard';

export default function Ex1Page() {
  return (
    <ExerciseLayout
      className='flex h-screen w-screen items-center justify-center bg-ex1-cream'
      templateTitle='Product Preview Card Component'
    >
      <ProductPreviewCard />
    </ExerciseLayout>
  );
}
