import clsx from 'clsx';

export default function Text({
  children,
  type,
  ...args
}: {
  children?: React.ReactNode;
  className?: string;
  type: 'Header' | 'BodyBold' | 'Body';
}) {
  const className = {
    Header:
      'font-PlusJakartaSans font-[800] md:text-[24px] tracking-[0px] text-[14px]',
    BodyBold:
      'font-PlusJakartaSans font-[800] md:text-[16px] tracking-[0px]  text-[14px]',
    Body: 'font-PlusJakartaSans font-[500] md:text-[16px] tracking-[0px] text-[14px]',
  };

  return (
    <span className={clsx(className[type] || '', args.className)}>
      {children}
    </span>
  );
}
