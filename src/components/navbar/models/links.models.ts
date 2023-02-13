import { HomeIcon, SearchIcon } from '@/icons';

interface Props {
	name: string;
	Icon: () => JSX.Element;
	link: string;
}

export const NavLinks: Props[] = [
	{
		name: 'Home',
		Icon: HomeIcon,
		link: '/',
	},
	{
		name: 'Search',
		Icon: SearchIcon,
		link: '/search',
	},
];
