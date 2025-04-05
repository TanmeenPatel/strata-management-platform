import AnnouncementCard from "../components/announcementcard";

export default function Home() {
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
					View this page to see all announcements for ABC Park Complex and the strata committee.
				</h2>
				<AnnouncementCard
					title = "Upcoming Annual General Meeting (AGM) 📢"
					description = "We invite all owners and tenants to attend the upcoming AGM. Key topics include budget approvals, building maintenance updates, and community initiatives. Your participation is important!"
					venue = "Events Hall - Common Room"
					date = "14th January, 2025"
				/>
				<AnnouncementCard
					title = "Scheduled Lift Maintenance 🚧"
					description = "The lift in Tower A will be out of service for scheduled maintenance. Please use the stairs or the lift in Tower B. We apologize for any inconvenience."
				/>
				<AnnouncementCard
					title = "Parking Reminder 🚘"
					description = "Unauthorized vehicles have been reported in resident parking spots. Please ensure your visitors park in designated guest spaces. Violators may be towed at their expense."
				/>
			</section>
		</div>
	);
}
