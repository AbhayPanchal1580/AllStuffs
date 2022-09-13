import React, { useState } from 'react'



const Question1 = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    function showInputs() {
        if (email.length && pass.length !== 0) {
            console.log(`email is : ${email} and Password is ${pass}`)
        } else {
            alert("Input Correct Data")
        }
    }

    return (
        <div className='container'>
            <h1>Question 1</h1>
            <h4>Create a login component to get email address and password from user. The component should
contian a login button. The login button should print the user credentials on console.</h4>
            <div className='border p-4 m-5 w-50'>
                <div className="row ">
                    <div className="col-5 p-3 m-2">
                        <label htmlFor="email">Email Id</label>
                        <input type="text" onChange={(e) => {
                            setEmail(e.target.value)
                        }} className='m-1 form-control' id='email' />
                    </div>
                    <div className="col-5 p-3 m-2">
                        <label htmlFor="password ">Password</label>
                        <input type="Password" onChange={(e) => {
                            setPass(e.target.value)
                        }} className='m-1 form-control' id='password' />
                    </div>
                </div>
                <button onClick={showInputs} className=' btn btn-outline-success'>Submit</button>
                <br />
                <label htmlFor="">Output is On Console as Asked in Question</label>
            </div>

        </div>
    )
}

export default Question1
