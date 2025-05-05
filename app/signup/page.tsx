"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("api/signup", {
                method: "POST",
                body: JSON.stringify({name, email}),
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
        <div className="flex items-center justify-center">
            <div className="w-[50%] h-[93vh] overflow-y-hidden">
                <img src="/signup.jpg" alt="" className="h-dvh"/>
            </div>
            <div className="p-6 w-full h-full mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Signup</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-10 bg-white rounded shadow">
                    <h2 className="text-xl font-semibold mb-6">Enter your name to continue:</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="block w-full mb-4 p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full mb-4 p-2 border rounded"
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