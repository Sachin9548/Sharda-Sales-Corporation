/**
 * Single source of truth for the Sharda Sales Corporation website.
 * Everything shown on the site (company info, categories, products, brands,
 * certificates, testimonials) is edited from this one file.
 */
import catFlavours from "@/assets/cat-flavours.jpg";
import catColours from "@/assets/food-colours .png";
import catPremix from "@/assets/cat-premix.jpg";
import catCocoa from "@/assets/cat-cocoa.jpg";
import catDairy from "@/assets/cat-dairy.jpg";
import catAdditives from "@/assets/cat-additives.jpg";
import catGums from "@/assets/cat-gums.jpg";
import catJams from "@/assets/cat-jams.jpg";
import catBakery from "@/assets/cat-bakery.jpg";
import catBeverages from "@/assets/cat-beverages.jpg";
import catPackaging from "@/assets/cat-packaging.jpg";
import catTesting from "@/assets/cat-testing.jpg";
import catFlavours2 from "@/assets/cat-flavours-2.jpg";
import catFlavours3 from "@/assets/cat-flavours-3.jpg";
import catColours2 from "@/assets/idacol-orange-red.jpg";
import catColours3 from "@/assets/idacol-tartrazine-food.jpg";
import catPremix2 from "@/assets/cat-premix-2.jpg";
import catPremix3 from "@/assets/cat-premix-3.jpg";
import catCocoa2 from "@/assets/cat-cocoa-2.jpg";
import catCocoa3 from "@/assets/cat-cocoa-3.jpg";
import catDairy2 from "@/assets/cat-dairy-2.jpg";
import catDairy3 from "@/assets/cat-dairy-3.jpg";
import catAdditives2 from "@/assets/cat-additives-2.jpg";
import catAdditives3 from "@/assets/cat-additives-3.jpg";
import catGums2 from "@/assets/cat-gums-2.jpg";
import catGums3 from "@/assets/cat-gums-3.jpg";
import catJams2 from "@/assets/cat-jams-2.jpg";
import catJams3 from "@/assets/cat-jams-3.jpg";
import catBakery2 from "@/assets/cat-bakery-2.jpg";
import catBakery3 from "@/assets/cat-bakery-3.jpg";
import catBeverages2 from "@/assets/cat-beverages-2.jpg";
import catBeverages3 from "@/assets/cat-beverages-3.jpg";
import catPackaging2 from "@/assets/cat-packaging-2.jpg";
import catPackaging3 from "@/assets/cat-packaging-3.jpg";
import catTesting2 from "@/assets/cat-testing-2.jpg";
import catTesting3 from "@/assets/cat-testing-3.jpg";

export const company = {
  name: "Sharda Sales Corporation",
  tagline: "Food Ingredient Distribution Since 1971",
  since: 1971,
  phone: "+91 85178 75000",
  phoneRaw: "918517875000",
  email: "shardasalescorporation1947@gmail.com",
  office: "86, Triveni Colony, Manik Bagh Road, Indore (M.P.) - 452009",
  godown:
    "Survey No. 363/1/1/1/2/1, Gram Badiya Keema, Nemawar Road, Indore (M.P.) - 452016",
  mapQuery: "86 Triveni Colony Manik Bagh Road Indore Madhya Pradesh 452009",
  stats: [
    { value: "1971", label: "Distributing since" },
    { value: "50+", label: "Years of experience" },
    { value: "300+", label: "Products distributed" },
    { value: "12", label: "Product categories" },
    { value: "30,000", label: "Sq. ft. warehouse" },
  ],
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(message)}`;

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  images: string[];
};

export const categories: Category[] = [ 
  {
    slug: "flavours-emulsions",
    name: "Flavours & Emulsions",
    short: "Liquid, powder & emulsion flavours",
    description:
      "A complete range of food flavours and emulsions for bakery, beverage, dairy and confectionery applications, sourced from leading manufacturers such as Keva and Akras.",
    image: catFlavours,
    images: [catFlavours, catFlavours2, catFlavours3],
  },
  {
    slug: "food-colours",
    name: "Food Colours",
    short: "Synthetic, natural & caramel colours",
    description:
      "Permitted food colours in powder and liquid form, including Idacol synthetic colours and liquid caramel colour for bakery, beverage and confectionery use.",
    image: catColours,
    images: [catColours, catColours2, catColours3],
  },
  {
    slug: "bakery-premixes",
    name: "Bakery Premixes, Cake Mixes & Bases",
    short: "Ready premixes for consistent output",
    description:
      "Cake mixes, bread improvers, gluten and bakery bases that help bakeries maintain consistent quality batch after batch.",
    image: catPremix,
    images: [catPremix, catPremix2, catPremix3],
  },
  {
    slug: "chocolates-compounds-cocoa",
    name: "Chocolates, Compounds, Pastes & Cocoa",
    short: "Cocoa powder, compounds & syrups",
    description:
      "Cocoa powders, dark and milk compounds, chocolate pastes and syrups for bakeries, confectioners and dessert manufacturers.",
    image: catCocoa,
    images: [catCocoa, catCocoa2, catCocoa3],
  },
  {
    slug: "dairy-fats-oils",
    name: "Dairy Products, Fats, Oils & Non-Dairy Toppings",
    short: "Milk powders, creams & fats",
    description:
      "Skimmed milk powder, whey powder, condensed milk, non-dairy whipping cream, bakery fats and oils from Amul, Milky Mist, Paras, Nova and Adani Wilmar.",
    image: catDairy,
    images: [catDairy, catDairy2, catDairy3],
  },
  {
    slug: "food-additives-chemicals",
    name: "Food Additives, Chemicals, Acids & Preservatives",
    short: "Acidulants, preservatives & salts",
    description:
      "Food grade acids, preservatives, glycerin and specialty chemicals supplied in sealed manufacturer packing with full traceability.",
    image: catAdditives,
    images: [catAdditives, catAdditives2, catAdditives3],
  },
  {
    slug: "gums-hydrocolloids",
    name: "Gums, Hydrocolloids & Thickening Agents",
    short: "Starch, gums, pectin & stabilisers",
    description:
      "Xanthan gum, pectin, native and modified starches and thickening systems for texture, stability and shelf life.",
    image: catGums,
    images: [catGums, catGums2, catGums3],
  },
  {
    slug: "crushes-jams-glazes",
    name: "Crushes, Jams, Glazes & Desserts",
    short: "Fillings, glazes & dessert bases",
    description:
      "Fruit jams, jellies, crushes and glazes used in cakes, pastries, desserts and beverage preparations.",
    image: catJams,
    images: [catJams, catJams2, catJams3],
  },
  {
    slug: "bakery-confectionery-ingredients",
    name: "Bakery & Confectionery Ingredients",
    short: "Baking powder, yeast, glucose & malto",
    description:
      "Core bakery inputs including baking powder, yeast, liquid glucose, maltodextrin, malt extract and custard powder.",
    image: catBakery,
    images: [catBakery, catBakery2, catBakery3],
  },
  {
    slug: "beverages-sdc",
    name: "Beverages & Soft Drink Concentrates",
    short: "SDC bases & beverage inputs",
    description:
      "Soft drink concentrates, beverage bases and allied ingredients for beverage manufacturers and bottlers.",
    image: catBeverages,
    images: [catBeverages, catBeverages2, catBeverages3],
  },
  {
    slug: "packaging-materials",
    name: "Packaging Materials & Supplies",
    short: "Boxes, boards & consumables",
    description:
      "Bakery packaging consumables including boxes, cake boards, containers and films to support day-to-day production.",
    image: catPackaging,
    images: [catPackaging, catPackaging2, catPackaging3],
  },
  {
    slug: "testing-kits-misc",
    name: "Testing Kits, Fragrances & Miscellaneous",
    short: "Quality testing & allied items",
    description:
      "Food testing kits, fragrances and assorted allied products required by food, bakery and pharmaceutical units.",
    image: catTesting,
    images: [catTesting, catTesting2, catTesting3],
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string; // category slug
  brand?: string;
  packing?: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  // Chocolates, Compounds, Pastes & Cocoa
  { slug: "cocoa-powder", name: "Cocoa Powder", category: "chocolates-compounds-cocoa", packing: "25 kg", description: "Alkalised and natural cocoa powder for bakery, beverage and confectionery applications.", featured: true },
  { slug: "cargill-cocoa", name: "Cargill Cocoa Powder", category: "chocolates-compounds-cocoa", brand: "Cargill", packing: "25 kg", description: "Premium imported cocoa powder with deep colour and consistent fat content." },
  { slug: "dark-compound", name: "Dark Chocolate Compound", category: "chocolates-compounds-cocoa", packing: "1 kg / 2.5 kg slab", description: "Intense cocoa dark compound slabs for coating, moulding and ganache.", featured: true },
  { slug: "milk-compound", name: "Milk Chocolate Compound", category: "chocolates-compounds-cocoa", packing: "1 kg / 2.5 kg slab", description: "Smooth and creamy milk compound slabs for enrobing and decoration." },
  { slug: "chocolate-syrup", name: "Chocolate Syrup", category: "chocolates-compounds-cocoa", packing: "1 kg / 5 kg", description: "Ready-to-use chocolate syrup for desserts, shakes and toppings." },
  { slug: "jindal-cocoa", name: "VJ Jindal Cocoa Products", category: "chocolates-compounds-cocoa", brand: "VJ Jindal Cocoa", description: "Cocoa powder, butter and liquor from VJ Jindal Cocoa Pvt. Ltd." },

  // Dairy
  { slug: "amul-smp", name: "Amul Skimmed Milk Powder (SMP)", category: "dairy-fats-oils", brand: "Amul", packing: "25 kg bag", description: "Spray dried standard grade skimmed milk powder. Sharda Sales Corporation is an authorised Amul C&F.", featured: true },
  { slug: "nova-smp", name: "Nova Skimmed Milk Powder", category: "dairy-fats-oils", brand: "Nova", packing: "25 kg bag", description: "Economical SMP grade for bakery and confectionery production." },
  { slug: "suruchi-smp", name: "Suruchi Skimmed Milk Powder", category: "dairy-fats-oils", brand: "Suruchi", packing: "25 kg bag", description: "Consistent quality SMP for large-volume bakery requirements." },
  { slug: "amul-whey-powder", name: "Amul Whey Powder (Demineralised DM-40)", category: "dairy-fats-oils", brand: "Amul", packing: "25 kg bag", description: "Spray dried demineralised skimmed whey powder for bakery and dairy use.", featured: true },
  { slug: "milky-mist-whey-powder", name: "Milky Mist Whey Powder", category: "dairy-fats-oils", brand: "Milky Mist", packing: "25 kg bag", description: "Whey powder for biscuits, cakes, ice cream and beverage mixes." },
  { slug: "paras-whey-powder", name: "Paras Whey Powder", category: "dairy-fats-oils", brand: "Paras", packing: "25 kg bag", description: "Food grade whey powder with reliable batch-to-batch consistency." },
  { slug: "condensed-milk", name: "Condensed Milk", category: "dairy-fats-oils", packing: "1 kg / bulk", description: "Sweetened condensed milk for desserts, sweets and bakery fillings." },
  { slug: "non-dairy-whip-cream", name: "Non-Dairy Whipping Cream", category: "dairy-fats-oils", packing: "1 litre", description: "Stable non-dairy whipping cream for cakes, pastries and desserts." },
  { slug: "bakery-fats", name: "Bakery Fats & Oils", category: "dairy-fats-oils", brand: "Adani Wilmar", packing: "15 kg / 15 litre", description: "Bakery shortening, margarine and refined oils for daily production." },

  // Gums
  { slug: "xanthan-gum", name: "Xanthan Gum", category: "gums-hydrocolloids", packing: "25 kg", description: "Food grade xanthan gum for viscosity, suspension and texture control.", featured: true },
  { slug: "deosan-xanthan-gum", name: "Deosen Xanthan Gum", category: "gums-hydrocolloids", brand: "Deosen", packing: "25 kg", description: "Imported xanthan gum with uniform mesh and clean dispersion." },
  { slug: "pectin", name: "Pectin", category: "gums-hydrocolloids", packing: "25 kg", description: "Gelling agent for jams, jellies, glazes and fruit preparations." },
  { slug: "roquette-starch", name: "Roquette Starch", category: "gums-hydrocolloids", brand: "Roquette Riddhi Siddhi", packing: "25 kg / 50 kg", description: "Maize starch and allied starch products from Roquette Riddhi Siddhi." },
  { slug: "hfdl-starch-powder", name: "HFDL Starch Powder", category: "gums-hydrocolloids", packing: "50 kg", description: "Industrial and food grade starch powder for thickening and dusting." },

  // Additives
  { slug: "sodium-benzoate", name: "Sodium Benzoate", category: "food-additives-chemicals", packing: "25 kg", description: "Food grade preservative for beverages, sauces and bakery fillings." },
  { slug: "soda-bicarb", name: "Sodium Bicarbonate (Soda Bi Carb)", category: "food-additives-chemicals", packing: "25 kg", description: "Food grade sodium bicarbonate for baking and food processing." },
  { slug: "ammonium-bicarbonate", name: "Ammonium Bicarbonate", category: "food-additives-chemicals", brand: "RCF", packing: "25 kg", description: "Leavening agent supplied as authorised distributor of Rashtriya Chemicals & Fertilizers Ltd." },
  { slug: "citric-acid-mono", name: "Citric Acid Monohydrate", category: "food-additives-chemicals", brand: "Ensign", packing: "25 kg", description: "Acidulant for beverages, confectionery and preserved foods." },
  { slug: "citric-acid-anhydrous", name: "Citric Acid Anhydrous", category: "food-additives-chemicals", brand: "Ensign", packing: "25 kg", description: "Anhydrous grade citric acid for dry mixes and powdered products." },
  { slug: "msg", name: "Mono Sodium Glutamate (MSG)", category: "food-additives-chemicals", packing: "25 kg", description: "Flavour enhancer for savoury food processing applications." },
  { slug: "glycerin", name: "Glycerin (Imported)", category: "food-additives-chemicals", packing: "250 kg drum", description: "Food grade glycerin used as humectant in bakery and confectionery." },
  { slug: "fine-organic-emulsifiers", name: "Emulsifiers & Additives", category: "food-additives-chemicals", brand: "Fine Organic", packing: "20 kg / 25 kg", description: "Speciality emulsifiers and additives from Fine Organic Industries." },

  // Bakery & confectionery
  { slug: "baking-powder", name: "Baking Powder", category: "bakery-confectionery-ingredients", packing: "1 kg / 30 kg", description: "Double action baking powder for cakes, biscuits and breads.", featured: true },
  { slug: "bush-baking-powder", name: "Bush Baking Powder", category: "bakery-confectionery-ingredients", brand: "Bush Chemicals", packing: "1 kg / 30 kg", description: "Premium quality double action baking powder in retail and bulk packs." },
  { slug: "yeast", name: "Instant Dry Yeast", category: "bakery-confectionery-ingredients", brand: "AB Mauri", packing: "500 g / 10 kg", description: "High activity instant dry yeast for bread, bun and rusk production.", featured: true },
  { slug: "roquette-maltodextrin", name: "Maltodextrin", category: "bakery-confectionery-ingredients", brand: "Roquette", packing: "25 kg", description: "Spray dried maltodextrin as bulking agent and carrier." },
  { slug: "midas-maltodextrin", name: "Midas Maltodextrin", category: "bakery-confectionery-ingredients", brand: "Midas Agro", packing: "25 kg", description: "Maltodextrin for bakery, beverage and nutrition applications." },
  { slug: "liquid-glucose", name: "Liquid Glucose", category: "bakery-confectionery-ingredients", packing: "5 kg / 300 kg drum", description: "Confectionery grade liquid glucose for sweets, glazes and fillings.", featured: true },
  { slug: "invert-sugar-fructose", name: "Invert Sugar & Fructose", category: "bakery-confectionery-ingredients", brand: "Midas Agro", packing: "50 kg / bulk", description: "Invert sugar and fructose syrups for toast and rusk manufacturing." },
  { slug: "malt-extract-liquid", name: "Malt Extract (Liquid)", category: "bakery-confectionery-ingredients", packing: "5 kg / 30 kg", description: "Liquid malt extract for colour, flavour and crust development." },
  { slug: "weikfield-custard", name: "Custard Powder", category: "bakery-confectionery-ingredients", brand: "Weikfield", packing: "500 g / 1 kg", description: "Vanilla custard powder for desserts, fillings and puddings." },
  { slug: "imported-gluten-improvers", name: "Imported Gluten & Bread Improvers", category: "bakery-premixes", packing: "25 kg", description: "Vital wheat gluten and bread improvers for strength and volume." },
  { slug: "cake-premix", name: "Cake Premix & Bases", category: "bakery-premixes", packing: "10 kg / 25 kg", description: "Ready cake and sponge premixes for consistent bakery output." },

  // Colours
  { slug: "idacol-colours", name: "Idacol Synthetic Food Colours", category: "food-colours", brand: "Roha / Idacol", packing: "500 g / 1 kg jar", description: "Permitted synthetic food colours including Carmoisine, Sunset Yellow and Ponceau 4R.", featured: true },
  { slug: "liquid-caramel-colour", name: "Liquid Caramel Colour E150d", category: "food-colours", brand: "Aarkay", packing: "6 kg / 30 kg jerrycan", description: "Ammonia sulphite process double strength caramel colour, food grade.", featured: true },

  // Flavours
  { slug: "keva-flavours", name: "Food Flavours & Emulsions", category: "flavours-emulsions", brand: "Keva Flavours", packing: "1 kg / 5 kg", description: "Wide range of liquid and emulsion flavours for bakery and beverage." },
  { slug: "akras-flavours", name: "Akras Flavours", category: "flavours-emulsions", brand: "Akras Flavours", packing: "1 kg / 5 kg", description: "Speciality flavour systems for confectionery, dairy and beverages." },

  // Jams
  { slug: "jam", name: "Fruit Jam", category: "crushes-jams-glazes", packing: "1 kg / 5 kg", description: "Mixed fruit and single fruit jams for bakery filling and topping." },
  { slug: "jelly-cube", name: "Jelly Cubes", category: "crushes-jams-glazes", packing: "500 g / 1 kg", description: "Flavoured jelly cubes and crystals for desserts and decoration." },
  { slug: "glaze", name: "Neutral & Fruit Glaze", category: "crushes-jams-glazes", packing: "1 kg / 5 kg", description: "Cold and hot glaze for pastries, tarts and fruit decoration." },

  // Beverages
  { slug: "soft-drink-concentrate", name: "Soft Drink Concentrates (SDC)", category: "beverages-sdc", packing: "1 kg / 5 kg", description: "Beverage concentrates and bases for soft drink manufacturers." },

  // Packaging
  { slug: "bakery-packaging", name: "Bakery Packaging Materials", category: "packaging-materials", description: "Cake boxes, boards, containers, films and allied packaging supplies." },

  // Testing / misc
  { slug: "food-testing-kits", name: "Food Testing Kits", category: "testing-kits-misc", description: "Basic quality testing kits and consumables for food production units." },
  { slug: "frozen-foods", name: "Frozen Foods", category: "testing-kits-misc", brand: "Bluejet Limited", description: "Frozen food products distributed in association with Bluejet Limited." },
];

export const brands = [
  { name: "Amul", note: "Authorised C&F" },
  { name: "Rashtriya Chemicals & Fertilizers Ltd.", note: "Ammonium Bicarbonate" },
  { name: "AB Mauri", note: "Yeast & Bakery Solutions" },
  { name: "Fine Organic Industries", note: "Emulsifiers & Additives" },
  { name: "Adani Wilmar", note: "Fats & Oils" },
  { name: "Akras Flavours Ltd.", note: "Flavours" },
  { name: "Keva Flavours Pvt. Ltd.", note: "Flavours & Fragrances" },
  { name: "Midas Agro Limited", note: "Invert Sugar & Fructose" },
  { name: "Roquette Riddhi Siddhi", note: "Starch & Allied Products" },
  { name: "VJ Jindal Cocoa Pvt. Ltd.", note: "Cocoa Products" },
  { name: "Bluejet Limited", note: "Frozen Foods" },
  { name: "Bush Chemicals", note: "Baking Powder" },
  { name: "Weikfield", note: "Custard & Bakery" },
  { name: "Milky Mist", note: "Dairy Ingredients" },
];

export const industries = [
  { name: "Bakery", description: "Ingredients for 300+ bakeries across Madhya Pradesh and India." },
  { name: "Food Processing", description: "Bulk ingredient supply for processed and packaged food units." },
  { name: "Pharmaceutical", description: "Approved supplier of excipient grade materials and allied products." },
  { name: "Beverage", description: "Concentrates, acidulants, colours and stabilisers for beverage plants." },
  { name: "Confectionery", description: "Glucose, compounds, colours and flavours for confectionery makers." },
  { name: "Industrial", description: "Large-volume supply of starches, chemicals and allied raw materials." },
];

export const whyChooseUs = [
  { title: "Distributing since 1971", description: "Over five decades of uninterrupted service in the food ingredient trade." },
  { title: "Trusted & certified supplier", description: "Approved supplier to bakery, beverage, pharmaceutical and confectionery industries." },
  { title: "Genuine products", description: "Supplied in original manufacturer packing with full batch traceability." },
  { title: "300+ product range", description: "One-stop sourcing across 12 ingredient categories." },
  { title: "Fast supply", description: "30,000 sq. ft. warehouse with regular stock and ready dispatch." },
  { title: "Experienced team", description: "Technical guidance from a team that understands your production floor." },
];

export const testimonials = [
  { name: "Rajesh Agrawal", role: "Owner, Shree Bakers, Indore", quote: "We have been buying bakery ingredients from Sharda Sales for over fifteen years. Stock is always available and the quality never changes." },
  { name: "Neha Jain", role: "Production Head, Confectionery Unit, Dewas", quote: "Their team understands ingredients, not just billing. Guidance on compounds and glucose saved us a lot of trial and error." },
  { name: "Imran Sheikh", role: "Purchase Manager, Beverage Plant, Pithampur", quote: "Colours, acids and preservatives always arrive in original sealed packing with proper documents. Very reliable for audits." },
  { name: "Suresh Patidar", role: "Proprietor, Rusk & Toast Manufacturer, Ujjain", quote: "Invert sugar supply has been consistent for years. Deliveries are on time even during peak season." },
  { name: "Dr. Kavita Rao", role: "QA, Pharmaceutical Unit, Indore", quote: "Documentation and traceability are handled properly, which makes approvals straightforward for us." },
  { name: "Mohit Verma", role: "Chef & Owner, Patisserie, Bhopal", quote: "From cocoa to whipping cream, we source almost everything from one place. Saves time and keeps costs predictable." },
];

export const certificates = [
  { name: "FSSAI Licence", description: "Licensed food business operator for trade and distribution of food ingredients." },
  { name: "GST Registration", description: "Registered supplier with full GST compliant invoicing and documentation." },
  { name: "Amul Authorised C&F", description: "Appointed clearing & forwarding agent for Amul dairy ingredients." },
  { name: "RCF Distributor Authorisation", description: "Authorised distribution of Ammonium Bicarbonate from RCF Limited." },
  { name: "Approved Bakery Supplier", description: "Approved and certified supplier to bakery and confectionery industries." },
  { name: "Pharma Supplier Approval", description: "Approved supplier for pharmaceutical and beverage industry requirements." },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const productsByCategory = (slug: string) => products.filter((p) => p.category === slug);
export const categoryName = (slug: string) => categoryBySlug(slug)?.name ?? slug;
export const productImage = (p: Product) => categoryBySlug(p.category)?.image ?? "";
