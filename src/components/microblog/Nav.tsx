import { ReactNode } from 'react';
import DialogDemo from './radix/Dialog';
import PopoverDemo from './radix/PopoverDemo';
import NavItem from './NavItem';
import AccountNavItem from './AccountNavItem';

import { SiTwitter } from 'react-icons/si';
import {
	HiOutlineHome,
	HiHashtag,
	HiOutlineBell,
	HiOutlineEnvelope,
	HiOutlineBookmark,
	HiOutlineUser,
} from 'react-icons/hi2';

interface NavLinkItem {
	href: string;
	text: string;
	icon?: ReactNode;
}

const items: NavLinkItem[] = [
	{
		href: '/home',
		text: 'Home',
		icon: <HiOutlineHome className="w-6 h-6" />,
	},
	{
		href: '/explore',
		text: 'Explore',
		icon: <HiHashtag className="w-6 h-6" />,
	},
	{
		href: '/notifications',
		text: 'Notifications',
		icon: <HiOutlineBell className="w-6 h-6" />,
	},
	{
		href: '/messages',
		text: 'Messages',
		icon: <HiOutlineEnvelope className="w-6 h-6" />,
	},
	{
		href: '/bookmarks',
		text: 'Bookmarks',
		icon: <HiOutlineBookmark className="w-6 h-6" />,
	},
	{
		href: '/profile',
		text: 'Profile',
		icon: <HiOutlineUser className="w-6 h-6" />,
	},
];

const Nav = () => (
	<header className="hidden w-24 sm:flex xl:col-span-2">
		<div className="fixed flex flex-col flex-1 h-full xl:w-60">
			<div className="flex flex-col flex-1">
				<NavItem href="/home" width="inline" size="default">
					<SiTwitter className="w-6 h-6" />
				</NavItem>
				{items.map(({ href, text, icon }, i) => (
					<div
						key={`header-${i}`}
						// value={`item-${i + 1}`}
						className="overflow-hidden rounded-lg focus:outline-none"
					>
						<NavItem href={href} width="inline" size="default">
							{icon}
							<div className="flex-none hidden text-lg font-medium xl:inline-flex">
								{text}
							</div>
						</NavItem>
					</div>
				))}
				<PopoverDemo />
				<DialogDemo />
			</div>
			<div>
				<AccountNavItem />
			</div>
		</div>
	</header>
);

export default Nav;
