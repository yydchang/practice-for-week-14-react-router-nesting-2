import { NavLink, Route, Switch } from "react-router-dom";
import MovieDetails from "../MovieDetails";
import { movies } from "../../data/movieData";

function Movies({ movies: { id, title, description } }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movies.map((movie) => (
            <li>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
