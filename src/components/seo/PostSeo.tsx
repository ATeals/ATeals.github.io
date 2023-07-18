import { Post } from "contentlayer/gererated";
import { NextSeo } from "next-seo";

export const PostSeo = ({ post }: { post: Post }) => {
    const SEO = {
        title: post.title,
        description: post.description,
        canonical: "https://www.carrotins.com",
        openGraph: {
            type: "website",
            locale: "ko_KR",
            url: `https://ateals.github.io/${post._raw.flattenedPath}`,
            title: post.title,
            site_name: "쇠오리 블로그",
            images: [
                {
                    url: post.img || "",
                    width: 285,
                    height: 167,
                    alt: "이미지",
                },
            ],
        },
        twitter: {
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
        },
    };
    return <NextSeo {...SEO} />;
};
