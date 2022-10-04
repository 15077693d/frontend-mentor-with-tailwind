import React, { useState } from 'react';

import NotificationCard from '@/components/ex3/NotificationCard';
import Layout from '@/components/ex3/Notifications/Layout';

import {
  NotificationDataType,
  notificationsData as initNotificationsData,
} from '@/constant/exercises/ex3';

type NotificationsContextType = {
  setNotificationsData: (data: {
    [id in number]: NotificationDataType;
  }) => void;
  notificationsData: { [id in number]: NotificationDataType };
  markNotificationAsRead: (notificationId: number) => void;
  markAllNotificationsAsRead: () => void;
  numberOfUnread: number;
};
const initNotificationsContext: NotificationsContextType = {
  setNotificationsData: () => {
    return;
  },
  notificationsData: {},
  markNotificationAsRead: () => {
    return;
  },
  markAllNotificationsAsRead: () => {
    return;
  },
  numberOfUnread: 0,
};
const NotificationsContext = React.createContext<NotificationsContextType>(
  initNotificationsContext
);

export const useNotification = () => React.useContext(NotificationsContext);
/** Referecne: https://codesandbox.io/s/compound-react-components-with-hooks-typescript-vpvdq?file=/src/Tabs/Tabs.tsx:1452-1455 */
export function Notifications() {
  const [notificationsData, setNotificationsData] = useState<{
    [id in number]: NotificationDataType;
  }>(initNotificationsData);
  const markNotificationAsRead = (id: number) => {
    setNotificationsData((prev) => {
      const newData = { ...prev };
      newData[id].readed = true;
      return newData;
    });
  };
  const markAllNotificationsAsRead = () => {
    setNotificationsData((prev) => {
      const newData = { ...prev };
      for (const key in newData) {
        newData[key].readed = true;
      }
      return newData;
    });
  };
  let numberOfUnread = 0;
  for (const key in notificationsData) {
    if (notificationsData[key].readed === false) {
      numberOfUnread += 1;
    }
  }
  return (
    <NotificationsContext.Provider
      value={{
        setNotificationsData,
        notificationsData,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        numberOfUnread,
      }}
    >
      <Layout>
        {Object.values(notificationsData).map((notificationData) => (
          <NotificationCard
            key={`NotificationCard_${notificationData.id}`}
            id={notificationData.id}
            className='mb-3'
          >
            <div className='flex'>
              <NotificationCard.Avatar />
              <div className='flex-1'>
                <div className='flex justify-between'>
                  <NotificationCard.Text />
                  <NotificationCard.Picture />
                </div>
                <NotificationCard.Message className='mt-5' />
              </div>
            </div>
          </NotificationCard>
        ))}
      </Layout>
    </NotificationsContext.Provider>
  );
}
