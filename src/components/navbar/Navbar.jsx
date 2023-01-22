import styled from "styled-components"
import "./navbar.css"

function Navbar() {
  return (
    <NavContent>
        <LeftContent>
            <img width="40" height="40" src="images/kula.png" alt="kulaimg" />
            <div class="dropdown"><span>Product <i class="fa-sharp fa-solid fa-caret-down"></i></span>
                <ul class="dropdown-menu">
                    <li><a href="">Kula Outreach</a></li>
                    <li><a href="">Kula Circles</a></li>
                </ul>
            </div>
            <div class="dropdown">Our Story
            </div>
            <div class="dropdown"><span>Resources <i class="fa-sharp fa-solid fa-caret-down"></i></span>
                <ul class="dropdown-menu">
                    <li><a href="">Blog</a></li>
                    <li><a href="">Guides</a></li>
                </ul>
            </div>
        </LeftContent>
        <RightContent>
            <button className="rightbtn">Book a demo</button>
        </RightContent>
    </NavContent>
  )
}

export default Navbar

const NavContent = styled.div`
    background: rgb(0,0,0);
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding: 1%;
    height: 50px;
`
const LeftContent = styled.div`
    display: flex;
    width: auto;
    img{
        margin: 1% 2% 0% 15%;
        padding: 0px;  
        cursor: pointer;
        @media(max-width: 800px){
            margin: 2%;
            padding-top: 5px;
        }
    }
    .dropdown{
        @media(max-width: 800px){
        display: none;
        }
    }
    @media(max-width: 800px){
            margin-left: 5%;
        }
`
const RightContent = styled.div`
    width: auto;
    .rightbtn{
        @media(max-width: 800px){
        display: none;
        }
    }
`