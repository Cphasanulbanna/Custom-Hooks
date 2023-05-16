import { useEffect, useRef, useState } from "react";

export const useDirection = () => {
    //direction of html
    const [direction, setDirection] = useState("");

    //reference to html element
    const htmlRef = useRef(document.documentElement);

    //fetching attribute value of [dir]
    const dirValue = htmlRef.current?.getAttribute("dir");

    useEffect(() => {
        if (htmlRef.current && dirValue === "rtl") {
            setDirection("rtl");
        } else {
            setDirection("ltr");
        }
    }, [direction]);

    return direction;
};
