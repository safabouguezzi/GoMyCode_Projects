import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row , Col} from 'reactstrap'
import FindCarForm from '../components/UI/FindCarForm'
import AboutSection from '../components/UI/AboutSection'
import ServiceSection from '../components/UI/ServiceSection'
import carData from '../assets/data/carData';
import CarItem from '../components/UI/CarItem';
import MapContainer from '../components/UI/MapContainer';


const Home = () => {

  return (
    <Helmet title='Home'>
      <section className="p-0 hero__slider-section">
        <HeroSlider/>

        <div className="hero__form">
          <Container>
           <Row className="form__row">
            <Col lg='4' md='4'>
              <div className="find__cars-left">
                <h2>Find your best car here</h2>
              </div>
            </Col>

            <Col lg='8' md='8' sm='12'>
              <FindCarForm/>
            </Col>
           </Row>
          </Container>
        </div>
      </section>


      {/* ========= About Section =========== */}
      <section className="about">
        <AboutSection/>
      </section>

      {/* ========= Service Section =========== */}
      <section className="service">
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className='section__subtitle'>See our</h6>
              <h2 className='section__title'>Popular Services</h2>
            </Col>
            <ServiceSection/>
          </Row>
        </Container>
      </section>

      {/* ========= Cars offer Section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {
              carData.slice(0, 6).map(car => <CarItem item={car} key={car.id}/>)
            }
          </Row>
        </Container>
      </section>


      {/* ========== Map Section ==============*/}
            <section>
              <Container>
                <Row>
                  <Col lg='12' className='text-center mb-5'>
                   <MapContainer />
                  </Col>
                </Row>
              </Container>
            </section>

    </Helmet>
  )
}

export default Home