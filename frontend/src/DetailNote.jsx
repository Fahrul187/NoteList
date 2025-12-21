import { Link, useParams } from "react-router";

export default function DetailNote() {
    // Nanti di sini kamu bisa ambil data berdasarkan ID
    const { id } = useParams();

    // Data dummy untuk contoh tampilan (karena belum ada database)
    const note = {
        title: "Pengeluaran Bulanan",
        content: "Dengan ini kami membuktikan kepada anda bahwa kami benar benar serius dalam mengelola keuangan bulanan. Rinciannya meliputi belanja sayur, bayar listrik, dan langganan Netflix.",
        createdAt: "2024-06-01",
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-white py-10">
            <div className="max-w-3xl w-[90%] mx-auto">
                
                {/* 1. Tombol Kembali (Navigasi) */}
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-fuchsia-500 transition mb-6 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Kembali ke List
                </Link>

                {/* 2. Kartu Utama (Detail Note) */}
                <div className="bg-fuchsia-50/50 border-2 border-fuchsia-100 rounded-2xl p-8 shadow-sm relative overflow-hidden">
                    
                    {/* Hiasan Bulat (Agar kesan 'lucu' dapet) */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-200 rounded-full blur-2xl opacity-50"></div>
                    <div className="absolute top-20 -left-10 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-50"></div>

                    <div className="relative z-10">
                        {/* Header: Tanggal & Judul */}
                        <div className="border-b-2 border-dashed border-fuchsia-200 pb-6 mb-6">
                            <span className="bg-white text-fuchsia-500 px-3 py-1 rounded-full text-sm font-semibold border border-fuchsia-100 shadow-sm">
                                {note.createdAt}
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4 ">
                                {note.title}
                            </h1>
                        </div>

                        {/* Body: Isi Catatan */}
                        <div className="prose prose-lg prose-fuchsia max-w-none text-gray-600 leading-loose">
                            <p>{note.content}</p>
                        </div>
                    </div>
                </div>

                {/* 3. Action Buttons (Edit & Delete) */}
                <div className="mt-8 flex justify-end gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 text-gray-600 rounded-xl hover:border-fuchsia-200 hover:text-fuchsia-500 hover:bg-fuchsia-50 transition font-semibold cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        Edit Note
                    </button>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-rose-100 text-rose-600 rounded-xl hover:bg-rose-200 transition font-semibold cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        Delete
                    </button>
                </div>

            </div>
        </div>
    )
}