import React from "react";
import { Rating } from "react-simple-star-rating";
import { Card } from "react-bootstrap";
import "./style.css";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ margin: "auto" }}>
      <Card
        className="movieCard"
        style={{
          width: "calc(85vw/3)",
          height: "850px",
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
            <Card.Title style={{ color: "#FF8C00", fontWeight: "bold" }}>
              {movie.name}{" "}
            </Card.Title>
            {/* I used React Simple Rating package from https://www.npmjs.com/package/react-simple-star-rating */}
            <Rating initialValue={movie.rate} readonly={true} />
            <Card.Title style={{ color: "#FF8C00", fontWeight: "bold" }}>
              {movie.year}{" "}
            </Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Title style={{ color: "#FF8C00", fontWeight: "bold" }}>
              {movie.type}{" "}
            </Card.Title>
          </Card.Body>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
      </Card>
    </div>
  );
};

export default MovieCard;
