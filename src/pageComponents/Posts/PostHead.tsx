import Tag from "@/components/tag";
import { Post } from "contentlayer/gererated";

export default ({ post }: { post: Post }) => {
    return (
        <>
            <div className="my-10">
                <img
                    src={post.img}
                    className="w-[300px] object-cover my-4 rounded-[20px] mb-10 "
                />
                <h1 className="text-2xl mb-8 break-words">{post.title}</h1>
                <h2 className="text-xl mb-10">{post.description}</h2>

                <div className="">
                    {post.tags?.map((tag) => (
                        <Tag
                            key={tag}
                            tag={tag}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
