import { useMDXComponent } from "next-contentlayer/hooks";
import { Toc } from "@/pageComponents/Posts/Toc.jsx";
import tagList from "@/util/markdownTag/tagList";
import { Post } from "contentlayer/gererated";

export default ({ post }: { post: Post }) => {
    const MDXComponent = useMDXComponent(post.body.code);
    return (
        <article className="w-full relative flex justify-center mb-[40px]">
            <div className="px-[3px] md:m-[5px] w-full md:w-[80%] ml-0 box-border">
                <MDXComponent components={tagList as any} />
            </div>
            <div className="relative w-[20%] my-[10px] hidden md:block">
                <div className="sticky right-[50%] top-[25%]">
                    <Toc post={post} />
                </div>
            </div>
        </article>
    );
};
