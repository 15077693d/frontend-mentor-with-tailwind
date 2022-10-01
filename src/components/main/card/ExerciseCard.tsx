import clsx from 'clsx';
import Image from 'next/image';

import PrimaryLink from '@/components/main/links/PrimaryLink';

import { ExerciseId, exerciseSummarys } from '@/constant/exerciseSummary';

export default function ExerciseCard({
  textColor,
  exerciseId,
}: {
  textColor: string;
  exerciseId: ExerciseId;
}) {
  const { title, imgSrc, paragraph } = exerciseSummarys[exerciseId];
  return (
    <main className='w-[432px] rounded-md shadow-xl'>
      <Image
        className='rounded-t-md'
        layout='intrinsic'
        alt='productPreviewCardComponent summary'
        width={432}
        height={160 * 1.5}
        src={imgSrc}
      />
      <section className='space-y-3 p-3'>
        <h2 className='mb-2 text-lg md:text-xl'>{title}</h2>
        <p className={clsx('!mt-1 text-sm', textColor)}>{paragraph}</p>
        <div className='space-x-5'>
          <PrimaryLink href={`/exercises/${exerciseId}`}>
            View My Solution
          </PrimaryLink>
          <PrimaryLink href='https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa'>
            View Challenge
          </PrimaryLink>
        </div>
      </section>
    </main>
  );
}
