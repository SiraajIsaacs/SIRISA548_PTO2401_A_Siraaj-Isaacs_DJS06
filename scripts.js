// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Excercises

// 1. ForEach Basics: Logging each name and province, then matching them
names.forEach((name, index) => console.log(name));
provinces.forEach((province) => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation: Map to uppercase provinces
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// 3. Name Lengths: Array of name lengths
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// 4. Sorting: Sorting provinces alphabetically
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape: Filtering out "Cape" and counting remaining provinces
const nonCapeProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(nonCapeProvinces.length);

// 6. Finding 'S': Check if name contains 'S'
const hasLetterS = names.map((name) => name.toLowerCase().includes("s"));
console.log(hasLetterS);

// 7. Creating Object Mapping: Mapping names to provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Excercises (Single console.log Execution)

// 1. Log Products: Logging each product name
console.log(products.map((item) => item.product));

// 2. Filter by Name Length: Filtering products with names shorter or equal to 5 characters
console.log(products.filter((product) => product.product.length <= 5));

// 3. Price Manipulation: Filter products with valid prices, convert strings, and calculate total price
console.log(
  products
    .filter((product) => String(product.price).trim() !== "") // Convert price to string first, then trim
    .reduce((total, product) => total + Number(product.price), 0) // Convert valid prices to numbers and sum them
);

// 4. Concatenate Product Names: Reduce to concatenate product names
console.log(
  products.reduce(
    (acc, product) => acc + (acc ? " " : "") + product.product,
    ""
  )
);

// 5. Find Extremes in Prices: Highest and lowest-priced items
const validPrices = products
  .filter((product) => String(product.price).trim() !== "")
  .map((product) => Number(product.price));

const highestPrice = Math.max(...validPrices);
const lowestPrice = Math.min(...validPrices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}`);

// 6. Object Transformation: Recreate the products object with 'name' and 'cost'
console.log(
  products.reduce((acc, { product, price }, index) => {
    acc[index] = { name: product, cost: price };
    return acc;
  }, {})
);
