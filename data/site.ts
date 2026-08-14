export const site = {
  brand: "BRUT BUNS",
  nav: ["Stacks", "Combos", "Quality", "Menu", "Locations"],
  layers: [
    {id:"top", name:"BRIOCHE CROWN", note:"Glossed. Toasted. Golden.", y:0},
    {id:"lettuce", name:"CRISP LETTUCE", note:"Cold crunch, every time.", y:88},
    {id:"fresh", name:"FRESHLY STACKED", note:"Tomato, pickles, no shortcuts.", y:168},
    {id:"cheese", name:"MELTED CHEDDAR", note:"Draped over the heat.", y:245},
    {id:"patty", name:"CRISPY ZINGER", note:"Craggy crunch. Juicy center.", y:312},
    {id:"sauce", name:"BRUT SAUCE", note:"Tang, smoke, a little heat.", y:417},
    {id:"bottom", name:"TOASTED BASE", note:"Built from the bottom up.", y:472},
  ],
  burgers: [
    {name:"THE ZINGER",desc:"Crispy chicken, cheddar, pickles, lettuce, Brut sauce",price:1290,tone:"red"},
    {name:"FIRE ZINGER",desc:"Hot crispy chicken, pepper jack, jalapeño, ember sauce",price:1390,tone:"yellow"},
    {name:"CRISP CLUB",desc:"Crispy chicken, shredded lettuce, pickles, ranch",price:1190,tone:"cream"},
    {name:"BBQ CRUNCH",desc:"Crispy chicken, smoked cheddar, onion jam, black BBQ",price:1450,tone:"dark"},
  ],
  menu: {
    BURGERS:[["The Zinger","Crispy chicken · cheddar · Brut sauce","1290"],["Fire Zinger","Hot crispy chicken · jalapeño · ember sauce","1390"],["Zinger Jr.","Crispy chicken · American cheese · pickles","950"]],
    CHICKEN:[["Crisp Club","Buttermilk chicken · ranch · pickles","1190"],["Hot Bird","Hot glaze · slaw · comeback sauce","1250"]],
    SIDES:[["Sea Salt Fries","Skin-on · double fried","420"],["Loaded Brut Fries","Chicken · cheese · Brut sauce","790"],["Onion Rings","Craggy · crisp · ranch","520"]],
    DRINKS:[["House Lemonade","Fresh lemon · cane sugar","390"],["Cola","Classic fountain pour","320"]]
  },
  locations:[
    {city:"DOWNTOWN",address:"18 Mercer Street",hours:"11 AM — 12 AM"},
    {city:"RIVER NORTH",address:"220 Kinzie Avenue",hours:"11 AM — 1 AM"},
    {city:"WEST LOOP",address:"84 Fulton Market",hours:"11 AM — 12 AM"}
  ]
};
