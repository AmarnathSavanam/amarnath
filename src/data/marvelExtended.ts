import type { EntertainmentItem } from "./entertainment";
import heroMarvel from "@/assets/hero-marvel.jpg";
import heroSeries from "@/assets/hero-series.jpg";

const placeholder = "/placeholder.svg";

const marvelTitles: Omit<EntertainmentItem, "id">[] = [
  {
    "title": "Eyes of Wakanda",
    "tagline": "Legacy shapes the future.",
    "description": "Stories across generations reveal Wakanda's hidden missions and the warriors who protected its secrets around the world.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Animation"],
    "year": 2025,
    "rating": 8.0,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Captain America: The First Avenger",
    "tagline": "A hero is born.",
    "description": "Steve Rogers transforms into Captain America and battles Hydra during World War II, shaping the foundation of the Avengers.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2011,
    "rating": 7.8,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Agent Carter Season 1",
    "tagline": "The war ended. Her mission didn't.",
    "description": "Peggy Carter navigates post-war espionage while proving her worth in a male-dominated agency.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Drama"],
    "year": 2015,
    "rating": 7.9,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Agent Carter Season 2",
    "tagline": "New city. New enemies.",
    "description": "Peggy Carter heads to Los Angeles to investigate a dangerous scientific conspiracy that threatens global stability.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Drama"],
    "year": 2016,
    "rating": 7.9,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Captain Marvel",
    "tagline": "Higher. Further. Faster.",
    "description": "Carol Danvers becomes one of the universe's most powerful heroes while uncovering the truth behind an intergalactic war.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2019,
    "rating": 6.8,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Iron Man",
    "tagline": "Heroes aren't born. They're built.",
    "description": "Tony Stark builds a high-tech suit to escape captivity and becomes the armored hero who launches a new era of heroes.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2008,
    "rating": 8.0,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Iron Man 2",
    "tagline": "It's not the armor that makes the hero.",
    "description": "Tony Stark faces government pressure, new enemies, and his own mortality while refining the Iron Man legacy.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2010,
    "rating": 7.0,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Thor",
    "tagline": "Courage is immortal.",
    "description": "The arrogant god of thunder is cast out of Asgard and learns humility on Earth while stopping a looming war.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Fantasy"],
    "year": 2011,
    "rating": 7.0,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "The Avengers",
    "tagline": "Earth's mightiest heroes unite.",
    "description": "Nick Fury assembles a team of heroes to stop Loki and an alien invasion threatening the planet.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2012,
    "rating": 8.0,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Captain America: The Winter Soldier",
    "tagline": "Trust no one.",
    "description": "Steve Rogers uncovers a conspiracy within S.H.I.E.L.D. while facing a mysterious assassin from his past.",
    "category": "marvel",
    "genres": ["Action", "Thriller", "Sci-Fi"],
    "year": 2014,
    "rating": 8.1,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Guardians of the Galaxy",
    "tagline": "All heroes start somewhere.",
    "description": "A group of intergalactic misfits unite to stop a powerful artifact from falling into dangerous hands.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2014,
    "rating": 8.0,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Guardians of the Galaxy Vol. 2",
    "tagline": "Obviously.",
    "description": "The Guardians face cosmic threats while unraveling the mystery behind Peter Quill's parentage.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2017,
    "rating": 7.6,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Avengers: Age of Ultron",
    "tagline": "A new age begins.",
    "description": "The Avengers battle Ultron, an AI created by Tony Stark that threatens humanity's survival.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2015,
    "rating": 7.3,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Ant-Man",
    "tagline": "Heroes don't get any bigger.",
    "description": "Scott Lang becomes Ant-Man and learns to harness shrinking technology to pull off a high-stakes heist.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Comedy"],
    "year": 2015,
    "rating": 7.3,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Captain America: Civil War",
    "tagline": "Divided we fall.",
    "description": "The Avengers split into opposing factions after political pressure leads to a conflict over accountability.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2016,
    "rating": 7.8,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Black Widow",
    "tagline": "Her world. Her secrets.",
    "description": "Natasha Romanoff confronts her past and a dangerous conspiracy tied to the Red Room.",
    "category": "marvel",
    "genres": ["Action", "Spy", "Adventure"],
    "year": 2021,
    "rating": 6.7,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Black Panther",
    "tagline": "Long live the king.",
    "description": "T'Challa returns home to Wakanda and must defend his throne from a challenger with global ambitions.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2018,
    "rating": 7.3,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Spider-Man: Homecoming",
    "tagline": "Homework can wait. The city can't.",
    "description": "Peter Parker balances high school life with being a hero while facing the tech-powered Vulture.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Comedy"],
    "year": 2017,
    "rating": 7.4,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Doctor Strange",
    "tagline": "Open your mind.",
    "description": "A brilliant surgeon discovers the mystic arts and must protect Earth from interdimensional threats.",
    "category": "marvel",
    "genres": ["Action", "Fantasy", "Sci-Fi"],
    "year": 2016,
    "rating": 7.5,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Thor: Ragnarok",
    "tagline": "No hammer. No problem.",
    "description": "Thor must escape an alien world and stop Hela from destroying Asgard.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Comedy"],
    "year": 2017,
    "rating": 7.9,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Ant-Man and the Wasp",
    "tagline": "Real heroes. Not actual size.",
    "description": "Scott Lang teams up with Hope van Dyne to uncover secrets from the quantum realm while racing against new enemies.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Comedy"],
    "year": 2018,
    "rating": 7.1,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Avengers: Infinity War",
    "tagline": "An entire universe. Once and for all.",
    "description": "The Avengers and their allies face Thanos, a cosmic warlord seeking the Infinity Stones to reshape reality.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2018,
    "rating": 8.4,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Avengers: Endgame",
    "tagline": "Whatever it takes.",
    "description": "The remaining heroes unite for one final mission to reverse the devastation caused by Thanos.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2019,
    "rating": 8.4,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Loki",
    "tagline": "Time is broken.",
    "description": "The God of Mischief navigates timelines and variants while uncovering the secrets of the TVA.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2021,
    "rating": 8.2,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "What If...?",
    "tagline": "One question changes everything.",
    "description": "An animated anthology exploring alternate realities across the multiverse.",
    "category": "marvel",
    "genres": ["Animation", "Action", "Sci-Fi"],
    "year": 2021,
    "rating": 7.4,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "WandaVision",
    "tagline": "Experience a new reality.",
    "description": "Wanda Maximoff and Vision live a suburban life that slowly unravels into a mysterious alternate reality.",
    "category": "marvel",
    "genres": ["Drama", "Mystery", "Sci-Fi"],
    "year": 2021,
    "rating": 7.9,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "The Falcon and the Winter Soldier",
    "tagline": "Honor the shield.",
    "description": "Sam Wilson and Bucky Barnes confront global threats and the legacy of Captain America.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Drama"],
    "year": 2021,
    "rating": 7.2,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Spider-Man: Far From Home",
    "tagline": "Step up.",
    "description": "Peter Parker faces new threats abroad while dealing with the legacy left by Tony Stark.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Comedy"],
    "year": 2019,
    "rating": 7.4,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Spider-Man: No Way Home",
    "tagline": "The multiverse unleashed.",
    "description": "Peter's identity crisis fractures reality, bringing villains from other universes into his world.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2021,
    "rating": 8.2,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "tagline": "A hero will rise.",
    "description": "Shang-Chi confronts his past and his father's powerful secret organization.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Fantasy"],
    "year": 2021,
    "rating": 7.4,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Eternals",
    "tagline": "When you love something, you protect it.",
    "description": "Ancient immortal beings reunite to defend Earth from their long-time enemies, the Deviants.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2021,
    "rating": 6.3,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Hawkeye",
    "tagline": "The past never stays buried.",
    "description": "Clint Barton teams up with young archer Kate Bishop during a holiday mission in New York.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Drama"],
    "year": 2021,
    "rating": 7.5,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Moon Knight",
    "tagline": "Embrace the chaos.",
    "description": "A man with dissociative identity disorder becomes the avatar of an Egyptian moon god.",
    "category": "marvel",
    "genres": ["Action", "Fantasy", "Drama"],
    "year": 2022,
    "rating": 7.3,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Doctor Strange in the Multiverse of Madness",
    "tagline": "Enter a new dimension of strange.",
    "description": "Doctor Strange explores dangerous alternate realities to stop a multiversal threat.",
    "category": "marvel",
    "genres": ["Action", "Fantasy", "Sci-Fi"],
    "year": 2022,
    "rating": 6.9,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Ms. Marvel",
    "tagline": "Not all heroes are born.",
    "description": "Teenager Kamala Khan gains cosmic powers and learns what it truly means to be a hero.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Comedy"],
    "year": 2022,
    "rating": 6.3,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Thor: Love and Thunder",
    "tagline": "The one is not the only.",
    "description": "Thor teams up with allies, including Mighty Thor, to stop a cosmic killer of gods.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Comedy"],
    "year": 2022,
    "rating": 6.2,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "She-Hulk: Attorney at Law",
    "tagline": "Justice has a new side.",
    "description": "Lawyer Jennifer Walters balances her career and life as a green super-powered Hulk.",
    "category": "marvel",
    "genres": ["Comedy", "Action", "Sci-Fi"],
    "year": 2022,
    "rating": 5.3,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Black Panther: Wakanda Forever",
    "tagline": "Forever.",
    "description": "Wakanda faces new global threats while mourning the loss of its king.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Drama"],
    "year": 2022,
    "rating": 6.7,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Werewolf by Night",
    "tagline": "Tonight, monsters hunt.",
    "description": "Monster hunters compete for a powerful relic during a mysterious night of terror.",
    "category": "marvel",
    "genres": ["Horror", "Action", "Fantasy"],
    "year": 2022,
    "rating": 7.1,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "The Guardians of the Galaxy Holiday Special",
    "tagline": "The perfect present.",
    "description": "The Guardians plan a festive adventure to lift Peter Quill's spirits.",
    "category": "marvel",
    "genres": ["Comedy", "Adventure", "Sci-Fi"],
    "year": 2022,
    "rating": 7.0,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Ant-Man and the Wasp: Quantumania",
    "tagline": "Witness the beginning of a new dynasty.",
    "description": "Scott Lang and his family are pulled into the Quantum Realm where they confront Kang the Conqueror.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2023,
    "rating": 6.1,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Guardians of the Galaxy Vol. 3",
    "tagline": "Once more with feeling.",
    "description": "The Guardians embark on a mission to save Rocket while facing their pasts and a new threat.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2023,
    "rating": 8.0,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Secret Invasion",
    "tagline": "Trust no one.",
    "description": "Nick Fury uncovers a covert Skrull infiltration threatening global stability.",
    "category": "marvel",
    "genres": ["Action", "Thriller", "Sci-Fi"],
    "year": 2023,
    "rating": 6.0,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Loki Season 2",
    "tagline": "The timeline is at stake.",
    "description": "Loki navigates a collapsing multiverse while searching for Sylvie and answers.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2023,
    "rating": 8.3,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "The Marvels",
    "tagline": "Higher. Further. Faster. Together.",
    "description": "Captain Marvel teams up with Monica Rambeau and Kamala Khan when their powers become mysteriously linked.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2023,
    "rating": 5.8,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Echo",
    "tagline": "Her story begins.",
    "description": "Maya Lopez returns home and confronts her past and criminal ties.",
    "category": "marvel",
    "genres": ["Action", "Drama", "Crime"],
    "year": 2024,
    "rating": 6.5,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Deadpool and Wolverine",
    "tagline": "Best. Team-up. Ever.",
    "description": "Deadpool disrupts timelines and teams up with Wolverine for a chaotic multiversal mission.",
    "category": "marvel",
    "genres": ["Action", "Comedy", "Sci-Fi"],
    "year": 2024,
    "rating": 8.1,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Agatha All Along",
    "tagline": "The witch returns.",
    "description": "Agatha Harkness embarks on a magical journey after the events of WandaVision.",
    "category": "marvel",
    "genres": ["Fantasy", "Comedy", "Drama"],
    "year": 2024,
    "rating": 7.0,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Daredevil: Born Again Season 1",
    "tagline": "Justice is blind.",
    "description": "Matt Murdock returns to face new threats while balancing his life as a lawyer and vigilante.",
    "category": "marvel",
    "genres": ["Action", "Crime", "Drama"],
    "year": 2025,
    "rating": 8.0,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Captain America: Brave New World",
    "tagline": "A new symbol rises.",
    "description": "Sam Wilson takes on global threats as the new Captain America.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2025,
    "rating": 7.5,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Thunderbolts*",
    "tagline": "Not super. Not heroes.",
    "description": "A group of antiheroes is assembled for a dangerous government mission that could redefine heroism.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Crime"],
    "year": 2025,
    "rating": 7.4,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "The Fantastic Four: First Steps",
    "tagline": "The future begins here.",
    "description": "Marvel's first family embarks on a journey that sets the foundation for a new era of heroes.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2025,
    "rating": 7.8,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Daredevil: Born Again Season 2",
    "tagline": "The fight continues.",
    "description": "Matt Murdock faces escalating threats as the battle for New York intensifies.",
    "category": "marvel",
    "genres": ["Action", "Crime", "Drama"],
    "year": 2026,
    "rating": 8.1,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "Wonder Man",
    "tagline": "Fame is the ultimate superpower.",
    "description": "Simon Williams navigates Hollywood and heroism while discovering what it truly means to be a hero.",
    "category": "marvel",
    "genres": ["Action", "Comedy", "Sci-Fi"],
    "year": 2026,
    "rating": 7.2,
    "poster": placeholder,
    "banner": heroSeries
  },
  {
    "title": "The Punisher (Special Presentation)",
    "tagline": "Vengeance never rests.",
    "description": "Frank Castle returns for a brutal mission that pushes his war on crime to the edge.",
    "category": "marvel",
    "genres": ["Action", "Crime", "Thriller"],
    "year": 2026,
    "rating": 8.0,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Spider-Man: Brand New Day",
    "tagline": "A new chapter begins.",
    "description": "Peter Parker starts fresh while facing new challenges and enemies in a changing world.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2026,
    "rating": 7.9,
    "poster": placeholder,
    "banner": heroMarvel
  },
  {
    "title": "Avengers: Doomsday",
    "tagline": "The end of everything begins.",
    "description": "Earth's heroes unite once again to face a threat that could reshape reality itself.",
    "category": "marvel",
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "year": 2027,
    "rating": 8.5,
    "poster": placeholder,
    "banner": heroMarvel
  }
];

export const extendedMarvelData: EntertainmentItem[] = marvelTitles.map(
  (item, index) => ({
    ...item,
    id: `mx${index + 1}`,
  })
);
