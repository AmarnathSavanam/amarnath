import type { EntertainmentItem } from "./entertainment";
import heroMarvel from "@/assets/hero-marvel.jpg";
import heroSeries from "@/assets/hero-series.jpg";

const placeholder = "/placeholder.svg";

const marvelTitles: Omit<EntertainmentItem, "id">[] = [
  { title: "Agent Carter Season 1", tagline: "The war ended. Her mission didn't.", description: "Peggy Carter navigates post-war espionage while proving her worth in a male-dominated agency.", category: "marvel", genres: ["Action", "Adventure", "Drama"], year: 2015, rating: 7.9, poster: placeholder, banner: heroSeries },
  { title: "Iron Man", tagline: "Heroes aren't born. They're built.", description: "A genius billionaire builds a high-tech suit to escape captivity, redefining heroism.", category: "marvel", genres: ["Action", "Sci-Fi"], year: 2008, rating: 7.9, poster: placeholder, banner: heroMarvel },
  { title: "The Avengers", tagline: "Earth's mightiest unite.", description: "Nick Fury assembles a team of heroes to stop Loki and an alien invasion.", category: "marvel", genres: ["Action", "Sci-Fi"], year: 2012, rating: 8.0, poster: placeholder, banner: heroMarvel },
  { title: "Captain America: The Winter Soldier", tagline: "Trust no one.", description: "Steve Rogers uncovers a conspiracy within S.H.I.E.L.D., facing a deadly assassin from his past.", category: "marvel", genres: ["Action", "Thriller"], year: 2014, rating: 8.1, poster: placeholder, banner: heroMarvel },
  { title: "Guardians of the Galaxy", tagline: "Outlaws save the galaxy.", description: "A group of misfits band together to protect a powerful artifact, forming an unlikely family.", category: "marvel", genres: ["Action", "Adventure", "Sci-Fi"], year: 2014, rating: 8.0, poster: placeholder, banner: heroMarvel },
  { title: "Spider-Man: Into the Spider-Verse", tagline: "Anyone can wear the mask.", description: "Miles Morales joins a multiverse of Spider-heroes to stop reality from collapsing.", category: "marvel", genres: ["Animation", "Action"], year: 2018, rating: 8.4, poster: placeholder, banner: heroMarvel },
  { title: "Deadpool", tagline: "Maximum effort.", description: "A wisecracking mercenary seeks revenge after a rogue experiment leaves him disfigured.", category: "marvel", genres: ["Action", "Comedy"], year: 2016, rating: 8.0, poster: placeholder, banner: heroMarvel },
  { title: "Avengers: Infinity War", tagline: "Destiny arrives.", description: "The Avengers face Thanos as he seeks to reshape the universe.", category: "marvel", genres: ["Action", "Sci-Fi"], year: 2018, rating: 8.4, poster: placeholder, banner: heroMarvel },
  { title: "Avengers: Endgame", tagline: "Whatever it takes.", description: "The surviving heroes attempt one final mission to restore the universe.", category: "marvel", genres: ["Action", "Sci-Fi"], year: 2019, rating: 8.4, poster: placeholder, banner: heroMarvel },
  { title: "Daredevil Season 1", tagline: "Justice is blind.", description: "Matt Murdock wages a one-man war on crime in Hell's Kitchen while Wilson Fisk rises to power.", category: "marvel", genres: ["Crime", "Action", "Drama"], year: 2015, rating: 8.6, poster: placeholder, banner: heroSeries },
  { title: "Black Panther", tagline: "Wakanda forever.", description: "T'Challa rises as king and protector of Wakanda while facing a challenger shaped by injustice.", category: "marvel", genres: ["Action", "Adventure"], year: 2018, rating: 7.3, poster: placeholder, banner: heroMarvel },
  { title: "Thor: Ragnarok", tagline: "No hammer. No problem.", description: "Thor must escape a cosmic prison and stop Ragnarok to save Asgard.", category: "marvel", genres: ["Action", "Comedy", "Fantasy"], year: 2017, rating: 7.9, poster: placeholder, banner: heroMarvel },
  { title: "Doctor Strange", tagline: "Open your mind.", description: "A surgeon discovers the mystic arts and the multiverse after a life-altering accident.", category: "marvel", genres: ["Fantasy", "Sci-Fi"], year: 2016, rating: 7.5, poster: placeholder, banner: heroMarvel },
  { title: "Loki", tagline: "Time is broken.", description: "The God of Mischief navigates timelines and identity inside the TVA.", category: "marvel", genres: ["Sci-Fi", "Fantasy"], year: 2021, rating: 8.2, poster: placeholder, banner: heroSeries },
  { title: "X-Men: Days of Future Past", tagline: "Change the past. Save the future.", description: "The X-Men send Wolverine back in time to prevent a catastrophic future ruled by Sentinels.", category: "marvel", genres: ["Action", "Sci-Fi"], year: 2014, rating: 7.9, poster: placeholder, banner: heroMarvel },
  { title: "Spider-Man 2", tagline: "A hero tested beyond limits.", description: "Peter struggles to balance life and heroism while facing Doctor Octopus.", category: "marvel", genres: ["Action", "Adventure"], year: 2004, rating: 7.9, poster: placeholder, banner: heroMarvel },
  { title: "Venom", tagline: "We are Venom.", description: "A journalist bonds with an alien symbiote, becoming a lethal anti-hero.", category: "marvel", genres: ["Action", "Sci-Fi"], year: 2018, rating: 6.6, poster: placeholder, banner: heroMarvel },
  { title: "Captain America: Civil War", tagline: "Divided we fall.", description: "Political pressure fractures the Avengers, forcing friends into battle over ideology.", category: "marvel", genres: ["Action", "Sci-Fi"], year: 2016, rating: 7.8, poster: placeholder, banner: heroMarvel },
  { title: "The Punisher Series", tagline: "Justice served raw.", description: "Frank Castle uncovers a conspiracy while continuing his war on crime.", category: "marvel", genres: ["Action", "Crime"], year: 2017, rating: 8.4, poster: placeholder, banner: heroSeries },
  { title: "Jessica Jones", tagline: "Power doesn't heal trauma.", description: "A private investigator with super strength confronts her past and a terrifying mind-controlling enemy.", category: "marvel", genres: ["Crime", "Drama"], year: 2015, rating: 7.9, poster: placeholder, banner: heroSeries },
];

export const extendedMarvelData: EntertainmentItem[] = marvelTitles.map(
  (item, index) => ({
    ...item,
    id: `mx${index + 1}`,
  })
);
