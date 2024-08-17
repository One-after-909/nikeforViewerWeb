import { json } from '@sveltejs/kit';
import { BiblesModel } from '$db/models/Bibles.js';

export async function GET(event) {
    const bookId = Number(event.url.searchParams.get('book-id'))
    const lang = event.url.searchParams.get('lang')
    console.log(bookId);
    
    const res = await BiblesModel.aggregate([
        {$match: {'lang': lang, 'id':{$eq: bookId}}},
        {$project: {chapters: {chapter:1}}}
    ]).exec()
    return json(res[0].chapters)
    
}