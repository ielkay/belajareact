import { useState } from "react"
import { TryProps } from "../TryProps/TrProps";

export function TryUseState(){
    const [theme, setTheme] = useState("Mode Terang");

    const lightmode = () => {
        setTheme("Mode Terang");
    };

    const darkmode = () => {
        setTheme("Mode Gelap");
    };

    return(
        <div>
           {/* <h1>{theme}</h1> */}
           <TryProps props={"theme"}/>
           <button onClick={lightmode}>Mode Terang</button> 
           <button onClick={darkmode}>Mode Gelap</button>
        </div>
    );
}