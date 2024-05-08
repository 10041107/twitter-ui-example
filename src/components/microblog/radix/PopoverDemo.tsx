import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import NavItem from '../NavItem';
import Accordion from './Accordion';
import { ReactNode } from 'react';

import {
	HiOutlineEllipsisHorizontalCircle,
	HiOutlineChatBubbleBottomCenterText,
	HiListBullet,
	HiOutlineUserGroup,
} from 'react-icons/hi2';

interface NavLinkItem {
	href: string;
	text: string;
	icon?: ReactNode;
}

const items: NavLinkItem[] = [
	{
		href: '/topics',
		text: 'Topics',
		icon: <HiOutlineChatBubbleBottomCenterText className="w-6 h-6" />,
	},
	{
		href: '/lists',
		text: 'Lists',
		icon: <HiListBullet className="w-6 h-6" />,
	},
	{
		href: '/twitter-circle',
		text: 'Twitter Circle',
		icon: <HiOutlineUserGroup className="w-6 h-6" />,
	},
];

const PopoverDemo = () => (
	<PopoverPrimitive.Root>
		<PopoverPrimitive.Trigger asChild>
			<button
				className="flex flex-row items-center px-4 py-3 my-1 rounded-full max-w-fit hover:bg-slate-100 focus:outline-none gap-x-4 text-slate-900"
				aria-label="Update dimensions"
			>
				<HiOutlineEllipsisHorizontalCircle className="w-6 h-6" />
				<div className="flex-none hidden text-lg font-medium xl:inline-flex">
					More
				</div>
			</button>
		</PopoverPrimitive.Trigger>
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				align="start"
				side="top"
				sideOffset={-60}
				alignOffset={0}
				className="overflow-hidden bg-white border shadow-xl PopoverContent w-80 rounded-xl border-slate-200"
			>
				<div className="flex flex-col">
					{items.map(({ href, text, icon }, i) => (
						<NavItem
							key={`header-${i}`}
							href={href}
							width="full"
							size="default"
						>
							{icon}
							<div className="inline-flex flex-none text-lg font-medium">
								{text}
							</div>
						</NavItem>
					))}
				</div>

				<SeparatorPrimitive.Root className="h-px border-0 bg-slate-200" />

				<Accordion />
			</PopoverPrimitive.Content>
		</PopoverPrimitive.Portal>
	</PopoverPrimitive.Root>
);

export default PopoverDemo;
