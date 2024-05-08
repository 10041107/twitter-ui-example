import { ReactNode } from 'react';
import DropdownMenuDemo from './radix/DropdownMenu';
import HoverCardDemo from './radix/HoverCard';

import {
	HiOutlineHeart,
	HiArrowUpTray,
	HiOutlineChatBubbleOvalLeft,
	HiOutlineArrowPath,
	HiOutlineChartBarSquare,
} from 'react-icons/hi2';

interface Props {
	content: string;
	name: string;
	username: string;
	date: string;
	src: string;
	initials: string;
	followers: string;
	following: string;
	description: string;
	children?: ReactNode;
}

const Post = ({
	content,
	name,
	username,
	date,
	children,
	src,
	initials,
	followers,
	following,
	description,
	...props
}: Props) => (
	<div className="flex flex-1 gap-x-4">
		<div className="flex-shrink-0">
			<HoverCardDemo
				src={src}
				alt={name}
				initials={initials}
				name={name}
				username={username}
				following={following}
				followers={followers}
				description={description}
			/>
		</div>
		<div className="flex flex-col flex-1">
			<div className="flex flex-1">
				<div className="flex flex-1 text-sm gap-x-1">
					<span className="font-bold text-slate-900">{name}</span>
					<span className="font-medium text-slate-600">@{username}</span>·
					<span className="font-medium text-slate-600">{date}</span>
				</div>
				<div className="">
					<DropdownMenuDemo />
				</div>
			</div>
			<div className="mb-4 text-sm text-slate-900">{content}</div>
			{children}
			<div>
				<ul className="flex gap-x-10 xl:gap-x-14 text-xs text-slate-700 [&_li:first-child]:hidden [&_li:first-child]:lg:flex [&_li]:flex [&_li]:items-center [&_li]:gap-x-2 [&_li:xl]:gap-x-3 ">
					<li className="">
						<HiOutlineChartBarSquare className="w-5 h-5" />
						20
					</li>
					<li>
						<HiOutlineChatBubbleOvalLeft className="w-5 h-5" />2
					</li>
					<li>
						<HiOutlineArrowPath className="w-5 h-5" />1
					</li>
					<li>
						<HiOutlineHeart className="w-5 h-5" />
						23
					</li>
					<li>
						<HiArrowUpTray className="w-5 h-5" />
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Post;
