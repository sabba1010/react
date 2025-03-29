import { useState } from "react"

export default function Batsman(){

    const [sixes, setSixes] = useState(0);

    let [runs, setRuns]= useState(0);
const handleSingle =()=>{
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
}

const handleSix=()=>{
    const updatedRuns = runs + 6;
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    setRuns(updatedRuns);
}

const handleFour=()=>{

const updatedRuns = runs + 4;
setRuns(updatedRuns);

}

const handleDouble=()=>{

    const updatedRuns = runs +2;

    setRuns(updatedRuns);
}




    return(
        <div>
            <h3>Player: Bangla </h3>
            <h1>Score: {runs}</h1>
            <p>Six:{sixes}</p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleDouble}>Double</button>
        </div>
    )
}
  