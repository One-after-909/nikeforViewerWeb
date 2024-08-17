import { getDB } from '../db'
import { Schema } from 'mongoose'

const db = getDB()
export const BiblesModel = db.model(
    'Bibles',
    new Schema({
        id: Number,
        name: String,
        code: String,
        lang: String,
        chapters: [{
            chapter: Number,
            verses: [{
                bookId: Number,
                chapter: Number,
                verse: Number,
                words: String,
                isHeader: Number
            }]
        }]
    })
)