import Link from "next/link";

export const SiteLink = ({ title, link }: { title: string; link: string }) => {
    return (
        <Link
            target="_blank"
            href={link}
        >
            {title}
        </Link>
    );
};
