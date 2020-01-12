import React from 'react'
import './css/header.css';


const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <img src={require('./icons/mortarboard.png')} alt="icon" />
                    <p className='ml-5'> <strong>Welcom to ESTE</strong><em>Ecole Superiure de technologie essaouira</em></p>
                </div>
                <input class="form-control mr-sm-2" type="search" placeholder="Search Here...." aria-label="Search" /><i class="fas fa-search"></i>
                <i class="fas fa-globe-europe mr-0 "></i>
                <i className="fas fa-chevron-down"></i>
                <select class="custom-sel" id='plan'>
                    <option selected>English</option>
                    <option value="1">French</option>
                </select>
                <span className="bar-first"></span>
                <i class="far fa-envelope"></i>
                <i class="far fa-bell"></i>
                <span className="bar-seconde"></span>
                <span className="profil-para">
                    <img src="https://www.viandedeliege.com/wp-content/uploads/2018/06/personnel.png" alt="" srcset="" />
                    <p id="p1">Hicham Douch</p>
                    <p id="p2">Admin</p>
                </span>

            </nav>
        </div >
    )
}

export default Header;