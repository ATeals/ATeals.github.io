import PostListItem from "@/components/ListItem";
import Tag from "@/components/tag";
import { getPostAll, getTags } from "@/util/formatPost";
import { elapsedTime } from "@/util/formatTime";
import { Post } from "contentlayer/gererated";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default () => {
    const [posts, setPosts] = useState<Post[]>(getPostAll);

    const { tag } = useRouter().query;

    useEffect(() => {
        if (tag) setPosts(getPostAll.filter((post) => post.tags?.includes(String(tag))));
    }, [tag]);

    return (
        <>
            <section className="m-5 p-3 flex-wrap flex">
                {getTags.map((tag) => (
                    <Tag
                        key={tag}
                        tag={tag}
                    />
                ))}
            </section>
            <section className="mt-10">
                {posts.map((post) => (
                    <PostListItem
                        key={post._id}
                        post={post}
                    />
                ))}
            </section>
        </>
    );
};
