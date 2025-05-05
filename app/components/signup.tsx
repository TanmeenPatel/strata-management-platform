'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const [name, setName] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("api/signup", {
            method: "POST",
            body: JSON.stringify({name}),
            headers: { "Content-Type": "application/json" },
        })

        if (res.ok) {
            router.refresh();
        }
    };

    return (
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
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    )
}