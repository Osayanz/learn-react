import react, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count +1);
        console.log("Incremented", count+1);
    };

    function decrement(){
        setCount(count -1);
        console.log("Decremented", count-1);
    };

    function reset (){
        setCount(0);
        console.log("Reset", 0);
    }
    return(

        <div className="counter-container">

            <p className="count-display">{count}</p>

            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
            
            
        </div>

    );

}

export default Counter;