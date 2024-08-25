/** @type {import('./$types').PageLoad} */
import { locale } from "$lib/translations";

export async function load({ fetch, params }) {
  console.log(params);
  let res = await fetch(
    `/api/books/list-verses?lang=${params.lang}&book-id=${params.bookId}&chapter-id=${params.chapterId}`,
  );
  const data = await res.json();
  res = await fetch(
    `/api/books/book?lang=${params.lang}&book-id=${params.bookId}`,
  );
  const bookDetails = await res.json();
  res = await fetch(
    `/api/books/chapter?lang=${params.lang}&book-id=${params.bookId}&chapter-id=${params.chapterId}`,
  );
  const chapterDetails = await res.json();
  return {
    content: {
      book: bookDetails,
      chapter: chapterDetails,
      bookId: params.bookId,
      chapterId: params.chapterId,
      verses: data,
    },
  };
}
