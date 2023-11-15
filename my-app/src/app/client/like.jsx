// 'use client'

import { useState } from "react"

export default function Like() {
    const [like, setLike] = useState(0)
    return <div>
        <h2>{like}</h2>
        <h1>Like Client</h1>
    </div>
}