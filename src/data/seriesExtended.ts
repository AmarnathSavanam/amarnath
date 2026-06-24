import type { EntertainmentItem } from "./entertainment";
import heroSeries from "@/assets/hero-series.jpg";

const placeholder = "/placeholder.svg";

const seriesTitles: Omit<EntertainmentItem, "id">[] = [

  {
  title: "Widow's Bay",
  tagline: "Some towns have secrets. This one has a curse.",
  description: "A skeptical mayor tries to transform a remote New England island into a tourist hotspot, only to discover that the town's terrifying legends and supernatural curse may be real.",
  category: "series",
  genres: ["Horror", "Comedy", "Mystery", "Thriller"],
  year: 2026,
  rating: 8.2,
  poster: placeholder,
  banner: heroSeries,
},
  {
  title: "We Are All Trying Here",
  tagline: "Growing up means finding your own place.",
  description: "A heartfelt coming-of-age story that follows a group of young people as they navigate friendship, family, identity, and the challenges of discovering who they want to become.",
  category: "series",
  genres: ["Drama", "Coming-of-Age", "Slice of Life"],
  year: 2025,
  rating: 8.0,
  poster: placeholder,
  banner: heroSeries
},
  
  {
  title: "Under the Dome",
  tagline: "Trapped beneath an invisible force.",
  description: "The residents of a small town suddenly find themselves cut off from the outside world by a mysterious, invisible dome. As resources dwindle and tensions rise, they must uncover the dome's origin before their community collapses.",
  category: "series",
  genres: ["Sci-Fi", "Mystery", "Drama", "Thriller"],
  year: 2013,
  rating: 6.5,
  poster: placeholder,
  banner: heroSeries
},
  {
  title: "Manipulated",
  tagline: "Truth is the first victim.",
  description: "A gripping thriller where hidden agendas, deception, and power struggles intertwine, forcing the protagonists to uncover the truth before they become pawns in a dangerous game.",
  category: "series",
  genres: ["Thriller", "Mystery", "Drama"],
  year: 2025,
  rating: 8.0,
  poster: placeholder,
  banner: heroSeries
},
  {
  title: "Peaky Blinders",
  tagline: "By order of the Peaky Blinders.",
  description: "Set in post-World War I Birmingham, the series follows Tommy Shelby and the Peaky Blinders gang as they rise from street criminals to powerful figures, facing rival gangs, politicians, and enemies while building a criminal empire.",
  category: "series",
  genres: ["Crime", "Drama", "Historical"],
  year: 2013,
  rating: 8.8,
  poster: placeholder,
  banner: heroSeries
},
   {
  title: "Alchemy of Souls",
  tagline: "Destiny changes when souls collide.",
  description: "In the fictional kingdom of Daeho, a powerful sorceress trapped in a weak body becomes entangled with a nobleman seeking to change his fate, uncovering secrets, forbidden magic, and a destiny that could reshape the world.",
  category: "series",
  genres: ["Fantasy", "Romance", "Action", "Drama"],
  year: 2022,
  rating: 8.8,
  poster: placeholder,
  banner: heroSeries
},
  {
  title: "Fallout",
  tagline: "The world deserves a better ending.",
  description: "Two hundred years after a nuclear apocalypse, a young vault dweller leaves the safety of her underground shelter and discovers a violent wasteland filled with raiders, mutants, and hidden secrets that could change the future of humanity.",
  category: "series",
  genres: ["Sci-Fi", "Action", "Adventure", "Drama"],
  year: 2024,
  rating: 8.4,
  poster: placeholder,
  banner: heroSeries
},
 {
  title: "Big Mouth",
  tagline: "A small-time lawyer trapped in a deadly conspiracy.",
  description: "After being mistaken for a notorious criminal mastermind known as 'Big Mouse,' an unsuccessful lawyer is drawn into a dangerous web of corruption, power, and secrets as he fights to survive and uncover the truth.",
  category: "series",
  genres: ["Thriller", "Mystery", "Crime", "Drama"],
  year: 2022,
  rating: 8.4,
  poster: placeholder,
  banner: heroSeries
},
    { title: "Money Heist", tagline: "The plan is everything.", description: "A criminal mastermind who goes by 'The Professor' recruits a group of thieves to carry out the most ambitious heist in history.", category: "series", genres: ["Crime", "Thriller", "Drama"], year: 2017, rating: 8.2, poster: placeholder, banner: heroSeries },
  {
  title: "Shark: The Storm",
  tagline: "Survival demands strength.",
  description: "After his release from prison, Cha Woo-sol is drawn into a brutal underground fighting world where he must confront powerful enemies and fight to protect those he cares about.",
  category: "series",
  genres: ["Action", "Crime", "Drama"],
  year: 2025,
  rating: 8.2,
  poster: placeholder,
  banner: heroSeries
},
   { title: "Better Call Saul", tagline: "Before he was Saul, he was Jimmy.", description: "The transformation of small-time lawyer Jimmy McGill into the criminal attorney Saul Goodman, years before his dealings with Walter White.", category: "series", genres: ["Crime", "Drama", "Thriller"], year: 2015, rating: 9.0, poster: placeholder, banner: heroSeries },

{
  title: "My Royal Nemesis",
  tagline: "Enemies by fate, lovers by destiny.",
  description: "A historical romance that follows two rivals from opposing sides whose conflicts gradually turn into an unexpected bond, threatening the political order around them.",
  category: "series",
  genres: ["Romance", "Historical", "Drama"],
  year: 2025,
  rating: 7.9,
  poster: placeholder,
  banner: heroSeries
},
    { title: "Wednesday", tagline: "Darkness runs in the family.", description: "Wednesday Addams investigates supernatural mysteries at Nevermore Academy.", category: "series", genres: ["Fantasy", "Mystery", "Comedy"], year: 2022, rating: 8.1, poster: placeholder, banner: heroSeries },

  {
  title: "High School Return of a Gangster",
  tagline: "A gangster gets a second chance at youth.",
  description: "After a gangster's soul enters the body of a bullied high school student, he uses his life experience and fighting skills to protect his new friends, confront school violence, and uncover the truth behind the student's suffering.",
  category: "series",
  genres: ["Action", "Drama", "Fantasy", "School"],
  year: 2024,
  rating: 8.3,
  poster: placeholder,
  banner: heroSeries
},
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
  title: "The King: Eternal Monarch",
  tagline: "Two worlds. One destiny.",
  description: "A modern-day emperor discovers a mysterious portal connecting two parallel worlds and joins forces with a determined detective to stop evil from disrupting reality itself.",
  category: "series",
  genres: ["Fantasy", "Romance", "Sci-Fi", "Mystery"],
  year: 2020,
  rating: 8.1,
  poster: placeholder,
  banner: heroSeries
},
  {
  title: "Mirzapur",
  tagline: "Power. Revenge. Blood.",
  description: "Set in the lawless city of Mirzapur, the series follows the ruthless Kaleen Bhaiya, his family, and two brothers who are drawn into a violent world of crime, politics, and revenge as they fight for power and survival.",
  category: "series",
  genres: ["Crime", "Action", "Thriller", "Drama"],
  year: 2018,
  rating: 8.4,
  poster: placeholder,
  banner: heroSeries
},
              { title: "Glory", tagline: "Revenge never forgets.", description: "After years of suffering brutal bullying, a woman carefully executes a long-awaited plan for revenge against those who destroyed her life.", category: "series", genres: ["Drama", "Thriller"], year: 2022, rating: 8.1, poster: placeholder, banner: heroSeries },

        {
  title: "Ghost Doctor",
  tagline: "Two doctors. One body. One extraordinary mission.",
  description: "A brilliant surgeon becomes a spirit after a tragic accident and teams up with an inexperienced doctor by possessing his body, creating an unusual partnership that saves lives.",
  category: "series",
  genres: ["Medical", "Fantasy", "Comedy", "Drama"],
  year: 2022,
  rating: 8.0,
  poster: placeholder,
  banner: heroSeries,
},
      {
  title: "Rana Naidu",
  tagline: "He fixes everyone else's problems except his own.",
  description: "Rana Naidu is the go-to fixer for the rich and powerful, solving their biggest problems behind the scenes. But when his estranged father is released from prison, his personal life begins to unravel, forcing him to confront family secrets and dangerous enemies.",
  category: "series",
  genres: ["Crime", "Action", "Drama", "Thriller"],
  year: 2023,
  rating: 7.1,
  poster: placeholder,
  banner: heroSeries
},    {
  title: "Sisyphus: The Myth",
  tagline: "The future is coming for him.",
  description: "A genius engineer and a mysterious warrior from the future join forces to stop a catastrophic event and uncover the truth behind a dangerous time-travel conspiracy.",
  category: "series",
  genres: ["Science Fiction", "Action", "Mystery", "Thriller"],
  year: 2021,
  rating: 7.1,
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
  title: "Feel Good to Die",
  tagline: "To save him, she must relive the same day.",
  description: "A woman becomes trapped in a time loop and repeatedly relives the same day, trying to prevent her difficult boss from meeting a tragic fate while discovering unexpected truths about life and love.",
  category: "series",
  genres: ["Romance", "Comedy", "Fantasy"],
  year: 2018,
  rating: 7.7,
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
  title: "Bon Appétit, Your Majesty",
  tagline: "Where royal tradition meets culinary excellence.",
  description: "An elegant culinary series exploring the lavish feasts, historic recipes, and extraordinary chefs behind the world's most renowned royal courts.",
  category: "series",
  genres: ["Food", "Documentary", "History"],
  year: 2024,
  rating: 8.1,
  poster: "/bon-appetit-your-majesty.jpg",
  banner: "/bon-appetit-your-majesty-banner.jpg"
},
      { title: "Dark Matter", tagline: "Every choice creates another reality.", description: "A physicist is abducted into an alternate version of his life and must fight through parallel realities to return to his family.", category: "series", genres: ["Sci-Fi", "Thriller", "Drama"], year: 2024, rating: 7.8, poster: placeholder, banner: heroSeries },
      {
  title: "Legends from the Kitchen",
  tagline: "Every recipe tells a story.",
  description: "A culinary journey exploring the origins, myths, and remarkable stories behind iconic dishes and legendary chefs from around the world.",
  category: "series",
  genres: ["Food", "Documentary", "Lifestyle"],
  year: 2026,
  rating: 8.2,
  poster: placeholder,
  banner: heroSeries
},
      { title: "The Boroughs", tagline: "Something sinister watches the neighborhood.", description: "A group of retirees discovers dark supernatural forces lurking beneath the quiet streets of their community.", category: "series", genres: ["Mystery", "Sci-Fi", "Thriller"], year: 2025, rating: 7.1, poster: placeholder, banner: heroSeries },
    {
  title: "Yu Yu Hakusho",
  tagline: "A delinquent returns from death to protect the living.",
  description: "After sacrificing his life to save a child, Yusuke Urameshi is revived as a Spirit Detective and battles demons threatening the human world.",
  category: "series",
  genres: ["Action", "Fantasy", "Supernatural"],
  year: 2023,
  rating: 7.2,
  poster: placeholder,
  banner: heroSeries,
},
 { title: "Stranger Things", tagline: "The world is turning upside down.", description: "When a boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one very strange little girl.", category: "series", genres: ["Sci-Fi", "Horror", "Mystery"], year: 2016, rating: 8.7, poster: placeholder, banner: heroSeries },
{
  title: "Twelve",
  tagline: "Twelve zodiac warriors. One deadly battle.",
  description: "Twelve warriors representing the Chinese zodiac fight in a brutal survival tournament where only one can claim victory and have their wish granted.",
  category: "series",
  genres: ["Action", "Fantasy", "Psychological"],
  year: 2017,
  rating: 6.5,
  poster: placeholder,
  banner: heroSeries,
},

{
  title: "Good Boy",
  tagline: "Former champions. New fight for justice.",
  description: "Retired national athletes join a special police unit, using their unique skills to tackle crime and corruption.",
  category: "series",
  genres: ["Action", "Comedy", "Crime"],
  year: 2025,
  rating: 8.2,
  poster: placeholder,
  banner: heroSeries,
},
 { title: "The Last of Us", tagline: "When you're lost in the darkness, look for the light.", description: "In a post-apocalyptic world ravaged by a fungal plague, a hardened survivor is hired to smuggle a teenage girl across what remains of the United States.", category: "series", genres: ["Drama", "Action", "Adventure"], year: 2023, rating: 8.8, poster: placeholder, banner: heroSeries
 },
      { title: "3 Body Problem", tagline: "Humanity faces its greatest threat.", description: "Scientists uncover an alien conspiracy that could change the future of civilization forever.", category: "series", genres: ["Sci-Fi", "Mystery", "Drama"], year: 2024, rating: 7.6, poster: placeholder, banner: heroSeries },

  { title: "Avatar The Last Airbender", tagline: "Master all four elements.", description: "A young Avatar must restore balance to a world devastated by war.", category: "series", genres: ["Fantasy", "Adventure", "Action"], year: 2024, rating: 7.2, poster: placeholder, banner: heroSeries },
{
  title: "Parasyte: The Grey",
  tagline: "When humanity becomes the prey.",
  description: "Parasitic lifeforms secretly invade Earth, taking over human bodies, while a young woman forms an unusual bond with one of them.",
  category: "series",
  genres: ["Sci-Fi", "Horror", "Thriller"],
  year: 2024,
  rating: 7.8,
  poster: placeholder,
  banner: heroSeries,
},
    
   {
  title: "Reborn Rich",
  tagline: "A second life. A perfect revenge.",
  description: "After being betrayed and murdered by the powerful Soonyang family, a loyal employee is reborn as their youngest grandson. Armed with knowledge of the future, he plots his revenge while fighting for control of the conglomerate.",
  category: "series",
  genres: ["Drama", "Fantasy", "Business", "Revenge"],
  year: 2022,
  rating: 8.1,
  poster: placeholder,
  banner: heroSeries
},
   { title: "Game of Thrones", tagline: "When you play the game of thrones, you win or you die.", description: "Noble families wage war for control of the Iron Throne while an ancient enemy returns after being dormant for millennia.", category: "series", genres: ["Fantasy", "Drama", "Adventure"], year: 2011, rating: 9.2, poster: placeholder, banner: heroSeries },
{
  title: "Phantom Lawyer",
  tagline: "The dead deserve justice too.",
  description: "A struggling lawyer gains the ability to see and be possessed by ghosts, taking on supernatural cases to help restless spirits uncover the truth and find justice.",
  category: "series",
  genres: ["Supernatural", "Mystery", "Legal"],
  year: 2026,
  rating: 8.3,
  poster: placeholder,
  banner: heroSeries
},
  { title: "Berlin", tagline: "Before the heist came the legend.", description: "Berlin assembles a skilled gang for one of the most ambitious robberies ever attempted.", category: "series", genres: ["Crime", "Thriller", "Drama"], year: 2023, rating: 7.0, poster: placeholder, banner: heroSeries },

 {
  title: "Bring It On, Ghost",
  tagline: "Some ghosts need saving too.",
  description: "A college student who can see ghosts teams up with a spirited ghost girl to fight evil spirits and uncover the mystery behind her lost memories.",
  category: "series",
  genres: ["Fantasy", "Comedy", "Romance"],
  year: 2016,
  rating: 7.9,
  poster: placeholder,
  banner: heroSeries
},
 {
  title: "Scam 2003: The Telgi Story",
  tagline: "The man behind India's biggest stamp paper scam.",
  description: "Based on the life of Abdul Karim Telgi, the series chronicles his rise from a small-time businessman to the mastermind behind one of India's largest financial scams.",
  category: "series",
  genres: ["Biography", "Crime", "Drama", "Thriller"],
  year: 2023,
  rating: 8.0,
  poster: placeholder,
  banner: heroSeries
},
  {
  title: "Harikatha",
  tagline: "When faith turns into fear.",
  description: "A police officer with a troubled past investigates a series of mysterious murders in a quiet village, where a self-proclaimed god unleashes terror and hidden secrets begin to surface.",
  category: "series",
  genres: ["Crime", "Thriller", "Mystery", "Fantasy"],
  year: 2024,
  rating: 7.2,
  poster: placeholder,
  banner: heroSeries
},
            { title: "Weak Hero", tagline: "Brains can defeat brutality.", description: "A quiet student fights back against violent bullies using intelligence and strategy.", category: "series", genres: ["Action", "Drama"], year: 2022, rating: 8.5, poster: placeholder, banner: heroSeries },
  { title: "The Boys", tagline: "Superheroes aren't always heroes.", description: "A group of vigilantes fights corrupt superheroes who abuse their powers behind the scenes.", category: "series", genres: ["Action", "Crime", "Sci-Fi"], year: 2019, rating: 8.7, poster: placeholder, banner: heroSeries },
          { title: "Agent From Above", tagline: "Heaven sent its most unusual protector.", description: "A supernatural agent descends to Earth to solve mysteries involving humanity and fate.", category: "series", genres: ["Fantasy", "Comedy", "Mystery"], year: 2025, rating: 7.0, poster: placeholder, banner: heroSeries },
{ title: "Young Sherlock", tagline: "The world's greatest detective had to begin somewhere.", description: "A young Sherlock Holmes solves mysteries long before becoming the legendary detective.", category: "series", genres: ["Mystery", "Crime"], year: 2025, rating: 7.5, poster: placeholder, banner: heroSeries },
          {
  title: "Mouse",
  tagline: "Can evil be born?",
  description: "A rookie police officer becomes entangled in a series of brutal murders that force him to confront shocking truths about psychopathy and human nature.",
  category: "series",
  genres: ["Crime", "Mystery", "Thriller"],
  year: 2021,
  rating: 8.6,
  poster: placeholder,
  banner: heroSeries
},
  {
  title: "Puli Meka",
  tagline: "A hunter becomes the hunted.",
  description: "When a serial killer begins targeting police officers, an experienced officer returns to investigate the murders. As the mystery deepens, hidden secrets, conspiracies, and dangerous truths come to light.",
  category: "series",
  genres: ["Crime", "Thriller", "Mystery", "Drama"],
  year: 2023,
  rating: 7.8,
  poster: placeholder,
  banner: heroSeries
},

{
  title: "Reborn Rookie",
  tagline: "The boss starts from the bottom.",
  description: "After a mysterious accident, a legendary business chairman wakes up in the body of a young athlete and returns to his own company as a rookie employee, uncovering corruption and family secrets from the ground up.",
  category: "series",
  genres: ["Fantasy", "Business", "Mystery"],
  year: 2026,
  rating: 8.1,
  poster: placeholder,
  banner: heroSeries
},
    { title: "The Secrets of Shiledars", tagline: "History protects deadly secrets.", description: "A hidden order safeguards treasures and secrets tied to India's forgotten past.", category: "series", genres: ["Adventure", "Mystery", "Thriller"], year: 2025, rating: 7.2, poster: placeholder, banner: heroSeries },
 

     {
  title: "Teach You a Lesson",
  tagline: "Every action has consequences.",
  description: "After years of bullying and betrayal, a determined victim returns to confront those who ruined their life, turning revenge into a carefully planned lesson.",
  category: "series",
  genres: ["Drama", "Thriller", "Revenge"],
  year: 2024,
  rating: 7.9,
  poster: placeholder,
  banner: heroSeries
},
       { title: "The Sandman", tagline: "Dreams shape reality.", description: "After years of imprisonment, Dream escapes to restore balance between worlds.", category: "series", genres: ["Fantasy", "Drama", "Horror"], year: 2022, rating: 7.7, poster: placeholder, banner: heroSeries },       
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
  { title: "Yakshini", tagline: "A forbidden spirit awakens.", description: "A mythical yakshini enters the modern world, bringing love, danger, and dark secrets.", category: "series", genres: ["Fantasy", "Romance", "Thriller"], year: 2024, rating: 6.7, poster: placeholder, banner: heroSeries },

    {
  title: "Light Shop",
  tagline: "Every light hides a secret.",
  description: "Strangers connected by mysterious pasts are drawn to a strange lamp shop that stands between the world of the living and the dead.",
  category: "series",
  genres: ["Mystery", "Fantasy", "Drama"],
  year: 2024,
  rating: 8.2,
  poster: placeholder,
  banner: heroSeries
},

  { title: "Lupin", tagline: "The gentleman thief returns.", description: "Inspired by Arsène Lupin, Assane Diop seeks revenge using masterful deception.", category: "series", genres: ["Crime", "Mystery", "Drama"], year: 2021, rating: 7.5, poster: placeholder, banner: heroSeries },
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
  { title: "The Bondsman", tagline: "Debt always comes due.", description: "A bounty hunter becomes entangled in supernatural forces while tracking dangerous fugitives.", category: "series", genres: ["Action", "Fantasy", "Thriller"], year: 2025, rating: 7.0, poster: placeholder, banner: heroSeries }
 ,

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
      { title: "Gyaarah Gyaarah", tagline: "Time reveals what truth hides.", description: "A mystery thriller where police officers across different timelines connect through a strange walkie-talkie to solve unresolved crimes.", category: "series", genres: ["Crime", "Sci-Fi", "Thriller"], year: 2024, rating: 8.0, poster: placeholder, banner: heroSeries },

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
    { title: "Welcome to Derry", tagline: "Every nightmare starts somewhere.", description: "A prequel exploring the horrifying origins of Pennywise and the cursed town of Derry.", category: "series", genres: ["Horror", "Mystery"], year: 2025, rating: 7.6, poster: placeholder, banner: heroSeries },

    
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
    { title: "BET", tagline: "High stakes change lives forever.", description: "A suspense drama revolving around power, betrayal, and dangerous gambling games.", category: "series", genres: ["Thriller", "Drama"], year: 2025, rating: 6.8, poster: placeholder, banner: heroSeries }
, 
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
  { title: "Alien Earth", tagline: "The nightmare has arrived on Earth.", description: "Humanity faces terror when deadly xenomorphs threaten life on Earth itself.", category: "series", genres: ["Sci-Fi", "Horror"], year: 2025, rating: 7.5, poster: placeholder, banner: heroSeries },

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
  { title: "1899", tagline: "The ship holds secrets beneath the surface.", description: "Migrants on a steamship heading to New York encounter a second vessel adrift on the open sea, triggering a horrifying chain of events that connects them all.", category: "series", genres: ["Mystery", "Sci-Fi", "Thriller"], year: 2022, rating: 7.3, poster: placeholder, banner: heroSeries },

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
      { title: "Kaos", tagline: "The gods are losing control.", description: "A modern reimagining of Greek mythology where gods and humans collide in chaos.", category: "series", genres: ["Fantasy", "Drama"], year: 2024, rating: 7.4, poster: placeholder, banner: heroSeries },
  { title: "Mercy for None", tagline: "Revenge leaves no survivors.", description: "A brutal action thriller following a man who returns from the shadows to settle unfinished business.", category: "series", genres: ["Action", "Crime", "Thriller"], year: 2025, rating: 7.2, poster: placeholder, banner: heroSeries },
  { title: "The Peripheral", tagline: "The future is already connected.", description: "A young woman discovers a hidden connection to a futuristic reality and a dangerous conspiracy.", category: "series", genres: ["Sci-Fi", "Thriller", "Drama"], year: 2022, rating: 8.0, poster: placeholder, banner: heroSeries },
    { title: "The WonderFools", tagline: "Heroes don't always look heroic.", description: "A group of misfits unexpectedly gains powers and becomes humanity's unlikely protectors.", category: "series", genres: ["Action", "Comedy", "Fantasy"], year: 2025, rating: 7.0, poster: placeholder, banner: heroSeries },
  { title: "Athidhi", tagline: "Every guest hides a dark secret.", description: "A suspense thriller where mysterious visitors begin changing the lives of everyone around them.", category: "series", genres: ["Thriller", "Mystery"], year: 2023, rating: 6.8, poster: placeholder, banner: heroSeries },
    { title: "All of Us Are Dead", tagline: "School became ground zero.", description: "Students trapped in a zombie outbreak must fight to survive inside their high school.", category: "series", genres: ["Horror", "Action", "Thriller"], year: 2022, rating: 7.5, poster: placeholder, banner: heroSeries },
  { title: "Farzi", tagline: "Perfect counterfeit. Perfect crime.", description: "A struggling artist enters the dangerous world of counterfeit money.", category: "series", genres: ["Crime", "Thriller", "Drama"], year: 2023, rating: 8.3, poster: placeholder, banner: heroSeries },
   { title: "Alice in Borderland", tagline: "Survive the games or disappear forever.", description: "Players trapped in a deadly alternate Tokyo must compete in dangerous survival games.", category: "series", genres: ["Sci-Fi", "Thriller", "Action"], year: 2020, rating: 7.8, poster: placeholder, banner: heroSeries },
  { title: "Dead Boy Detectives", tagline: "Even death can't stop the investigation.", description: "Two ghost detectives solve supernatural mysteries while navigating the afterlife.", category: "series", genres: ["Fantasy", "Mystery", "Comedy"], year: 2024, rating: 7.4, poster: placeholder, banner: heroSeries },
    { title: "Confidence Queen", tagline: "The perfect scam needs the perfect liar.", description: "A genius con artist manipulates powerful criminals and corporations through elaborate schemes.", category: "series", genres: ["Crime", "Drama"], year: 2025, rating: 7.1, poster: placeholder, banner: heroSeries },
  { title: "Aindham Vedham", tagline: "Ancient knowledge holds terrifying power.", description: "A mystical thriller centered around hidden scriptures, forgotten history, and supernatural events.", category: "series", genres: ["Mystery", "Fantasy", "Thriller"], year: 2024, rating: 7.0, poster: placeholder, banner: heroSeries },
 { title: "Trigger", tagline: "One incident can change everything.", description: "A tense action thriller following individuals caught in deadly conspiracies and violence.", category: "series", genres: ["Action", "Thriller"], year: 2025, rating: 7.0, poster: placeholder, banner: heroSeries },
     { title: "Gen V", tagline: "Superheroes are trained, not born.", description: "At a university for powered students, young superheroes compete for fame while uncovering deadly secrets hidden by Vought International.", category: "series", genres: ["Action", "Sci-Fi", "Drama"], year: 2023, rating: 7.7, poster: placeholder, banner: heroSeries },
 { title: "Genie Make a Wish", tagline: "Every wish has consequences.", description: "A magical genie enters the modern world, granting wishes that spiral out of control.", category: "series", genres: ["Fantasy", "Comedy"], year: 2025, rating: 6.9, poster: placeholder, banner: heroSeries },
{ title: "Vikkatakavi", tagline: "Every clue leads deeper into darkness.", description: "A mystery investigator uncovers hidden truths tied to ancient secrets and dangerous conspiracies.", category: "series", genres: ["Mystery", "Thriller"], year: 2024, rating: 7.1, poster: placeholder, banner: heroSeries }, 
      { title: "Squid Game", tagline: "Win the game or lose everything.", description: "Hundreds of cash-strapped contestants accept an invitation to compete in deadly children's games for a chance to win a life-changing prize.", category: "series", genres: ["Thriller", "Drama", "Mystery"], year: 2021, rating: 8.0, poster: placeholder, banner: heroSeries },
{
  title: "The Mystery of Moksha Island",
  tagline: "A deadly invitation. A mysterious island. No one is safe.",
  description: "After a powerful scientist's death, his relatives are invited to a remote island to claim a vast inheritance. What begins as a family gathering soon turns into a terrifying survival game filled with secrets, betrayals, and shocking discoveries.",
  category: "series",
  genres: ["Thriller", "Mystery", "Sci-Fi", "Drama"],
  year: 2024,
  rating: 4.2,
  poster: placeholder,
  banner: heroSeries,
},
    { title: "Cashero", tagline: "Money is power.", description: "A financial thriller where an unlikely hero uses cunning and bravery to navigate a dangerous world of money and power.", category: "series", genres: ["Thriller", "Drama"], year: 2024, rating: 7.2, poster: placeholder, banner: heroSeries },
  { title: "Scam 1992", tagline: "The man who shook the entire stock market.", description: "A financial thriller based on the life of stockbroker Harshad Mehta and the securities scam that changed India forever.", category: "series", genres: ["Crime", "Drama", "Biography"], year: 2020, rating: 9.3, poster: placeholder, banner: heroSeries },
  { title: "The Last Samurai", tagline: "Honor. Courage. Loyalty.", description: "An American military officer is captured by samurai warriors and becomes immersed in their dying culture, finding himself torn between two worlds.", category: "series", genres: ["Drama", "Action", "Adventure"], year: 2003, rating: 7.8, poster: placeholder, banner: heroSeries },
  { title: "Dhoota", tagline: "Destiny arrives before death.", description: "A journalist discovers newspaper clippings that predict horrifying future tragedies.", category: "series", genres: ["Horror", "Mystery", "Thriller"], year: 2023, rating: 7.8, poster: placeholder, banner: heroSeries },
    { title: "The Heavenly Idol", tagline: "A divine power trapped in an idol world.", description: "A high priest from another world suddenly wakes up in the body of an unpopular K-pop idol.", category: "series", genres: ["Fantasy", "Comedy", "Drama"], year: 2023, rating: 7.1, poster: placeholder, banner: heroSeries },
       { title: "Inspector Rishi", tagline: "Fear hides in the forest.", description: "A police inspector investigates mysterious supernatural killings connected to tribal folklore.", category: "series", genres: ["Crime", "Horror", "Mystery"], year: 2024, rating: 7.2, poster: placeholder, banner: heroSeries },
        { title: "Gyeongseong Creature", tagline: "Monsters are born from human greed.", description: "During colonial Korea, two individuals battle terrifying creatures born from secret experiments.", category: "series", genres: ["Horror", "Action", "Thriller"], year: 2023, rating: 7.3, poster: placeholder, banner: heroSeries },
  { title: "Mansion 24", tagline: "Every room hides a nightmare.", description: "A woman searches for her missing father inside a haunted mansion tied to supernatural secrets.", category: "series", genres: ["Horror", "Mystery"], year: 2023, rating: 6.9, poster: placeholder, banner: heroSeries }
,{
  title: "Viral Hit",
  tagline: "One stream can change everything.",
  description: "A timid high school student unexpectedly becomes an online sensation after starting a channel dedicated to fighting stronger opponents and sharing his strategies with the world.",
  category: "series",
  genres: ["Action", "Comedy", "Drama"],
  year: 2024,
  rating: 8.0,
  poster: placeholder,
  banner: heroSeries
}
];

export const extendedSeriesData: EntertainmentItem[] = seriesTitles.map(
  (item, index) => ({
    ...item,
    id: `sx${index + 1}`,
  })
);
