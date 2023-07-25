import { OpenGraphicApi } from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";

const BookMark = ({ url }: { url: string }) => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await OpenGraphicApi.getOg(url);
                console.log(data);
                setData(data);
            } catch (error) {
                setData({
                    ogImage: [{ url: "none" }],
                    ogTitle: "none",
                    ogDescription: "none",
                });
            }
        })();
    }, []);

    return (
        <>
            {!data?.error && (
                <Link
                    href={url}
                    target="_blank"
                >
                    <div className="shadow-lg m-2 my-10 flex h-[200px] hover:scale-105">
                        <div className="h-full w-[30%] relative">
                            <img
                                src={data?.ogImage[0]?.url}
                                alt="Image"
                                className="h-full w-full object-cover "
                            />
                        </div>
                        <div className="w-[70%] h-full relative flex flex-col justify-between p-4">
                            <div className="overflow-hidden">
                                <h1 className="text-[24px] font-bold mb-2 ">{data?.ogTitle}</h1>
                                <p className="text-[12px]">{data?.ogDescription}</p>
                            </div>

                            <small className="text-end overflow-clip text-[gray]">{decodeURI(url)}</small>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

export const Skeleton = () => {
    return (
        <>
            <div className="shadow-lg my-10 flex h-[200px]">
                <div className="h-full w-[30%] bg-[gray] animate-pulse"></div>
                <div className="w-[70%] h-full relative flex flex-col justify-between p-4">
                    <div>
                        <h1 className="w-[40%] text-[24px] font-bold mb-2 bg-[gray] h-[30px] animate-pulse"></h1>
                        <div className="w-[100%] text-[12px] h-[16px] animate-pulse flex items-center"></div>
                    </div>
                    <small className="text-end bg-[gray] h-[12px] animate-pulse"></small>
                </div>
            </div>
        </>
    );
};

export default BookMark;
