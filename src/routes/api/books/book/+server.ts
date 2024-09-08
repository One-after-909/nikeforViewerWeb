import { json } from "@sveltejs/kit";
import { BiblesModel } from "$db/models/Bibles.js";

export async function GET(event) {
  const bookId = Number(event.url.searchParams.get("book-id"));
  const lang = event.url.searchParams.get("lang");

  const res = await BiblesModel.aggregate([
    { $match: { lang: lang, id: { $eq: bookId } } },
    { $project: { id: 1, code: 1, lang: 1, name: 1, chapter_count: { $size:"$chapters" } } },
  ]).exec();
  return json(res[0]);
}
