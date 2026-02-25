import type { EntertainmentItem } from "./entertainment";
import heroSeries from "@/assets/hero-series.jpg";

const placeholder = "/placeholder.svg";

const seriesTitles: Omit<EntertainmentItem, "id">[] = [
    {
    
    title: "Dark",
    tagline: "Time is a closed loop. Escape is an illusion.",
    description: "In the small town of Winden, the disappearance of a child unravels a multi-generational conspiracy bound by time itself.",
    category: "series",
    genres: ["Sci-Fi", "Mystery", "Psychological Thriller"],
    year: 2017,
    rating: 9.0,
    poster: placeholder,
    banner: heroSeries,
  },
  {
   
    title: "12 Monkeys",
    tagline: "To save the future, rewrite the past.",
    description: "A time traveler from a post-apocalyptic future races across fractured timelines to stop the release of a virus that will end civilization.",
    category: "series",
    genres: ["Sci-Fi", "Thriller", "Mystery"],
    year: 2015,
    rating: 8.7,
    poster: placeholder,
    banner: heroSeries,
  },
  {
    
    title: "From",
    tagline: "You can enter. You can't leave.",
    description: "A mysterious town traps everyone who arrives, forcing strangers to build a fragile society while nightfall unleashes terrifying creatures.",
    category: "series",
    genres: ["Horror", "Mystery", "Sci-Fi"],
    year: 2022,
    rating: 8.1,
    poster: placeholder,
    banner: heroSeries,
  },
  {
    
    title: "Breaking Bad",
    tagline: "Power is a choice. Consequences are inevitable.",
    description: "After a terminal diagnosis, a high school chemistry teacher partners with a former student to build a meth empire.",
    category: "series",
    genres: ["Crime", "Drama", "Thriller"],
    year: 2008,
    rating: 9.5,
    poster: placeholder,
    banner: heroSeries,
  },
  { title: "1899", tagline: "The ship holds secrets beneath the surface.", description: "Migrants on a steamship heading to New York encounter a second vessel adrift on the open sea, triggering a horrifying chain of events that connects them all.", category: "series", genres: ["Mystery", "Sci-Fi", "Thriller"], year: 2022, rating: 7.3, poster: placeholder, banner: heroSeries },
  { title: "Squid Game", tagline: "Win the game or lose everything.", description: "Hundreds of cash-strapped contestants accept an invitation to compete in deadly children's games for a chance to win a life-changing prize.", category: "series", genres: ["Thriller", "Drama", "Mystery"], year: 2021, rating: 8.0, poster: placeholder, banner: heroSeries },
  { title: "Better Call Saul", tagline: "Before he was Saul, he was Jimmy.", description: "The transformation of small-time lawyer Jimmy McGill into the criminal attorney Saul Goodman, years before his dealings with Walter White.", category: "series", genres: ["Crime", "Drama", "Thriller"], year: 2015, rating: 9.0, poster: placeholder, banner: heroSeries },
  { title: "Cashero", tagline: "Money is power.", description: "A financial thriller where an unlikely hero uses cunning and bravery to navigate a dangerous world of money and power.", category: "series", genres: ["Thriller", "Drama"], year: 2024, rating: 7.2, poster: placeholder, banner: heroSeries },
  { title: "The Last Samurai", tagline: "Honor. Courage. Loyalty.", description: "An American military officer is captured by samurai warriors and becomes immersed in their dying culture, finding himself torn between two worlds.", category: "series", genres: ["Drama", "Action", "Adventure"], year: 2003, rating: 7.8, poster: placeholder, banner: heroSeries },
  { title: "Stranger Things", tagline: "The world is turning upside down.", description: "When a boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one very strange little girl.", category: "series", genres: ["Sci-Fi", "Horror", "Mystery"], year: 2016, rating: 8.7, poster: placeholder, banner: heroSeries },
  { title: "The Witcher", tagline: "The worst monsters are the ones we create.", description: "Geralt of Rivia, a mutated monster-hunter, struggles to find his place in a world where people often prove more wicked than beasts.", category: "series", genres: ["Fantasy", "Action", "Adventure"], year: 2019, rating: 8.0, poster: placeholder, banner: heroSeries },
  { title: "The Mandalorian", tagline: "This is the way.", description: "A lone bounty hunter in the outer reaches of the galaxy protects a mysterious alien child while being hunted across the stars.", category: "series", genres: ["Sci-Fi", "Action", "Adventure"], year: 2019, rating: 8.7, poster: placeholder, banner: heroSeries },
  { title: "Peaky Blinders", tagline: "By order of the Peaky Blinders.", description: "A gangster family epic set in 1900s England, centered on a gang who sew razor blades in the peaks of their caps.", category: "series", genres: ["Crime", "Drama", "Thriller"], year: 2013, rating: 8.8, poster: placeholder, banner: heroSeries },
  { title: "Game of Thrones", tagline: "When you play the game of thrones, you win or you die.", description: "Noble families wage war for control of the Iron Throne while an ancient enemy returns after being dormant for millennia.", category: "series", genres: ["Fantasy", "Drama", "Adventure"], year: 2011, rating: 9.2, poster: placeholder, banner: heroSeries },
  { title: "Money Heist", tagline: "The plan is everything.", description: "A criminal mastermind who goes by 'The Professor' recruits a group of thieves to carry out the most ambitious heist in history.", category: "series", genres: ["Crime", "Thriller", "Drama"], year: 2017, rating: 8.2, poster: placeholder, banner: heroSeries },
  { title: "The Boys", tagline: "Never meet your heroes.", description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers for personal gain.", category: "series", genres: ["Action", "Sci-Fi", "Drama"], year: 2019, rating: 8.7, poster: placeholder, banner: heroSeries },
  { title: "Severance", tagline: "Who are you at work?", description: "Employees of a mysterious company undergo a procedure that separates their work and personal memories, but begin to uncover dark secrets.", category: "series", genres: ["Sci-Fi", "Thriller", "Mystery"], year: 2022, rating: 8.7, poster: placeholder, banner: heroSeries },
  { title: "True Detective", tagline: "Touch darkness and darkness touches you back.", description: "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both combatants and criminals.", category: "series", genres: ["Crime", "Mystery", "Thriller"], year: 2014, rating: 8.9, poster: placeholder, banner: heroSeries },
  { title: "The Last of Us", tagline: "When you're lost in the darkness, look for the light.", description: "In a post-apocalyptic world ravaged by a fungal plague, a hardened survivor is hired to smuggle a teenage girl across what remains of the United States.", category: "series", genres: ["Drama", "Action", "Adventure"], year: 2023, rating: 8.8, poster: placeholder, banner: heroSeries },
  { title: "Shogun", tagline: "Two worlds collide.", description: "An English navigator becomes embroiled in the political machinations of feudal Japan as warring factions vie for supreme power.", category: "series", genres: ["Drama", "Adventure", "Historical"], year: 2024, rating: 8.7, poster: placeholder, banner: heroSeries },
  { title: "Chernobyl", tagline: "What is the cost of lies?", description: "The true story of the worst man-made catastrophe in history and the brave men and women who sacrificed to save Europe.", category: "series", genres: ["Drama", "Thriller", "Historical"], year: 2019, rating: 9.4, poster: placeholder, banner: heroSeries },
  { title: "Mr. Robot", tagline: "Control is an illusion.", description: "A young antisocial computer programmer works as a cybersecurity engineer by day and as a vigilante hacker by night.", category: "series", genres: ["Thriller", "Drama", "Crime"], year: 2015, rating: 8.5, poster: placeholder, banner: heroSeries },
  { title: "Black Mirror", tagline: "The future is bright. Dangerously bright.", description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.", category: "series", genres: ["Sci-Fi", "Thriller", "Drama"], year: 2011, rating: 8.7, poster: placeholder, banner: heroSeries },
  { title: "Arcane", tagline: "Every legend has an origin.", description: "Set in the utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League of Legends champions.", category: "series", genres: ["Animation", "Action", "Fantasy"], year: 2021, rating: 9.0, poster: placeholder, banner: heroSeries },
];

export const extendedSeriesData: EntertainmentItem[] = seriesTitles.map(
  (item, index) => ({
    ...item,
    id: `sx${index + 1}`,
  })
);
