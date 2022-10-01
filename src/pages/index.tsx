import * as React from 'react';

import Layout from '@/components/main/layout/Layout';
import ArrowLink from '@/components/main/links/ArrowLink';
import ButtonLink from '@/components/main/links/ButtonLink';
import UnderlineLink from '@/components/main/links/UnderlineLink';
import Seo from '@/components/main/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            {/* eslint-disable  @next/next/no-img-element */}
            <img
              className=' translate-x-7'
              src='/images/logo.png'
              width={84 * 2.5}
              height={51 * 2.5}
              alt='logo'
            />
            <h1 className='mt-4'>Frontend Mentor with Tailwind CSS</h1>
            <p className='mt-2 text-sm text-gray-800'>
              A frontend mentor exercises collection in Tailwind CSS
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/15077693d/frontend-mentor-with-tailwind'>
                See the repository
              </ArrowLink>
            </p>
            <ButtonLink className='mt-6' href='/exercises' variant='light'>
              See all exercises
            </ButtonLink>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://oscaryiu.com'>
                Oscar Yu
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
