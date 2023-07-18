import { getCollectionAll } from "@/util/formatPost";
import Link from "next/link";

export default () => {
    return (
        <div>
            <h1 className="text-xl mb-5">Collection</h1>
            <ul>
                {getCollectionAll.map((collection) => (
                    <Link href={`/posts/${collection._raw.flattenedPath}`}>
                        <li className="mb-2">
                            <span>{collection.title}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
