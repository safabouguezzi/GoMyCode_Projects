import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import "../../styles/header.scss"

const Header = () => {
    const navLinks = [
        { 
            path:'/home',
            display: 'Home',
        },
        { 
            path:'/about',
            display: 'About',
        },
        { 
            path:'/cars',
            display: 'Cars',
        },
        { 
            path:'/blogs',
            display: 'Blog',
        },
        { 
            path:'/contact',
            display: 'Contact',
        }
    ]

  return (
    <header className="header">
        {/*=========== header top =========== */}
        <div className="header__top">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                    <div className='header__top-left'>
                        <span>Need Help?</span>
                        <span className="header__top-help">
                        <i class="ri-phone-fill"></i> +216-XX-XXX-XXX
                        </span>
                    </div>
                    </Col>

                    <Col lg='6' md='6' sm='6'>
                    <div className="header__top-right d-flex algin-items-center justify-content-end gap-3">
                        <Link to='#' className='d-flex align-items-center gap-1'> <i class="ri-login-circle-line"></i> Login </Link>
                        <Link to='#' className='d-flex align-items-center gap-1'> <i class="ri-user-line"></i> Register </Link>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

    {/*=========== header middle =========== */}
        <div className="header__middle">
            <Container>
                <Row>
                    <Col lg='4' md='3' sm='4' className="d-flex align-items-center">
                        <div className="logo d-flex align-items-center">
                            <h1>
                                <Link to='/home' className='d-flex align-items-center gap-3'> <i class="ri-roadster-fill"></i> 
                                <span>Rent Car <br/> Service</span>
                                 </Link>
                            </h1>
                        </div>
                    </Col>

                    <Col lg='3' md='3' sm='4' className='d-flex align-items-center'>
                        <div className="header__location d-flex align-items-center  gap-2">
                            <span> <i class="ri-earth-line"></i> </span>
                            <div className="header__location-content ">
                                <h4>Tunisia</h4>
                                <h6>Sousse City, Tunisia</h6>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3' md='3' sm='4' className='d-flex align-items-center'>
                        <div className="header__location d-flex align-items-center gap-2">
                            <span> <i class="ri-time-line"></i> </span>
                            <div className="header__location-content">
                                <h4>Sunday to Friday</h4>
                                <h6>10am - 7pm</h6>
                            </div>
                        </div>
                    </Col>

                    <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-end'>
                        <button className="header__btn btn">
                            <Link to="/contact">
                            <i class="ri-phone-line"></i> Request a call
                            </Link>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>


{/* ============ main navigation =================== */}

    <div className="main__navbar">
        <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                <span className='mobile__menu'>
                    <i class="ri-menu-fill"></i>
                </span>

                <div className="navigation">
                    <div className="menu">
                        {
                           navLinks.map((item, index) =>(
                            <NavLink className={navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'} to={item.path} key={index}>{item.display}</NavLink>
                           )) 
                        }
                    </div>
                </div>

                <div className="nav__right">
                    <div className="search__box">
                        <input type="text" placeholder='Search' />
                        <span>
                            <i class="ri-search-2-line"></i>
                        </span>
                    </div>
                </div>
            </div>

        </Container>
    </div>

    </header>
  )
}

export default Header