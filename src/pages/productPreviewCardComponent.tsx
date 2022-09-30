import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';

function ProductPreviewCard() {
  return (
    <div className='h-[450px] w-[600px] rounded-[10px] bg-ex1-white'></div>
  );
}
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
