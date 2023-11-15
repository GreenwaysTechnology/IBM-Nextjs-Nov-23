// export default function BlogPage(props) {
//     return <>
//         <h1>Blog Details Page</h1>
//         <h1>Blog Id {props.params.id}</h1>
//     </>
// }
export default function BlogPage({ params: { id } }) {
    return <>
        <h1>Blog Details Page</h1>
        <h1>Blog Id {id}</h1>
    </>
}