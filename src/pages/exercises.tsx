// !STARTERCONF You can delete this page
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/main/buttons/Button';
import Layout from '@/components/main/layout/Layout';
import ArrowLink from '@/components/main/links/ArrowLink';
import PrimaryLink from '@/components/main/links/PrimaryLink';
import Seo from '@/components/main/Seo';

export default function ExercisesPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <Layout>
      <Seo
        templateTitle='Exercises'
        description='List of frontend mentor exercises'
      />

      <main>
        <section
          className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-gray-50', 'sky')}
        >
          <div
            className={clsx(
              'layout min-h-screen py-20',
              mode === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            <h1>Exercises</h1>
            <ArrowLink direction='left' className='mt-2' href='/'>
              Back to Home
            </ArrowLink>

            <div className='mt-8 flex flex-wrap gap-2'>
              <Button
                onClick={toggleMode}
                variant={mode === 'dark' ? 'light' : 'dark'}
              >
                Set to {mode === 'dark' ? 'light' : 'dark'}
              </Button>
              {/* <Button onClick={randomize}>Randomize CSS Variable</Button> */}
            </div>

            <ol className='mt-8 space-y-6'>
              <li className='space-y-2'>
                <h2 className='mb-2 text-lg md:text-xl'>
                  Product preview card component
                </h2>
                <Image
                  layout='intrinsic'
                  alt='productPreviewCardComponent summary'
                  width={288 * 2.5}
                  height={160 * 2.5}
                  src='/images/projects/ex1/project-summary.png'
                />
                <p className={clsx('!mt-1 text-sm', textColor)}>
                  This is my first and most inspiring experience with the
                  tailwind, I choose a simple one for practice. This is fun to
                  learn tailwind config and remember many tailwind CSS
                  properties. It is convenient and speeds me up on the frontend
                  development.
                </p>
                <div className='space-x-2'>
                  <PrimaryLink href='/exercises/ex1'>My Solution</PrimaryLink>
                  <PrimaryLink href='https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa'>
                    The Challenge
                  </PrimaryLink>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </Layout>
  );
}
