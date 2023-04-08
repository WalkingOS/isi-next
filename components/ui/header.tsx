import Link from 'next/link';
import Image from 'next/image';
import MainNavigation from './main-navigation';
import { RenderItems } from './TreeMenu';



export interface IMenuItem {
  title: string;
  slug?: string;
  items?: IMenuItem[];
}

const Header = ({menuItem}: {menuItem: IMenuItem}) => {
  
	return (
		<header>
			<MainNavigation menuItem={menuItem} />
		</header>
	);
};

export default Header;
