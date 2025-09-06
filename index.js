const express=require("express");
const app=express();
const port=3000;
const path = require("path"); 
const {v4:uuidvv4}=require("uuid");

 let products = [
  {
    id: uuidvv4(),
    name: "Silver Watch",
    price: 299,
    image: "/image/new-watch.avif",
    description: "A handcrafted silver wristwatch featuring a sleek stainless steel case, scratch-resistant sapphire crystal, and a precision quartz movement. Designed for modern professionals, this watch combines durability with elegance. Water-resistant up to 50 meters and paired with an adjustable silver strap for a perfect fit."
  },
  {
    id:  uuidvv4(),
    name: "Leather Bag",
    price: 799,
    image: "/image/leather-bag.avif",
    description: "Premium Italian leather handbag, soft-touch finish with a polished brass clasp. Spacious main compartment with multiple pockets to hold essentials. Handmade by expert artisans, ensuring durability and timeless luxury. Perfect for both business meetings and evening outings."
  },
  {
    id:  uuidvv4(),
    name: "Gold Necklace",
    price: 499,
    image: "/image/gold-neckles.webp",
    description: "Elegant 18k gold necklace crafted with fine detailing. Designed to complement both casual and formal looks, this piece radiates warmth and sophistication. Lightweight yet sturdy, polished to a mirror shine, making it a must-have statement jewelry."
  },
  {
    id:  uuidvv4(),
    name: "Classic Sunglasses",
    price: 199,
    image: "/image/sunglasses.avif",
    description: "Timeless sunglasses with polarized UV400 protection lenses. Featuring a lightweight titanium frame with gold accents, these shades blend fashion with function. A must-have accessory to elevate your summer and travel style. Comes in a luxury case."
  },
  {
    id: uuidvv4(),
    name: "Designer Wallet",
    price: 249,
    image: "/image/designer-wallet.avif",
    description: "Sleek designer wallet crafted from calfskin leather with embossed detailing. Compact yet spacious, featuring multiple card slots, a bill compartment, and a secure zip pocket for coins. Minimalist design, finished with a smooth matte polish."
  },
  {
    id:  uuidvv4(),
    name: "White Sneakers",
    price: 349,
    image: "/image/white-sneakers.avif",
    description: "Luxury streetwear sneakers made with premium white leather and cushioned soles. Breathable design for all-day comfort, accented with subtle stitching patterns. Lightweight and versatile — pair it with jeans, suits, or casuals."
  },
  {
    id:  uuidvv4(),
    name: "Tiffany & Co. Diamond Necklace",
    price: 120000,
    image: "/image/Diamond Elegance on Satin Blue.png",
    description: "An exquisite Tiffany & Co. masterpiece, featuring a rare round brilliant-cut diamond centerpiece set in platinum. Designed to reflect light from every angle, radiating unmatched brilliance. A true heirloom luxury jewelry piece."
  },
  {
    id:  uuidvv4(),
    name: "Platinum Wedding Ring (Cartier)",
    price: 75000,
    image: "/image/ring.avif",
    description: "Cartier’s signature platinum wedding band, crafted with perfection. Polished to mirror-finish, symbolizing eternal commitment. Hypoallergenic, durable, and resistant to scratches. A timeless symbol of love and elegance."
  },
  {
    id:  uuidvv4(),
    name: "Rare Pink Diamond (2 carats)",
    price: 1200000,
    image: "/image/pink-diamond.avif",
    description: "An ultra-rare 2-carat natural pink diamond, GIA-certified. Known for its rarity and investment value, this gem radiates soft blush hues under any light. Ideal for collectors, investors, or custom fine jewelry creations."
  },
  {
    id:  uuidvv4(),
    name: "Antique Gold Coin Collection",
    price: 250000,
    image: "/image/gold-coin.avif",
    description: "A curated set of antique gold coins from 18th and 19th-century Europe. Each piece is certified for authenticity and preserved in protective casing. A perfect blend of history, wealth, and artistry — ideal for serious collectors."
  },
  {
    id: uuidvv4(),
    name: "Christian Louboutin Heels",
    price: 995,
    image: "/image/heels.avif",
    description: "Iconic Christian Louboutin stilettos with the signature red sole. Crafted in premium Italian leather, pointed toe design, and 100mm high heel. Luxurious, bold, and instantly recognizable — a true statement in women’s fashion."
  },
  {
    id:  uuidvv4(),
    name: "Fendi Leather Sofa",
    price: 15000,
    image: "/image/sofa.avif",
   description: "Premium Fendi sofa upholstered in buttery soft Italian leather. Designed with clean lines, deep cushions, and polished chrome legs. Combines comfort and luxury, perfect for modern living spaces. Seats 3-4 people comfortably."
  },
  {
    id:  uuidvv4(),
    name: "Van Cleef & Arpels Perfume",
    price: 650,
    image: "/image/perfume.avif",
   description: "A luxury fragrance blending jasmine, rose, and vanilla with a hint of musk. Long-lasting eau de parfum in a crystal bottle. A perfect balance of freshness and sensuality, embodying sophistication in every spray."
  },
  {
    id:  uuidvv4(),
    name: "Gold-Plated Dinnerware Set",
    price: 3400,
    image: "/image/dinner-set.avif",
    description: "Elegant 24-piece dinnerware set plated with 24k gold. Includes plates, bowls, cutlery, and serving spoons. Perfect for formal dining or luxury gifting. Hand-wash recommended to preserve the golden finish."
  },
  {
    id:  uuidvv4(),
    name: "Hermès Birkin Bag",
    price: 18500,
    image: "/image/luxury7.avif",
    description: "The iconic Hermès Birkin, handcrafted from genuine Togo leather with palladium hardware. Spacious interior with lock & key closure. Symbol of ultimate luxury, exclusivity, and craftsmanship. Waitlisted worldwide — now within your reach."
  }
]
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("home.ejs", { products });
});

app.get("/products/:id", (req, res) => {
  let { id } = req.params;
  let product = products.find(p => p.id == id);
  if (!product) return res.send("Product not found");
  res.render("show.ejs", { product });
});

app.listen(port,()=>{
    console.log("i am listning");
})