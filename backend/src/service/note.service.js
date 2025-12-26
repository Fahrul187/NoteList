import { validate } from "../validation/validation.js";
import { createNoteValidation, getNoteIdValidation, getNoteValidation, updateNoteValidation } from "../validation/note.validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response.error.js";

const create = async (user, request) => {
    const note = validate(createNoteValidation, request);
    note.username = user.username;

    // CEK KATEGORI (Wajib Ada & Valid Milik User)
    // Tidak perlu 'if (note.categoryId)' lagi karena validasi di atas sudah .required()
    const categoryCount = await prismaClient.category.count({
        where: {
            username: user.username,
            id: note.categoryId
        }
    });

    if (categoryCount !== 1) {
        throw new ResponseError(404, "Category not found");
    }

    return prismaClient.notes.create({
        data: note,
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            categoryId: true
        }
    });
}

const get = async (user, request) => {
    const data = validate(getNoteValidation, request);
    const skip = (data.page - 1) * data.size;

    const filters = [];
    filters.push({
        username: user.username
    });

    if (data.search) {
        filters.push({
            OR: [
                { title: { contains: data.search } },
                { content: { contains: data.search } }
            ]
        });
    }

    const notes = await prismaClient.notes.findMany({
        where: {
            AND: filters
        },
        take: data.size,
        skip: skip,
        include: {
            category: true
        }
    });

    const totalItems = await prismaClient.notes.count({
        where: {
            AND: filters
        }
    });

    return {
        data: notes,
        paging: {
            page: data.page,
            total_item: totalItems,
            total_page: Math.ceil(totalItems / data.size)
        }
    }
}

const getById = async (user, noteId) => {
    noteId = validate(getNoteIdValidation, noteId);

    const note = await prismaClient.notes.findFirst({
        where: {
            username: user.username,
            id: noteId
        },
        include: {
            category: true
        }
    });

    if (!note) {
        throw new ResponseError(404, "Note not found");
    }

    return note;
}

const update = async (user, request) => {
    const note = validate(updateNoteValidation, request);

    const totalInDatabase = await prismaClient.notes.count({
        where: {
            username: user.username,
            id: note.id
        }
    });

    if (totalInDatabase !== 1) {
        throw new ResponseError(404, "Note not found");
    }

    // Jika user mengirim categoryId baru, validasi dulu
    if (note.categoryId) {
        const categoryCount = await prismaClient.category.count({
            where: {
                username: user.username,
                id: note.categoryId
            }
        });
        if (categoryCount !== 1) {
            throw new ResponseError(404, "Category not found");
        }
    }

    return prismaClient.notes.update({
        where: {
            id: note.id
        },
        data: {
            title: note.title,
            content: note.content,
            categoryId: note.categoryId
        },
        select: {
            id: true,
            title: true,
            content: true,
            categoryId: true,
            updatedAt: true
        }
    });
}

const remove = async (user, noteId) => {
    noteId = validate(getNoteIdValidation, noteId);

    const totalInDatabase = await prismaClient.notes.count({
        where: {
            username: user.username,
            id: noteId
        }
    });

    if (totalInDatabase !== 1) {
        throw new ResponseError(404, "Note not found");
    }

    return prismaClient.notes.delete({
        where: {
            id: noteId
        }
    });
}

export default {
    create,
    get,
    getById,
    update,
    remove
}