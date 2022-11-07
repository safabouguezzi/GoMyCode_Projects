import React from "react";
import { Rating } from "react-simple-star-rating";
import { Card, Button } from "react-bootstrap";
// import {Routes, Route, Link, useParams , useNavigate} from "react-router-dom";

import "./style.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

  return (
    <div style={{ margin: "auto" }}>
      <Card
        className="movieCard"
        style={{
          width: "calc(85vw/3)",
          height: "750px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Img
            style={{ height: "calc(100vh/2)", width: "calc(85vw/3)" }}
            variant="top"
            src={movie.image}
          />
          <Card.Body>
            <Card.Title style={{ color: "#025275", fontWeight: "bold" }}>
              {movie.name}{" "}
            </Card.Title>
            {/* I used React Simple Rating package from https://www.npmjs.com/package/react-simple-star-rating */}
            <Rating initialValue={movie.rate} readonly={true} />
            <Card.Title style={{ color: "#025275", fontWeight: "bold" }}>
              {movie.year}{" "}
            </Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Title style={{ color: "#025275", fontWeight: "bold" }}>
              {movie.type}{" "}
            </Card.Title>
          </Card.Body>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <nav>
            {" "}



                <Link to={`/Description/${movie.id}`} style={{ textDecoration: 'none' }} >
                <Button                 
                style={{
                  margin: "10px",
                  backgroundColor: "#032541",
                  borderColor: "#032541",
                }} 
                variant="success" size="lg"> See More </Button>
            </Link>
            


          </nav>

        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
