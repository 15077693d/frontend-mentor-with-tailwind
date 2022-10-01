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
  const className = {
    ['Display']: 'font-Fraunces font-bold text-[32px] leading-[32px]',
    ['Body']: 'font-Montserrat font-medium text-[14px] leading-[23px]',
    ['Button Text']: 'font-Montserrat font-bold text-[14px]',
    ['Overline']:
      'font-Montserrat tracking-[5px] font-medium text-[12px] leading-[5px]',
  };

  return (
    <div className={clsx(className[type] || '', args.className)}>
      {children}
    </div>
  );
}
