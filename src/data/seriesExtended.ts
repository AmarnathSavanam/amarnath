import type { EntertainmentItem } from "./entertainment";
import heroSeries from "@/assets/hero-series.jpg";

const placeholder = "/placeholder.svg";

const seriesTitles: Omit<EntertainmentItem, "id">[] = [
    {
  title: "Sweet Home",
  tagline: "Monsters are born from human desires.",
  description: "After a mysterious outbreak turns people into terrifying monsters, a reclusive teenager and his neighbors fight to survive inside their apartment complex.",
  category: "series",
  genres: ["Horror", "Action", "Thriller"],
  year: 2020,
  rating: 8.0,
  poster: placeholder,
  banner: heroSeries
},

{
  title: "Undercover High School",
  tagline: "One mission. One classroom.",
  description: "An elite intelligence agent goes undercover as a high school student to uncover a hidden conspiracy, balancing dangerous missions with teenage life.",
  category: "series",
  genres: ["Action", "Comedy", "Mystery"],
  year: 2025,
  rating: 8.2,
  poster: placeholder,
  banner: heroSeries
},
    {
  title: "Vigilante",
  tagline: "Justice begins after midnight.",
  description: "A police academy student secretly hunts down criminals who escaped proper punishment, becoming a feared masked vigilante across the city.",
  category: "series",
  genres: ["Action", "Crime", "Thriller"],
  year: 2023,
  rating: 8.0,
  poster: placeholder,
  banner: heroSeries
},

{
  title: "Duty After School",
  tagline: "Students become soldiers overnight.",
  description: "When mysterious alien spheres invade Earth, high school students are forced into military training and deadly battles to survive.",
  category: "series",
  genres: ["Action", "Sci-Fi", "Thriller"],
  year: 2023,
  rating: 8.1,
  poster: placeholder,
  banner: heroSeries
},
    {
  title: "Deaths Game",
  tagline: "Death is only the beginning.",
  description: "After giving up on life, a desperate man is forced to experience multiple deaths and reincarnations in a deadly punishment designed by Death itself.",
  category: "series",
  genres: ["Fantasy", "Thriller", "Drama"],
  year: 2023,
  rating: 8.5,
  poster: placeholder,
  banner: heroSeries
},

{
  title: "One High School Heroes",
  tagline: "Heroes rise where fear rules.",
  description: "A group of high school students secretly fight violence and corruption inside their school while hiding their extraordinary abilities from the world.",
  category: "series",
  genres: ["Action", "School", "Superhero"],
  year: 2025,
  rating: 7.9,
  poster: placeholder,
  banner: heroSeries
},
    {
  title: "Study Group",
  tagline: "Brains fight harder than fists.",
  description: "A determined student forms a secret study group inside one of the toughest schools, battling bullies and academic pressure to achieve his dream of college success.",
  category: "series",
  genres: ["Action", "Comedy", "School"],
  year: 2025,
  rating: 8.4,
  poster: placeholder,
  banner: heroSeries
},

{
  title: "If Wishes Could Kill",
  tagline: "Every wish demands a price.",
  description: "A dark fantasy thriller where mysterious wishes begin coming true, slowly dragging a group of teenagers into deadly consequences and hidden truths.",
  category: "series",
  genres: ["Fantasy", "Mystery", "Thriller"],
  year: 2024,
  rating: 7.8,
  poster: placeholder,
  banner: heroSeries
},
    {
  title: "Bloodhounds",
  tagline: "Debt turns friendship into war.",
  description: "Two young boxers step into the brutal world of private money lending and ruthless loan sharks to protect the people they love.",
  category: "series",
  genres: ["Action", "Crime", "Thriller"],
  year: 2023,
  rating: 8.1,
  poster: placeholder,
  banner: heroSeries
},
      { title: "Gyaarah Gyaarah", tagline: "Time reveals what truth hides.", description: "A mystery thriller where police officers across different timelines connect through a strange walkie-talkie to solve unresolved crimes.", category: "series", genres: ["Crime", "Sci-Fi", "Thriller"], year: 2024, rating: 8.0, poster: placeholder, banner: heroSeries },
  { title: "Mercy for None", tagline: "Revenge leaves no survivors.", description: "A brutal action thriller following a man who returns from the shadows to settle unfinished business.", category: "series", genres: ["Action", "Crime", "Thriller"], year: 2025, rating: 7.2, poster: placeholder, banner: heroSeries },
  { title: "The WonderFools", tagline: "Heroes don't always look heroic.", description: "A group of misfits unexpectedly gains powers and becomes humanity's unlikely protectors.", category: "series", genres: ["Action", "Comedy", "Fantasy"], year: 2025, rating: 7.0, poster: placeholder, banner: heroSeries },
  { title: "Alice in Borderland", tagline: "Survive the games or disappear forever.", description: "Players trapped in a deadly alternate Tokyo must compete in dangerous survival games.", category: "series", genres: ["Sci-Fi", "Thriller", "Action"], year: 2020, rating: 7.8, poster: placeholder, banner: heroSeries },
  { title: "Lupin", tagline: "The gentleman thief returns.", description: "Inspired by Arsène Lupin, Assane Diop seeks revenge using masterful deception.", category: "series", genres: ["Crime", "Mystery", "Drama"], year: 2021, rating: 7.5, poster: placeholder, banner: heroSeries },
  { title: "Puli Meka", tagline: "Every hunter becomes prey.", description: "A gripping crime thriller involving serial murders and a dangerous psychological chase.", category: "series", genres: ["Crime", "Thriller"], year: 2023, rating: 7.8, poster: placeholder, banner: heroSeries },
  { title: "All of Us Are Dead", tagline: "School became ground zero.", description: "Students trapped in a zombie outbreak must fight to survive inside their high school.", category: "series", genres: ["Horror", "Action", "Thriller"], year: 2022, rating: 7.5, poster: placeholder, banner: heroSeries },
  { title: "The Mystery of Moksha Island", tagline: "The island hides more than treasure.", description: "A group of strangers uncovers terrifying secrets while trapped on a mysterious island.", category: "series", genres: ["Mystery", "Adventure", "Thriller"], year: 2024, rating: 7.1, poster: placeholder, banner: heroSeries },
  { title: "Welcome to Derry", tagline: "Every nightmare starts somewhere.", description: "A prequel exploring the horrifying origins of Pennywise and the cursed town of Derry.", category: "series", genres: ["Horror", "Mystery"], year: 2025, rating: 7.6, poster: placeholder, banner: heroSeries },
  { title: "Alien Earth", tagline: "The nightmare has arrived on Earth.", description: "Humanity faces terror when deadly xenomorphs threaten life on Earth itself.", category: "series", genres: ["Sci-Fi", "Horror"], year: 2025, rating: 7.5, poster: placeholder, banner: heroSeries },
  { title: "Kaos", tagline: "The gods are losing control.", description: "A modern reimagining of Greek mythology where gods and humans collide in chaos.", category: "series", genres: ["Fantasy", "Drama"], year: 2024, rating: 7.4, poster: placeholder, banner: heroSeries },
  { title: "One Piece", tagline: "The great pirate era begins.", description: "Monkey D. Luffy sails across dangerous seas searching for the legendary One Piece treasure.", category: "series", genres: ["Adventure", "Fantasy", "Action"], year: 2023, rating: 8.4, poster: placeholder, banner: heroSeries },
  { title: "Avatar The Last Airbender", tagline: "Master all four elements.", description: "A young Avatar must restore balance to a world devastated by war.", category: "series", genres: ["Fantasy", "Adventure", "Action"], year: 2024, rating: 7.2, poster: placeholder, banner: heroSeries },
  { title: "Dead Boy Detectives", tagline: "Even death can't stop the investigation.", description: "Two ghost detectives solve supernatural mysteries while navigating the afterlife.", category: "series", genres: ["Fantasy", "Mystery", "Comedy"], year: 2024, rating: 7.4, poster: placeholder, banner: heroSeries },
  { title: "Farzi", tagline: "Perfect counterfeit. Perfect crime.", description: "A struggling artist enters the dangerous world of counterfeit money.", category: "series", genres: ["Crime", "Thriller", "Drama"], year: 2023, rating: 8.3, poster: placeholder, banner: heroSeries },
  { title: "3 Body Problem", tagline: "Humanity faces its greatest threat.", description: "Scientists uncover an alien conspiracy that could change the future of civilization forever.", category: "series", genres: ["Sci-Fi", "Mystery", "Drama"], year: 2024, rating: 7.6, poster: placeholder, banner: heroSeries },
  { title: "Gen V", tagline: "Superheroes are trained, not born.", description: "At a university for powered students, young superheroes compete for fame while uncovering deadly secrets hidden by Vought International.", category: "series", genres: ["Action", "Sci-Fi", "Drama"], year: 2023, rating: 7.7, poster: placeholder, banner: heroSeries },
  { title: "Dark Matter", tagline: "Every choice creates another reality.", description: "A physicist is abducted into an alternate version of his life and must fight through parallel realities to return to his family.", category: "series", genres: ["Sci-Fi", "Thriller", "Drama"], year: 2024, rating: 7.8, poster: placeholder, banner: heroSeries },
  { title: "The Boroughs", tagline: "Something sinister watches the neighborhood.", description: "A group of retirees discovers dark supernatural forces lurking beneath the quiet streets of their community.", category: "series", genres: ["Mystery", "Sci-Fi", "Thriller"], year: 2025, rating: 7.1, poster: placeholder, banner: heroSeries },
  { title: "Glory", tagline: "Revenge never forgets.", description: "After years of suffering brutal bullying, a woman carefully executes a long-awaited plan for revenge against those who destroyed her life.", category: "series", genres: ["Drama", "Thriller"], year: 2022, rating: 8.1, poster: placeholder, banner: heroSeries }
,
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
  { title: "Game of Thrones", tagline: "When you play the game of thrones, you win or you die.", description: "Noble families wage war for control of the Iron Throne while an ancient enemy returns after being dormant for millennia.", category: "series", genres: ["Fantasy", "Drama", "Adventure"], year: 2011, rating: 9.2, poster: placeholder, banner: heroSeries },
  { title: "Money Heist", tagline: "The plan is everything.", description: "A criminal mastermind who goes by 'The Professor' recruits a group of thieves to carry out the most ambitious heist in history.", category: "series", genres: ["Crime", "Thriller", "Drama"], year: 2017, rating: 8.2, poster: placeholder, banner: heroSeries },
  { title: "The Last of Us", tagline: "When you're lost in the darkness, look for the light.", description: "In a post-apocalyptic world ravaged by a fungal plague, a hardened survivor is hired to smuggle a teenage girl across what remains of the United States.", category: "series", genres: ["Drama", "Action", "Adventure"], year: 2023, rating: 8.8, poster: placeholder, banner: heroSeries },
  { title: "Scam 1992", tagline: "The man who shook the entire stock market.", description: "A financial thriller based on the life of stockbroker Harshad Mehta and the securities scam that changed India forever.", category: "series", genres: ["Crime", "Drama", "Biography"], year: 2020, rating: 9.3, poster: placeholder, banner: heroSeries },
  { title: "The Boys", tagline: "Superheroes aren't always heroes.", description: "A group of vigilantes fights corrupt superheroes who abuse their powers behind the scenes.", category: "series", genres: ["Action", "Crime", "Sci-Fi"], year: 2019, rating: 8.7, poster: placeholder, banner: heroSeries },
  { title: "The Peripheral", tagline: "The future is already connected.", description: "A young woman discovers a hidden connection to a futuristic reality and a dangerous conspiracy.", category: "series", genres: ["Sci-Fi", "Thriller", "Drama"], year: 2022, rating: 8.0, poster: placeholder, banner: heroSeries },
  { title: "The Heavenly Idol", tagline: "A divine power trapped in an idol world.", description: "A high priest from another world suddenly wakes up in the body of an unpopular K-pop idol.", category: "series", genres: ["Fantasy", "Comedy", "Drama"], year: 2023, rating: 7.1, poster: placeholder, banner: heroSeries },
  { title: "Athidhi", tagline: "Every guest hides a dark secret.", description: "A suspense thriller where mysterious visitors begin changing the lives of everyone around them.", category: "series", genres: ["Thriller", "Mystery"], year: 2023, rating: 6.8, poster: placeholder, banner: heroSeries },
  { title: "Dhoota", tagline: "Destiny arrives before death.", description: "A journalist discovers newspaper clippings that predict horrifying future tragedies.", category: "series", genres: ["Horror", "Mystery", "Thriller"], year: 2023, rating: 7.8, poster: placeholder, banner: heroSeries },
  { title: "Berlin", tagline: "Before the heist came the legend.", description: "Berlin assembles a skilled gang for one of the most ambitious robberies ever attempted.", category: "series", genres: ["Crime", "Thriller", "Drama"], year: 2023, rating: 7.0, poster: placeholder, banner: heroSeries },
  { title: "Harikatha", tagline: "Stories hide terrifying truths.", description: "A dark mystery unfolds through interconnected tales filled with suspense and supernatural twists.", category: "series", genres: ["Mystery", "Thriller"], year: 2024, rating: 7.0, poster: placeholder, banner: heroSeries },
  { title: "Mansion 24", tagline: "Every room hides a nightmare.", description: "A woman searches for her missing father inside a haunted mansion tied to supernatural secrets.", category: "series", genres: ["Horror", "Mystery"], year: 2023, rating: 6.9, poster: placeholder, banner: heroSeries },
  { title: "Gyeongseong Creature", tagline: "Monsters are born from human greed.", description: "During colonial Korea, two individuals battle terrifying creatures born from secret experiments.", category: "series", genres: ["Horror", "Action", "Thriller"], year: 2023, rating: 7.3, poster: placeholder, banner: heroSeries },
  { title: "Vikkatakavi", tagline: "Every clue leads deeper into darkness.", description: "A mystery investigator uncovers hidden truths tied to ancient secrets and dangerous conspiracies.", category: "series", genres: ["Mystery", "Thriller"], year: 2024, rating: 7.1, poster: placeholder, banner: heroSeries },
  { title: "Aindham Vedham", tagline: "Ancient knowledge holds terrifying power.", description: "A mystical thriller centered around hidden scriptures, forgotten history, and supernatural events.", category: "series", genres: ["Mystery", "Fantasy", "Thriller"], year: 2024, rating: 7.0, poster: placeholder, banner: heroSeries },
  { title: "Inspector Rishi", tagline: "Fear hides in the forest.", description: "A police inspector investigates mysterious supernatural killings connected to tribal folklore.", category: "series", genres: ["Crime", "Horror", "Mystery"], year: 2024, rating: 7.2, poster: placeholder, banner: heroSeries },
  { title: "The Secrets of Shiledars", tagline: "History protects deadly secrets.", description: "A hidden order safeguards treasures and secrets tied to India's forgotten past.", category: "series", genres: ["Adventure", "Mystery", "Thriller"], year: 2025, rating: 7.2, poster: placeholder, banner: heroSeries },
  { title: "Yakshini", tagline: "A forbidden spirit awakens.", description: "A mythical yakshini enters the modern world, bringing love, danger, and dark secrets.", category: "series", genres: ["Fantasy", "Romance", "Thriller"], year: 2024, rating: 6.7, poster: placeholder, banner: heroSeries },
  { title: "BET", tagline: "High stakes change lives forever.", description: "A suspense drama revolving around power, betrayal, and dangerous gambling games.", category: "series", genres: ["Thriller", "Drama"], year: 2025, rating: 6.8, poster: placeholder, banner: heroSeries },
  { title: "The Sandman", tagline: "Dreams shape reality.", description: "After years of imprisonment, Dream escapes to restore balance between worlds.", category: "series", genres: ["Fantasy", "Drama", "Horror"], year: 2022, rating: 7.7, poster: placeholder, banner: heroSeries },
  { title: "The Bondsman", tagline: "Debt always comes due.", description: "A bounty hunter becomes entangled in supernatural forces while tracking dangerous fugitives.", category: "series", genres: ["Action", "Fantasy", "Thriller"], year: 2025, rating: 7.0, poster: placeholder, banner: heroSeries },
  { title: "Confidence Queen", tagline: "The perfect scam needs the perfect liar.", description: "A genius con artist manipulates powerful criminals and corporations through elaborate schemes.", category: "series", genres: ["Crime", "Drama"], year: 2025, rating: 7.1, poster: placeholder, banner: heroSeries },
  { title: "Trigger", tagline: "One incident can change everything.", description: "A tense action thriller following individuals caught in deadly conspiracies and violence.", category: "series", genres: ["Action", "Thriller"], year: 2025, rating: 7.0, poster: placeholder, banner: heroSeries },
  { title: "Weak Hero", tagline: "Brains can defeat brutality.", description: "A quiet student fights back against violent bullies using intelligence and strategy.", category: "series", genres: ["Action", "Drama"], year: 2022, rating: 8.5, poster: placeholder, banner: heroSeries },
  { title: "Wednesday", tagline: "Darkness runs in the family.", description: "Wednesday Addams investigates supernatural mysteries at Nevermore Academy.", category: "series", genres: ["Fantasy", "Mystery", "Comedy"], year: 2022, rating: 8.1, poster: placeholder, banner: heroSeries },
  { title: "Genie Make a Wish", tagline: "Every wish has consequences.", description: "A magical genie enters the modern world, granting wishes that spiral out of control.", category: "series", genres: ["Fantasy", "Comedy"], year: 2025, rating: 6.9, poster: placeholder, banner: heroSeries },
  { title: "Agent From Above", tagline: "Heaven sent its most unusual protector.", description: "A supernatural agent descends to Earth to solve mysteries involving humanity and fate.", category: "series", genres: ["Fantasy", "Comedy", "Mystery"], year: 2025, rating: 7.0, poster: placeholder, banner: heroSeries },
  { title: "Young Sherlock", tagline: "The world's greatest detective had to begin somewhere.", description: "A young Sherlock Holmes solves mysteries long before becoming the legendary detective.", category: "series", genres: ["Mystery", "Crime"], year: 2025, rating: 7.5, poster: placeholder, banner: heroSeries }
];

export const extendedSeriesData: EntertainmentItem[] = seriesTitles.map(
  (item, index) => ({
    ...item,
    id: `sx${index + 1}`,
  })
);
