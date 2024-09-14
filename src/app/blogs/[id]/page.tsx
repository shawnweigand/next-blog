export default function Blog({ params }: { params: { id: string } }) {

    return (
        <div>
        <h1>MyBlog {params.id}</h1>
        </div>
    )
}