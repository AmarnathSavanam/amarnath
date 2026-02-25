/**
 * Image Registry — centralised image lookup for any title.
 */

interface ImageEntry {
  poster?: string;
  banner?: string;
}
const imageRegistry: Record<string, ImageEntry> = {
  "from": {
    "poster": "/from.jpg",
    "banner": "/from-banner.jpg"
  }
  ,
  "breaking-bad": {
    "poster": "/breaking-bad.webp",
    "banner": "/breaking-bad-banner.jpg"
  },
  "dark": {
    "poster": "/dark.jpg",
    "banner": "/dark-banner.webp"
  },
  "12-monkeys": {
    "poster": "/12-monkeys.jpg",
    "banner": "/12-monkeys-banner.webp"
  },
  "1899": {
    "poster": "/1899.jpg",
    "banner": "/1899-banner.jpg"
  },
  "squid-game": {
    "poster": "/squid-game.jpg",
    "banner": "/squid-game-banner.jpg"
  },
  "better-call-saul": {
    "poster": "/better-call-saul.jpg",
    "banner": "/better-call-saul-banner.jpg"
  },
  "cashero": {
    "poster": "/cashero.jpg",
    "banner": "/cashero-banner.jpg"
  },
  "the-last-samurai": {
    "poster": "/last-samurai.webp",
    "banner": "/last-samurai-banner.jpg"
  },
  "stranger-things": {
    "poster": "/stranger-things.jpg",
    "banner": "/stranger-things-banner.jpg"
  },
  "the-witcher": {
    "poster": "/the-witcher.jpg",
    "banner": "/the-witcher-banner.webp"
  },
  "the-mandalorian": {
    "poster": "/mandalorian.jpg",
    "banner": "/mandalorian-banner.webp"
  },
  "peaky-blinders": {
    "poster": "/peaky-blinders.jpg",
    "banner": "/peaky-blinders-banner.jpg"
  },
  "game-of-thrones": {
    "poster": "/game-of-thrones.jpg",
    "banner": "/game-of-thrones-banner.jpg"
  },
  "money-heist": {
    "poster": "/money-heist.jpg",
    "banner": "/money-heist-banner.jpg"
  },
  "the-boys": {
    "poster": "/the-boys.jpg",
    "banner": "/the-boys-banner.jpg"
  },
  "severance": {
    "poster": "/severance.webp",
    "banner": "/severance-banner.jpg"
  },
  "true-detective": {
    "poster": "/true-detective.jpg",
    "banner": "/true-detective-banner.jpg"
  },
  "the-last-of-us": {
    "poster": "/the-last-of-us.jpg",
    "banner": "/the-last-of-us-banner.webp"
  },
  "shogun": {
    "poster": "/shogun.jpg",
    "banner": "/shogun-banner.jpg"
  },
  "chernobyl": {
    "poster": "/chernobyl.jpg",
    "banner": "/chernobyl-banner.jpg"
  },
  "mr-robot": {
    "poster": "/mr-robot.jpg",
    "banner": "/mr-robot-banner.webp"
  },
  "black-mirror": {
    "poster": "/black-mirror.jpg",
    "banner": "/black-mirror-banner.jpg"
  },
  "arcane": {
    "poster": "/arcane.jpg",
    "banner": "/arcane-banner.png"
  },
  "deadpool-and-wolverine": {
    "poster": "/deadpool-wolverine.jpg",
    "banner": "/deadpool-wolverine-banner.jpg"
  },
  "agatha-all-along": {
    "poster": "/agatha.jpg",
    "banner": "/agatha-banner.jpg"
  },
  "daredevil-born-again-season-1": {
    "poster": "/daredevil-born-again-s1.jpg",
    "banner": "/daredevil-born-again-s1-banner.jpg"
  },
  "captain-america-brave-new-world": {
    "poster": "/brave-new-world.jpg",
    "banner": "/brave-new-world-banner.webp"
  },
  "thunderbolts": {
    "poster": "/thunderbolts.jpg",
    "banner": "/thunderbolts-banner.webp"
  },
  "the-fantastic-four-first-steps": {
    "poster": "/fantastic-four-first-steps.jpg",
    "banner": "/fantastic-four-first-steps-banner.jpg"
  },
  "daredevil-born-again-season-2": {
    "poster": "/daredevil-born-again-s2.jpg",
    "banner": "/daredevil-born-again-s2-banner.jpg"
  },
  "wonder-man": {
    "poster": "/wonder-man.jpg",
    "banner": "/wonder-man-banner.jpg"
  },
  "the-punisher-special-presentation": {
    "poster": "/punisher-special.jpg",
    "banner": "/punisher-special-banner.jpg"
  },
  "spider-man-brand-new-day": {
    "poster": "/brand-new-day.jpg",
    "banner": "/brand-new-day-banner.jpg"
  },
  "avengers-doomsday": {
    "poster": "/avengers-doomsday.jpg",
    "banner": "/avengers-doomsday-banner.png"
  }
  ,
  "ms-marvel": {
    "poster": "/ms-marvel.jpg",
    "banner": "/ms-marvel-banner.png"
  },
  "thor-love-and-thunder": {
    "poster": "/thor-love-thunder.jpg",
    "banner": "/thor-love-thunder-banner.png"
  },
  "black-panther-wakanda-forever": {
    "poster": "/wakanda-forever.jpg",
    "banner": "/wakanda-forever-banner.jpg"
  },
  "ironheart": {
    "poster": "/ironheart.jpg",
    "banner": "/ironheart-banner.jpg"
  },
  "werewolf-by-night": {
    "poster": "/werewolf-by-night.jpg",
    "banner": "/werewolf-by-night-banner.png"
  },
  "guardians-of-the-galaxy-holiday-special": {
    "poster": "/gotg-holiday.webp",
    "banner": "/gotg-holiday-banner.jpg"
  },
  "ant-man-and-the-wasp-quantumania": {
    "poster": "/quantumania.jpg",
    "banner": "/quantumania-banner.jpg"
  },
  "guardians-of-the-galaxy-vol-3": {
    "poster": "/gotg-3.jpg",
    "banner": "/gotg-3-banner.jpg"
  },
  "secret-invasion": {
    "poster": "/secret-invasion.jpg",
    "banner": "/secret-invasion-banner.jpg"
  },
  "the-marvels": {
    "poster": "/the-marvels.jpg",
    "banner": "/the-marvels-banner.jpg"
  },
  "loki-season-2": {
    "poster": "/loki-s2.jpg",
    "banner": "/loki-s2-banner.webp"
  },
  "logan": {
    "poster": "/logan.jpg",
    "banner": "/logan-banner.jpg"
  },
  "deadpool-2": {
    "poster": "/deadpool-2.jpg",
    "banner": "/deadpool-2-banner.jpg"
  }
  ,
  "wandavision": {
    "poster": "/wandavision.jpg",
    "banner": "/wandavision-banner.jpg"
  },
  "the-falcon-and-the-winter-soldier": {
    "poster": "/falcon-winter-soldier.jpg",
    "banner": "/falcon-winter-soldier-banner.jpg"
  },
  "spider-man-far-from-home": {
    "poster": "/far-from-home.jpg",
    "banner": "/far-from-home-banner.webp"
  },
  "venom-let-there-be-carnage": {
    "poster": "/venom-2.jpg",
    "banner": "/venom-2-banner.jpg"
  },
  "spider-man-no-way-home": {
    "poster": "/no-way-home.jpg",
    "banner": "/no-way-home-banner.jpg"
  },
  "spider-man-across-the-spider-verse": {
    "poster": "/across-spider-verse.jpg",
    "banner": "/across-spider-verse-banner.png"
  },
  "morbius": {
    "poster": "/morbius.jpg",
    "banner": "/morbius-banner.jpg"
  },
  "venom-the-last-dance": {
    "poster": "/venom-last-dance.jpg",
    "banner": "/venom-last-dance-banner.jpg"
  },
  "madame-web": {
    "poster": "/madame-web.jpg",
    "banner": "/madame-web-banner.jpg"
  },
  "kraven-the-hunter": {
    "poster": "/kraven.jpg",
    "banner": "/kraven-banner.jpg"
  },
  "shang-chi-and-the-legend-of-the-ten-rings": {
    "poster": "/shang-chi.jpg",
    "banner": "/shang-chi-banner.jpg"
  },
  "eternals": {
    "poster": "/eternals.jpg",
    "banner": "/eternals-banner.jpg"
  },
  "doctor-strange-in-the-multiverse-of-madness": {
    "poster": "/ds-multiverse.jpg",
    "banner": "/ds-multiverse-banner.jpg"
  },
  "hawkeye": {
    "poster": "/hawkeye.jpg",
    "banner": "/hawkeye-banner.jpg"
  },
  "moon-knight": {
    "poster": "/moon-knight.jpg",
    "banner": "/moon-knight-banner.jpg"
  },
  "echo": {
    "poster": "/echo.jpg",
    "banner": "/echo-banner.jpg"
  },
  "she-hulk": {
    "poster": "/she-hulk.jpg",
    "banner": "/she-hulk-banner.png"
  }
  ,
  "daredevil-season-1": {
    "poster": "/daredevil-s1.jpg",
    "banner": "/daredevil-s1-banner.jpg"
  },
  "jessica-jones": {
    "poster": "/jessica-jones.jpg",
    "banner": "/jessica-jones-banner.jpg"
  },
  "avengers-age-of-ultron": {
    "poster": "/ultron.jpg",
    "banner": "/ultron-banner.jpg"
  },
  "ant-man": {
    "poster": "/ant-man.jpg",
    "banner": "/ant-man-banner.jpg"
  },
  "luke-cage": {
    "poster": "/luke-cage.jpg",
    "banner": "/luke-cage-banner.jpg"
  },
  "daredevil-season-2": {
    "poster": "/daredevil-s2.jpg",
    "banner": "/daredevil-s2-banner.jpg"
  },
  "iron-fist": {
    "poster": "/iron-fist.jpg",
    "banner": "/iron-fist-banner.png"
  },
  "the-defenders": {
    "poster": "/defenders.jpg",
    "banner": "/defenders-banner.jpg"
  },
  "captain-america-civil-war": {
    "poster": "/civil-war.jpg",
    "banner": "/civil-war-banner.jpg"
  },
  "black-widow": {
    "poster": "/black-widow.jpg",
    "banner": "/black-widow-banner.jpg"
  },
  "black-panther": {
    "poster": "/black-panther.jpg",
    "banner": "/black-panther-banner.jpg"
  },
  "spider-man-homecoming": {
    "poster": "/homecoming.jpg",
    "banner": "/homecoming-banner.jpg"
  },
  "doctor-strange": {
    "poster": "/doctor-strange.jpg",
    "banner": "/doctor-strange-banner.webp"
  },
  "thor-ragnarok": {
    "poster": "/thor-ragnarok.jpg",
    "banner": "/thor-ragnarok-banner.jpg"
  },
  "venom": {
    "poster": "/venom.jpg",
    "banner": "/venom-banner.jpg"
  },
  "spider-man-into-the-spider-verse": {
    "poster": "/spider-verse.jpg",
    "banner": "/spider-verse-banner.jpg"
  },
  "deadpool": {
    "poster": "/deadpool.jpg",
    "banner": "/deadpool-banner.png"
  },
  "ant-man-and-the-wasp": {
    "poster": "/ant-man-wasp.jpg",
    "banner": "/ant-man-wasp-banner.jpg"
  },
  "avengers-infinity-war": {
    "poster": "/infinity-war.jpg",
    "banner": "/infinity-war-banner.webp"
  },
  "avengers-endgame": {
    "poster": "/endgame.jpg",
    "banner": "/endgame-banner.jpg"
  },
  "the-new-mutants": {
    "poster": "/new-mutants.jpg",
    "banner": "/new-mutants-banner.jpg"
  },
  "loki": {
    "poster": "/loki.jpg",
    "banner": "/loki-banner.jpg"
  },
  "what-if": {
    "poster": "/what-if.jpg",
    "banner": "/what-if-banner.jpg"
  },
  "eyes-of-wakanda": {
    "poster": "/eyes-of-wakanda.jpg",
    "banner": "/eyes-of-wakanda-banner.webp"
  },
  "captain-america-the-first-avenger": {
    "poster": "/captain-america-first-avenger.jpg",
    "banner": "/captain-america-first-avenger-banner.webp"
  },
  "agent-carter-season-1": {
    "poster": "/agent-carter-s1.jpg",
    "banner": "/agent-carter-s1-banner.jpg"
  },
  "agent-carter-season-2": {
    "poster": "/agent-carter-s2.jpg",
    "banner": "/agent-carter-s2-banner.jpg"
  },
  "x-men-first-class": {
    "poster": "/x-men-first-class.jpg",
    "banner": "/x-men-first-class-banner.jpg"
  },
  "x-men-origins-wolverine": {
    "poster": "/x-men-origins-wolverine.png",
    "banner": "/x-men-origins-wolverine-banner.jpg"
  },
  "howard-the-duck": {
    "poster": "/howard-the-duck.jpg",
    "banner": "/howard-the-duck-banner.jpg"
  },
  "captain-marvel": {
    "poster": "/captain-marvel.jpg",
    "banner": "/captain-marvel-banner.jpg"
  },
  "blade": {
    "poster": "/blade.jpg",
    "banner": "/blade-banner.webp"
  },
  "x-men": {
    "poster": "/x-men.jpg",
    "banner": "/x-men-banner.jpg"
  },
  "spider-man": {
    "poster": "/spider-man.jpg",
    "banner": "/spider-man-banner.jpg"
  },
  "x2-x-men-united": {
    "poster": "/x2.jpg",
    "banner": "/x2-banner.jpg"
  },
  "elektra": {
    "poster": "/elektra.jpg",
    "banner": "/elektra-banner.webp"
  },
  "daredevil": {
    "poster": "/daredevil.jpg",
    "banner": "/daredevil-banner.jpg"
  },
  "the-punisher": {
    "poster": "/punisher.jpg",
    "banner": "/punisher-banner.jpg"
  },
  "spider-man-2": {
    "poster": "/spider-man-2.jpg",
    "banner": "/spider-man-2-banner.png"
  },
  "fantastic-four": {
    "poster": "/fantastic-four.jpg",
    "banner": "/fantastic-four-banner.png"
  },
  "fantastic-four-rise-of-the-silver-surfer": {
    "poster": "/fantastic-four-2.webp",
    "banner": "/fantastic-four-2-banner.webp"
  },
  "x-men-the-last-stand": {
    "poster": "/x-men-last-stand.jpg",
    "banner": "/x-men-last-stand-banner.jpg"
  },
  "ghost-rider": {
    "poster": "/ghost-rider.jpg",
    "banner": "/ghost-rider-banner.jpg"
  },
  "ghost-rider-spirit-of-vengeance": {
    "poster": "/ghost-rider-2.jpg",
    "banner": "/ghost-rider-2-banner.jpg"
  },
  "spider-man-3": {
    "poster": "/spider-man-3.jpg",
    "banner": "/spider-man-3-banner.jpg"
  },
  "the-incredible-hulk-2008": {
    "poster": "/incredible-hulk.jpg",
    "banner": "/incredible-hulk-banner.jpg"
  },
  "iron-man": {
    "poster": "/iron-man.jpg",
    "banner": "/iron-man-banner.jpg"
  },
  "iron-man-2": {
    "poster": "/iron-man-2.jpg",
    "banner": "/iron-man-2-banner.jpg"
  },
  "hulk-2003": {
    "poster": "/hulk-2003.jpg",
    "banner": "/hulk-2003-banner.jpg"
  },
  "thor": {
    "poster": "/thor.jpg",
    "banner": "/thor-banner.jpg"
  },
  "the-avengers": {
    "poster": "/avengers.jpg",
    "banner": "/avengers-banner.jpg"
  },
  "agents-of-shield": {
    "poster": "/agents-of-shield.jpg",
    "banner": "/agents-of-shield-banner.jpg"
  },
  "thor-the-dark-world": {
    "poster": "/thor-dark-world.jpg",
    "banner": "/thor-dark-world-banner.webp"
  },
  "the-wolverine": {
    "poster": "/the-wolverine.jpg",
    "banner": "/the-wolverine-banner.jpg"
  },
  "x-men-days-of-future-past": {
    "poster": "/days-of-future-past.jpg",
    "banner": "/days-of-future-past-banner.jpg"
  },
  "x-men-apocalypse": {
    "poster": "/x-men-apocalypse.jpg",
    "banner": "/x-men-apocalypse-banner.jpg"
  },
  "x-men-dark-phoenix": {
    "poster": "/x-men-dark-phoenix.jpg",
    "banner": "/x-men-dark-phoenix-banner.jpg"
  },
  "the-amazing-spider-man": {
    "poster": "/amazing-spider-man.jpg",
    "banner": "/amazing-spider-man-banner.jpg"
  },
  "iron-man-3": {
    "poster": "/iron-man-3.jpg",
    "banner": "/iron-man-3-banner.jpg"
  },
  "captain-america-the-winter-soldier": {
    "poster": "/winter-soldier.jpg",
    "banner": "/winter-soldier-banner.jpg"
  },
  "the-amazing-spider-man-2": {
    "poster": "/amazing-spider-man-2.jpg",
    "banner": "/amazing-spider-man-2-banner.webp"
  },
  "guardians-of-the-galaxy": {
    "poster": "/gotg.jpg",
    "banner": "/gotg-banner.jpg"
  },
  "guardians-of-the-galaxy-vol-2": {
    "poster": "/gotg-2.jpg",
    "banner": "/gotg-2-banner.jpg"
  },
  "magic-maker": {
  poster: "/magic-maker.jpg",
  banner: "/magic-maker-banner.jpg"
},
  "gorilla-gods-go-to-girl": {
  poster: "/gorilla-gods.webp",
  banner: "/gorilla-gods-banner.jpg"
},
  "one-punch-man": {
  poster: "/one-punch-man.jpg",
  banner: "/one-punch-man-banner.jpg"
},
  "wind-breaker": {
  poster: "/wind-breaker.jpg",
  banner: "/wind-breaker-banner.jpg"
},
  "shikkakumon-no-saikyou-kenja": {
  poster: "/strongest-sage.jpg",
  banner: "/strongest-sage-banner.webp"
},
  "maoyu-archenemy-and-hero": {
  poster: "/maoyu.jpg",
  banner: "/maoyu-banner.jpg"
},
  "scooped-up-by-an-s-rank-adventurer": {
  poster: "/s-rank-adventurer.jpg",
  banner: "/s-rank-adventurer-banner.jpg"
},
  "frieren-beyond-journeys-end": {
  poster: "/frieren.jpg",
  banner: "/frieren-banner.webp"
},
  "tower-of-god": {
  poster: "/tower-of-god.jpg",
  banner: "/tower-of-god-banner.jpg"
},
  "the-misfit-of-demon-king-academy": {
  poster: "/misfit-demon-king.jpg",
  banner: "/misfit-demon-king-banner.jpg"
},
  "tsukimichi-moonlit-fantasy": {
  poster: "/tsukimichi.jpg",
  banner: "/tsukimichi-banner.jpg"
},
  "i-left-my-a-rank-party-to-help-my-former-students": {
  poster: "/a-rank-party.jpg",
  banner: "/a-rank-party-banner.webp"
},
  "i-was-reincarnated-as-the-7th-prince": {
  poster: "/7th-prince.webp",
  banner: "/7th-prince-banner.webp"
},
  "reborn-as-a-vending-machine": {
  poster: "/vending-machine.jpg",
  banner: "/vending-machine-banner.jpg"
},
  "spirit-chronicles": {
  poster: "/spirit-chronicles.jpg",
  banner: "/spirit-chronicles-banner.png"
},
  "the-fruit-of-evolution": {
  poster: "/fruit-of-evolution.jpg",
  banner: "/fruit-of-evolution-banner.jpg"
},
  "the-worlds-finest-assassin": {
  poster: "/worlds-finest-assassin.jpg",
  banner: "/worlds-finest-assassin-banner.webp"
},
  "let-this-grieving-soul-retire": {
  poster: "/grieving-soul.jpg",
  banner: "/grieving-soul-banner.jpg"
},
  
  "zenshu": {
  poster: "/zenshu.jpg",
  banner: "/zenshu-banner.png"
},
  "new-saga": {
  poster: "/new-saga.jpg",
  banner: "/new-saga-banner.jpg"
},
  "re-monster": {
  poster: "/re-monster.jpg",
  banner: "/re-monster-banner.jpg"
},
  "trapped-in-a-dating-sim": {
  poster: "/dating-sim.jpg",
  banner: "/dating-sim-banner.jpg"
},
  "the-reincarnation-of-the-strongest-exorcist": {
  poster: "/strongest-exorcist.jpg",
  banner: "/strongest-exorcist-banner.jpg"
},
  "even-given-the-worthless-appraiser-class": {
  poster: "/appraiser.jpg",
  banner: "/appraiser-banner.webp"
},
  "hero-without-a-class": {
  poster: "/hero-without-class.webp",
  banner: "/hero-without-class-banner.webp"
},
  "my-isekai-life": {
  poster: "/my-isekai-life.jpg",
  banner: "/my-isekai-life-banner.webp"
},
  "alya-sometimes-hides-her-feelings-in-russian": {
  poster: "/alya.jpg",
  banner: "/alya-banner.jpg"
},
  "the-reason-why-raeliana-ended-up-at-the-dukes-mansion": {
  poster: "/raeliana.jpg",
  banner: "/raeliana-banner.webp"
},
  "rascal-does-not-dream-of-bunny-girl-senpai": {
  poster: "/bunny-girl-senpai.jpg",
  banner: "/bunny-girl-senpai-banner.jpg"
},
  "a-girl-and-her-guard-dog": {
  poster: "/a-girl-and-her-guard-dog.webp",
  banner: "/a-girl-and-her-guard-dogb.webp"
},
  
  "shimoneta": {
  poster: "/shimoneta.jpg",
  banner: "/shimonetab.jpg"
},
  "kaiju-no-8": {
  poster: "/kaiju-no-8.jpg",
  banner: "/kaiju-no-8-banner.jpg"
},
  "chillin-in-my-30s-after-getting-fired-from-the-demon-kings-army": {
  poster: "/chillin-in-my-30s.jpg",
  banner: "/chillin-in-my-30s-banner.jpg"
},
  "if-its-for-my-daughter-id-even-defeat-a-demon-lord": {
  poster: "/if-its-for-my-daughter.jpg",
  banner: "/if-its-for-my-daughter-banner.jpg"
},
  "campfire-cooking-in-another-world": {
  poster: "/campfire-cooking.jpg",
  banner: "/campfire-cooking-banner.webp"
},
  "as-a-reincarnated-aristocrat-ill-use-my-appraisal-skill": {
  poster: "/reincarnated-aristocrat.jpg",
  banner: "/reincarnated-aristocrat-banner.webp"
},
  "tougen-anki": {
  poster: "/tougen-anki.jpg",
  banner: "/tougen-anki-banner.jpg"
},
  "dandadan": {
  poster: "/dandadan.jpg",
  banner: "/dandadan-banner.jpg"
},
  "zom-100": {
    poster: "/zom100.jpg",
    banner: "/zom100b.jpg",
  },
  "parasyte": {
  poster: "/parasyte.jpg",
  banner: "/parasyte-banner.png",
},
  "rezero": {
  poster: "/re-zero.jpg",
  banner: "/re-zero-banner.jpg",
},
  "bucchigiri": {
  poster: "/bucchigiri.jpg",
  banner: "/bucchigiri-banner.webp"
},
  "hells-paradise": {
  poster: "/hell-paradise.jpg",
  banner: "/hell-paradise-banner.jpg"
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
  poster: "/re-zero.jpg",
  banner: "/re-zero-banner.jpg",
},
  "demon-slayer": {
  poster: "/demon-slayer.jpg",
  banner: "/demon-slayer-banner.jpg",
},
  "dr-stone": {
  poster: "/dr-stone.jpg",
  banner: "/dr-stone-banner.jpg",
},
  "that-time-i-got-reincarnated-as-a-slime": {
  poster: "/slime.jpg",
  banner: "/slime-banner.jpg",
},
  "haikyuu": {
  poster: "/haikyuu.jpg",
  banner: "/haikyuu-banner.jpg",
},
  "monster": {
  poster: "/monster.jpg",
  banner: "/monster-banner.jpg",
},
  "the-rising-of-the-shield-hero": {
  poster: "/shield-hero.jpg",
  banner: "/shield-hero-banner.jpg",
},
  "overlord": {
  poster: "/overlord.jpg",
  banner: "/overlord-banner.jpg",
},
  "vinland-saga": {
  poster: "/vinland-saga.jpg",
  banner: "/vinland-saga-banner.jpg",
},

"jujutsu-kaisen": {
  poster: "/jujutsu-kaisen.jpg",
  banner: "/jujutsu-kaisen-banner.jpg",
},

"tokyo-revengers": {
  poster: "/tokyo-revengers.jpg",
  banner: "/tokyo-revengers-banner.jpg",
},

"tokyo-ghoul": {
  poster: "/tokyo-ghoul.jpg",
  banner: "/tokyo-ghoul-banner.jpg",
},

"shangri-la-frontier": {
  poster: "/shangri-la-frontier.jpg",
  banner: "/shangri-la-frontier.jpg",
},

"slugterra": {
  poster: "/slugterra.jpg",
  banner: "/slugterra-banner.jpeg",
},

"spy-x-family": {
  poster: "/spy-x-family.jpg",
  banner: "/spy-x-family-banner.jpg",
},

"the-daily-life-of-the-immortal-king": {
  poster: "/immortal-king.jpg",
  banner: "/immortal-king-banner.jpg",
},

"arifureta-from-commonplace-to-worlds-strongest": {
  poster: "/arifureta.jpg",
  banner: "/arifureta-banner.jpg",
},

"blue-lock": {
  poster: "/blue-lock.jpg",
  banner: "/blue-lock-banner.jpg",
},

"assassination-classroom": {
  poster: "/assassination-classroom.jpg",
  banner: "/assassination-classroom-banner.jpg",
},

"the-ancient-magus-bride": {
  poster: "/ancient-magus-bride.jpg",
  banner: "/ancient-magus-bride-banner.jpg",
},

"the-apothecary-diaries": {
  poster: "/apothecary-diaries.jpg",
  banner: "/apothecary-diaries-banner.webp",
},

"mushoku-tensei-jobless-reincarnation": {
  poster: "/mushoku-tensei.jpg",
  banner: "/mushoku-tensei.jpg",
},

"tottemo-luckyman": {
  poster: "/luckyman.jpg",
  banner: "/luckyman-banner.jpg",
},
  "death-note": {
  poster: "/death-note.jpg",
  banner: "/death-note-banner.jpg",
},

"the-eminence-in-shadow": {
  poster: "/eminence-in-shadow.jpg",
  banner: "/eminence-in-shadow-banner.jpg",
},

// Removed entries for non-existent image files - placeholder generator handles these

"mashle-magic-and-muscles": {
  poster: "/mashle.jpg",
  banner: "/mashle-banner.jpg",
},

"ragna-crimson": {
  poster: "/ragna-crimson.jpg",
  banner: "/ragna-crimson-banner.jpg",
},

"lord-of-mysteries": {
  poster: "/lord-of-mysteries.jpg",
  banner: "/lord-of-mysteries-banner.jpg",
},

"sakamoto-days": {
  poster: "/sakamoto-days.jpg",
  banner: "/sakamoto-days-banner.webp",
},

"dead-mount-death-play": {
  poster: "/dead-mount-death-play.jpg",
  banner: "/dead-mount-death-play-banner.jpg",
},

"as-a-reincarnated-aristocrat-ill-use-my-appraisal-skill-to-rise-in-the-world": {
  poster: "/reincarnated-aristocrat.jpg",
  banner: "/reincarnated-aristocrat-banner.jpg",
},

"tougen-anki-dark-demon-of-paradise": {
  poster: "/tougen-anki.jpg",
  banner: "/tougen-anki-banner.jpg",
},

"the-fruit-of-evolution-before-i-knew-it-my-life-had-it-made": {
  poster: "/fruit-of-evolution.jpg",
  banner: "/fruit-of-evolution-banner.jpg",
},

"seirei-gensouki-spirit-chronicles": {
  poster: "/spirit-chronicles.jpg",
  banner: "/spirit-chronicles-banner.png",
},

"reborn-as-a-vending-machine-now-i-wander-the-dungeon": {
  poster: "/vending-machine.jpg",
  banner: "/vending-machine-banner.jpg",
},

"i-was-reincarnated-as-the-7th-prince-so-i-can-take-my-time-perfecting-my-magical-ability": {
  poster: "/7th-prince.webp",
  banner: "/7th-prince-banner.webp",
},

"darling-in-the-franxx": {
  poster: "/darling-franxx.jpg",
  banner: "/darling-franxx-banner.jpg",
},

"i-left-my-a-rank-party-to-help-my-former-students-reach-the-dungeon-depths": {
  poster: "/a-rank-party.jpg",
  banner: "/a-rank-party-banner.webp",
},

"banished-from-the-heros-party": {
  poster: "/banished-hero-party.jpg",
  banner: "/banished-hero-party-banner.jpg",
},

"how-not-to-summon-a-demon-lord": {
  poster: "/demon-lord.jpg",
  banner: "/demon-lord-banner.jpg",
},

"my-dress-up-darling": {
  poster: "/dress-up-darling.jpg",
  banner: "/dress-up-darling-banner.jpg",
},

"tying-the-knot-with-an-amagami-sister": {
  poster: "/amagami-sister.jpg",
  banner: "/amagami-sister-banner.webp",
},
  "the-god-of-high-school": {
  poster: "/god-of-high-school.jpg",
  banner: "/god-of-high-school-banner.jpg"
},

"gachiakuta": {
  poster: "/gachiakuta.jpg",
  banner: "/gachiakuta-banner.jpg",
},
  "demon-lord-2099": {
  poster: "/demon-lord-2099.jpg",
  banner: "/demon-lord-2099-banner.webp",
},

"wistoria-wand-and-sword": {
  poster: "/wistoria.jpg",
  banner: "/wistoria-banner.webp",
},

"god-of-high-school": {
  poster: "/god-of-high-school.jpg",
  banner: "/god-of-high-school-banner.jpg",
},

"berserk-of-gluttony": {
  poster: "/berserk-of-gluttony.jpg",
  banner: "/berserk-of-gluttony-banner.webp",
},

"the-great-cleric": {
  poster: "/great-cleric.jpg",
  banner: "/great-cleric-banner.png",
},

"takopis-original-sin": {
  poster: "/takopi.jpg",
  banner: "/takopi-banner.jpg",
},

"good-bye-dragon-life": {
  poster: "/goodbye-dragon-life.jpg",
  banner: "/goodbye-dragon-life-banner.png",
},

"irina-the-vampire-cosmonaut": {
  poster: "/irina-banner.webp",
  banner: "/irina-banner.webp",
},

"the-brilliant-healers-new-life-in-the-shadows": {
  poster: "/brilliant-healer.jpg",
  banner: "/brilliant-healer-banner.jpg",
},

"skeleton-knight-in-another-world": {
  poster: "/skeleton-knight.jpg",
  banner: "/skeleton-knight-banner.jpg",
},

"akashic-records-of-bastard-magic-instructor": {
  poster: "/akashic-records.jpg",
  banner: "/akashic-records-banner.webp",
},

"more-than-a-married-couple-but-not-lovers": {
  poster: "/married-couple.jpg",
  banner: "/married-couple-banner.jpg",
},

"my-isekai-life-i-gained-a-second-character-class-and-became-the-strongest-sage-in-the-world": {
  poster: "/my-isekai-life.jpg",
  banner: "/my-isekai-life-banner.webp",
},

"chainsaw-man": {
  poster: "/chainsaw-man.jpg",
  banner: "/chainsaw-man-banner.jpg",
},

"lookism": {
  poster: "/lookism.jpg",
  banner: "/lookism-banner.jpg",
},

"viral-hit": {
  poster: "/viral-hit.webp",
  banner: "/viral-hit-banner.webp",
},

"hero-without-a-class-who-even-needs-skills": {
  poster: "/hero-without-class.webp",
  banner: "/hero-without-class-banner.webp",
},

"handyman-saitou-in-another-world": {
  poster: "/handyman-saitou.jpg",
  banner: "/handyman-saitou-banner.webp",
},

"death-march-to-the-parallel-world-rhapsody": {
  poster: "/death-march.jpg",
  banner: "/death-march.jpg",
},

"the-iceblade-sorcerer-shall-rule-the-world": {
  poster: "/iceblade-sorcerer.jpg",
  banner: "/iceblade-sorcerer-banner.jpg",
},

"the-water-magician": {
  poster: "/water-magician.jpg",
  banner: "/water-magician-banner.webp",
},

"even-given-the-worthless-appraiser-class-im-actually-the-strongest": {
  poster: "/appraiser.jpg",
  banner: "/appraiser-banner.webp",
},

"why-does-nobody-remember-me-in-this-world": {
  poster: "/nobody-remembers.jpg",
  banner: "/nobody-remembers-banner.jpg",
},

"campfire-cooking-in-another-world-with-my-absurd-skill": {
  poster: "/campfire-cooking.jpg",
  banner: "/campfire-cooking-banner.webp",
},

"the-reincarnation-of-the-strongest-exorcist-in-another-world": {
  poster: "/strongest-exorcist.jpg",
  banner: "/strongest-exorcist-banner.jpg",
},

"i-got-a-cheat-skill-in-another-world": {
  poster: "/cheat-skill.jpg",
  banner: "/cheat-skill-banner.webp",
},

"trapped-in-a-dating-sim-the-world-of-otome-games-is-tough-for-mobs": {
  poster: "/dating-sim.jpg",
  banner: "/dating-sim-banner.jpg",
},

// re-monster already defined above

"erased": {
  poster: "/erased.jpg",
  banner: "/erased-banner.jpg",
},

"the-maid-i-hired-recently-is-mysterious": {
  poster: "/mysterious-maid.jpg",
  banner: "/mysterious-maid-banner.webp",
},

"chillin-in-another-world-with-level-2": {
  poster: "/level-2.jpg",
  banner: "/level-2-banner.webp",
},

"no-longer-allowed-in-another-world": {
  poster: "/no-longer-allowed.jpg",
  banner: "/no-longer-allowed.jpg",
},

"the-greatest-demon-lord-is-reborn-as-a-typical-nobody": {
  poster: "/demon-lord.jpg",
  banner: "/demon-lord-banner.jpg",
},

// Duplicates removed — these entries already exist above with proper banner paths

"failure-frame": {
  poster: "/failure-frame.jpg",
  banner: "/failure-frame-banner.jpg",
},

"the-unaware-atelier-meister": {
  poster: "/atelier-meister.jpg",
  banner: "/atelier-meister-banner.webp",
},

"black-summoner": {
  poster: "/black-summoner.jpg",
  banner: "/black-summoner-banner.jpg",
},

"my-unique-skill-makes-me-op-even-at-level-1": {
  poster: "/unique-skill.jpg",
  banner: "/unique-skill-banner.webp",
},

"you-are-ms-servant": {
  poster: "/ms-servant.jpg",
  banner: "/ms-servant-banner.webp",
},

"i-parry-everything": {
  poster: "/parry-everything.jpg",
  banner: "/parry-everything-banner.jpg",
},

"tales-of-wedding-rings": {
  poster: "/wedding-rings.webp",
  banner: "/wedding-rings-banner.jpg",
},

"possibly-the-greatest-alchemist-of-all-time": {
  poster: "/greatest-alchemist.jpg",
  banner: "/greatest-alchemist-banner.jpg",
},

"the-weakest-tamer-began-a-journey-to-pick-up-trash": {
  poster: "/weakest-tamer.jpg",
  banner: "/weakest-tamer-banner.jpg",
},

"kamikatsu-working-for-god-in-a-godless-world": {
  poster: "/kamikatsu-banner.jpg",
  banner: "/kamikatsu-banner.jpg",
},

"magic-maker-how-to-make-magic-in-another-world": {
  poster: "/magic-maker.jpg",
  banner: "/magic-maker-banner.jpg",
},

"the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat": {
  poster: "/finest-assassin.jpg",
  banner: "/finest-assassin-banner.webp",
},

"my-tiny-senpai": {
  poster: "/tiny-senpai.jpg",
  banner: "/tiny-senpai-banner.jpg",
},

"demon-lord-retry": {
  poster: "/demon-lord-retry.webp",
  banner: "/demon-lord-retry-banner.webp",
},

"i-shall-survive-using-potions": {
  poster: "/survive-using-potion.webp",
  banner: "/survive-using-potion-banner.jpg",
},

"am-i-actually-the-strongest": {
  poster: "/actually-strongest.jpg",
  banner: "/actually-strongest-banner.jpg",
},

"beast-tamer": {
  poster: "/beast-tamer.jpg",
  banner: "/beast-tamer-banner.jpg",
},

"gods-games-we-play": {
  poster: "/gods-games.jpg",
  banner: "/gods-games-banner.jpg",
},

"ive-somehow-gotten-stronger-when-i-improved-my-farm-related-skills": {
  poster: "/farm-skills.jpg",
  banner: "/farm-skills-banner.jpg",
},

"friends-game": {
  poster: "/friends-game.jpg",
  banner: "/friends-game-banner.jpg",
},

"the-detective-is-already-dead": {
  poster: "/detective-dead.jpg",
  banner: "/detective-dead-banner.webp",
},

"re-life": {
  poster: "/re-life.jpg",
  banner: "/re-life-banner.jpg",
},

"hell-paradise": {
  poster: "/hell-paradise.jpg",
  banner: "/hell-paradise-banner.jpg",
},

"the-red-ranger-becomes-an-adventurer-in-another-world": {
  poster: "/red-ranger.jpg",
  banner: "/red-ranger-banner.jpg",
},

"farming-life-in-another-world": {
  poster: "/farming-life.jpg",
  banner: "/farming-life-banner.webp",
},

"vermeil-in-gold": {
  poster: "/vermeil.jpg",
  banner: "/vermeil-banner.jpg",
},

"im-quitting-heroing": {
  poster: "/quitting-heroing.jpg",
  banner: "/quitting-heroing-banner.jpg",
},

"the-strongest-magician-in-the-demon-lords-army-was-a-human": {
  poster: "/strongest-magician.jpg",
  banner: "/strongest-magician-banner.jpg",
},

"the-legendary-hero-is-dead": {
  poster: "/legendary-hero-dead.jpg",
  banner: "/legendary-hero-dead-banner.jpg",
},

"the-hidden-dungeon-only-i-can-enter": {
  poster: "/hidden-dungeon.jpg",
  banner: "/hidden-dungeon-banner.webp",
},

"an-archdemons-dilemma-how-to-love-your-elf-bride": {
  poster: "/archdemon-dilemma.jpg",
  banner: "/archdemon-dilemma-banner.jpg",
},

"hokkaido-gals-are-super-adorable": {
  poster: "/hokkaido-gals.jpg",
  banner: "/hokkaido-gals-banner.webp",
},

"im-getting-married-to-a-girl-i-hate-in-my-class": {
  poster: "/girl-i-hate.jpg",
  banner: "/girl-i-hate-banner.jpg",
},

"a-gatherers-adventure-in-isekai": {
  poster: "/gatherer.jpg",
  banner: "/gatherer-banner.webp",
},
  
  "elegant-yokai-apartment-life": {
    poster: "/elegant-yokai-apartment-life.jpg",
    banner: "/elegant-yokai-apartment-lifeb.png",
  },
  "val-x-love": {
    poster: "/val-x-love.jpg",
    banner: "/val-x-loveb.webp",
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
    banner: "/tsugumomob.webp",
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
    banner: "/welcome-to-demon-school-iruma-kunb.webp",
  },
  "the-daily-life-of-a-middle-aged-online-shopper-in-another-world": {
    poster: "/the-daily-life-of-a-middle-aged-online-shopper-in-another-world.jpg",
    banner: "/the-daily-life-of-a-middle-aged-online-shopper-in-another-worldb.jpg",
  },
  "aesthetica-of-a-rogue-hero": {
    poster: "/esthetica-of-a-rogue-hero.jpg",
    banner: "/esthetica-of-a-rogue-herob.jpg",
  },
  "a-harem-in-a-fantasy-world-labyrinth": {
    poster: "/a-harem-in-a-fantasy-world-labyrinth.jpg",
    banner: "/a-harem-in-a-fantasy-world-labyrinthb.jpg",
  },
  "demon-sword-master-of-excalibur-academy": {
    poster: "/emon-sword-master-of-excalibur-academy.jpg",
    banner: "/emon-sword-master-of-excalibur-academyb.webp",
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
    banner: "/our-last-crusade-or-the-rise-of-a-new-worldb.webp",
  },
  "unnamed-memory": {
    poster: "/unnamed-memory.jpg",
    banner: "/unnamed-memoryb.webp",
  },
  "studio-apartment-good-lighting-angel-included": {
    poster: "/studio-apartment-good-lighting-angel-included.jpg",
    banner: "/studio-apartment-good-lighting-angel-includedb.webp",
  },
  "chainsaw-man-reze-arc": {
    poster: "/chainsaw-man-reze-arc.jpg",
    banner: "/chainsaw-man-reze-arcb.webp",
  },
  "chronos-ruler": {
    poster: "/hronos-ruler.jpg",
    banner: "/hronos-rulerb.jpg",
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
    banner: "/mother-of-the-goddess-dormitoryb.webp",
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
    banner: "/welcome-to-japan-ms-elfb.webp",
  },
  // shimoneta already defined above
  "im-giving-the-disgraced-noble-lady-i-rescued-a-crash-course-in-naughtiness": {
    poster: "/im-giving-the-disgraced-noble-lady-i-rescued-a-crash-course-in-naughtiness.jpg",
    banner: "/im-giving-the-disgraced-noble-lady-i-rescued-a-crash-course-in-naughtinessb.webp",
  },
  "miss-caretaker-of-sunohara-sou": {
    poster: "/miss-caretaker-of-sunohara-sou.jpg",
    banner: "/miss-caretaker-of-sunohara-soub.jpg",
  },
  "waiting-in-the-summer": {
    poster: "/waiting-in-the-summer.webp",
    banner: "/waiting-in-the-summerb.webp",
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
    banner: "/in-another-world-with-my-smartphoneb.webp",
  },
  "yu-no-a-girl-who-chants-love-at-the-bound-of-this-world": {
    poster: "/yu-no.jpg",
    banner: "/yu-nob.jpg",
  },
  "the-beginning-after-the-end": {
    poster: "/the-beginning-after-the-end.webp",
    banner: "/the-beginning-after-the-endb.webp",
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
    banner: "/bastardb.webp",
  },
  "monster-musume-everyday-life-with-monster-girls": {
    poster: "/monster-musume.png",
    banner: "/monster-musumeb.webp",
  },
  "worlds-end-harem": {
    poster: "/worlds-end-harem.jpg",
    banner: "/worlds-end-haremb.jpg",
  },
  "sekirei": {
    poster: "/sekirei.webp",
    banner: "/sekireib.webp",
  },
  "plunderer": {
    poster: "/plunderer.jpg",
    banner: "/plundererb.jpg",
  },
  "domestic-girlfriend": {
    poster: "/domestic-girlfriend.jpg",
    banner: "/domestic-girlfriendb.webp",
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
    banner: "/the-new-gateb.webp",
  },
  "dragon-raja": {
    poster: "/dragon-raja.jpg",
    banner: "/dragon-rajab.webp",
  },
  "the-unwanted-undead-adventurer": {
    poster: "/the-unwanted-undead-adventurer.jpg",
    banner: "/the-unwanted-undead-adventurerb.webp",
  },
  "angels-of-death": {
    poster: "/angels-of-death.jpg",
    banner: "/angels-of-deathb.jpg",
  },
  "dealing-with-mikadono-sisters-is-a-breeze": {
    poster: "/ealing-with-mikadono-sisters-is-a-breeze.jpg",
    banner: "/ealing-with-mikadono-sisters-is-a-breezeb.webp",
  },
  "a-nobodys-way-up-to-an-exploration-hero-lv": {
    poster: "/a-nobodys-way-up-to-an-exploration-hero-lv.webp",
    banner: "/a-nobodys-way-up-to-an-exploration-hero-lvb.webp",
  },
  "welcome-to-the-outcasts-restaurant": {
    poster: "/welcome-to-the-outcasts-restaurant.jpg",
    banner: "/welcome-to-the-outcasts-restaurantb.webp",
  },
  "so-i-cant-play-h": {
    poster: "/so-i-cant-play-h.jpg",
    banner: "/so-i-cant-play-hb.jpg",
  },
  "the-last-summoner": {
    poster: "/the-last-summoner.jpg",
    banner: "/the-last-summonerb.webp",
  },
  "the-chosen-one": {
    poster: "/the-chosen-one.webp",
    banner: "/the-chosen-oneb.webp",
  },
  "choyoyu-high-school-prodigies-have-it-easy-even-in-another-world": {
    poster: "/choyoyu.webp",
    banner: "/choyoyub.jpg",
  },
  "maburaho": {
    poster: "/maburaho.jpg",
    banner: "/maburahob.webp",
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
    banner: "/the-aristocrats-otherworldly-adventureb.webp",
  },
  "yuragi-sou-no-yuuna-san": {
    poster: "/yuragi-sou-no-yuuna-san.webp",
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
    banner: "/tenpurub.webp",
  },
  "chained-soldier": {
    poster: "/chained-soldier.webp",
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
    banner: "/please-teacherb.png",
  },
  "the-foolish-angel-dances-with-the-devil": {
    poster: "/the-foolish-angel-dances-with-the-devil.jpg",
    banner: "/the-foolish-angel-dances-with-the-devilb.webp",
  },
  // a-girl-and-her-guard-dog already defined above
  "bogus-skill-fruitmaster": {
    poster: "/bogus-skill-fruitmaster.jpg",
    banner: "/bogus-skill-fruitmasterb.jpg",
  },
  "sword-of-the-demon-hunter-kijin-gentosho": {
    poster: "/sword-of-the-demon-hunter-kijin-gentosho.jpg",
    banner: "/sword-of-the-demon-hunter-kijin-gentoshob.webp",
  },
  "spare-me-great-lord": {
    poster: "/spare-me-great-lord.jpg",
    banner: "/spare-me-great-lordb.jpg",
  },
  "the-summer-hikaru-died": {
    poster: "/the-summer-hikaru-died.webp",
    banner: "/the-summer-hikaru-diedb.jpg",
  },
  "combatants-will-be-dispatched": {
    poster: "/combatants-will-be-dispatched.jpg",
    banner: "/combatants-will-be-dispatchedb.webp",
  },
  "the-strongest-tanks-labyrinth-raids": {
    poster: "/the-strongest-tanks-labyrinth-raids.jpg",
    banner: "/the-strongest-tanks-labyrinth-raidsb.webp",
  },
  "mission-yozakura-family": {
    poster: "/mission-yozakura-family.jpg",
    banner: "/mission-yozakura-familyb.webp",
  },
  "our-dating-story-the-experienced-you-and-the-inexperienced-me": {
    poster: "/our-dating-story.jpg",
    banner: "/our-dating-storyb.jpg",
  },
  "chivalry-of-a-failed-knight": {
    poster: "/chivalry-of-a-failed-knight.jpg",
    banner: "/chivalry-of-a-failed-knightb.webp",
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
    banner: "/the-banished-former-hero-lives-as-he-pleasesb.webp",
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
