import type { EntertainmentItem } from "./entertainment";
import { movieImages } from "./movieImages";

const movieTitles: Omit<EntertainmentItem, "id">[] = [
  {
    title: "Inception",
    tagline: "Your mind is the scene of the crime.",
    description:
      "A skilled thief who steals secrets from within dreams is offered a chance at redemption: instead of stealing an idea, he must plant one inside a target's subconscious across nested layers of dreaming.",
    category: "movies",
    genres: ["Sci-Fi", "Thriller", "Action"],
    year: 2010,
    rating: 8.8,
    poster: movieImages["inception"].poster,
    banner: movieImages["inception"].banner,
  },
  {
  title: "Fight Club",
  tagline: "The first rule of Fight Club is: you do not talk about Fight Club.",
  description:
    "An ordinary office worker suffering from insomnia meets a mysterious soap maker, and together they create an underground fight club that grows into something far more dangerous.",
  category: "movies",
  genres: ["Drama", "Thriller"],
  year: 1999,
  rating: 8.8,
  poster: movieImages["fight-club"].poster,
  banner: movieImages["fight-club"].banner,
},

{
  title: "Passengers",
  tagline: "There is a reason they woke up.",
  description:
    "During a journey to a distant planet, two passengers are unexpectedly awakened from hibernation decades before reaching their destination and must face the consequences of their isolation.",
  category: "movies",
  genres: ["Sci-Fi", "Romance", "Drama"],
  year: 2016,
  rating: 7.0,
  poster: movieImages["passengers"].poster,
  banner: movieImages["passengers"].banner,
},

{
  title: "Lucky Baskhar",
  tagline: "One man. One gamble. A fortune.",
  description:
    "A financially struggling bank cashier discovers an opportunity to make extraordinary money through a risky scheme, but his growing ambition soon pulls him deeper into a dangerous world.",
  category: "movies",
  genres: ["Crime", "Drama", "Thriller"],
  year: 2024,
  rating: 8.0,
  poster: movieImages["lucky-baskhar"].poster,
  banner: movieImages["lucky-baskhar"].banner,
},

{
  title: "King of Kotha",
  tagline: "The king returns.",
  description:
    "In the crime-ridden town of Kotha, a feared gangster returns after years away, reigniting an old rivalry and disturbing the power balance of the entire town.",
  category: "movies",
  genres: ["Action", "Crime", "Drama"],
  year: 2023,
  rating: 6.1,
  poster: movieImages["king-of-kotha"].poster,
  banner: movieImages["king-of-kotha"].banner,
},
{
  title: "Dhruva",
  tagline: "When justice becomes personal.",
  description:
    "An intelligent and determined police officer takes on a brilliant criminal mastermind and uncovers a complex network of corruption and illegal activities.",
  category: "movies",
  genres: ["Action", "Crime", "Thriller"],
  year: 2016,
  rating: 7.8,
  poster: movieImages["dhruva"].poster,
  banner: movieImages["dhruva"].banner,
},

{
  title: "Salaar",
  tagline: "The most violent man is the most loyal.",
  description:
    "A fiercely loyal man is drawn into a brutal power struggle when his childhood friend becomes the target of a violent succession battle in a lawless kingdom.",
  category: "movies",
  genres: ["Action", "Drama", "Thriller"],
  year: 2023,
  rating: 6.5,
  poster: movieImages["salaar"].poster,
  banner: movieImages["salaar"].banner,
},
];

export const extendedMovieData: EntertainmentItem[] = movieTitles.map((m) => ({
  ...m,
  id: `movie-${m.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
}));

export default extendedMovieData;
