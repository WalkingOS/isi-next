import '~/styles/globals.css';
import {Libre_Franklin} from '@next/font/google';
import { Header, MaxWidthWrapper} from '~/components/ui';
import {siteSettingsQuery} from '~/lib/queries';
import {sanityClient} from '~/lib/sanity/client';
import type {SiteSettings} from '~/models/site-settings';
import { menuQuery } from '~/lib/queries/site-settings';
import { IMenuItem } from '~/components/ui/header';
import { Footer } from '~/components/ui/footer';

const workSans = Libre_Franklin({
	variable: '--font-libre-franklin',
	subsets: ['latin']
});

const RootLayout = async ({children}: {children: React.ReactNode}) => {
	// const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const menuItem = await sanityClient.fetch<IMenuItem>(menuQuery);
  
	return (
		<html lang='de' className={workSans.className}>
			<head />
			<body className='bg-white text-gray-800 min-h-screen'>
        <Header menuItem={menuItem} />
				<main>
					{children}
				</main>
				<Footer /*socialFields={siteSettings.socialFields}*//>
			</body>
		</html>
	);
};

export default RootLayout;
