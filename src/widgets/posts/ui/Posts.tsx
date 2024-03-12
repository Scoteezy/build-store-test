import React from "react";

import { Post } from "@/entities";
import { Post as PostType, mockPosts } from "@/shared";
const Posts = () => {
  const posts:PostType[] = mockPosts;

  return (
    <section className="bg-[#edf7fa] pb-8">
      <div className="wrapper">
        <div className="w-full flex-center lg:flex-between">
          <h2 className="text-[22px] text-dark text-normal">Recent posts</h2>
          <button className="text-secondary text-base hover:text-secondary/80 hover:font-bold transition-all duration-300 hidden lg:block">View all</button>
        </div>
        <div className="w-full flex-center  flex-col gap-5  lg:flex-row  mt-5">
          {posts.map((post)=>
            <Post key={post.id} {...post}/>
          )}
        </div>
      </div>
    </section>
  );
};

export default Posts;