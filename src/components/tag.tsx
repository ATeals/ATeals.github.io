import Link from "next/link";

export default ({ tag }: { tag: string }) => {
    return (
        <Link
            href={{ pathname: "/tags", query: { tag } }}
            key={tag}
        >
            <span className="text-[gray] mx-1 hover:underline hover:cursor-pointer whitespace-nowrap text-sm md:text-lg">#{tag}</span>
        </Link>
    );
};
