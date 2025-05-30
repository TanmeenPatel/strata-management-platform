"use client"
import AnnouncementCard from "../components/announcementcard";
import { useState, useEffect } from "react";

type Announcement = {
	title: string;
	description: string;
	date?: string;
	venue?: string;
	category: string;
};

export default function AnnouncementsPage() {
	const [announcements, setAnnouncements] = useState<Announcement[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>("all");

	useEffect(() => {
		// Fetch announcements when the component mounts
		const fetchAnnouncements = async () => {
			const res = await fetch(`/api/announcements?category=${selectedCategory}`);
			const data = await res.json();
			setAnnouncements(data);
		};

		fetchAnnouncements();
	}, [selectedCategory]); // Re-fetch when category changes

	return (
		<div>
			<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-full">
				<img src="/announcements.jpg" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"/>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl py-20">
						<h1 className="text-center mx-auto text-5xl font-semibold tracking-tight text-white sm:text-7xl">Announcements</h1>
					</div>
				</div>
			</div>
			<section className="py-8 px-8">
				<h2 className="ml-6 mr-6 max-w-3xl lg:mx text-lg text-left">
					View this page to see all announcements for ABC Park Complex from the strata committee.
				</h2>
				
				<div className="flex gap-4 mb-6 ml-6 py-3">
					<button
						onClick={() => setSelectedCategory("all")}
						className={`px-4 py-2 rounded-lg ${
							selectedCategory === "all"
								? "bg-gray-600 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
					>
						All
					</button>
					<button
						onClick={() => setSelectedCategory("maintenance")}
						className={`px-4 py-2 rounded-lg ${
							selectedCategory === "maintenance"
								? "bg-yellow-500 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
					>
						Maintenance
					</button>
					<button
						onClick={() => setSelectedCategory("events")}
						className={`px-4 py-2 rounded-lg ${
							selectedCategory === "events"
								? "bg-blue-600 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
					>
						Events
					</button>
					<button
						onClick={() => setSelectedCategory("general")}
						className={`px-4 py-2 rounded-lg ${
							selectedCategory === "general"
								? "bg-green-600 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
					>
						General
					</button>
				</div>
				
				{announcements.map((a: any) => (
					<AnnouncementCard
						key={a._id.toString()}
						title={a.title}
						description={a.description}
						date={a.date}
						time={a.time}
						venue={a.venue}
						category={a.category}
					/>
				))}
			</section>
		</div>
	);
}