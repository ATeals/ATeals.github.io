import { useEffect, useState } from "react";

const DarkBtn = () => {
    const [isDark, setIsDark] = useState<Boolean | undefined>(undefined);
    const onClick = () => {
        setIsDark((i) => !i);
    };

    useEffect(() => {
        if (isDark !== undefined) {
            if (isDark) {
                document.querySelector("html")?.classList.add("dark");
                localStorage.setItem("darkMode", "true");
            } else {
                document.querySelector("html")?.classList.remove("dark");
                localStorage.setItem("darkMode", "false");
            }
        } else {
            if (localStorage.getItem("darkMode") === "true") setIsDark(true);
            else if (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("isDark") !== "false") setIsDark(true);
            else setIsDark(false);
        }
    }, [isDark]);
    return (
        <div className="hover:cursor-pointer">
            {isDark !== undefined &&
                (isDark ? ( //
                    <i
                        className="bi bi-brightness-high text-2xl"
                        onClick={onClick}
                    ></i>
                ) : (
                    <i
                        className="bi bi-moon text-2xl"
                        onClick={onClick}
                    ></i>
                ))}
        </div>
    );
};

export default DarkBtn;
