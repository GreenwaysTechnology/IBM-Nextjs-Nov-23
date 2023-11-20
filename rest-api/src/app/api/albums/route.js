
import { NextResponse } from "next/server";

const url = `${process.env.HOST}/albums`

//rest api
export async function GET(request) {
    //use fetch api to talk to rest end points
    //const url = 'https://jsonplaceholder.typicode.com/albums'
    const res = await fetch(url)
    const albums = await res.json();
    //send response
    return NextResponse.json(albums)
}
export async function POST(request) {
    const album = await request.json()
    //post data to json place holder api
    const res = await fetch(url, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)
    })
    //send response
    const newAlbum = await res.json();
    return NextResponse.json(newAlbum)
}