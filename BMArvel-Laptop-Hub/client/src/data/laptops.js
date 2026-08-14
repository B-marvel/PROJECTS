import hpElitebook from "../assets/images/hp-elitebook.webp";
import dellLatitude from "../assets/images/dell-latitude.jpg";
import lenovoThinkpad from "../assets/images/lenovo-thinkpad.jpg";
import asusVivobook from "../assets/images/asus-vivobook.jpg";
const laptops = [
  {
    id: 1,
    name: "HP EliteBook 840 G6",
    specs: "Intel Core i5 • 8GB RAM • 256GB SSD",
    price: "₦320,000",
    rating: "4.8",
    image: hpElitebook,
  },
  {
    id: 2,
    name: "Dell Latitude 7490",
    specs: "Intel Core i7 • 16GB RAM • 512GB SSD",
    price: "₦350,000",
    rating: "4.9",
    image: dellLatitude,
  },
  {
    id: 3,
    name: "Lenovo ThinkPad T480",
    specs: "Intel Core i5 • 8GB RAM • 512GB SSD",
    price: "₦340,000",
    rating: "4.7",
    image: lenovoThinkpad,
  },
  {
    id: 4,
    name: "ASUS VivoBook 15",
    specs: "Intel Core i7 • 16GB RAM • 512GB SSD",
    price: "₦390,000",
    rating: "4.8",
    image: asusVivobook,
  },
];

export default laptops;