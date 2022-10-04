import clsx from 'clsx';

export default function Text({
  children,
  type,
  ...args
}: {
  children: React.ReactNode;
  className?: string;
  type: 'Header' | 'BodyBold' | 'Body';
}) {
  const className = {
    Header: 'font-PlusJakartaSans font-[800] text-[24px] tracking-[0px] ',
    BodyBold: 'font-PlusJakartaSans font-[800] text-[16px] tracking-[0px] ',
    Body: 'font-PlusJakartaSans font-[500] text-[16px] tracking-[0px] ',
  };

  return (
    <div className={clsx(className[type] || '', args.className)}>
      {children}
    </div>
  );
}
