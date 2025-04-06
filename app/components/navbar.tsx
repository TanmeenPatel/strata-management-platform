"use client";

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import { Bars3Icon, InboxStackIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navigation = [
	{ name: "Home", href: "/"},
	{ name: "Announcements", href: "/announcements"},
	{ name: "Report Issues", href: "/issues"},
	{ name: "Contact Us", href: "/contact"},
	{ name: "FAQs", href: "/faqs"}
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const pathname = usePathname();
	return (
		<Disclosure as="nav" className="bg-zinc-800">
			<div className="max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Mobile menu button*/}
						<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open main menu</span>
							<Bars3Icon
								aria-hidden="true"
								className="block size-6 group-data-open:hidden"
							/>
							<XMarkIcon
								aria-hidden="true"
								className="hidden size-6 group-data-open:block"
							/>
						</DisclosureButton>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex shrink-0 items-center">
							<InboxStackIcon
								className="h-8 w-auto text-white"
							/>
							<span className="ml-2 text-xl font-bold text-white">
								ABC Park Complex
							</span>
						</div>

						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={`rounded-md px-3 py-2 text-sm font-medium
											${pathname === item.href
												? "bg-zinc-900 text-white"
												: "text-zinc-300 hover:bg-zinc-700 hover:text-white"}
										`}
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<DisclosurePanel className="sm:hidden">
				<div className="space-y-1 px-2 pt-2 pb-3">
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							as="a"
							href={item.href}
							className={`rounded-md px-3 py-2 text-sm font-medium
								${pathname === item.href
									? "bg-zinc-900 text-white"
									: "text-zinc-300 hover:bg-zinc-700 hover:text-white"}
							`}
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
			
		</Disclosure>
	);
}