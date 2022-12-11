import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';
import Menu from '@/components/Menu';

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
    <footer className="px-4 lg:px-24 bg-[#292727] text-white mt-12 text-sm rounded-tr-[2em]">
      <div className='pb-8 pt-12 flex justify-between'>
        <span className='text-[32px] self-center'>
          ISI NOOR
        </span>

        <section className="w-[260px]">
          <h6 className='mb-2'>Öffnungszeiten</h6>
          <ul >
            <li className='flex justify-between'>
              <span>
                Mo-Fr:
              </span>
              <span>
                <time>10:00</time> - <time>19:00</time>
              </span>
            </li>
            <li className='flex justify-between'>
              <span>
                Sa:
              </span>
              <span>
                <time>09:00</time> - <time>15:00</time>
              </span>
            </li>
          </ul>
        </section>
      </div>
      <div className=''>
        <div className='flex justify-between border-t border-white py-8'>
          © Copyright {new Date().getFullYear()} {AppConfig.title}.
          <ul className="flex">
            <li className="self-center border-r border-white px-2"><a href="/impressum">Impressum</a></li>
            <li className="self-center border-r border-white px-2"><a href="/datenschutz">Datenschutz</a></li>
            <li className="self-center pl-2"><a href="/kontakt">Kontakt</a></li>
          </ul>
        </div>
 
      </div>
    </footer>
  </>)
};

export { Main };
