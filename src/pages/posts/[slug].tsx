import ListItem from "@/components/ListItem";
import { CollectionSeo } from "@/components/seo/CollectionSeo";
import { collection, getCollectionAll } from "@/util/formatPost";
import { elapsedTime } from "@/util/formatTime";
import Link from "next/link";

export default ({ collection }: { collection: collection }) => {
    return (
        <>
            <CollectionSeo collection={collection} />
            <main className="flex flex-col items-center w-full pt-10">
                <section className="w-full">
                    <section className="px-[10%] m-[10px] shadowBottom">
                        <div className="m-[20px] flex flex-col items-center mb-[50px] pb-[50px] ">
                            {collection && collection.img ? (
                                <img
                                    src={collection.img}
                                    alt=""
                                    className="rounded-[15px] w-[10rem] h-auto  m-[30px]"
                                />
                            ) : null}

                            <h1 className="my-[20px] w-full text-center font-bold text-[2em]">{collection && collection.title}</h1>
                            <h3>{collection && collection.description}</h3>
                        </div>
                    </section>
                    {collection.posts.map((post) => (
                        <ListItem
                            key={post._id}
                            post={post}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: getCollectionAll.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
        fallback: "blocking",
    };
};
export const getStaticProps = async ({ params }: any) => {
    const collection = getCollectionAll.find((p) => p._raw.flattenedPath === params.slug);

    return {
        props: {
            collection,
        },
    };
};
