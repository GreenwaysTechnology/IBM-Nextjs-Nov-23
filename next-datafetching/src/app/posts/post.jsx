'use client'
import useSWR from 'swr'

function fetcher(...args) {
    return fetch(...args).then(res => res.json())
}
export default function Post() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { data, error, isLoading } = useSWR(url, fetcher)
    if (error) {
        return <div><h1>Failed to return</h1></div>
    }
    if (isLoading) return <div>Loading....</div>
    return <div>
        {
            data.map(post => {
                return <h4>
                    {post.title}
                </h4>
            })
        }
    </div>
}