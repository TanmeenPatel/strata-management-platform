"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Issues() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		unit: '',
		phone: '',
		description: '',
		urgency: 'medium',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
			setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		try {
			const response = await fetch('/api/report-issue', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			
			const data = await response.json();
			
			if (!response.ok) {
				throw new Error(data.message || 'Failed to submit issue report');
			}
			
			setSubmitStatus({
				success: true,
				message: 'Your issue has been reported successfully!'
			});

			// Reset form
			setFormData({
				name: '',
				email: '',
				unit: '',
				phone: '',
				description: '',
				urgency: 'medium',
			});
		} catch (error) {
			console.error('Error submitting form:', error);
			setSubmitStatus({
			success: false,
			message: error.message
		});
		} finally {
			setIsSubmitting(false);
		}
	};

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
				{submitStatus.message && (
					<div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
					{submitStatus.message}
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<div className="mb-4 max-w-2xl">
						<label htmlFor="name" className="block mb-1">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full p-2 border rounded"
							required
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="email" className="block mb-1">Email</label>
						<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="phone" className="block mb-1">Phone Number</label>
						<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="w-full p-2 border rounded"
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="unit" className="block mb-1">Unit Number</label>
						<input
						type="text"
						id="unit"
						name="unit"
						value={formData.unit}
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
						/>
					</div>
					
					<div className="mb-4 max-w-2xl">
						<label htmlFor="description" className="block mb-1">Issue Description</label>
						<textarea
						id="description"
						name="description"
						value={formData.description}
						onChange={handleChange}
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
						value={formData.urgency}
						onChange={handleChange}
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
						disabled={isSubmitting}
						className="px-4 py-2 mb-5 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
					>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
				</form>	
			</section>
		</div>
	);
}
