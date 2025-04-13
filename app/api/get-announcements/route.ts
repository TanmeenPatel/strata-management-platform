export async function GET() {
	const announcements = [
		{
			id: 1,
			title: "Upcoming AGM 📅",
			date: "14th January, 2025",
			description: "We invite all owners and tenants to attend the upcoming AGM. Key topics include budget approvals, building maintenance updates, and community initiatives. Your participation is important!",
            venue: "Events Hall - Common Room",
		},
		{
			id: 2,
			title: "Scheduled Lift Maintenance 🚧",
			date: "25th January, 2025",
			description: "The lift in Tower A will be out of service for scheduled maintenance. Please use the stairs or the lift in Tower B. We apologize for any inconvenience."
		},
        {
            id: 3,
            title: "Parking Reminder 🚘",
            description: "Unauthorized vehicles in resident parking spots will be reported. Please ensure your visitors park in designated guest spaces. Violators may be towed at their expense."
        }
	];

	return new Response(JSON.stringify(announcements), {
		headers: { "Content-Type": "application/json" },
	});
}