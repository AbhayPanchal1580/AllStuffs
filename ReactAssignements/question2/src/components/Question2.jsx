import React, { useState } from 'react'

const Question2 = () => {

    const [fName, setFName]=useState('')
    const [lName, setLName]=useState('')
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('')
    const [address, setAddress]=useState('')
    const [zip, setZip]=useState(0)
    const [userData, setUserData] = useState([]);

    let inputData=()=>{
        const user={
            fName:fName,
            lName:lName,
            email:email,
            pass:pass,
            address:address,
            zip:zip
        }
        // console.log(user)
        setUserData([...userData,user]);
        console.log(userData)
    }

    return (
        <div className='container'>
            <h1>Question 2</h1>
            <h4>Create a registration component to get the user details. The component should contian a register
button. The button should print the user credentials on console.</h4>
            <form className="row mt-5 g-3">
                <div className="row">
                    <div className="col-md-6">
                    <label  className="form-label">First Name</label>
                        <input type="text" onChange={(e)=>{
                            setFName(e.target.value)
                        }} className="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div className="col-md-6">
                    <label  className="form-label">Last Name</label>
                        <input type="text" onChange={(e)=>{
                            setLName(e.target.value)
                        }} className="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" onChange={(e)=>{
                            setEmail(e.target.value)
                        }} className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" onChange={(e)=>{
                            setPass(e.target.value)
                        }} className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" onChange={(e)=>{
                            setAddress(e.target.value)
                        }} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" onChange={(e)=>{
                            setZip(e.target.value)
                        }} className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <button type="button" onClick={inputData} className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Question2
