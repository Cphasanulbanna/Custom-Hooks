import React from "react";

//css
import "./styles.css";

//custom hooks
import { useDirection } from "./hooks/useDirection";
import { useToggle } from "./hooks/useToggle";

function App() {
    //direcction hook
    const htmlDirection = useDirection();

    //toggle hook
    const { state, toggleState } = useToggle();

    return (
        <section className={state ? "green" : "orange"}>
            <h1>Custom Hooks</h1>
            <div>
                <button onClick={toggleState}>Toggle Background</button>
                <h2>
                    {" "}
                    Html Direction is: <span>{htmlDirection}</span>{" "}
                </h2>
            </div>
        </section>
    );
}

export default App;
