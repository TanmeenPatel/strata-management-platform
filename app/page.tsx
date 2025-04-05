import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-full">
				<img src="/home.jpg" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"/>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl py-20">
						<h1 className="text-center mx-auto text-5xl font-semibold tracking-tight text-white sm:text-7xl">ABC Park Complex</h1>
					</div>
				</div>
			</div>
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
    </div>
  );
}
