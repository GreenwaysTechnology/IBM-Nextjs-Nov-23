"use client"
import { useState } from "react"
import Dislike from "./dislike"

export default function Review() {
    const [like, setLike] = useState(0)

    const onLike = () => {
        console.log('onlike')
        setLike(like + 1)

    }
    return <>
        <h1>Review Component</h1>
        <h2>Like  {like}</h2>
        <button onClick={onLike}>Like</button>
        <hr />
        {/* Using server component inside client component */}
        <Dislike />
    </>
}