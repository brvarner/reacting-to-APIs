import React, { useState } from "react";

const People = (props) => {

    let person = props.people

// Fetching link and storing it in a variable

// let [title, setTitle] = useState('')


// // let titleFetcher = () => {
// // // Using the 0 indexed array value (the "films" URL), to run another fetch request
// // // On each individual person.
// // // Have to find out how to bind function context
// //     fetch(this.people.films[0])
// //     .then(res => res.json())
// //     .then(movie => setTitle(movie.title))
// // }


  return (
    <div className="col-md-6">
      <h1 className="mx-4">People:</h1>
      {props.people.map((person, index) => (
        <div key={`person-${index}`}>
          <div className="card shadow my-2 mx-4">
            <div className="card-body">
              <h4 className="card-title">{person.name}</h4>
              <p className="card-subtitle my-1">Age: {person.age}</p>
              <p className="card-subtitle my-1">{person.gender}</p>
              {/* <p className="card-text my-1">
               Appears in: {titleFetcher()}
              </p> */}
              <a
                href={person.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;
