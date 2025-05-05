"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("api/signup", {
                method: "POST",
                body: JSON.stringify({name}),
                headers: { "Content-Type": "application/json" },
            })

            if (res.ok) {
                router.push("/");
            }
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div className="p-6 max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">Enter your name to continue</h1>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Sign up</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="block w-full mb-3 p-2 border rounded"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 mb-5 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>  
    )
}