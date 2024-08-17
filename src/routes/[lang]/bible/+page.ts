/** @type {import('./$types').PageLoad} */
import { locale } from '$lib/translations';

export async function load({ fetch, params }) {
    console.log(params.lang)
    const res = await fetch(`/api/books/list-books?lang=${params.lang}`);
    const data = await res.json()
    return { content: {
        books: data
    }}
}