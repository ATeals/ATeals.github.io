import { NextSeo } from "next-seo";
import { collection } from "@/util/formatPost";

export const CollectionSeo = ({ collection }: { collection: collection }) => {
    const SEO = {
        title: collection.title,
        description: collection.description,
        canonical: "https://www.carrotins.com",
        openGraph: {
            type: "website",
            locale: "ko_KR",
            url: `https://ateals.github.io/${collection._raw.flattenedPath}`,
            title: collection.title,
            site_name: "쇠오리 블로그",
            images: [
                {
                    url: collection.img || "",
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
