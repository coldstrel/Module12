// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(receivedData => console.log(receivedData[0]));

// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0].location.latitude));

const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then();

// Syntax to retreive data from an external data file 

d3.json("samples.json").then(function(data){
    console.log(data);
});

// Create a server python -m http.server

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

//delete null values from wfreq

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});


d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});