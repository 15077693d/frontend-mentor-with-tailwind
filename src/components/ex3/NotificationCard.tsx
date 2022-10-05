import React from 'react';

import clsxm from '@/lib/clsxm';

import { useNotification } from '@/components/ex3/Notifications/Notifications';
import Text from '@/components/ex3/Text';

import {
  ActionId,
  NotificationDataType,
  notificationText,
} from '@/constant/exercises/ex3';

function CardPicture() {
  const {
    data: { imageSrc },
  } = useNotificationCard();
  return (
    (imageSrc && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageSrc}
        className='h-[39px] w-[39px] rounded-[7px] md:h-[39px] md:w-[39px]'
        alt='picture'
      />
    )) ||
    null
  );
}

function CardText() {
  const { username, time, action, data, readed } = useNotificationCard();
  const objectText = data.groupName || data.postName;
  const objectTextColor =
    action === ActionId.reactPost ? 'DarkGreyBlue' : 'Blue';
  return (
    <div>
      <Text className='text-ex3-VeryDarkGreyBlue' type='BodyBold'>
        {username}
      </Text>
      &nbsp;
      <Text className='text-ex3-DarkGreyBlue' type='Body'>
        {notificationText[action]}
      </Text>
      &nbsp;
      {objectText && (
        <Text className={`text-ex3-${objectTextColor}`} type='BodyBold'>
          {objectText}
        </Text>
      )}
      &nbsp;
      {!readed && (
        <div className=' inline-block h-[8px] w-[8px] rounded-[50%] bg-ex3-Red' />
      )}
      <Text className='block text-ex3-GreyBlue' type='Body'>
        {time}
      </Text>
    </div>
  );
}

function CardAvatar() {
  const { username, iconSrc } = useNotificationCard();
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className=' relative mr-5  h-[39px] w-[39px] md:h-[45px] md:w-[45px]'
      alt={`${username}_icon`}
      src={iconSrc}
    />
  );
}

function CardMessage({ className }: { className?: string }) {
  const {
    data: { messageContent },
  } = useNotificationCard();
  return (
    (messageContent && (
      <div
        className={clsxm(
          className,
          ' w-[100%] rounded-[5px] border-[1px] border-ex3-VeryLightGreyBlue p-5'
        )}
      >
        <Text type='Body' className='text-ex3-DarkGreyBlue'>
          {messageContent}
        </Text>
      </div>
    )) ||
    null
  );
}

const NotificationCardContext = React.createContext<NotificationDataType>(
  {} as NotificationDataType
);

const useNotificationCard = () => React.useContext(NotificationCardContext);

export default function NotificationCard({
  id,
  children,
  className,
}: {
  id: number;
  children: React.ReactNode;
  className?: string;
}) {
  const { notificationsData, markNotificationAsRead } = useNotification();
  return (
    <NotificationCardContext.Provider value={notificationsData[id]}>
      <div
        className={clsxm(
          className,
          notificationsData[id].readed ? 'bg-ex3-White' : 'bg-ex3-Snow',
          'cursor-pointer rounded-[8px] p-5'
        )}
        onClick={() => markNotificationAsRead(id)}
      >
        {children}
      </div>
    </NotificationCardContext.Provider>
  );
}

NotificationCard.Text = CardText;
NotificationCard.Avatar = CardAvatar;
NotificationCard.Message = CardMessage;
NotificationCard.Picture = CardPicture;
