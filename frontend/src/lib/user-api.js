// src/service/user-api.js (atau sesuaikan dengan lokasi file kamu)

const BASE_URL = import.meta.env.VITE_API_URL // Sesuaikan port backend

export const registerUser = async (data) => {
    const response = await fetch(`${BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.errors || "Registrasi gagal");
    }

    return result;
};

export const loginUser = async (data) => {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.errors || "Login gagal");
    }

    return result;
};

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}