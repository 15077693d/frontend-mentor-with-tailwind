import * as React from 'react';

function ProductPreviewCard() {
  return (
    <div className='h-[450px] w-[600px] rounded-[10px] bg-ex1-white'></div>
  );
}
export default function ProductPreviewCardComponentPage() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-ex1-cream'>
      <ProductPreviewCard />
    </div>
  );
}
