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
    {name:"THE ZINGER",desc:"Crispy chicken, cheddar, pickles, lettuce, Brut sauce",price:"12.90",tone:"red"},
    {name:"FIRE ZINGER",desc:"Hot crispy chicken, pepper jack, jalapeño, ember sauce",price:"13.90",tone:"yellow"},
    {name:"CRISP CLUB",desc:"Crispy chicken, shredded lettuce, pickles, ranch",price:"11.90",tone:"cream"},
    {name:"BBQ CRUNCH",desc:"Crispy chicken, smoked cheddar, onion jam, black BBQ",price:"14.50",tone:"dark"},
  ],
  menu: {
    BURGERS:[["The Zinger","Crispy chicken · cheddar · Brut sauce","12.90"],["Fire Zinger","Hot crispy chicken · jalapeño · ember sauce","13.90"],["Zinger Jr.","Crispy chicken · American cheese · pickles","9.50"]],
    CHICKEN:[["Crisp Club","Buttermilk chicken · ranch · pickles","11.90"],["Hot Bird","Hot glaze · slaw · comeback sauce","12.50"]],
    SIDES:[["Sea Salt Fries","Skin-on · double fried","4.20"],["Loaded Brut Fries","Beef · cheese · Brut sauce","7.90"],["Onion Rings","Craggy · crisp · ranch","5.20"]],
    DRINKS:[["House Lemonade","Fresh lemon · cane sugar","3.90"],["Cola","Classic fountain pour","3.20"]]
  },
  locations:[
    {city:"DOWNTOWN",address:"18 Mercer Street",hours:"11 AM — 12 AM"},
    {city:"RIVER NORTH",address:"220 Kinzie Avenue",hours:"11 AM — 1 AM"},
    {city:"WEST LOOP",address:"84 Fulton Market",hours:"11 AM — 12 AM"}
  ]
};
