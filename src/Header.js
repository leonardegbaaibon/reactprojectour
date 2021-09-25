import React from 'react'
import logo from './chrileon.png'
import $ from 'jquery'

const Header = () => {
$(document).ready(function(){
    $(".overlay").hide()
    $("button").on('click',function(){
        $(".overlay").show()
        $(".closebtn").on('click',function(){
            $(".overlay").hide()
        })
    })
})




    

    return (
        <div>
            <div className="overlay">
                 <span class="closebtn">&times;</span>
                 <div class="overlay-content">
                      <a href="#">About</a>
                     <a href="#">Services</a>
                     <a href="#">Clients</a>
                     <a href="#">Contact</a>
                    </div>
                </div>
            <div className="header-div">
                <div className="seperate">
                    <div className="center">
                    <button className="menu-button">&#9776;</button>
                </div>
                <div className="logo-div">
                     <img src={logo} alt="LOGO" className="logo" />
                </div>
                </div>
                    <div className="heading-div">
                        <div className="icon-big">
                        <div class="icon-bar">
                         <a href="#" class="facebook"><i class="fab fa-facebook" id="pilo"></i></a> 
                         <a href="#" class="twitter"><i class="fab fa-twitter" id="pilo"></i></a> 
                          <a href="#" class="google"><i class="fab fa-google" id="pilo"></i></a> 
                         <a href="#" class="linkedin"><i class="fab fa-linkedin" id="pilo"></i></a>
                          <a href="#" class="youtube"><i class="fab fa-youtube" id="pilo"></i></a> 
                          </div>
                    </div>
                        <div className="title-div">
                            WORLD TOURING
                        </div>
                        <div className="lower-div">
                            EXPLORING THE BEAUTY OF WILDLIFE
                        </div>
                    </div>
                 </div>

                <div className="">

                </div>
        </div>
    )
}

export default Header

