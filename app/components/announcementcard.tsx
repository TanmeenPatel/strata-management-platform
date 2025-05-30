type AnnouncementAttrs = {
    title: string;
    description: string;
    date?: string;
    time?: string;
    venue?: string;
    category: string;
}

export default function AnnouncementCard({title, description, date, time, venue, category} : AnnouncementAttrs) {
    const getCategoryStyle = (category: string) => {
        switch (category) {
            case 'maintenance':
                return 'bg-yellow-100 text-yellow-800';
            case 'events':
                return 'bg-blue-100 text-blue-800';
            case 'general':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-sm bg-gray-800 border-gray-700">
            <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(category)}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
            </div>
            <p className="font-normal text-gray-700 text-gray-400">{description}</p>
            <br></br>
            {date && <p className="text-gray-600">📅 Date: {date}</p>}
            {venue && <p className="text-gray-600">📍 Venue: {venue}</p>}
            {time && <p className="text-gray-600">🕗 Time: {time}</p>}
        </div>
    );
}