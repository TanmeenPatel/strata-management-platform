export default function Contact() {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-full">
				<img src="/contact.jpg" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"/>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl py-20">
						<h1 className="text-center mx-auto text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Us</h1>
					</div>
				</div>
			</div>
            <section className="px-4 sm:px-6 py-12"> 
                <div className="py-8 px-4 max-w-screen-xl sm:py-8 lg:px-6">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-gray-400">Meet Our Team</h2>
					<p className="mb-4">Dedicated professionals ensuring the best for our community.</p>
				</div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img
                        src="/team_member_1.jpg"
                        alt="Team Member 1"
                        className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-sm text-gray-500">Community Manager</p>
                        <p className="mt-2 text-sm text-gray-600">
                        John ensures smooth operations and fosters a strong sense of community.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img
                        src="/team_member_2.jpg"
                        alt="Team Member 2"
                        className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="font-semibold">Jane Smith</h3>
                        <p className="text-sm text-gray-500">Facilities Manager</p>
                        <p className="mt-2 text-sm text-gray-600">
                        Jane oversees the maintenance and quality of our amenities.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img
                        src="/team_member_3.jpg"
                        alt="Team Member 3"
                        className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="font-semibold">Mark Spencer</h3>
                        <p className="text-sm text-gray-500">Resident Liaison</p>
                        <p className="mt-2 text-sm text-gray-600">
                        Mark addresses resident concerns and ensures satisfaction.
                        </p>
                    </div>
                </div>
                <div className="pt-16 px-4 max-w-screen-xl lg:px-6">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-gray-400">Contact the Team</h2>
                    Click <a href="api/info.php" className="text-blue-600 dark:text-blue-500 hover:underline">this link</a> to get the strata committee contact details.
				</div>
            </section>
        </div>
    );
}