import clsx from 'clsx';

export default function Text({
  children,
  type,
  ...args
}: {
  children?: React.ReactNode;
  className?: string;
  type: 'BodyS' | 'BodyM' | 'BodyL' | 'HeadingL' | 'HeadingXL';
}) {
  const className = {
    BodyS: 'font-SpaceGrotesk font-[500] text-[12px] tracking-[0px] ',
    BodyM: 'font-SpaceGrotesk font-[500] text-[12px] tracking-[2px] ',
    BodyL: 'font-SpaceGrotesk font-[500] text-[14px] tracking-[2px] ',
    HeadingL: 'font-SpaceGrotesk font-[500] text-[18px] tracking-[0px] ',
    HeadingXL:
      'font-SpaceGrotesk font-[500] text-[28px] tracking-[3.422222137451172px] ',
  };

  return (
    <span className={clsx(className[type] || '', args.className)}>
      {children}
    </span>
  );
}
