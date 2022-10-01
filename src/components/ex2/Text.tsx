import clsx from 'clsx';

export function Text({
  children,
  type,
  ...args
}: {
  children: React.ReactNode;
  className: string;
  type: 'Heading' | 'Body';
}) {
  const className = {
    ['Heading']: 'font-Outfit font-bold text-[22px]',
    ['Body']:
      'font-Outfit font-bold text-[15px] leading-[32px] trackin-[0.19px]',
  };

  return (
    <div className={clsx(className[type] || '', args.className)}>
      {children}
    </div>
  );
}
