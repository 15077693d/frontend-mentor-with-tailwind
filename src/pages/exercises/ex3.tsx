import React from 'react';

import ExerciseLayout from '@/components/common/ExerciseLayout';
import { Notifications } from '@/components/ex3/Notifications/Notifications';

export default function NotificationPage() {
  return (
    <ExerciseLayout
      className='flex h-screen w-screen items-center  justify-center  bg-[#F9FAFD]'
      templateTitle='Notification Page'
    >
      <Notifications />
    </ExerciseLayout>
  );
}
