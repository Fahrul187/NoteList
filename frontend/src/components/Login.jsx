import { Link } from "react-router";

export default function Login() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-fuchsia-50">
                <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-fuchsia-400">Welcome Back</h1>
                        <p className="text-gray-500 mt-2">Please enter your details to sign in</p>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-300 outline-none transition duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-300 outline-none transition duration-200"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full bg-fuchsia-400 hover:bg-fuchsia-500 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="mt-8 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-semibold text-fuchsia-400 hover:text-fuchsia-500 hover:underline transition duration-200">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}