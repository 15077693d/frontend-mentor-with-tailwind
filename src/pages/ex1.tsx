import * as React from 'react';

import { ProductPreviewCard } from '@/components/ex1/ProductPreviewCard';
import ArrowLink from '@/components/main/links/ArrowLink';

export default function ProductPreviewCardComponentPage() {
  return (
    <main className='flex h-screen w-screen items-center justify-center bg-ex1-cream'>
      <ArrowLink
        direction='left'
        className='absolute top-2 left-8 mt-8'
        href='/exercises'
      >
        Back to Exercises
      </ArrowLink>
      <ProductPreviewCard />
    </main>
  );
}
