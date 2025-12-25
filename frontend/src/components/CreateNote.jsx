import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function CreateNote() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    const categoryInputRef = useRef(null) 
    
    const [selectedCategory, setSelectedCategory] = useState("Kategori")
    const [isCreating, setIsCreating] = useState(false)

    const categories = [
        { id: 1, name: "Elektronik" },
        { id: 2, name: "Pakaian Pria" },
        { id: 3, name: "Pakaian Wanita" },
        { id: 4, name: "Hobi & Mainan" },
        { id: 5, name: "Nge Brrads" },
    ]

    const handleSelectCategory = (categoryName) => {
        setSelectedCategory(categoryName)
        setIsCreating(false)
        setIsOpen(false)
    }

    const handleCreateNew = () => {
        setSelectedCategory("")
        setIsCreating(true)
        setIsOpen(false)
    }

    useEffect(() => {
        if (isCreating && categoryInputRef.current) {
            categoryInputRef.current.focus();
        }
    }, [isCreating]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [])

    return (
        <div className="max-w-7xl h-dvh w-11/12 mx-auto flex flex-col pt-16">

            <div className="flex items-center gap-4 my-8">
                <Link to="/" className=" text-gray-400 hover:text-fuchsia-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Buat Catatan</h1>
                    <p className="text-gray-500 text-sm">Simpan ide dan rencanamu di sini.</p>
                </div>
            </div>

            <form className="flex flex-col flex-1 space-y-6">

                <div className="grid grid-cols-2 gap-6">

                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Judul
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Judul"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-400 focus:border-fuchsia-400 outline-none transition"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Kategori
                        </label>
                        <div ref={menuRef} className="w-full relative">

                            <div className="border bg-white focus-within:ring-2 focus-within:ring-fuchsia-400 focus-within:border-fuchsia-400 transition border-gray-300 rounded-lg overflow-hidden flex">

                                {isCreating ? (
                                    <input
                                        ref={categoryInputRef}
                                        type="text"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        placeholder="Masukkan kategori"
                                        className="w-full px-4 py-2 outline-none text-gray-700"
                                    />
                                ) : (
                                    <h1
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={`w-full px-4 py-2 cursor-pointer select-none ${selectedCategory === "Kategori" ? "text-gray-500" : "text-gray-800"}`}
                                    >
                                        {selectedCategory}
                                    </h1>
                                )}

                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-10 items-center flex justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer">
                                    <svg
                                        className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            <div className={`absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200 ease-out origin-top
                                ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                                <ul className="py-1">
                                    {categories.map((cat) => (
                                        <li key={cat.id}>
                                            <div
                                                onClick={() => handleSelectCategory(cat.name)}
                                                className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-fuchsia-400 cursor-pointer">
                                                {cat.name}
                                            </div>
                                        </li>
                                    ))}

                                    <li
                                        onClick={handleCreateNew}
                                        className="px-4 py-2 text-sm flex gap-2 items-center hover:bg-gray-100 text-fuchsia-500 cursor-pointer font-medium border-t border-gray-50 mt-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path></svg>
                                        <span>Buat kategori</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5 flex-1 flex flex-col gap-4">
                    <div className="flex-1 flex flex-col space-y-2">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Catatan
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            placeholder="Tulis detail catatanmu di sini..."
                            className="flex-1 h-full w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-400 focus:border-fuchsia-400 outline-none transition resize-none"
                        ></textarea>
                    </div>

                    <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-100">
                        <button
                            type="submit"
                            className="cursor-pointer px-6 py-2 lg:hover:bg-fuchsia-500 bg-fuchsia-400 text-white text-sm font-medium rounded-lg hover:bg-fuchsia-500 focus:ring-4 focus:ring-blue-200 transition shadow-md">
                            Simpan Catatan
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}