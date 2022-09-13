import React, { useState } from 'react'


const Question3 = () => {

    let [counter, setCounter] = useState(0)
    let add = () => {
        setCounter(counter += 1)
    }

    let sub = () => {
        setCounter(counter -= 1)
    }



    return (
        <div>
            <div className="container m-5">
                <h1>Question 3</h1>
                <h4>Create a counter component with two buttons and one label. One button will increment while
another button will decrement the counter. The label should show the current value of counter.
</h4>
                <button onClick={add} className='m-2 btn btn-success fs-3'>+</button>
                <span className='fs-1 m-4' >{counter}</span>
                <button onClick={sub} className='m-2 btn btn-success fs-3'>-</button>
            </div>
        </div>
    )
}

export default Question3
