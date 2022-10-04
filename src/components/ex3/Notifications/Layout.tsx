import { useNotification } from '@/components/ex3/Notifications/Notifications';
import Text from '@/components/ex3/Text';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { numberOfUnread, markAllNotificationsAsRead } = useNotification();
  return (
    <main className='w-[375px] bg-ex3-White py-7 px-5 md:w-[730px] md:rounded-[15px]'>
      <div className='mb-5 flex items-center justify-between'>
        <div className='flex items-center'>
          <Text className='mr-3 text-[20px]' type='Header'>
            Notifications
          </Text>
          <span className='flex h-[25px] w-[32px] items-center justify-center rounded-[6px] bg-ex3-Blue'>
            <Text type='BodyBold' className='text-ex3-White'>
              {numberOfUnread}
            </Text>
          </span>
        </div>
        <button onClick={markAllNotificationsAsRead}>
          <Text type='Body' className=' text-ex3-DarkGreyBlue'>
            Mark all as read
          </Text>
        </button>
      </div>
      {children}
    </main>
  );
}
