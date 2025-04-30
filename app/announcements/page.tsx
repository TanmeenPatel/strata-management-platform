import { getAnnouncements } from "../../lib/queries/getAnnouncements";
import AnnouncementCard from "../components/announcementcard";

type Announcement = {
	title: string;
	description: string;
	date?: string;
	venue?: string;
};

export default async function AnnouncementsPage() {
	const announcements = await getAnnouncements();
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
				
				{announcements.map((a: any) => (
					<AnnouncementCard
						key={a._id.toString()}
						title={a.title}
						description={a.description}
						date={a.date}
						time={a.time}
						venue={a.venue}
					/>
				))}
			</section>
		</div>
	);
}

// function Home() {
// 	const [announcements, setAnnouncements] = useState<Announcement[]>([]);

// 	useEffect(() => {
// 		const fetchAnnouncements = async () => {
// 			try {
// 				const res = await fetch("/api/get-announcements");
// 				const data = await res.json();
// 				setAnnouncements(data);
// 			} catch (err) {
// 				console.error("Failed to fetch announcements:", err);
// 			}
// 		};

// 		fetchAnnouncements();
// 	}, []);

// 	return (
// 		<div>
// 			<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-full">
// 				<img src="/announcements.jpg" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"/>
// 				<div className="mx-auto max-w-7xl px-6 lg:px-8">
// 					<div className="mx-auto max-w-2xl py-20">
// 						<h1 className="text-center mx-auto text-5xl font-semibold tracking-tight text-white sm:text-7xl">Announcements</h1>
// 					</div>
// 				</div>
// 			</div>
// 			<section className="py-8 px-8">
// 				<h2 className="ml-6 mr-6 max-w-3xl lg:mx text-lg text-left">
// 					View this page to see all announcements for ABC Park Complex from the strata committee.
// 				</h2>
				
// 				{announcements.map((a, index) => (
// 					<AnnouncementCard
// 						key={index}
// 						title={a.title}
// 						description={a.description}
// 						date={a.date}
// 						venue={a.venue}
// 					/>
// 				))}
// 			</section>
// 		</div>
// 	);
// }
