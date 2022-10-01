import clsx from 'clsx';

export function Text({
  children,
  type,
  ...args
}: {
  children: React.ReactNode;
  className: string;
  type: 'Display' | 'Body' | 'Button Text' | 'Overline';
}) {
  let className = '';
  switch (type) {
    case 'Display':
      className = 'font-Fraunces font-bold text-[32px] leading-[32px]';
      break;
    case 'Body':
      className = 'font-Montserrat font-medium text-[14px] leading-[23px]';
      break;
    case 'Button Text':
      className = 'font-Montserrat font-bold text-[14px]';
      break;
    case 'Overline':
      className =
        'font-Montserrat tracking-[5px] font-medium text-[12px] leading-[5px]';
      break;
    default:
      break;
  }
  return <div className={clsx(className, args.className)}>{children}</div>;
}
