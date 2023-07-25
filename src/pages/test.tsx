import { OpenGraphicApi } from "@/api";
import BookMark from "@/components/BookMark";

import Link from "next/link";
import { ReactNode, Suspense, useEffect, useState } from "react";

export default () => {
    return (
        <>
            <BookMark url={"https://velog.io/"} />
        </>
    );
};
