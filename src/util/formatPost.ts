import { Post, allPosts } from "contentlayer/gererated";
import { formatYearMonth } from "./formatTime";

import * as Local from "contentlayer/source-files";

export const getPostAll = allPosts.filter((i) => !i._raw.sourceFilePath.includes("/index.mdx")).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const TimeLines = Array.from(new Set(getPostAll.map((i) => formatYearMonth(i.date))));

export const TimeLinePosts = TimeLines.map((date) => ({ date, posts: getPostAll.filter((post) => date === formatYearMonth(post.date)) }));

export const getCollectionAll: collection[] = allPosts
    .filter((i) => i._raw.sourceFilePath.includes("/index.mdx"))
    .map((item) => ({
        ...item,
        posts: getPostAll.filter((i) => i._raw.sourceFilePath.includes(item._raw.flattenedPath)).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    }));

export type collection = Post & {
    posts: Array<Post>;
};

export const getTags = Array.from(
    new Set(
        allPosts
            .filter((i) => i.tags)
            .map((i) => i.tags)
            .reduce((start: any, index: any) => [...start, ...index], [])
    )
);
