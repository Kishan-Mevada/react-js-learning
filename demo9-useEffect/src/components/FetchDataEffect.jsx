import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await response.json();
            if(json && json.length) setData(json);
        }

        getData();
    })

  return (
    <div>
        <ul>
            {data.map(post => (
                <section key={post.id}>
                    <li>Title: {post.title}</li>
                    <li>Body: {post.body}</li>
                </section>
            ))}
        </ul>
    </div>
  )
}

export default FetchDataEffect