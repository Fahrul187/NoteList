import { Link } from "react-router";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-fuchsia-50">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                <Link to="/login"><svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg></Link>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-fuchsia-400">Register</h1>
                    <p className="text-gray-500 mt-2">Create a new account</p>
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
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-300 outline-none transition duration-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-300 outline-none transition duration-200"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-fuchsia-400 hover:bg-fuchsia-500 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}