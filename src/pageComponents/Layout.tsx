import { ReactNode } from "react";

import { Footer } from "@/pageComponents/Footer/Footer";
import Header from "@/pageComponents/Header/Header";
import { DefaultSeo } from "next-seo";

export default ({ children }: { children: ReactNode }) => {
    return (
        <>
            <DefaultSeo {...DEFAULT_SEO} />
            <Header />
            <main className="min-h-screen pb-[300px]">{children}</main>
            <Footer />
        </>
    );
};

const DEFAULT_SEO = {
    title: "쇠오리 블로그",
    description: "조리있게 글쓰고 싶은 둥지",
    canonical: "https://www.carrotins.com",
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://ateals.github.io/",
        title: "쇠오리 블로그",
        site_name: "쇠오리 블로그",
        images: [
            {
                url: "/images/logoImg.jpg",
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
