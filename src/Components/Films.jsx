import React from "react";

const Films = (props) => {
  return (
    <div className="col-md-6">
      <h1>Films:</h1>
      {props.films.map((film, index) => (
        <div key={`film-${index}`}>
          <div className="card shadow my-2">
            <div className="card-body">
              <h4 className="card-title">{film.title}</h4>
              <p className="card-subtitle my-1">{film.release_date}</p>
              <p className="card-text my-1">{film.description}</p>
              <p className="card-subtitle text-muted mt-2">
                Score: {film.rt_score}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Films;
