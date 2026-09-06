import type { EntertainmentItem } from "./entertainment";
import { getMovieBanner, getMoviePoster, slugifyMovie } from "./movieImages";

type MovieSeed = {
  title: string;
  year: number;
  rating: number;
  genres: string[];
  tagline: string;
  description: string;
};

const movieSeeds: MovieSeed[] = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genres: ["Sci-Fi", "Thriller", "Action"],
    tagline: "Your mind is the scene of the crime.",
    description:
      "A thief who steals secrets from inside dreams takes on one last job: planting an idea deep in a rival's mind across nested layers of sleep.",
  },
  // ── Wizarding World ─────────────────────────────────────────────
  {
    title: "Harry Potter and the Philosopher's Stone",
    year: 2001,
    rating: 7.6,
    genres: ["Fantasy", "Adventure", "Family"],
    tagline: "Let the magic begin.",
    description:
      "An orphaned boy learns he is a wizard and begins his first year at a hidden school of magic, where an ancient secret is being guarded.",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    rating: 7.4,
    genres: ["Fantasy", "Adventure", "Mystery"],
    tagline: "Something evil has returned.",
    description:
      "A hidden chamber beneath the school is opened, and students begin turning to stone as a young wizard hunts the creature behind the attacks.",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    rating: 7.9,
    genres: ["Fantasy", "Adventure", "Mystery"],
    tagline: "Everything will change.",
    description:
      "An escaped prisoner is hunting a schoolboy wizard, but the truth about that night thirteen years ago is not what anyone believes.",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    year: 2005,
    rating: 7.7,
    genres: ["Fantasy", "Adventure", "Action"],
    tagline: "Dark and difficult times lie ahead.",
    description:
      "A deadly magical tournament pulls an underage champion into three brutal tasks — and into the return of an old enemy.",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    rating: 7.5,
    genres: ["Fantasy", "Adventure", "Drama"],
    tagline: "The rebellion begins.",
    description:
      "With the authorities denying the danger, students secretly train themselves to fight while a hidden order rallies for war.",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    rating: 7.6,
    genres: ["Fantasy", "Adventure", "Drama"],
    tagline: "Dark secrets revealed.",
    description:
      "A mysterious old textbook and buried memories reveal how an immortal enemy was made — and how he might be undone.",
  },
  {
    title: "Harry Potter and the Deathly Hallows - Part 1",
    year: 2010,
    rating: 7.7,
    genres: ["Fantasy", "Adventure", "Drama"],
    tagline: "Nowhere is safe.",
    description:
      "Three friends abandon school and go on the run, searching for the hidden objects that keep a dark wizard alive.",
  },
  {
    title: "Harry Potter and the Deathly Hallows - Part 2",
    year: 2011,
    rating: 8.1,
    genres: ["Fantasy", "Adventure", "Action"],
    tagline: "It all ends here.",
    description:
      "The final battle for the wizarding world erupts at the school where it all began.",
  },
  // ── Adventure & family ──────────────────────────────────────────
  {
    title: "Journey 2: The Mysterious Island",
    year: 2012,
    rating: 5.8,
    genres: ["Adventure", "Fantasy", "Family"],
    tagline: "The legend is real.",
    description:
      "A coded distress signal leads a teenager and his stepfather to an uncharted island of giant creatures and sinking ground.",
  },
  {
    title: "Beauty and the Beast",
    year: 2017,
    rating: 7.1,
    genres: ["Fantasy", "Romance", "Musical"],
    tagline: "Be our guest.",
    description:
      "A bookish young woman trades her freedom for her father's and slowly sees the man behind a cursed creature.",
  },
  {
    title: "Aladdin",
    year: 2019,
    rating: 6.9,
    genres: ["Fantasy", "Adventure", "Musical"],
    tagline: "Choose wisely.",
    description:
      "A street thief finds a lamp holding a wisecracking genie and wishes his way into a palace — and into trouble.",
  },
  {
    title: "The Lion King",
    year: 2019,
    rating: 6.8,
    genres: ["Adventure", "Drama", "Family"],
    tagline: "The king has returned.",
    description:
      "A young lion flees his home after his father's death and must one day return to claim what was taken.",
  },
  {
    title: "The Jungle Book",
    year: 2016,
    rating: 7.4,
    genres: ["Adventure", "Fantasy", "Family"],
    tagline: "The legend comes to life.",
    description:
      "A boy raised by wolves is forced to leave the jungle he calls home when a scarred tiger marks him for death.",
  },
  {
    title: "Jumanji",
    year: 1995,
    rating: 7.0,
    genres: ["Adventure", "Fantasy", "Family"],
    tagline: "Roll the dice and unleash the excitement.",
    description:
      "A cursed board game releases jungle chaos into a quiet town every time the dice are rolled.",
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    year: 2017,
    rating: 6.9,
    genres: ["Adventure", "Comedy", "Action"],
    tagline: "The game has evolved.",
    description:
      "Four students are pulled into a video game and must survive as avatars nothing like themselves.",
  },
  {
    title: "Jumanji: The Next Level",
    year: 2019,
    rating: 6.7,
    genres: ["Adventure", "Comedy", "Action"],
    tagline: "New moves. New rules.",
    description:
      "A glitching game scrambles the players into the wrong bodies and drops them in a harsher world.",
  },
  {
    title: "Kung Fu Panda",
    year: 2008,
    rating: 7.6,
    genres: ["Animation", "Action", "Comedy"],
    tagline: "Prepare for awesomeness.",
    description:
      "A clumsy noodle-shop panda is unexpectedly named the chosen warrior and must learn kung fu fast.",
  },
  {
    title: "Kung Fu Panda 2",
    year: 2011,
    rating: 7.2,
    genres: ["Animation", "Action", "Adventure"],
    tagline: "Find your inner peace.",
    description:
      "A peacock warlord with a devastating weapon forces the panda to confront how his own story began.",
  },
  {
    title: "Kung Fu Panda 3",
    year: 2016,
    rating: 7.1,
    genres: ["Animation", "Action", "Comedy"],
    tagline: "Meet the family.",
    description:
      "Reunited with his birth father, the panda must train a village of pandas to face a spirit-world enemy.",
  },
  {
    title: "Kung Fu Panda 4",
    year: 2024,
    rating: 6.3,
    genres: ["Animation", "Action", "Comedy"],
    tagline: "A new hero rises.",
    description:
      "Asked to name his successor, the panda teams with a quick-fingered thief to stop a shape-shifting sorceress.",
  },
  // ── Pirates ─────────────────────────────────────────────────────
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    rating: 8.1,
    genres: ["Adventure", "Fantasy", "Action"],
    tagline: "Prepare to be blown out of the water.",
    description:
      "A blacksmith joins an eccentric pirate captain to rescue a kidnapped governor's daughter from a cursed crew.",
  },
  {
    title: "Pirates of the Caribbean: Dead Man's Chest",
    year: 2006,
    rating: 7.3,
    genres: ["Adventure", "Fantasy", "Action"],
    tagline: "Jack is back.",
    description:
      "A blood debt to a tentacled sea captain sends the crew hunting for a heart locked in a chest.",
  },
  {
    title: "Pirates of the Caribbean: At World's End",
    year: 2007,
    rating: 7.1,
    genres: ["Adventure", "Fantasy", "Action"],
    tagline: "At the end of the world, the adventure begins.",
    description:
      "Rival pirates sail beyond the edge of the map to rescue a lost captain and face an empire at sea.",
  },
  {
    title: "Pirates of the Caribbean: On Stranger Tides",
    year: 2011,
    rating: 6.6,
    genres: ["Adventure", "Fantasy", "Action"],
    tagline: "Live forever or die trying.",
    description:
      "A race for the fountain of youth throws an unlucky captain in with mermaids, zombies and an old flame.",
  },
  {
    title: "Pirates of the Caribbean: Dead Men Tell No Tales",
    year: 2017,
    rating: 6.5,
    genres: ["Adventure", "Fantasy", "Action"],
    tagline: "The trident breaks every curse.",
    description:
      "Ghostly hunters escape the Devil's Triangle, forcing a scramble for a relic that can undo any curse at sea.",
  },
  // ── Action comedies & heists ────────────────────────────────────
  {
    title: "Rush Hour",
    year: 1998,
    rating: 7.0,
    genres: ["Action", "Comedy", "Crime"],
    tagline: "The fastest hands in the East meet the biggest mouth in the West.",
    description:
      "A Hong Kong detective and a loud LA cop are forced to work a kidnapping case together.",
  },
  {
    title: "Rush Hour 2",
    year: 2001,
    rating: 6.6,
    genres: ["Action", "Comedy", "Crime"],
    tagline: "Get ready for a second rush.",
    description:
      "A vacation in Hong Kong turns into a counterfeiting investigation with a triad boss at the centre.",
  },
  {
    title: "Rush Hour 3",
    year: 2007,
    rating: 6.2,
    genres: ["Action", "Comedy", "Crime"],
    tagline: "The party is on.",
    description:
      "The mismatched partners chase a triad secret through the streets and rooftops of Paris.",
  },
  {
    title: "Red Notice",
    year: 2021,
    rating: 6.3,
    genres: ["Action", "Comedy", "Crime"],
    tagline: "The world's greatest art thieves.",
    description:
      "An FBI profiler is forced to team with a charming thief to catch a rival who always stays one step ahead.",
  },
  {
    title: "Bullet Train",
    year: 2022,
    rating: 7.3,
    genres: ["Action", "Comedy", "Thriller"],
    tagline: "End of the line.",
    description:
      "Five assassins discover their missions overlap aboard a high-speed train they cannot leave.",
  },
  {
    title: "Free Guy",
    year: 2021,
    rating: 7.1,
    genres: ["Action", "Comedy", "Sci-Fi"],
    tagline: "Life's too short to be a background character.",
    description:
      "A cheerful bank teller realises he is a background character in a violent video game and decides to become the hero.",
  },
  {
    title: "Uncharted",
    year: 2022,
    rating: 6.3,
    genres: ["Action", "Adventure"],
    tagline: "Fortune favours the bold.",
    description:
      "A street-smart bartender is recruited to hunt a fortune lost five hundred years ago.",
  },
  {
    title: "The Adam Project",
    year: 2022,
    rating: 6.7,
    genres: ["Sci-Fi", "Action", "Adventure"],
    tagline: "Meet yourself.",
    description:
      "A time-travelling pilot crash-lands in the past and teams with his twelve-year-old self to save the future.",
  },
  {
    title: "F1",
    year: 2025,
    rating: 7.8,
    genres: ["Drama", "Sport", "Action"],
    tagline: "Every second counts.",
    description:
      "A veteran driver returns from obscurity to mentor a hotshot rookie at a struggling racing team.",
  },
  // ── Men in Black ────────────────────────────────────────────────
  {
    title: "Men in Black",
    year: 1997,
    rating: 7.3,
    genres: ["Sci-Fi", "Comedy", "Action"],
    tagline: "Protecting the earth from the scum of the universe.",
    description:
      "A rookie joins a secret agency policing the aliens quietly living among us.",
  },
  {
    title: "Men in Black II",
    year: 2002,
    rating: 6.1,
    genres: ["Sci-Fi", "Comedy", "Action"],
    tagline: "Same planet. New scum.",
    description:
      "A retired agent must have his memory restored to stop an alien threat only he understands.",
  },
  {
    title: "Men in Black 3",
    year: 2012,
    rating: 6.8,
    genres: ["Sci-Fi", "Comedy", "Action"],
    tagline: "They are back in time.",
    description:
      "An agent jumps to 1969 to save his partner's life and rewrite a murder that erased him.",
  },
  {
    title: "Men in Black: International",
    year: 2019,
    rating: 5.6,
    genres: ["Sci-Fi", "Comedy", "Action"],
    tagline: "The universe is expanding.",
    description:
      "A new recruit and a star agent uncover a mole inside the agency's London branch.",
  },
  // ── Avatar ──────────────────────────────────────────────────────
  {
    title: "Avatar",
    year: 2009,
    rating: 7.9,
    genres: ["Sci-Fi", "Adventure", "Action"],
    tagline: "Enter the world.",
    description:
      "A paralysed marine takes on an alien body to infiltrate a forest world — and falls in love with it instead.",
  },
  {
    title: "Avatar: The Way of Water",
    year: 2022,
    rating: 7.5,
    genres: ["Sci-Fi", "Adventure", "Action"],
    tagline: "Return to Pandora.",
    description:
      "A hunted family flees to the reefs and must learn the ways of the ocean clans to survive.",
  },
  {
    title: "Avatar: Fire and Ash",
    year: 2025,
    rating: 8.0,
    genres: ["Sci-Fi", "Adventure", "Action"],
    tagline: "A new clan rises.",
    description:
      "A fierce ash-dwelling clan changes the balance of Pandora as old wounds turn into open war.",
  },
  // ── Jurassic ────────────────────────────────────────────────────
  {
    title: "Jurassic Park",
    year: 1993,
    rating: 8.2,
    genres: ["Sci-Fi", "Adventure", "Thriller"],
    tagline: "An adventure 65 million years in the making.",
    description:
      "A billionaire's cloned-dinosaur park fails catastrophically during its first tour.",
  },
  {
    title: "The Lost World: Jurassic Park",
    year: 1997,
    rating: 6.5,
    genres: ["Sci-Fi", "Adventure", "Thriller"],
    tagline: "Something has survived.",
    description:
      "A second island of free-roaming dinosaurs draws rival expeditions — one to study them, one to ship them home.",
  },
  {
    title: "Jurassic Park III",
    year: 2001,
    rating: 5.9,
    genres: ["Sci-Fi", "Adventure", "Thriller"],
    tagline: "This time it's not just a walk in the park.",
    description:
      "A couple tricks a palaeontologist into flying over the island to search for their missing son.",
  },
  {
    title: "Jurassic World",
    year: 2015,
    rating: 6.9,
    genres: ["Sci-Fi", "Adventure", "Action"],
    tagline: "The park is open.",
    description:
      "A genetically engineered attraction escapes containment at a fully operating dinosaur resort.",
  },
  {
    title: "Jurassic World: Fallen Kingdom",
    year: 2018,
    rating: 6.1,
    genres: ["Sci-Fi", "Adventure", "Action"],
    tagline: "Life finds a way.",
    description:
      "A rescue mission to a volcanic island turns out to be cover for an auction of living weapons.",
  },
  {
    title: "Jurassic World Dominion",
    year: 2022,
    rating: 5.6,
    genres: ["Sci-Fi", "Adventure", "Action"],
    tagline: "The age of dinosaurs.",
    description:
      "With dinosaurs loose worldwide, old and new heroes converge on a biotech company hiding a bigger threat.",
  },
  {
    title: "Jurassic World Rebirth",
    year: 2025,
    rating: 6.4,
    genres: ["Sci-Fi", "Adventure", "Action"],
    tagline: "A new era begins.",
    description:
      "A covert team travels to a forbidden research island to retrieve DNA that could change medicine forever.",
  },
  // ── Transformers ────────────────────────────────────────────────
  {
    title: "Transformers",
    year: 2007,
    rating: 7.0,
    genres: ["Sci-Fi", "Action", "Adventure"],
    tagline: "Their war. Our world.",
    description:
      "A teenager's first car turns out to be an alien robot, dragging him into an ancient machine war.",
  },
  {
    title: "Transformers: Revenge of the Fallen",
    year: 2009,
    rating: 6.0,
    genres: ["Sci-Fi", "Action", "Adventure"],
    tagline: "Revenge is coming.",
    description:
      "An ancient enemy returns hunting a power source hidden on Earth for millennia.",
  },
  {
    title: "Transformers: Dark of the Moon",
    year: 2011,
    rating: 6.2,
    genres: ["Sci-Fi", "Action", "Adventure"],
    tagline: "The invasion we always feared.",
    description:
      "A crashed ship on the moon hides technology that could move an entire alien planet to Earth.",
  },
  {
    title: "Transformers: Age of Extinction",
    year: 2014,
    rating: 5.6,
    genres: ["Sci-Fi", "Action", "Adventure"],
    tagline: "A new age begins.",
    description:
      "An inventor shelters a wounded robot leader while a black-ops unit hunts the survivors.",
  },
  {
    title: "Transformers: The Last Knight",
    year: 2017,
    rating: 5.2,
    genres: ["Sci-Fi", "Action", "Adventure"],
    tagline: "Rethink your heroes.",
    description:
      "A hidden history ties the robot war to ancient legends and a staff buried beneath the sea.",
  },
  {
    title: "Bumblebee",
    year: 2018,
    rating: 6.7,
    genres: ["Sci-Fi", "Action", "Adventure"],
    tagline: "Every hero has a beginning.",
    description:
      "In 1987, a teenage mechanic repairs a battered yellow robot hiding in a junkyard.",
  },
  {
    title: "Transformers: Rise of the Beasts",
    year: 2023,
    rating: 6.0,
    genres: ["Sci-Fi", "Action", "Adventure"],
    tagline: "Unite or fall.",
    description:
      "Animal-formed robots join the fight when a planet-eating force comes looking for a key on Earth.",
  },
  // ── John Wick ───────────────────────────────────────────────────
  {
    title: "John Wick",
    year: 2014,
    rating: 7.4,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "Don't set him off.",
    description:
      "A retired hitman returns to the underworld after gangsters take the last gift from his late wife.",
  },
  {
    title: "John Wick: Chapter 2",
    year: 2017,
    rating: 7.4,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "Never stab the devil in the back.",
    description:
      "A blood oath forces the assassin into one more contract — and puts a global bounty on his head.",
  },
  {
    title: "John Wick: Chapter 3 - Parabellum",
    year: 2019,
    rating: 7.4,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "No way out.",
    description:
      "Excommunicated and hunted by every killer in the city, he calls in favours from a life he left behind.",
  },
  {
    title: "John Wick: Chapter 4",
    year: 2023,
    rating: 7.7,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "One last fight for freedom.",
    description:
      "To buy his freedom, the assassin must beat the high table's champion in a duel at dawn.",
  },
  {
    title: "Ballerina",
    year: 2025,
    rating: 6.9,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "Trained to kill. Driven by revenge.",
    description:
      "A young assassin raised in a ballet company hunts the cult that murdered her father.",
  },
  // ── Horror ──────────────────────────────────────────────────────
  {
    title: "IT",
    year: 2017,
    rating: 7.3,
    genres: ["Horror", "Thriller"],
    tagline: "You'll float too.",
    description:
      "Seven outcast kids face a shape-shifting terror that wakes beneath their town every twenty-seven years.",
  },
  {
    title: "IT Chapter Two",
    year: 2019,
    rating: 6.5,
    genres: ["Horror", "Thriller"],
    tagline: "Come home.",
    description:
      "The grown-up friends return to the town they escaped to finish what they started as children.",
  },
  {
    title: "The Conjuring",
    year: 2013,
    rating: 7.5,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "Based on the true case files.",
    description:
      "Two paranormal investigators help a family terrorised by a presence in their isolated farmhouse.",
  },
  {
    title: "The Conjuring 2",
    year: 2016,
    rating: 7.3,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "The next true story.",
    description:
      "The investigators travel to London to help a single mother whose daughter is being tormented.",
  },
  {
    title: "The Conjuring: The Devil Made Me Do It",
    year: 2021,
    rating: 6.3,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "A murder trial with no precedent.",
    description:
      "A defendant claims possession, sending the investigators into a case built on a hidden curse.",
  },
  {
    title: "The Conjuring: Last Rites",
    year: 2025,
    rating: 6.6,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "One final case.",
    description:
      "The famed investigators take on the haunting that will close their career for good.",
  },
  {
    title: "Annabelle",
    year: 2014,
    rating: 5.4,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "Before the conjuring, there was Annabelle.",
    description:
      "A vintage doll becomes the focus of something violent after a home invasion.",
  },
  {
    title: "Annabelle: Creation",
    year: 2017,
    rating: 6.5,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "You don't know the whole story.",
    description:
      "Orphan girls taken in by a grieving dollmaker discover the room he keeps locked.",
  },
  {
    title: "Annabelle Comes Home",
    year: 2019,
    rating: 5.9,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "Keep her locked up.",
    description:
      "A babysitter and her friend unwittingly free everything inside a collector's artefact room.",
  },
  {
    title: "The Nun",
    year: 2018,
    rating: 5.3,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "Pray for forgiveness.",
    description:
      "A priest and a novice investigate a death at a remote abbey with a very old secret.",
  },
  {
    title: "The Nun II",
    year: 2023,
    rating: 5.6,
    genres: ["Horror", "Mystery", "Thriller"],
    tagline: "Confess.",
    description:
      "The demonic presence resurfaces across Europe, and the same sister is sent to stop it.",
  },
  {
    title: "Final Destination",
    year: 2000,
    rating: 6.7,
    genres: ["Horror", "Thriller"],
    tagline: "You can't cheat death.",
    description:
      "Teens who escape a plane disaster after a premonition start dying in the order they should have.",
  },
  {
    title: "Final Destination 2",
    year: 2003,
    rating: 6.2,
    genres: ["Horror", "Thriller"],
    tagline: "Death is coming back.",
    description:
      "A highway pile-up is avoided by a vision, and the survivors are picked off one by one.",
  },
  {
    title: "Final Destination 3",
    year: 2006,
    rating: 5.8,
    genres: ["Horror", "Thriller"],
    tagline: "This ride will be the death of you.",
    description:
      "Photos taken before a rollercoaster crash hint at how each survivor will die.",
  },
  {
    title: "The Final Destination",
    year: 2009,
    rating: 5.2,
    genres: ["Horror", "Thriller"],
    tagline: "Rest in pieces.",
    description:
      "A racetrack catastrophe is dodged by a premonition, but the reprieve is temporary.",
  },
  {
    title: "Final Destination 5",
    year: 2011,
    rating: 5.9,
    genres: ["Horror", "Thriller"],
    tagline: "Death saved the best for last.",
    description:
      "Survivors of a bridge collapse learn there may be one way to buy more time.",
  },
  {
    title: "Final Destination Bloodlines",
    year: 2025,
    rating: 6.9,
    genres: ["Horror", "Thriller"],
    tagline: "It runs in the family.",
    description:
      "A student's recurring nightmare traces a death sentence back through her own bloodline.",
  },
  {
    title: "Train to Busan",
    year: 2016,
    rating: 7.6,
    genres: ["Horror", "Thriller", "Action"],
    tagline: "Survival on rails.",
    description:
      "A father and daughter are trapped on a speeding train as an outbreak tears through the carriages.",
  },
  // ── Sci-fi & thrillers ──────────────────────────────────────────
  {
    title: "The Tomorrow War",
    year: 2021,
    rating: 6.6,
    genres: ["Sci-Fi", "Action", "Thriller"],
    tagline: "The fight for tomorrow begins today.",
    description:
      "Soldiers from the future draft civilians to fight a war humanity is about to lose.",
  },
  {
    title: "I, Robot",
    year: 2004,
    rating: 7.1,
    genres: ["Sci-Fi", "Action", "Mystery"],
    tagline: "One man saw it coming.",
    description:
      "A robot-hating detective investigates a death that the machines could not possibly have caused.",
  },
  {
    title: "Looper",
    year: 2012,
    rating: 7.4,
    genres: ["Sci-Fi", "Action", "Thriller"],
    tagline: "Hunted by your future self.",
    description:
      "A hitman who kills targets sent back in time faces a contract on his own older self.",
  },
  {
    title: "Passengers",
    year: 2016,
    rating: 7.0,
    genres: ["Sci-Fi", "Romance", "Drama"],
    tagline: "There is a reason they woke up.",
    description:
      "Two travellers wake decades early on a starship and must decide how to spend a life alone together.",
  },
  {
    title: "Moonfall",
    year: 2022,
    rating: 5.1,
    genres: ["Sci-Fi", "Action", "Disaster"],
    tagline: "Our moon is not what we think it is.",
    description:
      "The moon leaves its orbit, and a disgraced astronaut leads a desperate mission to find out why.",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    description:
      "A pilot leaves his children behind to search distant worlds for a home humanity can still reach.",
  },
  {
    title: "Dune",
    year: 2021,
    rating: 8.0,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    tagline: "Fear is the mind-killer.",
    description:
      "A noble family takes control of a desert planet holding the most valuable substance in the universe.",
  },
  {
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.5,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    tagline: "Long live the fighters.",
    description:
      "An exiled heir joins the desert people and becomes the figure their prophecy has been waiting for.",
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    genres: ["Sci-Fi", "Mystery", "Drama"],
    tagline: "There is an order to things.",
    description:
      "A replicant hunter uncovers a buried secret that could unravel what remains of society.",
  },
  {
    title: "Project Hail Mary",
    year: 2026,
    rating: 8.1,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    tagline: "One man. One chance.",
    description:
      "A lone astronaut wakes with no memory aboard a ship sent to stop the sun from dying.",
  },
  {
    title: "The Electric State",
    year: 2025,
    rating: 5.8,
    genres: ["Sci-Fi", "Adventure", "Action"],
    tagline: "The future is a memory.",
    description:
      "In a retro-futuristic America, a teenager and a robot cross the country searching for her brother.",
  },
  {
    title: "The Meg",
    year: 2018,
    rating: 5.6,
    genres: ["Action", "Thriller", "Sci-Fi"],
    tagline: "Pleased to eat you.",
    description:
      "A deep-sea rescue frees a prehistoric shark long believed extinct.",
  },
  {
    title: "Meg 2: The Trench",
    year: 2023,
    rating: 5.1,
    genres: ["Action", "Thriller", "Sci-Fi"],
    tagline: "Back for seconds.",
    description:
      "A research dive into the trench triggers a mining conspiracy — and more than one giant shark.",
  },
  {
    title: "Extraction",
    year: 2020,
    rating: 6.7,
    genres: ["Action", "Thriller"],
    tagline: "No way out.",
    description:
      "A black-market mercenary is hired to rescue a crime lord's kidnapped son from a locked-down city.",
  },
  {
    title: "Extraction 2",
    year: 2023,
    rating: 7.0,
    genres: ["Action", "Thriller"],
    tagline: "Back in the fight.",
    description:
      "Barely recovered, the mercenary takes a job pulling a family out of a Georgian prison.",
  },
  {
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    genres: ["Romance", "Drama", "History"],
    tagline: "Nothing on earth could come between them.",
    description:
      "A young artist and a first-class passenger fall in love on the doomed liner's only voyage.",
  },
  {
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genres: ["Drama", "Thriller"],
    tagline: "Mischief. Mayhem. Soap.",
    description:
      "An insomniac office worker and a soap salesman start an underground club that grows out of control.",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    rating: 8.3,
    genres: ["Drama", "History", "Biography"],
    tagline: "The world forever changes.",
    description:
      "The physicist who led the first atomic bomb project faces the consequences of what he built.",
  },
  {
    title: "Dolittle",
    year: 2020,
    rating: 5.6,
    genres: ["Adventure", "Family", "Fantasy"],
    tagline: "He speaks their language.",
    description:
      "A reclusive doctor who talks to animals sails for a mythical island to find a healing tree.",
  },
  {
    title: "Red One",
    year: 2024,
    rating: 6.6,
    genres: ["Action", "Comedy", "Fantasy"],
    tagline: "Christmas is under attack.",
    description:
      "When Santa is kidnapped, his head of security teams with a bounty hunter to get him back.",
  },
  {
    title: "Mercy",
    year: 2026,
    rating: 6.5,
    genres: ["Sci-Fi", "Thriller", "Crime"],
    tagline: "Justice has no jury.",
    description:
      "A detective accused of murder gets ninety minutes to prove his innocence to an AI judge.",
  },
  {
    title: "Frankenstein",
    year: 2025,
    rating: 7.9,
    genres: ["Horror", "Drama", "Fantasy"],
    tagline: "The maker and the made.",
    description:
      "A brilliant scientist brings a creature to life and refuses to face what he owes it.",
  },
  {
    title: "Odyssey",
    year: 2026,
    rating: 8.0,
    genres: ["Adventure", "Drama", "Fantasy"],
    tagline: "The long way home.",
    description:
      "A war hero's journey home turns into a decade of monsters, gods and impossible choices.",
  },
  {
    title: "Tenant",
    year: 2025,
    rating: 6.4,
    genres: ["Thriller", "Mystery", "Drama"],
    tagline: "Someone else is home.",
    description:
      "A new lodger slowly takes over the life of the family that let him in.",
  },
  // ── Indian cinema ───────────────────────────────────────────────
  {
    title: "RRR",
    year: 2022,
    rating: 7.8,
    genres: ["Action", "Drama", "History"],
    tagline: "Rise. Roar. Revolt.",
    description:
      "Two revolutionaries become close friends without knowing they stand on opposite sides of a colonial hunt.",
  },
  {
    title: "Baahubali: The Beginning",
    year: 2015,
    rating: 8.0,
    genres: ["Action", "Drama", "Fantasy"],
    tagline: "The rise of a legend.",
    description:
      "A village youth scales a great waterfall and discovers he is heir to a stolen kingdom.",
  },
  {
    title: "Baahubali 2: The Conclusion",
    year: 2017,
    rating: 8.2,
    genres: ["Action", "Drama", "Fantasy"],
    tagline: "Why did Kattappa do it?",
    description:
      "The betrayal that broke a dynasty is finally revealed, and the heir returns to claim the throne.",
  },
  {
    title: "Baahubali: The Lost Legends",
    year: 2017,
    rating: 8.3,
    genres: ["Animation", "Action", "Fantasy"],
    tagline: "Tales from Mahishmati.",
    description:
      "Animated adventures filling in the untold years of the kingdom's princes.",
  },
  {
    title: "KGF: Chapter 1",
    year: 2018,
    rating: 8.2,
    genres: ["Action", "Drama", "Crime"],
    tagline: "The rise of a monster.",
    description:
      "A ruthless outsider infiltrates a brutal goldfield empire with a promise made to his mother.",
  },
  {
    title: "KGF: Chapter 2",
    year: 2022,
    rating: 8.3,
    genres: ["Action", "Drama", "Crime"],
    tagline: "The monster becomes a king.",
    description:
      "Holding the goldfields, he faces enemies inside the mines and the full weight of the state.",
  },
  {
    title: "Salaar: Part 1 - Ceasefire",
    year: 2023,
    rating: 6.6,
    genres: ["Action", "Drama", "Thriller"],
    tagline: "A promise between friends.",
    description:
      "A quiet man returns to a lawless city to protect the friend he swore to defend.",
  },
  {
    title: "Saaho",
    year: 2019,
    rating: 5.0,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "Trust no one.",
    description:
      "An undercover officer chases a stolen fortune through a crime syndicate's succession war.",
  },
  {
    title: "Dhruva",
    year: 2016,
    rating: 7.5,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "A cop with a cause.",
    description:
      "An upright officer takes on a calculating criminal mastermind in a battle of wits.",
  },
  {
    title: "Kalki 2898 AD",
    year: 2024,
    rating: 7.0,
    genres: ["Sci-Fi", "Action", "Fantasy"],
    tagline: "The future is mythology.",
    description:
      "In a ruined future city, a bounty hunter and an immortal warrior chase a prophesied child.",
  },
  {
    title: "Kaithi",
    year: 2019,
    rating: 8.4,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "One night. One man.",
    description:
      "A newly released prisoner desperate to meet his daughter is pulled into a night-long police crisis.",
  },
  {
    title: "Vikram",
    year: 2022,
    rating: 8.2,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "Once upon a time there lived a ghost.",
    description:
      "A black-ops agent hunting a masked squad uncovers a drug empire and a legend he thought was dead.",
  },
  {
    title: "Coolie",
    year: 2025,
    rating: 6.5,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "The past comes to collect.",
    description:
      "A retired dock worker returns to the port city to avenge a friend's death.",
  },
  {
    title: "Leo",
    year: 2023,
    rating: 7.1,
    genres: ["Action", "Thriller", "Crime"],
    tagline: "A quiet man with a loud past.",
    description:
      "A small-town café owner is hunted by gangsters who insist he is someone else entirely.",
  },
  {
    title: "Beast",
    year: 2022,
    rating: 5.2,
    genres: ["Action", "Thriller"],
    tagline: "One man against an army.",
    description:
      "A former spy is trapped inside a mall taken over by terrorists.",
  },
  {
    title: "Master",
    year: 2021,
    rating: 7.3,
    genres: ["Action", "Drama", "Thriller"],
    tagline: "The teacher versus the tyrant.",
    description:
      "An alcoholic professor sent to a juvenile home clashes with the gangster exploiting the boys.",
  },
  {
    title: "Madharaasi",
    year: 2025,
    rating: 6.3,
    genres: ["Action", "Thriller", "Drama"],
    tagline: "A mind at war.",
    description:
      "A troubled young man is recruited into a covert operation against an arms network.",
  },
  {
    title: "Maareesan",
    year: 2025,
    rating: 7.4,
    genres: ["Comedy", "Drama", "Crime"],
    tagline: "The road tells the truth.",
    description:
      "A petty thief escorting a forgetful old man discovers the trip has another purpose.",
  },
  {
    title: "Maanaadu",
    year: 2021,
    rating: 8.0,
    genres: ["Action", "Sci-Fi", "Thriller"],
    tagline: "The day repeats.",
    description:
      "A man caught in a time loop keeps reliving the day of a political assassination.",
  },
  {
    title: "Soorarai Pottru",
    year: 2020,
    rating: 8.6,
    genres: ["Drama", "Biography"],
    tagline: "Dream big. Fly higher.",
    description:
      "A determined man from a small village fights the system to launch a low-cost airline.",
  },
  {
    title: "Lucky Baskhar",
    year: 2024,
    rating: 8.1,
    genres: ["Drama", "Crime", "Thriller"],
    tagline: "Every rupee has a story.",
    description:
      "An overlooked bank cashier finds a way to change his family's fortune — and cannot stop.",
  },
  {
    title: "Kuberaa",
    year: 2025,
    rating: 7.9,
    genres: ["Drama", "Crime", "Thriller"],
    tagline: "Wealth changes everything.",
    description:
      "A beggar is pulled into a billionaire's scheme and discovers his own power.",
  },
  {
    title: "Satyam Sundaram",
    year: 2024,
    rating: 7.2,
    genres: ["Drama", "Comedy", "Family"],
    tagline: "Two brothers, one bond.",
    description:
      "Estranged brothers with opposite lives are forced back together by a family crisis.",
  },
  {
    title: "Karuppu",
    year: 2025,
    rating: 7.0,
    genres: ["Action", "Drama", "Thriller"],
    tagline: "Darkness has a name.",
    description:
      "A feared enforcer confronts the village hierarchy that made him.",
  },
  {
    title: "Idli Kadai",
    year: 2025,
    rating: 6.8,
    genres: ["Drama", "Family"],
    tagline: "Home is a taste.",
    description:
      "A son returns from abroad to save the small roadside eatery his father built.",
  },
  {
    title: "Demonte Colony",
    year: 2015,
    rating: 7.4,
    genres: ["Horror", "Thriller"],
    tagline: "Don't go in.",
    description:
      "Friends break into an abandoned colonial bungalow and wake what still lives there.",
  },
  {
    title: "Demonte Colony 2",
    year: 2024,
    rating: 7.0,
    genres: ["Horror", "Thriller"],
    tagline: "The house remembers.",
    description:
      "A survivor is drawn back to the cursed grounds to finish an unresolved haunting.",
  },
  {
    title: "Minnal Murali",
    year: 2021,
    rating: 7.6,
    genres: ["Action", "Comedy", "Fantasy"],
    tagline: "A hero struck by lightning.",
    description:
      "A village tailor gains powers from a lightning strike — and so does someone else.",
  },
  {
    title: "King of Kotha",
    year: 2023,
    rating: 5.6,
    genres: ["Action", "Drama", "Crime"],
    tagline: "The king returns.",
    description:
      "An exiled gangster comes home to reclaim a town from the men who took it.",
  },
  {
    title: "Lokah: Chapter 1 - Chandra",
    year: 2025,
    rating: 8.0,
    genres: ["Fantasy", "Action", "Adventure"],
    tagline: "A new universe begins.",
    description:
      "A quiet newcomer to the city hides an ancient power and a very long past.",
  },
  {
    title: "Little Hearts",
    year: 2025,
    rating: 7.3,
    genres: ["Romance", "Comedy", "Drama"],
    tagline: "Love, awkwardly.",
    description:
      "A shy young man stumbles through first love and family expectations.",
  },
  {
    title: "Biker",
    year: 2025,
    rating: 6.6,
    genres: ["Action", "Drama"],
    tagline: "Ride or nothing.",
    description:
      "A street racer risks everything for one last run that could clear his debts.",
  },
  {
    title: "Animal",
    year: 2023,
    rating: 6.1,
    genres: ["Action", "Drama", "Crime"],
    tagline: "Blood calls blood.",
    description:
      "A son's obsessive devotion to his father turns into a savage war with a rival family.",
  },
  {
    title: "Dhurandhar",
    year: 2025,
    rating: 8.2,
    genres: ["Action", "Thriller", "Drama"],
    tagline: "Deep cover, no way back.",
    description:
      "An operative is planted inside hostile territory on a mission that officially never existed.",
  },
  {
    title: "Dhurandhar: The Revenge",
    year: 2026,
    rating: 8.0,
    genres: ["Action", "Thriller", "Drama"],
    tagline: "The debt comes due.",
    description:
      "The operative returns to settle the score left open by his last mission.",
  },
  {
    title: "They Call Him OG",
    year: 2025,
    rating: 7.5,
    genres: ["Action", "Drama", "Crime"],
    tagline: "The legend walks back in.",
    description:
      "A retired gangster returns to the docks when an old enemy resurfaces.",
  },
  // ── Maddock horror-comedy universe ──────────────────────────────
  {
    title: "Stree",
    year: 2018,
    rating: 7.5,
    genres: ["Horror", "Comedy"],
    tagline: "Come back tomorrow.",
    description:
      "A small town's men vanish during a festival, and a tailor is drawn into the legend behind it.",
  },
  {
    title: "Bhediya",
    year: 2022,
    rating: 7.4,
    genres: ["Horror", "Comedy", "Fantasy"],
    tagline: "The forest bites back.",
    description:
      "A road contractor bitten in a northeastern forest starts turning into something wild.",
  },
  {
    title: "Stree 2: Sarkate Ka Aatank",
    year: 2024,
    rating: 7.4,
    genres: ["Horror", "Comedy"],
    tagline: "The town needs its heroes again.",
    description:
      "A headless terror abducts the women of the town, and the old gang reunites to stop it.",
  },
  {
    title: "Munjya",
    year: 2024,
    rating: 7.0,
    genres: ["Horror", "Comedy", "Fantasy"],
    tagline: "Love him or die.",
    description:
      "A vengeful spirit attaches itself to a timid young man and demands a wedding.",
  },
  {
    title: "Thamma",
    year: 2025,
    rating: 7.1,
    genres: ["Horror", "Comedy", "Romance"],
    tagline: "A bloodline love story.",
    description:
      "A journalist falls for a woman with an ancient secret and joins a world he never believed in.",
  },
];

const seen = new Set<string>();

export const extendedMovieData: EntertainmentItem[] = movieSeeds
  .filter((m) => {
    const slug = slugifyMovie(m.title);
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  })
  .map((m) => ({
    id: `movie-${slugifyMovie(m.title)}`,
    title: m.title,
    tagline: m.tagline,
    description: m.description,
    category: "movies",
    genres: m.genres,
    year: m.year,
    rating: m.rating,
    poster: getMoviePoster(m.title),
    banner: getMovieBanner(m.title),
  })) as EntertainmentItem[];

export default extendedMovieData;
