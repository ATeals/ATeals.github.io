import { getCollectionAll } from "@/util/formatPost";
import { elapsedTime } from "@/util/formatTime";

import Link from "next/link";

export default () => {
    return (
        <>
            <main className="pt-10">
                {getCollectionAll.map((colletion) => (
                    <Link
                        key={colletion._id}
                        href={`posts/${colletion._raw.flattenedPath}`}
                    >
                        <div className="mb-10 pl-10">
                            <h1 className="text-lg md:text-2xl">
                                {colletion.title} | {colletion.posts.length}
                            </h1>
                            <h2 className="text-[gray] text-sm md:text-lg">
                                {colletion.description} | {elapsedTime(colletion.date)}
                            </h2>
                        </div>
                    </Link>
                ))}
            </main>
        </>
    );
};
