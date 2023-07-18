import DarkBtn from "@/pageComponents/Header/DarkBtn";
import Link from "next/link";

export default () => {
    return (
        <>
            <header className="flex justify-between items-center p-5">
                <Link href={"/"}>
                    <h1 className="text-3xl font-[600]">쇠오리 블로그</h1>
                </Link>

                <nav className="flex [&>*]:mx-2">
                    <Link href={"/collection"}>
                        <i className="bi bi-book text-2xl"></i>
                    </Link>
                    <Link href={"/tags"}>
                        <i className="bi bi-tag text-2xl"></i>
                    </Link>

                    <DarkBtn />
                </nav>
            </header>
        </>
    );
};
