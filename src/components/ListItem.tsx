import { Post } from "contentlayer/gererated";

import { elapsedTime } from "@/util/formatTime";
import Link from "next/link";

export default ({ post }: { post: Post }) => {
    return (
        <Link
            key={post._id}
            href={`/posts/${post._raw.flattenedPath}`}
        >
            <div className="mb-10 pl-10">
                <h1 className="text-lg md:text-2xl">{post.title}</h1>
                <h2 className="text-[gray] text-sm md:text-lg">
                    {post.description} | {elapsedTime(post.date)}
                </h2>
            </div>
        </Link>
    );
};
