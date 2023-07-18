import Header from "@/pageComponents/Header/Header";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...DEFAULT_SEO} />
            <Header />
            <main className="min-h-screen pb-[150px]">
                <Component {...pageProps} />
            </main>
            <footer className=" shadowTop  dark:border-t-[#A1AAC6] absolute bottom-0 w-[100%] flex aline-center justify-center py-[30px] flex-col">
                <div className="flex justify-center text-[18px]">&copy; Ateals </div>
            </footer>
        </>
    );
}

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
