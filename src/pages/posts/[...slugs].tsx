import { PostSeo } from "@/components/seo/PostSeo";
import CollectionList from "@/pageComponents/Posts/CollectionList";
import PostBody from "@/pageComponents/Posts/PostBody";
import PostHead from "@/pageComponents/Posts/PostHead";
import { Post, allPosts } from "contentlayer/gererated";

export default ({ post }: { post: Post }) => {
    return (
        <>
            <PostSeo post={post} />
            <main className="flex flex-col items-center w-full">
                <PostHead post={post} />
                <PostBody post={post} />
                <CollectionList post={post} />
            </main>
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")).map((p) => ({ params: { slugs: p._raw.flattenedPath.split("/") } })),
        fallback: "blocking",
    };
};
export const getStaticProps = async ({ params }: any) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slugs.join("/"));

    return {
        props: {
            post,
        },
    };
};
