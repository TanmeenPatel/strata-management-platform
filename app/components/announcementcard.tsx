type AnnouncementAttrs = {
    title: string;
    description: string;
    date?: string;
    time?: string;
    venue?: string;
}

export default function AnnouncementCard({title, description, date, time, venue} : AnnouncementAttrs) {
    return (
        <div className="block max-w p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-sm bg-gray-800 border-gray-700">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h4>
            <p className="font-normal text-gray-700 text-gray-400">{description}</p>
            <br></br>
            {date && <p className="text-gray-600">📅 Date: {date}</p>}
            {venue && <p className="text-gray-600">📍 Venue: {venue}</p>}
            {time && <p className="text-gray-600">🕗 Time: {time}</p>}
        </div>
    );
}