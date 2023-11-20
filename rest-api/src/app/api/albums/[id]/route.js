import { NextResponse } from "next/server";

const url = `${process.env.HOST}/albums`

export async function GET(request, { params }) {
    const id = params.id
    const res = await fetch(`${url}/${id}`)
    const album = await res.json();
    //send response
    return NextResponse.json(album)
}

export async function PUT(request, { params }) {
    const { title } = await request.json()
    const id = params.id
    const res = await fetch(`${url}/${id}`, {
        method: 'PUT', headers: {
            'Content-Type': 'application/json'
            , body: {
                //id, userId, title
                //title: title
                title
            }
        }
    })
    //send response
    const updatedAlbum = await res.json()
    return NextResponse.json(updatedAlbum)
}

export async function DELETE(request, { params }) {
    const id = params.id
    const res = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
    //send response
    const deletedAlbum = await res.json()
    return NextResponse.json(deletedAlbum)
}
