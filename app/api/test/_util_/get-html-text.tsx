import { Html,render, Tailwind } from '@react-email/components';

import { BaseTailwindConfig } from '@/base.tailwind.config';
import { RootPreview } from '@/components/render/RootPreview';
import { IRoot } from '@/types/IRoot';

function RootPreviewProvider({ children }: { children: React.ReactNode }) {
  return (
    <Tailwind config={BaseTailwindConfig}>
      <Html lang="en" dir="ltr">
        {children}
      </Html>
    </Tailwind>
  );
}

export async function getHtmlText(root: IRoot) {
  const str = await render(
    <RootPreviewProvider>
      <RootPreview root={root} />
    </RootPreviewProvider>,
    { pretty: true }
  );
  return str;
}
