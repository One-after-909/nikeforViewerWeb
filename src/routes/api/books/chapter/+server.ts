import { BiblesModel } from "$db/models/Bibles.js";
import { json } from "@sveltejs/kit";

export async function GET(event) {
  const lang = event.url.searchParams.get("lang");
  const bookId = Number(event.url.searchParams.get("book-id"));
  const chapterId = Number(event.url.searchParams.get("chapter-id"));

  const res = await BiblesModel.aggregate([
    { $unwind: "$chapters" },
    { $match: { lang: lang, id: bookId, "chapters.chapter": chapterId } },
    { $project: {  _id: 0, chapter: "$chapters.chapter", verse_count: { $size: "$chapters.verses" } }},
  ]);
  return json(res[0]);
}
