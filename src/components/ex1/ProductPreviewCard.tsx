import Image from 'next/image';

import { Text } from '@/components/ex1/Text';

export function ProductPreviewCard() {
  return (
    <main className='h-[611px] w-[343px] rounded-[10px] bg-ex1-white md:flex md:h-[450px] md:w-[600px]'>
      {/* Image section */}
      <section className='w:[50%] h-[40%] rounded-t-[10px] bg-ex1-product-desktop bg-cover bg-right md:h-[100%] md:w-[50%] md:rounded-t-none md:rounded-l-[10px]'></section>
      {/* Product detail section */}
      <section className='flex h-[60%] flex-col justify-between p-5 md:h-[100%] md:w-[50%] md:p-8'>
        <Text type='Overline' className='text-ex1-aurometalSaurus'>
          PERFUME
        </Text>
        <Text type='Display' className='text-ex1-gunmetal'>
          Gabrielle Essence Eau De Parfum
        </Text>
        <Text type='Body' className='text-ex1-aurometalSaurus'>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </Text>
        <div className='flex items-center'>
          <Text type='Display' className='text-ex1-deepAquamarine'>
            $149.99
          </Text>
          <Text
            type='Body'
            className='ml-5 text-[13px] text-ex1-aurometalSaurus line-through'
          >
            $169.99
          </Text>
        </div>
        <button className=' flex h-[48px] w-[100%] items-center justify-center rounded bg-ex1-deepAquamarine transition-all hover:bg-ex1-hoveredDeepAquamarine'>
          <Image
            width={14}
            height={16}
            alt='icon-cart'
            src='/images/projects/productPreviewCardComponent/icon-cart.svg'
          />
          <Text type='Button Text' className='m-2 text-ex1-white'>
            Add to Cart
          </Text>
        </button>
      </section>
    </main>
  );
}
