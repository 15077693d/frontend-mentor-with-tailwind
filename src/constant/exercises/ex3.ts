export enum ActionId {
  reactPost = 'react post',
  follow = 'follow',
  joinGroup = 'join group',
  privateMessage = 'private message',
  commentImage = 'comment image',
  leftGroup = 'left group',
}

export const notificationText: {
  [id in ActionId]: string;
} = {
  [ActionId.reactPost]: 'reacted to your recent post',
  [ActionId.follow]: 'followed you',
  [ActionId.joinGroup]: 'has joined your group',
  [ActionId.privateMessage]: 'sent you a private message',
  [ActionId.commentImage]: 'commented on your picture',
  [ActionId.leftGroup]: 'left the group',
};

export type NotificationDataType = {
  id: number;
  username: string;
  iconSrc: string;
  time: string;
  action: ActionId;
  data: {
    postName?: string;
    groupName?: string;
    messageContent?: string;
    imageSrc?: string;
  };
  readed: boolean;
};

export const notificationsData: { [id in number]: NotificationDataType } = {
  1: {
    id: 1,
    username: 'Mark Webber',
    iconSrc: '/images/projects/ex3/avatar-1.webp',
    time: '1m ago',
    action: ActionId.reactPost,
    data: { postName: 'My first tournament today!' },
    readed: false,
  },
  2: {
    id: 2,
    username: 'Angela Gray',
    iconSrc: '/images/projects/ex3/avatar-2.webp',
    time: '5m ago',
    action: ActionId.follow,
    data: {},
    readed: false,
  },
  3: {
    id: 3,
    username: 'Jacob Thompson',
    iconSrc: '/images/projects/ex3/avatar-3.webp',
    time: '1 day ago',
    action: ActionId.joinGroup,
    data: { groupName: 'Chess Club' },
    readed: false,
  },
  4: {
    id: 4,
    username: 'Rizky Hasanuddi',
    iconSrc: '/images/projects/ex3/avatar-4.webp',
    time: '5 days ago',
    action: ActionId.privateMessage,
    data: {
      messageContent:
        'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
    },
    readed: true,
  },
  5: {
    id: 5,
    username: 'Kimberly Smith',
    iconSrc: '/images/projects/ex3/avatar-5.webp',
    time: '1 week ago',
    action: ActionId.commentImage,
    data: {
      imageSrc: '/images/projects/ex3/image-chess.webp',
    },
    readed: true,
  },
  6: {
    id: 6,
    username: 'Nathan Peterson',
    iconSrc: '/images/projects/ex3/avatar-6.webp',
    time: '2 weeks ago',
    action: ActionId.reactPost,
    data: { postName: '5 end-game strategies to increase your win rate' },
    readed: true,
  },
  7: {
    id: 7,
    username: 'Anna Kim',
    iconSrc: '/images/projects/ex3/avatar-7.webp',
    time: '2 weeks ago',
    action: ActionId.leftGroup,
    data: { groupName: 'Chess Club' },
    readed: true,
  },
};
