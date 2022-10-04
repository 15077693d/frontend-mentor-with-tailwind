import React from 'react';

import ExerciseLayout from '@/components/common/ExerciseLayout';
import { Notifications } from '@/components/ex3/Notifications/Notifications';

export default function NotificationPage() {
  return (
    <ExerciseLayout
      className='flex  justify-center bg-[#F9FAFD] py-[70px]'
      templateTitle='Notification Page'
    >
      <Notifications />
    </ExerciseLayout>
  );
}
