const videos = [
  {
    id: 1,
    title: "Mahoney's Last Stand",
    view: 6,
    time: 47,
    channel: "Virgina",
    verified: false,
  },
  {
    id: 2,
    title: "Beaches",
    view: 84,
    time: 94,
    channel: "Jerrylee",
    verified: false,
  },
  {
    id: 3,
    title: "Zatoichi the Outlaw (Zatôichi rôyaburi) (Zatôichi 16)",
    view: 89,
    time: 12,
    channel: "Olive",
    verified: false,
  },
  {
    id: 4,
    title: "After Death (Posle smerti)",
    view: 75,
    time: 60,
    channel: "Kennie",
    verified: false,
  },
  {
    id: 5,
    title: "Touch of Zen, A (Xia nu)",
    view: 62,
    time: 57,
    channel: "Eldridge",
    verified: true,
  },
  {
    id: 6,
    title: "Jaws: The Revenge",
    view: 19,
    time: 32,
    channel: "Adriano",
    verified: false,
  },
  {
    id: 7,
    title: "Herod's Law (Ley de Herodes, La)",
    view: 4,
    time: 4,
    channel: "Rubin",
    verified: false,
  },
  {
    id: 8,
    title: "I Am Dina",
    view: 67,
    time: 98,
    channel: "Burgess",
    verified: false,
  },
  {
    id: 9,
    title: "Detroit",
    view: 79,
    time: 90,
    channel: "Simeon",
    verified: true,
  },
  {
    id: 10,
    title: "Before I Self Destruct",
    view: 18,
    time: 31,
    channel: "Ellary",
    verified: true,
  },
  {
    id: 11,
    title: "Spy Who Came in from the Cold, The",
    view: 92,
    time: 86,
    channel: "Caressa",
    verified: true,
  },
  {
    id: 12,
    title: "Yes, But... (Oui, mais...)",
    view: 45,
    time: 33,
    channel: "Milicent",
    verified: false,
  },
  {
    id: 13,
    title: "Butterflies Are Free",
    view: 60,
    time: 67,
    channel: "Darlleen",
    verified: true,
  },
  {
    id: 14,
    title: "Q",
    view: 8,
    time: 12,
    channel: "Danella",
    verified: true,
  },
  {
    id: 15,
    title: "Bad Guy (Nabbeun namja)",
    view: 26,
    time: 96,
    channel: "Elonore",
    verified: false,
  },
  {
    id: 16,
    title: "All Watched Over by Machines of Loving Grace",
    view: 71,
    time: 83,
    channel: "Rollie",
    verified: false,
  },
  {
    id: 17,
    title: "Lana Turner... a Daughter's Memoir",
    view: 88,
    time: 96,
    channel: "Teresina",
    verified: false,
  },
  {
    id: 18,
    title: "Man-Proof",
    view: 33,
    time: 45,
    channel: "Foss",
    verified: true,
  },
  {
    id: 19,
    title: "The House of Intrigue",
    view: 99,
    time: 12,
    channel: "Shelley",
    verified: false,
  },
  {
    id: 20,
    title: "Sherlock Holmes: A Game of Shadows",
    view: 75,
    time: 29,
    channel: "Olympia",
    verified: false,
  },
  {
    id: 21,
    title: "Education of Little Tree, The",
    view: 73,
    time: 87,
    channel: "Amelita",
    verified: false,
  },
  {
    id: 22,
    title: "Grand, The",
    view: 48,
    time: 62,
    channel: "Lionel",
    verified: false,
  },
  {
    id: 23,
    title: "Cyrano de Bergerac",
    view: 86,
    time: 29,
    channel: "Ketty",
    verified: false,
  },
  {
    id: 24,
    title: "Last Dragon, The",
    view: 100,
    time: 13,
    channel: "Delinda",
    verified: true,
  },
  {
    id: 25,
    title: "Skeleton Key, The",
    view: 82,
    time: 16,
    channel: "Marina",
    verified: true,
  },
  {
    id: 26,
    title: "Badman's Territory",
    view: 7,
    time: 79,
    channel: "Christiane",
    verified: false,
  },
  {
    id: 27,
    title:
      "Gods Must Be Crazy III, The (a.k.a. Crazy Safari) (Fei zhou he shang)",
    view: 55,
    time: 68,
    channel: "Jacinthe",
    verified: true,
  },
  {
    id: 28,
    title: "8 1/2 (8½)",
    view: 100,
    time: 90,
    channel: "Liane",
    verified: false,
  },
  {
    id: 29,
    title: "Blow-Out (La grande bouffe)",
    view: 7,
    time: 100,
    channel: "Rodie",
    verified: true,
  },
  {
    id: 30,
    title: "The Little Kidnappers",
    view: 30,
    time: 18,
    channel: "Hilton",
    verified: false,
  },
  {
    id: 31,
    title: "For Love of Ivy",
    view: 22,
    time: 71,
    channel: "Barr",
    verified: false,
  },
  {
    id: 32,
    title: "How to Survive a Plague",
    view: 71,
    time: 12,
    channel: "Kristal",
    verified: false,
  },
  {
    id: 33,
    title: "Haunted House",
    view: 34,
    time: 74,
    channel: "Maitilde",
    verified: true,
  },
  {
    id: 34,
    title: "Dacii",
    view: 59,
    time: 61,
    channel: "Jerrine",
    verified: false,
  },
  {
    id: 35,
    title: "Billy Bathgate",
    view: 73,
    time: 81,
    channel: "Sandro",
    verified: false,
  },
  {
    id: 36,
    title: "Blood Work",
    view: 23,
    time: 47,
    channel: "Michail",
    verified: true,
  },
  {
    id: 37,
    title: "Invisible Man Returns, The",
    view: 95,
    time: 94,
    channel: "Ginger",
    verified: true,
  },
  {
    id: 38,
    title: "Train Robbers, The",
    view: 75,
    time: 91,
    channel: "Stinky",
    verified: true,
  },
  {
    id: 39,
    title: "Leprechaun 3",
    view: 30,
    time: 20,
    channel: "Leodora",
    verified: true,
  },
  {
    id: 40,
    title: "Gamera vs. Barugon",
    view: 90,
    time: 56,
    channel: "Georgette",
    verified: true,
  },
  {
    id: 41,
    title: "Pastoral Hide and Seek (Den-en ni shisu)",
    view: 9,
    time: 15,
    channel: "Reggi",
    verified: false,
  },
  {
    id: 42,
    title: "Raisin in the Sun, A",
    view: 83,
    time: 45,
    channel: "Charmine",
    verified: false,
  },
  {
    id: 43,
    title: "Desperately Seeking Susan",
    view: 58,
    time: 6,
    channel: "Henry",
    verified: false,
  },
  {
    id: 44,
    title:
      "Dragon Ball: Mystical Adventure (Doragon bôru: Makafushigi dai bôken)",
    view: 52,
    time: 33,
    channel: "Brockie",
    verified: false,
  },
  {
    id: 45,
    title: "Three Marias, The (Três Marias, As)",
    view: 80,
    time: 31,
    channel: "Freida",
    verified: false,
  },
  {
    id: 46,
    title: "Wishmaster 2: Evil Never Dies",
    view: 37,
    time: 78,
    channel: "Wilburt",
    verified: true,
  },
  {
    id: 47,
    title: "Low Life",
    view: 84,
    time: 38,
    channel: "Phaidra",
    verified: true,
  },
  {
    id: 48,
    title: "Stone Cold",
    view: 88,
    time: 47,
    channel: "Codie",
    verified: false,
  },
  {
    id: 49,
    title: "Le convoyeur",
    view: 28,
    time: 58,
    channel: "Afton",
    verified: true,
  },
  {
    id: 50,
    title: "Delicate Delinquent, The",
    view: 11,
    time: 100,
    channel: "Tommie",
    verified: false,
  },
  {
    id: 51,
    title: "Orange County",
    view: 83,
    time: 74,
    channel: "Lynnelle",
    verified: false,
  },
  {
    id: 52,
    title: "Kevin Nealon: Now Hear Me Out!",
    view: 93,
    time: 73,
    channel: "Marne",
    verified: true,
  },
  {
    id: 53,
    title: "Atomic Cafe, The",
    view: 11,
    time: 39,
    channel: "Cristabel",
    verified: true,
  },
  {
    id: 54,
    title: "Carman: The Champion",
    view: 12,
    time: 92,
    channel: "Fayina",
    verified: false,
  },
  {
    id: 55,
    title: "Grave Decisions (Wer früher stirbt, ist länger tot)",
    view: 34,
    time: 51,
    channel: "Rollie",
    verified: true,
  },
  {
    id: 56,
    title: "Character (Karakter)",
    view: 49,
    time: 75,
    channel: "Sansone",
    verified: true,
  },
  {
    id: 57,
    title: "Storm Over Asia (Potomok Chingis-Khana)",
    view: 71,
    time: 67,
    channel: "Skippie",
    verified: true,
  },
  {
    id: 58,
    title: "Dampfnudelblues",
    view: 94,
    time: 8,
    channel: "Noll",
    verified: true,
  },
  {
    id: 59,
    title: "Following",
    view: 31,
    time: 82,
    channel: "Zedekiah",
    verified: true,
  },
  {
    id: 60,
    title: "Gung Ho",
    view: 36,
    time: 90,
    channel: "Celia",
    verified: true,
  },
  {
    id: 61,
    title: "Fresh Bait (L'appât) ",
    view: 87,
    time: 60,
    channel: "Electra",
    verified: false,
  },
  {
    id: 62,
    title: "High Tech, Low Life",
    view: 22,
    time: 37,
    channel: "Rubi",
    verified: false,
  },
  {
    id: 63,
    title: "Phantom Pain",
    view: 38,
    time: 10,
    channel: "Reggie",
    verified: false,
  },
  {
    id: 64,
    title: "Blood Wedding (Bodas de sangre)",
    view: 82,
    time: 65,
    channel: "Sandi",
    verified: true,
  },
  {
    id: 65,
    title: "Second Chorus",
    view: 11,
    time: 10,
    channel: "Danila",
    verified: true,
  },
  {
    id: 66,
    title: "Fifty/Fifty",
    view: 30,
    time: 62,
    channel: "Wiley",
    verified: false,
  },
  {
    id: 67,
    title: "Distant Thunder",
    view: 51,
    time: 72,
    channel: "Guntar",
    verified: true,
  },
  {
    id: 68,
    title: "Rikyu",
    view: 66,
    time: 88,
    channel: "Ardine",
    verified: true,
  },
  {
    id: 69,
    title: "Sade",
    view: 82,
    time: 19,
    channel: "Cull",
    verified: true,
  },
  {
    id: 70,
    title: "Silver Bullet (Stephen King's Silver Bullet)",
    view: 10,
    time: 10,
    channel: "Averell",
    verified: true,
  },
  {
    id: 71,
    title:
      "Once You're Born You Can No Longer Hide (Quando sei nato non puoi più nasconderti)",
    view: 6,
    time: 42,
    channel: "Dori",
    verified: true,
  },
  {
    id: 72,
    title: "Young Girls of Rochefort, The (Demoiselles de Rochefort, Les)",
    view: 21,
    time: 57,
    channel: "Vilhelmina",
    verified: true,
  },
  {
    id: 73,
    title: "Nightbreed",
    view: 4,
    time: 76,
    channel: "Kaycee",
    verified: true,
  },
  {
    id: 74,
    title: "Alive",
    view: 9,
    time: 54,
    channel: "Kissie",
    verified: true,
  },
  {
    id: 75,
    title: "Foreign Letters",
    view: 13,
    time: 71,
    channel: "Cristy",
    verified: false,
  },
  {
    id: 76,
    title: "Casual Sex?",
    view: 25,
    time: 68,
    channel: "Alta",
    verified: false,
  },
  {
    id: 77,
    title: "Touki Bouki",
    view: 29,
    time: 63,
    channel: "Clark",
    verified: false,
  },
  {
    id: 78,
    title: "John Tucker Must Die",
    view: 46,
    time: 2,
    channel: "Sigfrid",
    verified: false,
  },
  {
    id: 79,
    title: "Lineup, The",
    view: 94,
    time: 62,
    channel: "Amara",
    verified: false,
  },
  {
    id: 80,
    title: "In Bed (En la cama)",
    view: 25,
    time: 20,
    channel: "Reine",
    verified: false,
  },
  {
    id: 81,
    title: "What Richard Did",
    view: 74,
    time: 53,
    channel: "Rufe",
    verified: false,
  },
  {
    id: 82,
    title: "Elvis and Anabelle",
    view: 8,
    time: 74,
    channel: "Flossi",
    verified: false,
  },
  {
    id: 83,
    title: "New Jack City",
    view: 4,
    time: 47,
    channel: "Jenda",
    verified: false,
  },
  {
    id: 84,
    title: "The War at Home",
    view: 25,
    time: 84,
    channel: "Kristos",
    verified: false,
  },
  {
    id: 85,
    title: "Lonely Place to Die, A",
    view: 46,
    time: 26,
    channel: "Mile",
    verified: false,
  },
  {
    id: 86,
    title: "In Eagle Shadow Fist (Ding tian li di) (Fist of Anger)",
    view: 67,
    time: 34,
    channel: "Xavier",
    verified: true,
  },
  {
    id: 87,
    title: "Woman in Black, The",
    view: 79,
    time: 14,
    channel: "Ferguson",
    verified: true,
  },
  {
    id: 88,
    title: "Black Moon",
    view: 98,
    time: 81,
    channel: "Caddric",
    verified: true,
  },
  {
    id: 89,
    title: "Yes, But... (Oui, mais...)",
    view: 42,
    time: 76,
    channel: "Edeline",
    verified: true,
  },
  {
    id: 90,
    title: "Hori Smoku Sailor Jerry: The Life of Norman K. Collins ",
    view: 48,
    time: 63,
    channel: "Theressa",
    verified: false,
  },
  {
    id: 91,
    title: "Concursante",
    view: 15,
    time: 85,
    channel: "Lanette",
    verified: true,
  },
  {
    id: 92,
    title: "Princess Protection Program",
    view: 26,
    time: 44,
    channel: "Lynett",
    verified: false,
  },
  {
    id: 93,
    title: "Schwarze Sonne",
    view: 94,
    time: 100,
    channel: "Tye",
    verified: true,
  },
  {
    id: 94,
    title: "Ace High (Quattro dell'Ave Maria, I)",
    view: 41,
    time: 48,
    channel: "Skippy",
    verified: true,
  },
  {
    id: 95,
    title: "Lenny",
    view: 39,
    time: 92,
    channel: "Melamie",
    verified: false,
  },
  {
    id: 96,
    title: "Pillow of Death",
    view: 13,
    time: 61,
    channel: "Mord",
    verified: true,
  },
  {
    id: 97,
    title: "Queen of Spades, The",
    view: 93,
    time: 65,
    channel: "Ronalda",
    verified: false,
  },
  {
    id: 98,
    title: "Latitudes",
    view: 13,
    time: 63,
    channel: "Ali",
    verified: false,
  },
  {
    id: 99,
    title: "Hair",
    view: 66,
    time: 1,
    channel: "Peder",
    verified: false,
  },
  {
    id: 100,
    title: "Cane Toads: The Conquest",
    view: 47,
    time: 7,
    channel: "Filip",
    verified: true,
  },
];

export default videos;
