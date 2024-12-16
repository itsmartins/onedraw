const drawingPrompts = [
    // Simple items (Days 1-151)
    "Circle",
    "Square",
    "Triangle",
    "Rectangle",
    "Wavy line",
    "Zigzag",
    "Spiral",
    "Cross",
    "Smiley face",
    "Heart",
    "Sun",
    "Moon",
    "Cloud",
    "Star",
    "Arrow",
    "Leaf",
    "Flower petal",
    "Raindrop",
    "Ice cream cone",
    "Tree trunk",
    "Stick figure",
    "Mountain",
    "Cup",
    "Apple",
    "House outline",
    "Snowflake",
    "Fish",
    "Balloon",
    "Tree",
    "Cactus",
    "Chair",
    "Table",
    "Book",
    "Pencil",
    "Hand",
    "Foot",
    "Bird",
    "Butterfly",
    "Car",
    "Boat",
    "Rocket",
    "Castle",
    "Face profile",
    "Eye",
    "Nose",
    "Mouth",
    "Ear",
    "Horse",
    "Cat",
    "Dog",
    "Spoon",
    "Fork",
    "Knife",
    "Plate",
    "Cupcake",
    "Door",
    "Window frame",
    "Guitar",
    "Keyboard",
    "Laptop",
    "Smartphone",
    "Headphones",
    "Umbrella",
    "Lamp",
    "Sofa",
    "Bookshelf",
    "Clock",
    "Backpack",
    "Airplane",
    "Bench",
    "Fence",
    "Mailbox",
    "Streetlight",
    "Train",
    "Bicycle",
    "Truck",
    "Bus",
    "Motorcycle",
    "Basketball",
    "Soccer ball",
    "Baseball glove",
    "Football helmet",
    "Palm tree",
    "Mountain range",
    "River",
    "Waterfall",
    "Sunset",
    "Starfish",
    "Shell",
    "Flower",
    "Bee",
    "Banana",
    "Strawberry",
    "Lemon",
    "Pear",
    "Grapes",
    "Pineapple",
    "Mushroom",
    "Corn",
    "Carrot",
    "Broccoli",
    "Hot air balloon",
    "Kite",
    "Swing",
    "Campfire",
    "Flashlight",
    "Snowman",
    "Scarf",
    "Hat",
    "Gloves",
    "Bow tie",
    "Necklace",
    "Ring",
    "Bag",
    "Wallet",
    "Shoes",
    "Boots",
    "Basket",
    "Egg",
    "Pancake",
    "Pizza slice",
    "Burger",
    "Fries",
    "Sandwich",
    "Sushi",
    "Pinecone",
    "Cup of tea",
    "Mug",
    "Bottle",
    "Vase",
    "Ladder",
    "Hammer",
    "Wrench",
    "Screwdriver",
    "Paintbrush",
    "Palette",
    "Compass",
    "Globe",
    "Map",
    "Key",
    "Lock",
    "Lantern",
    "Binoculars",
    "Camera",
    "Clock",
    "Dice",
    "Chess piece",
    "Ball",
    "Drum",
    "Guitar",
    "Violin",
    "Flute",
    "Tambourine",
  
    // Increasingly complex (Days 152-300)
    "Detailed tree",
    "Forest path",
    "Park scene",
    "Living room",
    "Kitchen interior",
    "Bathroom interior",
    "Bedroom interior",
    "Office setup",
    "Character full body",
    "Walking pose",
    "Running pose",
    "Jumping pose",
    "Dancing pose",
    "Horse in motion",
    "Car from side view",
    "Car from front view",
    "Bicycle with rider",
    "Airplane in flight",
    "City skyline at night",
    "Bridge over water",
    "Ship on ocean",
    "Galaxy with stars",
    "Planet with moon",
    "Dragon",
    "Fantasy creature",
    "Castle on hill",
    "Pirate ship",
    "Volcano erupting",
    "Lighthouse on shore",
    "Desert scene",
    "Rainy street",
    "Snowy forest",
    "Wolf howling",
    "Eagle in flight",
    "Tiger in jungle",
    "Elephant in savannah",
    "Lion roaring",
    "Whale underwater",
    "Underwater reef",
    "School of fish",
    "City market",
    "People at café",
    "Festival crowd",
    "Fireworks in sky",
    "Circus tent",
    "Roller coaster",
    "Space station",
    "Astronaut",
  
    // Highly complex (Days 301-365)
    "Fantasy castle",
    "Medieval village",
    "Sci-fi city",
    "Futuristic vehicle",
    "Battle scene",
    "Alien landscape",
    "Spaceship interior",
    "Robot",
    "Steampunk contraption",
    "Detailed portrait",
    "Group portrait",
    "Historical figure",
    "Fairy tale scene",
    "Mythical creature",
    "Greek temple",
    "Roman colosseum",
    "Ancient ruins",
    "Gothic cathedral",
    "Art museum interior",
    "Zoo scene",
    "Ocean liner",
    "Submarine",
    "Mountain village",
    "Camping site",
    "Forest with animals",
    "Tropical island",
    "Coral reef",
    "Rainforest canopy",
    "Savannah wildlife",
    "Polar landscape",
    "Aurora borealis",
    "Stormy sea",
    "Dragon in flight",
    "Fantasy battle",
    "City under siege",
    "Sci-fi character",
    "Robot battle",
    "Spaceship battle",
    "Intergalactic scene",
    "Futuristic cityscape",
    "Detailed futuristic character",
    "Complex multi-character scene",
    "Climactic storytelling illustration"
  ];

  
function loadPrompt() {
    const savedDay = localStorage.getItem("currentDay");
    const promptElement = document.getElementById("prompt");

    if (savedDay !== null) {
      const index = parseInt(savedDay, 10);
      promptElement.textContent = drawingPrompts[index];
    } else {
      promptElement.textContent = drawingPrompts[0];
    }
}

function saveDay() {
    const latestDay = parseInt(document.getElementById("latestDay").value, 10);
    if (!isNaN(latestDay) && latestDay >= 0 && latestDay <= 364) {
      const nextDay = latestDay;
      localStorage.setItem("currentDay", nextDay);
      document.getElementById("prompt").textContent = drawingPrompts[nextDay];
    } else {
      alert("Please enter a valid day number between 0 and 364.");
    }
}

window.onload = loadPrompt;
