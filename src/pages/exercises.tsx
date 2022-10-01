// !STARTERCONF You can delete this page
import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/main/buttons/Button';
import ExerciseCard from '@/components/main/card/ExerciseCard';
import Layout from '@/components/main/layout/Layout';
import ArrowLink from '@/components/main/links/ArrowLink';
import Seo from '@/components/main/Seo';

import { ExerciseId } from '@/constant/exerciseSummary';

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
            <div className='mt-8 flex  flex-wrap gap-4'>
              {Object.values(ExerciseId).map((exerciseId) => (
                <ExerciseCard
                  key={exerciseId}
                  textColor={textColor}
                  exerciseId={exerciseId}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
