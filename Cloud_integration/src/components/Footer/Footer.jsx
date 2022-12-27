import React from 'react'
import '../../styles/footer.scss'
import { Link } from 'react-router-dom'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

const Footer = () => {
const quickLinks = [
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '#',
    display: 'Privacy Policy',
  },
  {
    path: '/cars',
    display: 'Car Listing',
  },
  {
    path: '/blogs',
    display: 'Blog',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
]

const date = new Date()
const year = date.getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="12" >
            <div className="logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i class="ri-roadster-fill"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia a
              totam illo, dicta laboriosam expedita. Deserunt laboriosam
              necessitatibus ea quod blanditiis, excepturi dicta, voluptatibus
              est officia tempore unde, officiis eum?
            </p>
          </Col >

          <Col lg='3' md='4' sm='6'>
            <div className="mb-4">
              <h5 className='footer__link-title'>
                Quick Links
              </h5>
              <ListGroup>
                {
                  quickLinks.map((item, index) => (
                    <ListGroupItem className='p-0 mt-3 quick__link' key={index}>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
                <div className="mb-4">
                  <h5 className='footer__link-title mb-4'>
                    Head Office
                  </h5>
                  <p className="office__info">Zaouiet Sousse, Sousse, Tunisia</p>
                  <p className="office__info">Phone: +216 XX XXX XXX</p>
                  <p className="office__info">Email: cars@gmail.com</p>
                  <p className="office__info">Office Time: 10am - 7pm</p>
                </div>
          </Col>

          <Col lg='3' md='4'>
                <div className="mb-4">
                <h5 className='footer__link-title mb-4'>
                    Newsletter
                  </h5>
                  <p className="section__description">Subscribe our newsletter to get updated information</p>
                  <div className="newsletter">
                    <input type='email' placeholder='Email' />
                    <span> <i class="ri-send-plane-fill"></i> </span>
                  </div>
                </div>
          </Col>

          <Col lg='12'>
          <div className="footer__bottom">
            <p className="section__description d-flex align-item-center justify-content-center gap-1 pt-4">
            <i class="ri-copyright-line"></i> Copyright {year}, Developed by Safa Bouguezzi. All rights reserved. 
            </p>
          </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer