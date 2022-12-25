import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';
import {Menu} from '@/components/menu';
import { Footer } from '@/components/footer';

type IMainProps = {
  meta: {
    title: string;
    description: string;
    canonical?: string;
  };
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
return (
  <>
    <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.meta.title}
        description={props.meta.description}
        canonical={props.meta?.canonical}
        openGraph={{
          title: props.meta.title,
          description: props.meta.description,
          url: props.meta?.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
    />
    <Menu />
    <div className="w-full antialiased">
      <div className="mx-auto px-4 md:px-12 lg:px-24">
        <div className="content text-xl">{props.children}</div>
      </div>
    </div>
    <Footer appconfig={AppConfig.title} />
  </>)
};

export { Main };