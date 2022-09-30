// !STARTERCONF You can delete this page
import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';

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
                <h2 className='text-lg md:text-xl'>
                  Product preview card component
                </h2>
                <p className={clsx('!mt-1 text-sm', textColor)}>
                  This is my first experience with tailwind, I choose a simple
                  one for practice.
                </p>
                <div className='space-x-2'>
                  <PrimaryLink href='/productPreviewCardComponent'>
                    My Solution
                  </PrimaryLink>
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
