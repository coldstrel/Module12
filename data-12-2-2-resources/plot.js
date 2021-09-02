// 1. Sort the cities in descending order of population growth.
let sortedCities = cityGrowths.sort((cityA, cityB) => cityA.Increase_from_2016 - cityB.Increase_from_2016).reverse();
console.log(sortedCities);
// 2. Select only the top five cities in terms of growth.
let topFiveCities = sortedCities.slice(0,7);
console.log(topFiveCities);

// 3. Create separate arrays for the city names and their population growths.
let cityNames = topFiveCities.map(city => city.City);
let populationGrowth = topFiveCities.map(population => parseInt(population.population));

console.log(populationGrowth);
console.log(cityNames);
// 4. Use Plotly to create a bar chart with these arrays.

let trace = [{
    x: cityNames,
    y: populationGrowth,
    type: "bar"
}];

let layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth"}
};

Plotly.newPlot("bar-plot",trace , layout);
