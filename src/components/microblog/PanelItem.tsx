import Avatar from './radix/Avatar';
import Button from './Button';

interface Props {
	name: string;
	username: string;
	src: string;
	initials: string;
}

const PanelItem = ({ name, username, src, initials }: Props) => (
	<div className="flex items-center flex-1 px-4 py-3 gap-x-2 hover:bg-slate-200">
		<div className="flex items-center flex-1 gap-x-2">
			<div className="flex justify-center flex-1 xl:flex-none xl:justify-start">
				<Avatar src={src} alt={name} initials={initials} />
			</div>
			<div className="flex-col hidden xl:flex ">
				<p className="text-base font-semibold">{name}</p>
				<p className="text-sm font-medium text-slate-600">@{username}</p>
			</div>
		</div>
		<div className="">
			<Button size="small">Follow</Button>
		</div>
	</div>
);

export default PanelItem;
