'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {

    const router = useRouter()

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!mobile || !password) {
            setError('Both fields are required');
            return;
        }

        router.push('/dashboard')
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full h-full max-w-md p-6 rounded-lg shadow-md h-100">
                <h2 className="text-2xl font-bold text-center text-green-400">Login</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div>
                        <label className="block text-sm font-medium text-green-300">Mobile Number</label>
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-green-500 bg-gray-700 rounded-lg focus:outline-none focus:ring text-white"
                            placeholder="Enter mobile number"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-green-300">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-green-500 bg-gray-700 rounded-lg focus:outline-none focus:ring text-white"
                            placeholder="Enter password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-10 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                        >
                        Login
                    </button>
                        {error && <p className="mt-6 text-sm text-red-500 text-center">{error}</p>}
                </form>
            </div>
        </div>
    );
}
