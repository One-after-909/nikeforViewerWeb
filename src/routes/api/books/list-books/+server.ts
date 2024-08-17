import { json } from '@sveltejs/kit';
import { BiblesModel } from '$db/models/Bibles.js';

export async function GET(event) {
    let lang = await event.url.searchParams.get('lang')
    const res = await BiblesModel.find({lang: lang}).select('id name code')
    return json(res)
    
}