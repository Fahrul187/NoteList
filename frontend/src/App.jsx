import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function App() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    const components = [
        {
            title: "Pengeluaran Bulanan",
            content: "Rincian belanja sayur, listrik, dan Netflix bulan ini. Jangan lupa bayar tagihan internet tanggal 20.",
            createdAt: "2024-06-01",
            category: "Finance"
        },
        {
            title: "Ide Skripsi",
            content: "Bikin aplikasi pencatat keuangan tapi pake AI buat deteksi struk belanja otomatis.",
            createdAt: "2024-06-05",
            category: "Study"
        },
    ]
    const categories = [
        { id: 1, name: "Elektronik", to: "/" },
        { id: 2, name: "Pakaian Pria", to: "/" },
        { id: 3, name: "Pakaian Wanita", to: "/" },
        { id: 4, name: "Hobi & Mainan", to: "/" },
    ]

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
        <div className="pt-16 min-h-screen bg-gray-50 pb-20">
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-fuchsia-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
            </div>

            <section className="max-w-7xl w-[90%] mx-auto pt-10">

                <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            Catatan Kamu <span className="text-2xl">✨</span>
                        </h1>
                        <p className="text-gray-500">Simpan semua ide cemerlangmu di sini.</p>
                    </div>
                    <div className="flex">
                        <div className="relative w-full lg:w-96 group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400 group-focus-within:text-fuchsia-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-100 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-fuchsia-300 transition-all shadow-sm"
                                placeholder="Cari catatan..."
                            />
                        </div>
                        <div ref={menuRef} onClick={() => setIsOpen(!isOpen)} className="text-gray-500 select-none cursor-pointer relative">
                            <div className="p-3 h-full rounded-xl flex items-center justify-center bg-white border-gray-100 border-2 shadow-sm">
                                <h1>Kategori</h1>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className={`absolute top-full right-2 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200 ease-out origin-top-right
                                ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                                <ul className="py-1">
                                    {categories.map((cat) => (
                                        <li key={cat.id}>
                                            <Link
                                                to={cat.to}
                                                className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-fuchsia-400"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {cat.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to='/createnote' className="group flex flex-col items-center justify-center h-60 rounded-3xl border-2 border-dashed border-fuchsia-200 bg-fuchsia-50/50 hover:bg-fuchsia-50 hover:border-fuchsia-400 transition cursor-pointer">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-fuchsia-400 group-hover:scale-110 group-hover:text-fuchsia-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <span className="mt-3 font-semibold text-fuchsia-400 group-hover:text-fuchsia-600">Buat Baru</span>
                    </Link>

                    {components.map((note, index) => (
                        <Link
                            key={index}
                            to={`/${index}`}
                            className="relative flex flex-col h-60 bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-fuchsia-400 to-pink-400 opacity-100 transition-opacity"></div>

                            <div className="flex justify-between items-start mb-3">
                                <span className="text-xs font-bold px-2 py-1 rounded-lg bg-fuchsia-100 text-fuchsia-600 transition-colors uppercase tracking-wider">
                                    {note.category || 'Note'}
                                </span>
                                <span className="text-xs text-gray-400 font-medium">
                                    {note.createdAt}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold mb-2 line-clamp-1 text-fuchsia-600 transition-colors">
                                {note.title}
                            </h2>

                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-auto">
                                {note.content}
                            </p>

                            <div className="mt-4 flex items-center text-fuchsia-400 font-semibold text-sm opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                Baca selengkapnya
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>
        </div>
    )
}