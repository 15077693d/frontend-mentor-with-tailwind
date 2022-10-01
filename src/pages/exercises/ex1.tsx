import * as React from 'react';

import { ProductPreviewCard } from '@/components/ex1/ProductPreviewCard';
import ArrowLink from '@/components/main/links/ArrowLink';
import Seo from '@/components/main/Seo';

export default function ProductPreviewCardComponentPage() {
  return (
    <main className='flex h-screen w-screen items-center justify-center bg-ex1-cream'>
      <Seo templateTitle='Product Preview Card Component' />
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
