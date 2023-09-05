import React from 'react'
import PropTypes from "prop-types"
import { Link  , Outlet } from 'react-router-dom'

export default function Navbar(props) {
    return (

        <>
           <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link  className="navbar-brand" to="/"><h3>{props.title}</h3></Link>

            {/* switch   */}
                    <div className={`form-check form-switch mx-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={ props.togglemode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchname}</label>
                    </div>



                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>




            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active"   to="/">About us</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">{props.AboutText}</Link>
                    </li>
                </ul>



                {/* <div className="d-flex">
                    <div className="bg-primary rounded mx-2" style = {{height : "30px" , width : "30px" , cursor : "pointer"}}  onClick={ ()=> {props.togglemode("primary")}}></div>

                    <div className="bg-warning rounded mx-2" style = {{height : "30px" , width : "30px" , cursor : "pointer"}}  onClick={ ()=> {props.togglemode("warning")}}></div>

                    <div className="bg-danger rounded mx-2" style = {{height : "30px" , width : "30px" , cursor : "pointer"}}  onClick={ ()=> {props.togglemode("danger")}}></div>

                    <div className="bg-success rounded mx-2" style = {{height : "30px" , width : "30px" , cursor : "pointer"}}  onClick={ ()=> {props.togglemode("success")}}></div>
                </div> */}



                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
            <Outlet />

        </>

    )
}










Navbar.propTypes =
{
    title: PropTypes.string,
    AboutText: PropTypes.string
}

Navbar.defaultProps =
{
    tittle: " about title",
    AboutText: " about - text"
}
