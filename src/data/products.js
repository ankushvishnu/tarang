// Image paths resolve from the /public folder in Vite.
// Place your images in: public/images/
// Supported formats: .jpg, .png, .webp — update extensions below if needed.

const PRODUCTS = [
  {
    img:         "/images/guitar.jpg",
    name:        "Guitars",
    desc:        "Acoustic, electric & classical guitars from world-renowned brands",
    highlighted: true,
  },
  {
    img:         "/images/keyboard.jpg",
    name:        "Keyboards",
    desc:        "Digital pianos, synthesizers & arranger keyboards for every level",
    highlighted: true,
  },
  {
    img:         "/images/drums.jpg",
    name:        "Drums & Percussion",
    desc:        "Drum kits, cajons, tabla, and hand percussion instruments",
    highlighted: true,
  },
  {
    img:         "/images/wind.jpg",
    name:        "Wind Instruments",
    desc:        "Flutes, saxophones, trumpets, harmonicas & more",
    highlighted: false,
  },
  {
    img:         "/images/violin.jpg",
    name:        "Violins & Strings",
    desc:        "Violins, cellos, violas & bowed string instruments",
    highlighted: true,
  },
  {
    img:         "/images/accessories.jpg",
    name:        "Accessories",
    desc:        "Strings, picks, stands, cables, cases & every essential",
    highlighted: false,
  },
];

export default PRODUCTS;
