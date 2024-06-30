import { useState } from "react"
export function TryUseState(){
    const [counter, setCounter] = useState(0);

    const Add = () => {
        setCounter(10);
    }
    return(
        <div>
           <h1>{counter}</h1>
           <button onClick={Add}>Ubah Nilai</button> 
        </div>
    )
}