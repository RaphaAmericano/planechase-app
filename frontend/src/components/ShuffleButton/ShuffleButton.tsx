"use client"


function ShuffleButton(){
    // const { shufflePlanes } = useShufflePlanes()
    function shuffle(){
        shufflePlanes()
    }
    return <button className="btn btn-primary" disabled={false} onClick={shuffle}>Embaralhar</button>
}

export default ShuffleButton