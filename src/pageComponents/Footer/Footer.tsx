import { SiteLink } from "@/components/SiteLink";
import { getCollectionAll } from "@/util/formatPost";
import Link from "next/link";
import FooterCollectionList from "./FooterCollectionList";

export const Footer = () => {
    return (
        <footer className="text-[gray] absolute bottom-0 w-full py-10 px-5 flex [&>*]:mr-10">
            <div>
                <div className="text-[18px] mb-5">&copy; Ateals</div>
                <ul className="flex [&>*]:mx-2">
                    <li>
                        <SiteLink
                            title="Velog"
                            link="https://velog.io/@ateals_12"
                        />
                    </li>
                    <li>
                        <SiteLink
                            title="Github"
                            link="https://github.com/ATeals"
                        />
                    </li>
                </ul>
            </div>
            <FooterCollectionList />
        </footer>
    );
};
