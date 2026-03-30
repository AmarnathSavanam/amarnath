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
  { title: "Peaky Blinders", tagline: "By order of the Peaky Blinders.", description: "A gangster family epic set in 1900s England, centered on a gang who sew razor blades in the peaks of their caps.", category: "series", genres: ["Crime", "Drama", "Thriller"], year: 2013, rating: 8.8, poster: placeholder, banner: heroSeries },
  { title: "Game of Thrones", tagline: "When you play the game of thrones, you win or you die.", description: "Noble families wage war for control of the Iron Throne while an ancient enemy returns after being dormant for millennia.", category: "series", genres: ["Fantasy", "Drama", "Adventure"], year: 2011, rating: 9.2, poster: placeholder, banner: heroSeries },
  { title: "Money Heist", tagline: "The plan is everything.", description: "A criminal mastermind who goes by 'The Professor' recruits a group of thieves to carry out the most ambitious heist in history.", category: "series", genres: ["Crime", "Thriller", "Drama"], year: 2017, rating: 8.2, poster: placeholder, banner: heroSeries },
  { title: "The Last of Us", tagline: "When you're lost in the darkness, look for the light.", description: "In a post-apocalyptic world ravaged by a fungal plague, a hardened survivor is hired to smuggle a teenage girl across what remains of the United States.", category: "series", genres: ["Drama", "Action", "Adventure"], year: 2023, rating: 8.8, poster: placeholder, banner: heroSeries },
 ];

export const extendedSeriesData: EntertainmentItem[] = seriesTitles.map(
  (item, index) => ({
    ...item,
    id: `sx${index + 1}`,
  })
);
