import React, { useState } from "react";
import Films from "./Components/Films";
import People from "./Components/People";
import Button from "./Components/Button";

const App = () => {
  // Making Films Array with useState
  const [films, setFilms] = useState([]);

  // Making People Array with useState
  const [people, setPeople] = useState([]);

  //   Setting Button Props
  const filmBtnStyle = "col-md-2 btn btn-success";
  const pplBtnStyle = "col-md-2 btn btn-danger";

  // Fetching Films from API when button is clicked
  const handleFilmClick = (e) => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  };

  // Fetching People from API when button is clicked
  const handlePeopleClick = (e) => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((allPeople) => setPeople(allPeople));
  };

  // Return Statement
  return (
    //   Buttons appear on the page automatically, films don't appear until
    //   fetch call is made.
    <div className="container">
      <div className="container mt-3 row justify-content-between">
        <Button
          handleClick={handleFilmClick}
          className={filmBtnStyle}
          btnTxt={"Load Films"}
        />
        <Button
          handleClick={handlePeopleClick}
          className={pplBtnStyle}
          btnTxt={"Load People"}
        />
      </div>
      <div className="row justify-content-between mt-5">
        <Films films={films} />
        <People people={people} />
      </div>
    </div>
  );
};
// Object.defineProperty(person, "filmTitles", {
//     writable: true,
//     value: [],
//   });

//   person.films.forEach((film) => {
//     fetch(film)
//       .then((res) => res.json())
//       .then((film) => person.filmTitles.push(film.title))
//       .catch((err) => console.log(err));
//   });
//   console.log("nsdkjnfjksdf")

//   return person;
export default App;
