export const site = {
  brand: "KFC",
  nav: ["Stacks", "Combos", "Quality", "Menu", "Locations"],
  layers: [
    {id:"top", name:"BRIOCHE CROWN", note:"Glossed. Toasted. Golden.", y:0},
    {id:"lettuce", name:"CRISP LETTUCE", note:"Cold crunch, every time.", y:88},
    {id:"fresh", name:"FRESHLY STACKED", note:"Tomato, pickles, no shortcuts.", y:168},
    {id:"cheese", name:"MELTED CHEDDAR", note:"Draped over the heat.", y:245},
    {id:"patty", name:"CRISPY ZINGER", note:"Craggy crunch. Juicy center.", y:312},
    {id:"sauce", name:"COLONEL'S SAUCE", note:"Creamy, tangy, unmistakable.", y:417},
    {id:"bottom", name:"TOASTED BASE", note:"Built from the bottom up.", y:472},
  ],
  burgers: [
    {name:"ZINGER",desc:"Crispy chicken, cheese, lettuce and signature sauce",price:1290,tone:"red"},
    {name:"MIGHTY ZINGER",desc:"Double crispy chicken, cheese, lettuce and mayo",price:1590,tone:"yellow"},
    {name:"KENTUCKY BURGER",desc:"Original recipe chicken, cheese and pepper mayo",price:1390,tone:"cream"},
    {name:"ZINGER STACKER",desc:"Double chicken, double cheese and supercharger sauce",price:1690,tone:"dark"},
  ],
  menu: {
    BURGERS:[["Zinger Burger","Crispy chicken · cheese · signature sauce","1290"],["Mighty Zinger","Double chicken · cheese · mayo","1590"],["Zinger Stacker","Double chicken · double cheese · supercharger","1690"]],
    CHICKEN:[["Hot & Crispy Chicken","Two pieces · original seasoning","890"],["Chicken Strips","Three crispy strips · dipping sauce","790"]],
    SIDES:[["KFC Fries","Golden · crispy · seasoned","420"],["Loaded Fries","Chicken · cheese · signature sauce","790"],["Coleslaw","Cool · creamy · crunchy","350"]],
    DRINKS:[["House Lemonade","Fresh lemon · cane sugar","390"],["Cola","Classic fountain pour","320"]]
  },
  locations:[
    {city:"DOWNTOWN",address:"18 Mercer Street",hours:"11 AM — 12 AM"},
    {city:"RIVER NORTH",address:"220 Kinzie Avenue",hours:"11 AM — 1 AM"},
    {city:"WEST LOOP",address:"84 Fulton Market",hours:"11 AM — 12 AM"}
  ]
};
