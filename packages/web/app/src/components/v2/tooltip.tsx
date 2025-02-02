import { ComponentProps, ReactElement, ReactNode } from 'react';
import { clsx } from 'clsx';
import * as T from '@radix-ui/react-tooltip';

function Wrapper({
  children,
  content,
  contentProps = {},
}: {
  children: ReactNode;
  content: ReactNode;
  contentProps?: ComponentProps<typeof T.Content>;
}): ReactElement {
  return (
    <T.Root>
      <T.Trigger asChild>{children}</T.Trigger>
      <T.Content
        sideOffset={4}
        {...contentProps}
        className={clsx(
          'radix-side-top:animate-slide-down-fade',
          'radix-side-right:animate-slide-left-fade',
          'radix-side-bottom:animate-slide-up-fade',
          'radix-side-left:animate-slide-right-fade',
          'rounded-sm bg-white p-2 text-xs font-normal text-black shadow',
        )}
      >
        <T.Arrow className="fill-current text-white" />
        {content}
      </T.Content>
    </T.Root>
  );
}

export const Tooltip = Object.assign(Wrapper, { Provider: T.Provider });
