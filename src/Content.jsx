import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { MoviesIndex } from "./MoviesIndex";

export function Content() {
  const movies = [
    {
      id: 1,
      name: "Placeholder Movie 1",
      director: "Placeholder Director 1",
      image_url: "https://placeholder.com/1",
      description: "Placeholder description for Movie 1.",
      run_time: "2h 30min",
    },
    {
      id: 2,
      name: "Placeholder Movie 2",
      director: "Placeholder Director 2",
      image_url: "https://placeholder.com/2",
      description: "Placeholder description for Movie 2.",
      run_time: "1h 45min",
    },
    {
      id: 3,
      name: "Placeholder Movie 3",
      director: "Placeholder Director 3",
      image_url: "https://placeholder.com/3",
      description: "Placeholder description for Movie 3.",
      run_time: "2h 10min",
    },
  ];
  return (
    <main>
      <h1>Title</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <MoviesIndex movies={movies} />
    </main>
  );
}
