
import hpElitebook from "../assets/images/hp-elitebook.webp";
import hpElitebookG7 from "../assets/images/hp-elitebook-840-g7.jpg.png";
import hpProbook440 from "../assets/images/hp-probook-440-g8.jpg.png";
import hpProbook450 from "../assets/images/hp-probook-450-g7.jpg.png";

import dellLatitude from "../assets/images/dell-latitude.jpg";
import dell5400 from "../assets/images/dell-latitude-5400.jpg.png";
import dell5410 from "../assets/images/dell-latitude-5410.jpg.png";
import dell5500 from "../assets/images/dell-latitude-5500.jpg.png";
import dell5510 from "../assets/images/dell-latitude-5510.jpg.png";

import lenovoThinkpad from "../assets/images/lenovo-thinkpad.jpg";
import lenovoT490 from "../assets/images/lenovo-thinkpad-t490.jpg.png";
import lenovoIdeapad5 from "../assets/images/lenovo-ideapad-5.jpg.png";

import asusVivobook from "../assets/images/asus-vivobook.jpg";
import asusVivobook14 from "../assets/images/asus-vivobook-14.jpg.png";

const laptops = [
  // HP
  {
    id: 1,
    brand: "HP",
    name: "HP EliteBook 840 G6",
    specs: "Intel Core i5 • 8GB RAM • 256GB SSD",
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "256GB SSD",
    display: "14-inch Full HD",
    price: 320000,
    rating: 4.8,
    image: hpElitebook,
  },
  {
    id: 2,
    brand: "HP",
    name: "HP EliteBook 840 G7",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
    processor: "Intel Core i5",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14-inch Full HD",
    price: 380000,
    rating: 4.9,
    image: hpElitebookG7,
  },
  {
    id: 3,
    brand: "HP",
    name: "HP ProBook 440 G8",
    specs: "Intel Core i5 • 8GB RAM • 256GB SSD",
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "256GB SSD",
    display: "14-inch Full HD",
    price: 350000,
    rating: 4.7,
    image: hpProbook440,
  },
  {
    id: 4,
    brand: "HP",
    name: "HP ProBook 450 G7",
    specs: "Intel Core i5 • 8GB RAM • 256GB SSD",
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "256GB SSD",
    display: "15.6-inch Full HD",
    price: 330000,
    rating: 4.7,
    image: hpProbook450,
  },

  // DELL
  {
    id: 5,
    brand: "Dell",
    name: "Dell Latitude 7490",
    specs: "Intel Core i7 • 16GB RAM • 512GB SSD",
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14-inch Full HD",
    price: 350000,
    rating: 4.9,
    image: dellLatitude,
  },
  {
    id: 6,
    brand: "Dell",
    name: "Dell Latitude 5400",
    specs: "Intel Core i5 • 8GB RAM • 256GB SSD",
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "256GB SSD",
    display: "14-inch Full HD",
    price: 320000,
    rating: 4.7,
    image: dell5400,
  },
  {
    id: 7,
    brand: "Dell",
    name: "Dell Latitude 5410",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
    processor: "Intel Core i5",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14-inch Full HD",
    price: 370000,
    rating: 4.8,
    image: dell5410,
  },
  {
    id: 8,
    brand: "Dell",
    name: "Dell Latitude 5500",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
    processor: "Intel Core i5",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6-inch Full HD",
    price: 360000,
    rating: 4.8,
    image: dell5500,
  },
  {
    id: 9,
    brand: "Dell",
    name: "Dell Latitude 5510",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
    processor: "Intel Core i5",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6-inch Full HD",
    price: 380000,
    rating: 4.9,
    image: dell5510,
  },

  // LENOVO
  {
    id: 10,
    brand: "Lenovo",
    name: "Lenovo ThinkPad T480",
    specs: "Intel Core i5 • 8GB RAM • 512GB SSD",
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "512GB SSD",
    display: "14-inch Full HD",
    price: 340000,
    rating: 4.7,
    image: lenovoThinkpad,
  },
  {
    id: 11,
    brand: "Lenovo",
    name: "Lenovo ThinkPad T490",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
    processor: "Intel Core i5",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14-inch Full HD",
    price: 370000,
    rating: 4.8,
    image: lenovoT490,
  },
  {
    id: 12,
    brand: "Lenovo",
    name: "Lenovo IdeaPad 5",
    specs: "Intel Core i5 • 8GB RAM • 512GB SSD",
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "512GB SSD",
    display: "15.6-inch Full HD",
    price: 360000,
    rating: 4.8,
    image: lenovoIdeapad5,
  },

  // ASUS
  {
    id: 13,
    brand: "ASUS",
    name: "ASUS VivoBook 15",
    specs: "Intel Core i7 • 16GB RAM • 512GB SSD",
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6-inch Full HD",
    price: 390000,
    rating: 4.8,
    image: asusVivobook,
  },
  {
    id: 14,
    brand: "ASUS",
    name: "ASUS VivoBook 14",
    specs: "Intel Core i5 • 8GB RAM • 512GB SSD",
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "512GB SSD",
    display: "14-inch Full HD",
    price: 350000,
    rating: 4.7,
    image: asusVivobook14,
  },
];

export default laptops;
