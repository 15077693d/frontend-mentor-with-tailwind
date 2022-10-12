import React from 'react';

import ArrowLink from '@/components/main/links/ArrowLink';
import Seo from '@/components/main/Seo';

export default function ExerciseLayout({
  children,
  className,
  templateTitle,
}: {
  children?: React.ReactNode;
  className: string;
  templateTitle: string;
}) {
  return (
    <div className={className}>
      <Seo templateTitle={templateTitle} />
      <ArrowLink
        direction='left'
        className='absolute top-2 left-8 z-10 mt-8'
        href='/exercises'
      >
        Back to Exercises
      </ArrowLink>
      {children}
    </div>
  );
}
