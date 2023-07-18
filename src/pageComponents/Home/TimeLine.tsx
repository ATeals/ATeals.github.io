import PostListItem from "@/components/ListItem";
import { TimeLinePosts } from "@/util/formatPost";

export default () => {
    return (
        <ul className="my-10 mx-5 border-l-[4px] border-l-[black] dark:border-l-[#4a6e82]">
            {TimeLinePosts.map((item) => (
                <section key={item.date}>
                    <h1 className="text-2xl md:text-3xl text-[gray] my-5 md:my-10 mx-2">{item.date}</h1>
                    {item.posts.map((post) => (
                        <PostListItem
                            key={post._id}
                            post={post}
                        />
                    ))}
                </section>
            ))}
        </ul>
    );
};
