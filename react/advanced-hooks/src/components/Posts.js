import { useEffect, useState } from "react";
import { useJazzyNews } from "./hooks";

export function Posts() {
  const posts = useJazzyNews();
  return (
    <>
      <h1>{posts.length} articles</h1>
      {/* {posts.map(post=>(
                // <Post key={post.id} {...post}/>
            ))} */}
    </>
  );
}
