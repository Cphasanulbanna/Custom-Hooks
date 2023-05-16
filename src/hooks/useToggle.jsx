import { useState } from "react";

export const useToggle = () => {
    const [state, setState] = useState(false);

    const toggleState = () => {
        setState(!state);
    };
    return {
        state,
        toggleState,
    };
};
