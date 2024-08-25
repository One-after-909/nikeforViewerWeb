/** @type {import('./$types').PageLoad} */
import { locale } from "$lib/translations";

export async function load({ fetch, params }) {
  console.log(params);
  let res = await fetch(
    `/api/books/list-chapters?lang=${params.lang}&book-id=${params.bookId}`,
  );
  const data = await res.json();
  res = await fetch(
    `/api/books/book?lang=${params.lang}&book-id=${params.bookId}`,
  );
  const details = await res.json();
  return { content: { book: details, bookId: params.bookId, chapters: data } };
}
