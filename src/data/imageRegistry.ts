/**
 * Image Registry — centralised image lookup for any title.
 */

interface ImageEntry {
  poster?: string;
  banner?: string;
}
const imageRegistry: Record<string, ImageEntry> = {
  "zom-100": {
    poster: "/zom100.jpg",
    banner: "/zom100b.jpg",
  },

  "attack-on-titan": {
    poster: "/aot.jpg",
    banner: "/aot-banner.jpg",
  },

  "fullmetal-alchemist-brotherhood": {
    poster: "/fmab.jpg",
    banner: "/fmab-banner.jpg",
  },

  "black-clover": {
    poster: "/black-clover.jpg",
    banner: "/black-clover-banner.jpg",
  },

  "my-hero-academia": {
    poster: "/mha1.jpg",
    banner: "/mha-banner.png",
  },

  "yo-kai-watch": {
    poster: "/yokai.jpg",
    banner: "/yokai-banner.jpg",
  },
  "re-zero-starting-life-in-another-world": {
  poster: "/images/re-zero.jpg",
  banner: "/images/re-zero-banner.jpg",
},
  "demon-slayer": {
  poster: "/images/demon-slayer.jpg",
  banner: "/images/demon-slayer-banner.jpg",
},
  "dr-stone": {
  poster: "/images/dr-stone.jpg",
  banner: "/images/dr-stone-banner.jpg",
},
  "that-time-i-got-reincarnated-as-a-slime": {
  poster: "/images/slime.jpg",
  banner: "/images/slime-banner.jpg",
},
  "haikyuu": {
  poster: "/images/haikyuu.jpg",
  banner: "/images/haikyuu-banner.jpg",
},
  "monster": {
  poster: "/images/monster.jpg",
  banner: "/images/monster-banner.jpg",
},
  "the-rising-of-the-shield-hero": {
  poster: "/images/shield-hero.jpg",
  banner: "/images/shield-hero-banner.jpg",
},
  "overlord": {
  poster: "/images/overlord.jpg",
  banner: "/images/overlord-banner.jpg",
},
  "vinland-saga": {
  poster: "/images/vinland-saga.jpg",
  banner: "/images/vinland-saga-banner.jpg",
},

"jujutsu-kaisen": {
  poster: "/images/jujutsu-kaisen.jpg",
  banner: "/images/jujutsu-kaisen-banner.jpg",
},

"tokyo-revengers": {
  poster: "/images/tokyo-revengers.jpg",
  banner: "/images/tokyo-revengers-banner.jpg",
},

"tokyo-ghoul": {
  poster: "/images/tokyo-ghoul.jpg",
  banner: "/images/tokyo-ghoul-banner.jpg",
},

"shangri-la-frontier": {
  poster: "/images/shangri-la-frontier.jpg",
  banner: "/images/shangri-la-frontier-banner.png",
},

"slugterra": {
  poster: "/images/slugterra.jpg",
  banner: "/images/slugterra-banner.jpg",
},

"spy-x-family": {
  poster: "/images/spy-x-family.jpg",
  banner: "/images/spy-x-family-banner.jpg",
},

"the-daily-life-of-the-immortal-king": {
  poster: "/images/immortal-king.jpg",
  banner: "/images/immortal-king-banner.jpg",
},

"arifureta-from-commonplace-to-worlds-strongest": {
  poster: "/images/arifureta.jpg",
  banner: "/images/arifureta-banner.jpg",
},

"blue-lock": {
  poster: "/images/blue-lock.jpg",
  banner: "/images/blue-lock-banner.jpg",
},

"assassination-classroom": {
  poster: "/images/assassination-classroom.jpg",
  banner: "/images/assassination-classroom-banner.jpg",
},

"the-ancient-magus-bride": {
  poster: "/images/ancient-magus-bride.jpg",
  banner: "/images/ancient-magus-bride-banner.jpg",
},

"the-apothecary-diaries": {
  poster: "/images/apothecary-diaries.jpg",
  banner: "/images/apothecary-diaries-banner.jpg",
},

"mushoku-tensei-jobless-reincarnation": {
  poster: "/images/mushoku-tensei.jpg",
  banner: "/images/mushoku-tensei-banner.jpg",
},

"tottemo-luckyman": {
  poster: "/images/luckyman.jpg",
  banner: "/images/luckyman-banner.jpg",
},
  "death-note": {
  poster: "/images/death-note.jpg",
  banner: "/images/death-note-banner.jpg",
},

"the-eminence-in-shadow": {
  poster: "/images/eminence-in-shadow.jpg",
  banner: "/images/eminence-in-shadow-banner.jpg",
},

"tsukimichi-moonlit-fantasy": {
  poster: "/images/tsukimichi.jpg",
  banner: "/images/tsukimichi-banner.jpg",
},

"rascal-does-not-dream-of-bunny-girl-senpai": {
  poster: "/images/bunny-girl-senpai.jpg",
  banner: "/images/bunny-girl-senpai-banner.jpg",
},

"the-misfit-of-demon-king-academy": {
  poster: "/images/misfit-demon-king.jpg",
  banner: "/images/misfit-demon-king-banner.jpg",
},

"tower-of-god": {
  poster: "/images/tower-of-god.jpg",
  banner: "/images/tower-of-god-banner.jpg",
},

"frieren-beyond-journeys-end": {
  poster: "/images/frieren.jpg",
  banner: "/images/frieren-banner.jpg",
},

"one-punch-man": {
  poster: "/images/one-punch-man.jpg",
  banner: "/images/one-punch-man-banner.jpg",
},
"kaiju-no-8": {
  poster: "/images/kaiju-no-8.jpg",
  banner: "/images/kaiju-no-8-banner.jpg",
},

"dandadan": {
  poster: "/images/dandadan.jpg",
  banner: "/images/dandadan-banner.jpg",
},

"parasyte": {
  poster: "/images/parasyte.jpg",
  banner: "/images/parasyte-banner.png",
},

"wind-breaker": {
  poster: "/images/wind-breaker.jpg",
  banner: "/images/wind-breaker-banner.jpg",
},

"mashle-magic-and-muscles": {
  poster: "/images/mashle.jpg",
  banner: "/images/mashle-banner.jpg",
},

"ragna-crimson": {
  poster: "/images/ragna-crimson.jpg",
  banner: "/images/ragna-crimson-banner.jpg",
},

"lord-of-mysteries": {
  poster: "/images/lord-of-mysteries.jpg",
  banner: "/images/lord-of-mysteries-banner.jpg",
},

"sakamoto-days": {
  poster: "/images/sakamoto-days.jpg",
  banner: "/images/sakamoto-days-banner.jpg",
},

"dead-mount-death-play": {
  poster: "/images/dead-mount-death-play.jpg",
  banner: "/images/dead-mount-death-play-banner.jpg",
},

"as-a-reincarnated-aristocrat-ill-use-my-appraisal-skill-to-rise-in-the-world": {
  poster: "/images/reincarnated-aristocrat.jpg",
  banner: "/images/reincarnated-aristocrat-banner.jpg",
},

"tougen-anki-dark-demon-of-paradise": {
  poster: "/images/tougen-anki.jpg",
  banner: "/images/tougen-anki-banner.jpg",
},

"the-fruit-of-evolution-before-i-knew-it-my-life-had-it-made": {
  poster: "/images/fruit-of-evolution.jpg",
  banner: "/images/fruit-of-evolution-banner.jpg",
},

"seirei-gensouki-spirit-chronicles": {
  poster: "/images/spirit-chronicles.jpg",
  banner: "/images/spirit-chronicles-banner.png",
},

"reborn-as-a-vending-machine-now-i-wander-the-dungeon": {
  poster: "/images/vending-machine.jpg",
  banner: "/images/vending-machine-banner.jpg",
},

"i-was-reincarnated-as-the-7th-prince-so-i-can-take-my-time-perfecting-my-magical-ability": {
  poster: "/images/7th-prince.jpg",
  banner: "/images/7th-prince-banner.jpg",
},

"darling-in-the-franxx": {
  poster: "/images/darling-franxx.jpg",
  banner: "/images/darling-franxx-banner.jpg",
},

"i-left-my-a-rank-party-to-help-my-former-students-reach-the-dungeon-depths": {
  poster: "/images/a-rank-party.jpg",
  banner: "/images/a-rank-party-banner.jpg",
},

"banished-from-the-heros-party": {
  poster: "/images/banished-hero-party.jpg",
  banner: "/images/banished-hero-party-banner.jpg",
},

"how-not-to-summon-a-demon-lord": {
  poster: "/images/demon-lord.jpg",
  banner: "/images/demon-lord-banner.jpg",
},

"my-dress-up-darling": {
  poster: "/images/dress-up-darling.jpg",
  banner: "/images/dress-up-darling-banner.jpg",
},

"tying-the-knot-with-an-amagami-sister": {
  poster: "/images/amagami-sister.jpg",
  banner: "/images/amagami-sister-banner.jpg",
},

"gachiakuta": {
  poster: "/images/gachiakuta.jpg",
  banner: "/images/gachiakuta-banner.jpg",
},
  "demon-lord-2099": {
  poster: "/images/demon-lord-2099.jpg",
  banner: "/images/demon-lord-2099-banner.jpg",
},

"wistoria-wand-and-sword": {
  poster: "/images/wistoria.jpg",
  banner: "/images/wistoria-banner.jpg",
},

"the-god-of-high-school": {
  poster: "/images/god-of-high-school.jpg",
  banner: "/images/god-of-high-school-banner.jpg",
},

"berserk-of-gluttony": {
  poster: "/images/berserk-of-gluttony.jpg",
  banner: "/images/berserk-of-gluttony-banner.jpg",
},

"the-great-cleric": {
  poster: "/images/great-cleric.jpg",
  banner: "/images/great-cleric-banner.jpg",
},

"takopis-original-sin": {
  poster: "/images/takopi.jpg",
  banner: "/images/takopi-banner.jpg",
},

"good-bye-dragon-life": {
  poster: "/images/goodbye-dragon-life.jpg",
  banner: "/images/goodbye-dragon-life-banner.png",
},

"irina-the-vampire-cosmonaut": {
  poster: "/images/irina.jpg",
  banner: "/images/irina-banner.jpg",
},

"the-brilliant-healers-new-life-in-the-shadows": {
  poster: "/images/brilliant-healer.jpg",
  banner: "/images/brilliant-healer-banner.jpg",
},

"skeleton-knight-in-another-world": {
  poster: "/images/skeleton-knight.jpg",
  banner: "/images/skeleton-knight-banner.jpg",
},

"akashic-records-of-bastard-magic-instructor": {
  poster: "/images/akashic-records.jpg",
  banner: "/images/akashic-records-banner.jpg",
},

"more-than-a-married-couple-but-not-lovers": {
  poster: "/images/married-couple.jpg",
  banner: "/images/married-couple-banner.jpg",
},

"my-isekai-life-i-gained-a-second-character-class-and-became-the-strongest-sage-in-the-world": {
  poster: "/images/my-isekai-life.jpg",
  banner: "/images/my-isekai-life-banner.jpg",
},

"chainsaw-man": {
  poster: "/images/chainsaw-man.jpg",
  banner: "/images/chainsaw-man-banner.jpg",
},

"lookism": {
  poster: "/images/lookism.jpg",
  banner: "/images/lookism-banner.jpg",
},

"viral-hit": {
  poster: "/images/viral-hit.jpg",
  banner: "/images/viral-hit-banner.jpg",
},

"hero-without-a-class-who-even-needs-skills": {
  poster: "/images/hero-without-class.jpg",
  banner: "/images/hero-without-class-banner.jpg",
},

"handyman-saitou-in-another-world": {
  poster: "/images/handyman-saitou.jpg",
  banner: "/images/handyman-saitou-banner.jpg",
},

"death-march-to-the-parallel-world-rhapsody": {
  poster: "/images/death-march.jpg",
  banner: "/images/death-march-banner.jpg",
},

"the-iceblade-sorcerer-shall-rule-the-world": {
  poster: "/images/iceblade-sorcerer.jpg",
  banner: "/images/iceblade-sorcerer-banner.jpg",
},

"the-water-magician": {
  poster: "/images/water-magician.jpg",
  banner: "/images/water-magician-banner.jpg",
},

"even-given-the-worthless-appraiser-class-im-actually-the-strongest": {
  poster: "/images/appraiser.jpg",
  banner: "/images/appraiser-banner.jpg",
},

"why-does-nobody-remember-me-in-this-world": {
  poster: "/images/nobody-remembers.jpg",
  banner: "/images/nobody-remembers-banner.jpg",
},

"campfire-cooking-in-another-world-with-my-absurd-skill": {
  poster: "/images/campfire-cooking.jpg",
  banner: "/images/campfire-cooking-banner.jpg",
},

"the-reincarnation-of-the-strongest-exorcist-in-another-world": {
  poster: "/images/strongest-exorcist.jpg",
  banner: "/images/strongest-exorcist-banner.jpg",
},

"i-got-a-cheat-skill-in-another-world": {
  poster: "/images/cheat-skill.jpg",
  banner: "/images/cheat-skill-banner.jpg",
},

"trapped-in-a-dating-sim-the-world-of-otome-games-is-tough-for-mobs": {
  poster: "/images/dating-sim.jpg",
  banner: "/images/dating-sim-banner.jpg",
},

"re-monster": {
  poster: "/images/re-monster.jpg",
  banner: "/images/re-monster-banner.jpg",
},

"erased": {
  poster: "/images/erased.jpg",
  banner: "/images/erased-banner.jpg",
},

"the-maid-i-hired-recently-is-mysterious": {
  poster: "/images/mysterious-maid.jpg",
  banner: "/images/mysterious-maid-banner.jpg",
},

"chillin-in-another-world-with-level-2": {
  poster: "/images/level-2.jpg",
  banner: "/images/level-2-banner.jpg",
},

"no-longer-allowed-in-another-world": {
  poster: "/images/no-longer-allowed.jpg",
  banner: "/images/no-longer-allowed-banner.jpg",
},

"the-greatest-demon-lord-is-reborn-as-a-typical-nobody": {
  poster: "/images/typical-nobody.jpg",
  banner: "/images/typical-nobody-banner.jpg",
},

"alya-sometimes-hides-her-feelings-in-russian": {
  poster: "/images/alya.jpg",
  banner: "/images/alya-banner.jpg",
},

"bucchigiri": {
  poster: "/images/bucchigiri.jpg",
  banner: "/images/bucchigiri-banner.jpg",
},

"new-saga": {
  poster: "/images/new-saga.jpg",
  banner: "/images/new-saga-banner.jpg",
},

"zenshu": {
  poster: "/images/zenshu.jpg",
  banner: "/images/zenshu-banner.png",
},

"the-gorilla-gods-go-to-girl": {
  poster: "/images/gorilla-god.jpg",
  banner: "/images/gorilla-god-banner.jpg",
},

"the-reason-why-raeliana-ended-up-at-the-dukes-mansion": {
  poster: "/images/raeliana.jpg",
  banner: "/images/raeliana-banner.jpg",
},

"let-this-grieving-soul-retire": {
  poster: "/images/grieving-soul.jpg",
  banner: "/images/grieving-soul-banner.jpg",
},

"failure-frame": {
  poster: "/images/failure-frame.jpg",
  banner: "/images/failure-frame-banner.jpg",
},

"the-unaware-atelier-meister": {
  poster: "/images/atelier-meister.jpg",
  banner: "/images/atelier-meister-banner.jpg",
},

"black-summoner": {
  poster: "/images/black-summoner.jpg",
  banner: "/images/black-summoner-banner.jpg",
},

"my-unique-skill-makes-me-op-even-at-level-1": {
  poster: "/images/unique-skill.jpg",
  banner: "/images/unique-skill-banner.jpg",
},

"you-are-ms-servant": {
  poster: "/images/ms-servant.jpg",
  banner: "/images/ms-servant-banner.jpg",
},

"i-parry-everything": {
  poster: "/images/parry-everything.jpg",
  banner: "/images/parry-everything-banner.jpg",
},

"tales-of-wedding-rings": {
  poster: "/images/wedding-rings.jpg",
  banner: "/images/wedding-rings-banner.jpg",
},

"possibly-the-greatest-alchemist-of-all-time": {
  poster: "/images/greatest-alchemist.jpg",
  banner: "/images/greatest-alchemist-banner.jpg",
},

"the-weakest-tamer-began-a-journey-to-pick-up-trash": {
  poster: "/images/weakest-tamer.jpg",
  banner: "/images/weakest-tamer-banner.jpg",
},

"kamikatsu-working-for-god-in-a-godless-world": {
  poster: "/images/kamikatsu.jpg",
  banner: "/images/kamikatsu-banner.jpg",
},

"magic-maker-how-to-make-magic-in-another-world": {
  poster: "/images/magic-maker.jpg",
  banner: "/images/magic-maker-banner.jpg",
},

"the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat": {
  poster: "/images/finest-assassin.jpg",
  banner: "/images/finest-assassin-banner.jpg",
},

"my-tiny-senpai": {
  poster: "/images/tiny-senpai.jpg",
  banner: "/images/tiny-senpai-banner.jpg",
},

"demon-lord-retry": {
  poster: "/images/demon-lord-retry.jpg",
  banner: "/images/demon-lord-retry-banner.jpg",
},

"i-shall-survive-using-potions": {
  poster: "/images/survive-using-potions.jpg",
  banner: "/images/survive-using-potions-banner.jpg",
},

"am-i-actually-the-strongest": {
  poster: "/images/actually-strongest.jpg",
  banner: "/images/actually-strongest-banner.jpg",
},

"beast-tamer": {
  poster: "/images/beast-tamer.jpg",
  banner: "/images/beast-tamer-banner.jpg",
},

"gods-games-we-play": {
  poster: "/images/gods-games.jpg",
  banner: "/images/gods-games-banner.jpg",
},

"ive-somehow-gotten-stronger-when-i-improved-my-farm-related-skills": {
  poster: "/images/farm-skills.jpg",
  banner: "/images/farm-skills-banner.jpg",
},

"friends-game": {
  poster: "/images/friends-game.jpg",
  banner: "/images/friends-game-banner.jpg",
},

"the-detective-is-already-dead": {
  poster: "/images/detective-dead.jpg",
  banner: "/images/detective-dead-banner.jpg",
},

"re-life": {
  poster: "/images/re-life.jpg",
  banner: "/images/re-life-banner.jpg",
},

"hell-paradise": {
  poster: "/images/hell-paradise.jpg",
  banner: "/images/hell-paradise-banner.jpg",
},

"the-red-ranger-becomes-an-adventurer-in-another-world": {
  poster: "/images/red-ranger.jpg",
  banner: "/images/red-ranger-banner.jpg",
},

"farming-life-in-another-world": {
  poster: "/images/farming-life.jpg",
  banner: "/images/farming-life-banner.jpg",
},

"vermeil-in-gold": {
  poster: "/images/vermeil.jpg",
  banner: "/images/vermeil-banner.jpg",
},

"im-quitting-heroing": {
  poster: "/images/quitting-heroing.jpg",
  banner: "/images/quitting-heroing-banner.jpg",
},

"the-strongest-magician-in-the-demon-lords-army-was-a-human": {
  poster: "/images/strongest-magician.jpg",
  banner: "/images/strongest-magician-banner.jpg",
},

"the-legendary-hero-is-dead": {
  poster: "/images/legendary-hero-dead.jpg",
  banner: "/images/legendary-hero-dead-banner.jpg",
},

"the-hidden-dungeon-only-i-can-enter": {
  poster: "/images/hidden-dungeon.jpg",
  banner: "/images/hidden-dungeon-banner.jpg",
},

"an-archdemons-dilemma-how-to-love-your-elf-bride": {
  poster: "/images/archdemon-dilemma.jpg",
  banner: "/images/archdemon-dilemma-banner.jpg",
},

"hokkaido-gals-are-super-adorable": {
  poster: "/images/hokkaido-gals.jpg",
  banner: "/images/hokkaido-gals-banner.jpg",
},

"im-getting-married-to-a-girl-i-hate-in-my-class": {
  poster: "/images/girl-i-hate.jpg",
  banner: "/images/girl-i-hate-banner.jpg",
},

"a-gatherers-adventure-in-isekai": {
  poster: "/images/gatherer.jpg",
  banner: "/images/gatherer-banner.jpg",
},
  
  "elegant-yokai-apartment-life": {
    poster: "/elegant-yokai-apartment-life.jpg",
    banner: "/elegant-yokai-apartment-lifeb.jpg",
  },
  "val-x-love": {
    poster: "/val-x-love.jpg",
    banner: "/val-x-loveb.jpg",
  },
  "how-a-realist-hero-rebuilt-the-kingdom": {
    poster: "/how-a-realist-hero-rebuilt-the-kingdom.jpg",
    banner: "/how-a-realist-hero-rebuilt-the-kingdomb.jpg",
  },
  "to-the-abandoned-sacred-beasts": {
    poster: "/to-the-abandoned-sacred-beasts.jpg",
    banner: "/to-the-abandoned-sacred-beastsb.jpg",
  },
  "tsugumomo": {
    poster: "/tsugumomo.jpg",
    banner: "/tsugumomob.jpg",
  },
  "horimiya": {
    poster: "/horimiya.jpg",
    banner: "/horimiyab.jpg",
  },
  "my-hero-academia-vigilantes": {
    poster: "/my-hero-academia-vigilantes.jpg",
    banner: "/my-hero-academia-vigilantesb.jpg",
  },
  "welcome-to-demon-school-iruma-kun": {
    poster: "/welcome-to-demon-school-iruma-kun.jpg",
    banner: "/welcome-to-demon-school-iruma-kunb.jpg",
  },
  "the-daily-life-of-a-middle-aged-online-shopper-in-another-world": {
    poster: "/the-daily-life-of-a-middle-aged-online-shopper-in-another-world.jpg",
    banner: "/the-daily-life-of-a-middle-aged-online-shopper-in-another-worldb.jpg",
  },
  "aesthetica-of-a-rogue-hero": {
    poster: "/aesthetica-of-a-rogue-hero.jpg",
    banner: "/aesthetica-of-a-rogue-herob.jpg",
  },
  "a-harem-in-a-fantasy-world-labyrinth": {
    poster: "/a-harem-in-a-fantasy-world-labyrinth.jpg",
    banner: "/a-harem-in-a-fantasy-world-labyrinthb.jpg",
  },
  "demon-sword-master-of-excalibur-academy": {
    poster: "/demon-sword-master-of-excalibur-academy.jpg",
    banner: "/demon-sword-master-of-excalibur-academyb.jpg",
  },
  "clockwork-planet": {
    poster: "/clockwork-planet.jpg",
    banner: "/clockwork-planetb.jpg",
  },
  "konosuba-gods-blessing-on-this-wonderful-world": {
    poster: "/konosuba-gods-blessing-on-this-wonderful-world.jpg",
    banner: "/konosuba-gods-blessing-on-this-wonderful-worldb.jpg",
  },
  "classroom-of-the-elite": {
    poster: "/classroom-of-the-elite.jpg",
    banner: "/classroom-of-the-eliteb.jpg",
  },
  "the-dungeon-of-black-company": {
    poster: "/the-dungeon-of-black-company.jpg",
    banner: "/the-dungeon-of-black-companyb.jpg",
  },
  "summoned-to-another-world-for-a-second-time": {
    poster: "/summoned-to-another-world-for-a-second-time.jpg",
    banner: "/summoned-to-another-world-for-a-second-timeb.jpg",
  },
  "campione": {
    poster: "/campione.jpg",
    banner: "/campioneb.jpg",
  },
  "chobits": {
    poster: "/chobits.jpg",
    banner: "/chobitsb.jpg",
  },
  "our-last-crusade-or-the-rise-of-a-new-world": {
    poster: "/our-last-crusade-or-the-rise-of-a-new-world.jpg",
    banner: "/our-last-crusade-or-the-rise-of-a-new-worldb.jpg",
  },
  "unnamed-memory": {
    poster: "/unnamed-memory.jpg",
    banner: "/unnamed-memoryb.jpg",
  },
  "studio-apartment-good-lighting-angel-included": {
    poster: "/studio-apartment-good-lighting-angel-included.jpg",
    banner: "/studio-apartment-good-lighting-angel-includedb.jpg",
  },
  "chainsaw-man-reze-arc": {
    poster: "/chainsaw-man-reze-arc.jpg",
    banner: "/chainsaw-man-reze-arcb.jpg",
  },
  "chronos-ruler": {
    poster: "/chronos-ruler.jpg",
    banner: "/chronos-rulerb.jpg",
  },
  "trinity-seven": {
    poster: "/trinity-seven.jpg",
    banner: "/trinity-sevenb.jpg",
  },
  "infinite-stratos": {
    poster: "/infinite-stratos.jpg",
    banner: "/infinite-stratosb.jpg",
  },
  "mayo-chiki": {
    poster: "/mayo-chiki.jpg",
    banner: "/mayo-chikib.jpg",
  },
  "yumeria": {
    poster: "/yumeria.jpg",
    banner: "/yumeriab.jpg",
  },
  "shuffle": {
    poster: "/shuffle.jpg",
    banner: "/shuffleb.jpg",
  },
  "full-time-magister": {
    poster: "/full-time-magister.jpg",
    banner: "/full-time-magisterb.jpg",
  },
  "elfen-lied": {
    poster: "/elfen-lied.jpg",
    banner: "/elfen-liedb.jpg",
  },
  "mother-of-the-goddess-dormitory": {
    poster: "/mother-of-the-goddess-dormitory.jpg",
    banner: "/mother-of-the-goddess-dormitoryb.jpg",
  },
  "taboo-tattoo": {
    poster: "/taboo-tattoo.jpg",
    banner: "/taboo-tattoob.jpg",
  },
  "date-a-live": {
    poster: "/date-a-live.jpg",
    banner: "/date-a-liveb.jpg",
  },
  "welcome-to-japan-ms-elf": {
    poster: "/welcome-to-japan-ms-elf.jpg",
    banner: "/welcome-to-japan-ms-elfb.jpg",
  },
  "shimoneta": {
    poster: "/shimoneta.jpg",
    banner: "/shimonetab.jpg",
  },
  "im-giving-the-disgraced-noble-lady-i-rescued-a-crash-course-in-naughtiness": {
    poster: "/im-giving-the-disgraced-noble-lady-i-rescued-a-crash-course-in-naughtiness.jpg",
    banner: "/im-giving-the-disgraced-noble-lady-i-rescued-a-crash-course-in-naughtinessb.jpg",
  },
  "miss-caretaker-of-sunohara-sou": {
    poster: "/miss-caretaker-of-sunohara-sou.jpg",
    banner: "/miss-caretaker-of-sunohara-soub.jpg",
  },
  "waiting-in-the-summer": {
    poster: "/waiting-in-the-summer.jpg",
    banner: "/waiting-in-the-summerb.jpg",
  },
  "recovery-of-an-mmo-junkie": {
    poster: "/recovery-of-an-mmo-junkie.jpg",
    banner: "/recovery-of-an-mmo-junkieb.jpg",
  },
  "cautious-hero-the-hero-is-overpowered-but-overly-cautious": {
    poster: "/cautious-hero.jpg",
    banner: "/cautious-herob.jpg",
  },
  "restaurant-to-another-world": {
    poster: "/restaurant-to-another-world.jpg",
    banner: "/restaurant-to-another-worldb.jpg",
  },
  "rerided-derrida-who-leaps-through-time": {
    poster: "/rerided.jpg",
    banner: "/reridedb.jpg",
  },
  "in-another-world-with-my-smartphone": {
    poster: "/in-another-world-with-my-smartphone.jpg",
    banner: "/in-another-world-with-my-smartphoneb.jpg",
  },
  "yu-no-a-girl-who-chants-love-at-the-bound-of-this-world": {
    poster: "/yu-no.jpg",
    banner: "/yu-nob.jpg",
  },
  "the-beginning-after-the-end": {
    poster: "/the-beginning-after-the-end.jpg",
    banner: "/the-beginning-after-the-endb.jpg",
  },
  "demon-king-daimao": {
    poster: "/demon-king-daimao.jpg",
    banner: "/demon-king-daimaob.jpg",
  },
  "golden-time": {
    poster: "/golden-time.jpg",
    banner: "/golden-timeb.jpg",
  },
  "engage-kiss": {
    poster: "/engage-kiss.jpg",
    banner: "/engage-kissb.jpg",
  },
  "rokka-braves-of-the-six-flowers": {
    poster: "/rokka.jpg",
    banner: "/rokkab.jpg",
  },
  "high-school-dxd": {
    poster: "/high-school-dxd.jpg",
    banner: "/high-school-dxdb.jpg",
  },
  "rosario-vampire": {
    poster: "/rosario-vampire.jpg",
    banner: "/rosario-vampireb.jpg",
  },
  "witch-craft-works": {
    poster: "/witch-craft-works.jpg",
    banner: "/witch-craft-worksb.jpg",
  },
  "a-galaxy-next-door": {
    poster: "/a-galaxy-next-door.jpg",
    banner: "/a-galaxy-next-doorb.jpg",
  },
  "bastard-heavy-metal-dark-fantasy": {
    poster: "/bastard.jpg",
    banner: "/bastardb.jpg",
  },
  "monster-musume-everyday-life-with-monster-girls": {
    poster: "/monster-musume.jpg",
    banner: "/monster-musumeb.jpg",
  },
  "worlds-end-harem": {
    poster: "/worlds-end-harem.jpg",
    banner: "/worlds-end-haremb.jpg",
  },
  "sekirei": {
    poster: "/sekirei.jpg",
    banner: "/sekireib.jpg",
  },
  "plunderer": {
    poster: "/plunderer.jpg",
    banner: "/plundererb.jpg",
  },
  "domestic-girlfriend": {
    poster: "/domestic-girlfriend.jpg",
    banner: "/domestic-girlfriendb.jpg",
  },
  "akame-ga-kill": {
    poster: "/akame-ga-kill.jpg",
    banner: "/akame-ga-killb.jpg",
  },
  "my-happy-marriage": {
    poster: "/my-happy-marriage.jpg",
    banner: "/my-happy-marriageb.jpg",
  },
  "the-new-gate": {
    poster: "/the-new-gate.jpg",
    banner: "/the-new-gateb.jpg",
  },
  "dragon-raja": {
    poster: "/dragon-raja.jpg",
    banner: "/dragon-rajab.jpg",
  },
  "the-unwanted-undead-adventurer": {
    poster: "/the-unwanted-undead-adventurer.jpg",
    banner: "/the-unwanted-undead-adventurerb.jpg",
  },
  "angels-of-death": {
    poster: "/angels-of-death.jpg",
    banner: "/angels-of-deathb.jpg",
  },
  "dealing-with-mikadono-sisters-is-a-breeze": {
    poster: "/dealing-with-mikadono-sisters-is-a-breeze.jpg",
    banner: "/dealing-with-mikadono-sisters-is-a-breezeb.jpg",
  },
  "a-nobodys-way-up-to-an-exploration-hero-lv": {
    poster: "/a-nobodys-way-up-to-an-exploration-hero-lv.jpg",
    banner: "/a-nobodys-way-up-to-an-exploration-hero-lvb.jpg",
  },
  "welcome-to-the-outcasts-restaurant": {
    poster: "/welcome-to-the-outcasts-restaurant.jpg",
    banner: "/welcome-to-the-outcasts-restaurantb.jpg",
  },
  "so-i-cant-play-h": {
    poster: "/so-i-cant-play-h.jpg",
    banner: "/so-i-cant-play-hb.jpg",
  },
  "the-last-summoner": {
    poster: "/the-last-summoner.jpg",
    banner: "/the-last-summonerb.jpg",
  },
  "the-chosen-one": {
    poster: "/the-chosen-one.jpg",
    banner: "/the-chosen-oneb.jpg",
  },
  "choyoyu-high-school-prodigies-have-it-easy-even-in-another-world": {
    poster: "/choyoyu.jpg",
    banner: "/choyoyub.jpg",
  },
  "maburaho": {
    poster: "/maburaho.jpg",
    banner: "/maburahob.jpg",
  },
  "hanaukyo-maid-team": {
    poster: "/hanaukyo-maid-team.jpg",
    banner: "/hanaukyo-maid-teamb.jpg",
  },
  "nyan-koi": {
    poster: "/nyan-koi.jpg",
    banner: "/nyan-koib.jpg",
  },
  "the-aristocrats-otherworldly-adventure-serving-gods-who-go-too-far": {
    poster: "/the-aristocrats-otherworldly-adventure.jpg",
    banner: "/the-aristocrats-otherworldly-adventureb.jpg",
  },
  "yuragi-sou-no-yuuna-san": {
    poster: "/yuragi-sou-no-yuuna-san.jpg",
    banner: "/yuragi-sou-no-yuuna-sanb.jpg",
  },
  "hero-return": {
    poster: "/hero-return.jpg",
    banner: "/hero-returnb.jpg",
  },
  "cat-planet-cuties": {
    poster: "/cat-planet-cuties.jpg",
    banner: "/cat-planet-cutiesb.jpg",
  },
  "tenpuru-no-one-can-live-on-loneliness": {
    poster: "/tenpuru.jpg",
    banner: "/tenpulrub.jpg",
  },
  "chained-soldier": {
    poster: "/chained-soldier.jpg",
    banner: "/chained-soldierb.jpg",
  },
  "apocalypse-bringer-mynoghra": {
    poster: "/apocalypse-bringer-mynoghra.jpg",
    banner: "/apocalypse-bringer-mynoghrab.jpg",
  },
  "yandere-dark-elf-she-chased-me-all-the-way-from-another-world": {
    poster: "/yandere-dark-elf.jpg",
    banner: "/yandere-dark-elfb.jpg",
  },
  "please-teacher": {
    poster: "/please-teacher.jpg",
    banner: "/please-teacherb.jpg",
  },
  "the-foolish-angel-dances-with-the-devil": {
    poster: "/the-foolish-angel-dances-with-the-devil.jpg",
    banner: "/the-foolish-angel-dances-with-the-devilb.jpg",
  },
  "a-girl-and-her-guard-dog": {
    poster: "/a-girl-and-her-guard-dog.jpg",
    banner: "/a-girl-and-her-guard-dogb.jpg",
  },
  "bogus-skill-fruitmaster": {
    poster: "/bogus-skill-fruitmaster.jpg",
    banner: "/bogus-skill-fruitmasterb.jpg",
  },
  "sword-of-the-demon-hunter-kijin-gentosho": {
    poster: "/sword-of-the-demon-hunter-kijin-gentosho.jpg",
    banner: "/sword-of-the-demon-hunter-kijin-gentosho b.jpg",
  },
  "spare-me-great-lord": {
    poster: "/spare-me-great-lord.jpg",
    banner: "/spare-me-great-lordb.jpg",
  },
  "the-summer-hikaru-died": {
    poster: "/the-summer-hikaru-died.jpg",
    banner: "/the-summer-hikaru-diedb.jpg",
  },
  "combatants-will-be-dispatched": {
    poster: "/combatants-will-be-dispatched.jpg",
    banner: "/combatants-will-be-dispatchedb.jpg",
  },
  "the-strongest-tanks-labyrinth-raids": {
    poster: "/the-strongest-tanks-labyrinth-raids.jpg",
    banner: "/the-strongest-tanks-labyrinth-raidsb.jpg",
  },
  "mission-yozakura-family": {
    poster: "/mission-yozakura-family.jpg",
    banner: "/mission-yozakura-familyb.jpg",
  },
  "our-dating-story-the-experienced-you-and-the-inexperienced-me": {
    poster: "/our-dating-story.jpg",
    banner: "/our-dating-storyb.jpg",
  },
  "chivalry-of-a-failed-knight": {
    poster: "/chivalry-of-a-failed-knight.jpg",
    banner: "/chivalry-of-a-failed-knightb.jpg",
  },
  "the-angel-next-door-spoils-me-rotten": {
    poster: "/the-angel-next-door-spoils-me-rotten.jpg",
    banner: "/the-angel-next-door-spoils-me-rottenb.jpg",
  },
  "the-super-cube": {
    poster: "/the-super-cube.jpg",
    banner: "/the-super-cubeb.jpg",
  },
  "the-banished-former-hero-lives-as-he-pleases": {
    poster: "/the-banished-former-hero-lives-as-he-pleases.jpg",
    banner: "/the-banished-former-hero-lives-as-he-pleasesb.jpg",
  }

};


/** Convert a title string to a slug key */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/** Simple deterministic hash from string → number */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Category accent hues */
const categoryHues: Record<string, number> = {
  marvel: 0,
  anime: 270,
  series: 210,
};

function generatePlaceholder(
  title: string,
  category: string,
  aspect: "poster" | "banner"
): string {
  const hash = hashString(title);
  const baseHue = categoryHues[category] ?? 200;

  const hue1 = (baseHue + (hash % 40) - 20 + 360) % 360;
  const hue2 = (hue1 + 30 + (hash % 20)) % 360;
  const sat1 = 35 + (hash % 25);
  const sat2 = 25 + ((hash >> 4) % 20);
  const light1 = 15 + ((hash >> 8) % 12);
  const light2 = 22 + ((hash >> 12) % 10);

  const patternSeed = (hash >> 6) % 5;
  const patternOpacity = 0.06 + ((hash % 10) / 100);

  const w = aspect === "poster" ? 400 : 1200;
  const h = aspect === "poster" ? 600 : 400;

  const words = title.split(/\s+/).filter(Boolean);
  const initials = words.length >= 2
    ? (words[0][0] + words[1][0]).toUpperCase()
    : title.substring(0, 2).toUpperCase();

  const fontSize = aspect === "poster" ? 72 : 56;

  let patternMarkup = "";
  switch (patternSeed) {
    case 0:
      patternMarkup = `<defs><pattern id="p" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(${30 + (hash % 30)})"><line x1="0" y1="0" x2="0" y2="20" stroke="hsl(${hue1},${sat1}%,${light1 + 30}%)" stroke-width="1" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
      break;
    case 1:
      patternMarkup = `<defs><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="8" fill="none" stroke="hsl(${hue2},${sat2}%,${light2 + 25}%)" stroke-width="0.8" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
      break;
    case 2:
      patternMarkup = `<defs><pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="2" fill="hsl(${hue1},${sat1}%,${light1 + 35}%)" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
      break;
    case 3:
      patternMarkup = `<defs><pattern id="p" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M15 10v10M10 15h10" stroke="hsl(${hue2},${sat2}%,${light2 + 28}%)" stroke-width="1" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
      break;
    default:
      patternMarkup = `<defs><pattern id="p" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect x="12" y="12" width="4" height="4" fill="hsl(${hue1},${sat1}%,${light1 + 30}%)" opacity="${patternOpacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#p)"/>`;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="hsl(${hue1},${sat1}%,${light1}%)"/>
        <stop offset="100%" stop-color="hsl(${hue2},${sat2}%,${light2}%)"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    ${patternMarkup}
    <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
          font-family="'Space Grotesk',sans-serif" font-size="${fontSize}" font-weight="700"
          fill="hsl(${hue1},${sat1 + 10}%,${light1 + 45}%)" opacity="0.35">
      ${initials}
    </text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const placeholderCache: Record<string, { poster: string; banner: string }> = {};

export function resolveImages(
  title: string,
  fallbackPoster: string,
  fallbackBanner: string,
  category: string = "anime"
) {
  const slug = titleToSlug(title);
  const entry = imageRegistry[slug];

  if (entry?.poster && entry?.banner) {
    return { poster: entry.poster, banner: entry.banner };
  }

  const isRealPoster = fallbackPoster && !fallbackPoster.includes("placeholder");
  const isRealBanner = fallbackBanner && !fallbackBanner.includes("placeholder");

  if (!placeholderCache[slug]) {
    placeholderCache[slug] = {
      poster: generatePlaceholder(title, category, "poster"),
      banner: generatePlaceholder(title, category, "banner"),
    };
  }

  return {
    poster: entry?.poster || (isRealPoster ? fallbackPoster : placeholderCache[slug].poster),
    banner: entry?.banner || (isRealBanner ? fallbackBanner : placeholderCache[slug].banner),
  };
}

export default imageRegistry;
