import * as TabsPrimitive from '@radix-ui/react-tabs';
import cx from 'classnames';
import TweetForm from '../TweetForm';
import Feed from '../Feed';

const Tabs = () => (
	<TabsPrimitive.Root className="TabsRoot" defaultValue="tab1">
		<TabsPrimitive.List
			className="flex w-full bg-white border-b TabsList border-b-slate-200"
			aria-label="Manage your account"
		>
			<TabsPrimitive.Trigger
				value="tab1"
				className={cx(
					'TabsTrigger group hover:bg-slate-100',
					'radix-state-active:bg-red-500 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-green-500 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800',
					'px-6 font-semibold text-slate-500',
					'focus:radix-state-active:border-b-red',
					'focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
				)}
			>
				<div className="relative h-full py-4 ">
					<div>For you</div>
					<span className="absolute bottom-0 left-0 w-full h-1 bg-transparent rounded-full"></span>
				</div>
			</TabsPrimitive.Trigger>
			<TabsPrimitive.Trigger
				value="tab2"
				className={cx(
					'TabsTrigger group hover:bg-slate-100',
					'radix-state-active:bg-red-500 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-green-500 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800',
					'px-6 font-semibold text-slate-500',
					'focus:radix-state-active:border-b-red',
					'focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
				)}
			>
				<div className="relative h-full py-4 ">
					<div>Following</div>
					<span className="absolute bottom-0 left-0 w-full h-1 bg-transparent rounded-full"></span>
				</div>
			</TabsPrimitive.Trigger>
			<TabsPrimitive.Trigger
				value="tab3"
				className={cx(
					'TabsTrigger group hover:bg-slate-100',
					'radix-state-active:bg-red-500 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-green-500 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800',
					'px-6 font-semibold text-slate-500',
					'focus:radix-state-active:border-b-red',
					'focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
				)}
			>
				<div className="relative h-full py-4 ">
					<div>Niche</div>
					<span className="absolute bottom-0 left-0 w-full h-1 bg-transparent rounded-full"></span>
				</div>
			</TabsPrimitive.Trigger>
		</TabsPrimitive.List>
		<TabsPrimitive.Content value="tab1" className="TabsContent ">
			<TweetForm width="default" />
			<Feed />
		</TabsPrimitive.Content>
		<TabsPrimitive.Content value="tab2" className="TabsContent ">
			<TweetForm width="default" />
		</TabsPrimitive.Content>
		<TabsPrimitive.Content value="tab3" className="TabsContent ">
			<TweetForm width="default" />
		</TabsPrimitive.Content>
	</TabsPrimitive.Root>
);

export default Tabs;
