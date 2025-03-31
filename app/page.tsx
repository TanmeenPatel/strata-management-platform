import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen px-8 lg:px-16">
        <div>
          <h1 className="text-left sm:text-3xl lg:text-4xl font-bold">Welcome to ABC Park Complex!</h1>
          <p className="mt-4 sm:text-md lg:text-lg">
          This is the official strata website for ABC Park Complex, a modern residential community designed for comfort, convenience, and a vibrant lifestyle. Nestled in the heart of the city, our complex offers state-of-the-art amenities, beautifully landscaped gardens, and a strong sense of community.
          </p>
        </div>
        <div className="max-w-lg ml-8 shrink-0">
          <img src="/landing_page.jpg" alt="Image of residential complex" className="w-full max-w-md h-auto"  />
        </div>
      </div>
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Amenities</h2>
          <p className="mt-2 text-gray-600">Enjoy top-tier facilities designed for comfort and convenience.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Swimming Pool</h3>
            <p className="text-sm text-gray-500">Relax and unwind at our temperature-controlled pool.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Gym & Fitness Center</h3>
            <p className="text-sm text-gray-500">Stay active with state-of-the-art equipment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Community Hall</h3>
            <p className="text-sm text-gray-500">Perfect for events and gatherings.</p>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 py-12"> 
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="mt-2 text-gray-600">Dedicated professionals ensuring the best for our community.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
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
      </section>
    </div>
  );
}
