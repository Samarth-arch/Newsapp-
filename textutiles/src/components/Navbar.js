import React from 'react'
// import { PropTypes } from "prop-types";
export default function Navbar(props) {
    
    return (

        <>
            <nav className={`navbar navbar-expand-lg navbar-success bg-${props.Mmode} text-success`}>
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-success" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">about<span className="sr-only">(current)</span></a>

                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Disabled</a> 
                        </li>
                    </ul>
                    <div className={'form-check form-switch text-light'}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglebtn}/>
                        <label className={`form-check-label text-${props.Mmode==='light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >EnableDark</label>
                    </div>
                </div>
            </nav>
        </>
    )
}
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     link: PropTypes.string
// };
// Navbar.defaultProps = {
//   title: 'Stranger',
//   link : 'i am the  link'
// }