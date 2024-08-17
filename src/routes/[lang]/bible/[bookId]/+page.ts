/** @type {import('./$types').PageLoad} */
import { locale } from '$lib/translations';

export async function load({ fetch, params }) {
    console.log(params)
    const res = await fetch(`/api/books/list-chapters?lang=${params.lang}&book-id=${params.bookId}`);
    const data = await res.json()
    return { content: {bookId: params.bookId, chapters: data} }
}