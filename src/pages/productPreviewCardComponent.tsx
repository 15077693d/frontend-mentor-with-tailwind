import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';

function ProductPreviewCard() {
  return (
    <main className='flex h-[450px] w-[600px] rounded-[10px] bg-ex1-white'>
      {/* Image section */}
      <section className='h-[100%] w-[50%] rounded-l-[10px] bg-ex1-product-desktop bg-cover'></section>
      <section className='w-[50%]'>
        <div className=' font-Montserrat tracking-[5px] text-ex1-aurometalSaurus'>
          PERFUME
        </div>
        <div className='font-Fraunces text-[32px] font-bold  leading-[32px] text-ex1-gunmetal'>
          Gabrielle Essence Eau De Parfum
        </div>
        <div>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </div>
        <div>
          <div>$149.99</div>
          <div>$169.99</div>
        </div>
        <button>
          <span>Add to Cart</span>
        </button>
      </section>
    </main>
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
