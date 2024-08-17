import { MONGO_URL } from '$env/static/private'
import { Mongoose } from "mongoose"

const mongoose = new Mongoose()

export function connect(): void {
    mongoose.connect(MONGO_URL)
}

export function getDB(): any {
    return mongoose
}