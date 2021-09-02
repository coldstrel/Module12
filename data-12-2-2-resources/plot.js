// 1. Sort the cities in descending order of population growth.
let sortedCities = cityGrowths.sort((cityA, cityB) => cityA.Increase_from_2016 - cityB.Increase_from_2016).reverse();
console.log(sortedCities);
// 2. Select only the top five cities in terms of growth.
let topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// 3. Create separate arrays for the city names and their population growths.
// 4. Use Plotly to create a bar chart with these arrays.