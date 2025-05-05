import Image from "next/image";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import SignupForm from "./components/signup";

export default async function Home() {
  const cookiesStore = await cookies();
  const username = cookiesStore.get("username")?.value;
  if (!username) {
    redirect("/signup"); 
  }
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
      <div className="flex items-center justify-center py-24 px-4 lg:px-6">
        <div>
          <h1 className="text-center sm:text-3xl lg:text-4xl font-bold">Welcome to ABC Park Complex{", "+username}!</h1>
          <p className="mt-4 text-center max-w-4xl sm:text-md lg:text-lg">
          This is the official strata website for ABC Park Complex, a modern residential community designed for comfort, convenience, and a vibrant lifestyle. Nestled in the heart of the city, our complex offers state-of-the-art amenities, beautifully landscaped gardens, and a strong sense of community.
          </p>
        </div>
      </div>
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Amenities</h2>
          <p className="mt-2 mb-4 text-gray-600">Enjoy top-tier facilities designed for comfort and convenience</p>
        </div>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Swimming Pool</h3>
            <p className="text-sm text-gray-500">Relax and unwind at our temperature-controlled pool</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Gym & Fitness Center</h3>
            <p className="text-sm text-gray-500">Stay active with state-of-the-art equipment</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Community Hall</h3>
            <p className="text-sm text-gray-500">Perfect for events and gatherings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Rooftop Garden</h3>
            <p className="text-sm text-gray-500">A tranquil green space to relax, socialize, or enjoy the view</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Underground Parking</h3>
            <p className="text-sm text-gray-500">Ample parking space available for residents and guests</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">24/7 Security</h3>
            <p className="text-sm text-gray-500">Surveillance cameras and on-site personnel</p>
          </div>
        </div>
      </section>
    </div>
  );
}
