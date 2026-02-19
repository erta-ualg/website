import { useEffect } from "react";

import data from "../data/Join"

export default function Join() {
    useEffect(() => {
        window.location.href = data.link;
    }, []);

    return null;
}
