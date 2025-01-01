
async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = response.json();
    return posts;
   }



export default async function Blogs(params) {
    let getData = await getPost();
    return (
        <div>
            {getData.map((post)=>(
                <h1 key={post.id}>{post.title}</h1>
            ))}
        </div>
    )
}