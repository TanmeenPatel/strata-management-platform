"use client";

export default function Home() {
	return (
		<div>
			<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-full">
				<img src="/issues.jpg" alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"/>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl py-20">
						<h1 className="text-center mx-auto text-5xl font-semibold tracking-tight text-white sm:text-7xl">Report an Issue</h1>
					</div>
				</div>
			</div>
			<section className="px-4 lg:px-6 bg-white bg-gray-900">
				<div className="py-8 max-w-screen-xl sm:py-8">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-gray-400">Issue Form</h2>
					<p className="mb-4">Submit this form to register your issue with any amenities or services.</p>
				</div>
				<form
					onSubmit={async (e) => {
						e.preventDefault(); 
						const form = e.currentTarget as HTMLFormElement;
						
						const res = await fetch("/api/report-issue", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								name: (form.elements.namedItem("tenantName") as HTMLInputElement).value,
								email: (form.elements.namedItem("tenantEmail") as HTMLInputElement).value,
								address: (form.elements.namedItem("address") as HTMLInputElement).value,
								phone: (form.elements.namedItem("tenantPhone") as HTMLInputElement).value,
								description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
								urgency: (form.elements.namedItem("urgency") as HTMLSelectElement).value,
							}),
						});

						if (res.ok) {
							alert("Message sent!");
						} else {
							alert("Error sending message.");
						}
					}}
				>
					<div className="mb-4 max-w-2xl">
						<label htmlFor="tenantName" className="block mb-1">Name</label>
						<input
						type="text"
						id="tenantName"
						name="tenantName"
						className="w-full p-2 border rounded"
						required
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="tenantEmail" className="block mb-1">Email</label>
						<input
						type="email"
						id="tenantEmail"
						name="tenantEmail"
						className="w-full p-2 border rounded"
						required
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="tenantPhone" className="block mb-1">Phone Number</label>
						<input
						type="tel"
						id="tenantPhone"
						name="tenantPhone"
						className="w-full p-2 border rounded"
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="address" className="block mb-1">Unit Number</label>
						<input
						type="text"
						id="address"
						name="address"
						className="w-full p-2 border rounded"
						required
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="description" className="block mb-1">Issue Description</label>
						<textarea
						id="description"
						name="description"
						rows={4}
						className="w-full p-2 border rounded"
						required
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="urgency" className="block mb-1">Urgency Level</label>
						<select
						id="urgency"
						name="urgency"
						className="w-full p-2 border rounded"
						required
						>
						<option value="low">Low - Not Urgent</option>
						<option value="medium">Medium - Needs Attention</option>
						<option value="high">High - Urgent</option>
						<option value="emergency">Emergency - Immediate Action Required</option>
						</select>
					</div>
					
					<button 
						type="submit" 
						className="px-4 py-2 mb-5 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
					>Submit</button>
				</form>	
			</section>
		</div>
	);
}
