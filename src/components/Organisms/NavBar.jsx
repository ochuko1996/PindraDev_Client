import { useState, useRef, useEffect } from "react"
import { Brand, BtnWrapper, LinksContainer, NavCenter, NavHeader, NavItem, NavLinks, NavWrapper, ToggleWrapper } from "./Styles/NavBarStyled"
import {FaBars, FaTimes} from 'react-icons/fa'
import { navitems } from "../../constant"
import { Link, NavLink } from "react-router-dom"
import Button from "../Atom/Button"
import BrandLogo from '../../assets/Pindra_removebg.png'

function NavBar() {
    const [toggle, setToggle] = useState(false)
    const [heightValue, setHeightValue] = useState(0)
    const handleToggle = ()=>{
        setToggle(prev => !prev)
    }
    const navLinksRef = useRef(null)
    const btnContainerRef = useRef(null)
    useEffect(()=>{
        const navLinksElement = navLinksRef.current
        const btnsElement = btnContainerRef.current
            const linkHeight = navLinksElement.getBoundingClientRect().height
            setHeightValue(linkHeight + btnsElement)
    },[])
  return (
   <NavWrapper>
    <NavCenter>
        <NavHeader>
            <Link to={'/'}>
                <Brand src={BrandLogo} alt="Brand Logo"/>
            </Link>
            <ToggleWrapper>
                {toggle ? <FaBars onClick={handleToggle}/> : <FaTimes onClick={handleToggle}/>}
            </ToggleWrapper>
        </NavHeader>
        <LinksContainer toggle={toggle} heightValue={heightValue}>
            <NavLinks ref={navLinksRef}>
                {navitems.map(item => (
                <NavItem key={item.id}>
                    <NavLink className={({isPending, isActive})=> isPending ? "pending" : isActive ? "isActive" : ""}
                        to={item.link}
                    >
                        {item.name}
                    </NavLink>
                </NavItem>
                ))} 
            </NavLinks>
            <BtnWrapper ref={btnContainerRef}>
                {/* <Link>
                    <Button secondary>
                        For companies
                    </Button>
                </Link> */}
                <Link to={"/login"}>
                    <Button primary>
                        apply now
                    </Button>
                </Link>
            </BtnWrapper>
        </LinksContainer>
    </NavCenter>
   </NavWrapper>
  )
}

export default NavBar