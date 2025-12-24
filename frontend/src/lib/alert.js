import Swal from "sweetalert2";
export const alertSuccess = async (message) => {
    return Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
        confirmButtonColor: 'oklch(74% 0.238 322.16)'
    })
}

export const alertError = async (message) => {
    return Swal.fire({
        icon: 'error',
        title: 'Ups',
        text: message,
        confirmButtonColor: 'oklch(74% 0.238 322.16)'
    })
}

export const alertConfirm = async (message) => {
    const result = await Swal.fire({
        icon: 'question',
        title: 'Kamu yakin?',
        text: message,
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: 'oklch(74% 0.238 322.16)',
        confirmButtonText: 'Yes',
        iconColor: 'oklch(74% 0.238 322.16)'
    })
    return result.isConfirmed;
}

export const alertInfo = async (message) => {
    return Swal.fire({
        icon: 'info',
        title: 'Sekedar info nih',
        text: message,
        // Pakai warna biru muda (cyan) biar beda dengan success/error
        confirmButtonColor: '#0ea5e9' 
    })
}