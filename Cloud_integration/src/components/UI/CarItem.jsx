import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/carItem.scss'

const CarItem = (props) => {
  const { id, imgUrl, model, carName, automatic, speed, price } = props.item;
  return (
  <Col lg="4" md="4" sm="6" className="mb-5">
    <div className="car__item">
     <Link to={`/cars/${id}`}>
        <div className="car_img">
            <img  src={imgUrl} alt='' className="w-100"/>
        </div>
      </Link>
      <div className="car__item-content mt-4">
        <h4 className="section__title text-center">{carName}</h4>
        <h6 className="rent__price text-center mt-4">{price}.00 <span>/ Day</span></h6>
        
        <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1"> <i class="ri-car-line"></i>{model}</span>
            <span className="d-flex align-items-center gap-1"> <i class="ri-settings-2-line"></i>{automatic}</span>
            <span className="d-flex align-items-center gap-1"> <i class="ri-timer-flash-line"></i>{speed}</span>
        </div>
       
        <button className="car__item-btn car__btn-rent ">
            <Link to={`/cars/${id}`}>Rent</Link>
        </button>

      </div>
    </div>
  </Col>
)};
export default CarItem;
