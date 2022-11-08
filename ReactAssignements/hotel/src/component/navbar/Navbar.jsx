import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate= useNavigate();
    let signOut=()=>{
        navigate('/')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" href="#">Tomato</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/availableHotel">Available Hotel</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/home" >Selected Hotels</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" exact to="/showUserBookings" >Show Bookings</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" exact to="/showUserCancellation" >Show Cancellation</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button onClick={signOut} className="btn btn-danger m-2" type="button">Sign Out</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar