/** @type {import('./$types').PageLoad} */
import { locale } from '$lib/translations';

export async function load({ fetch, params }) {
    console.log(params)
    const res = await fetch(`/api/books/list-verses?lang=${params.lang}&book-id=${params.bookId}&chapter-id=${params.chapterId}`);
    const data = await res.json()
    return { content: {bookId: params.bookId, chapterId: params.chapterId, verses: data} }
}