import clsx from 'clsx';

export default function Text({
  children,
  type,
  ...args
}: {
  children: React.ReactNode;
  className?: string;
  type: 'Heading' | 'Body';
}) {
  const className = {
    ['Heading']: 'font-Outfit font-bold text-[22px] leading-[30px]',
    ['Body']: 'font-Outfit font-normal text-[15px]  tracking-[0.19px]',
  };

  return (
    <div className={clsx(className[type] || '', args.className)}>
      {children}
    </div>
  );
}
