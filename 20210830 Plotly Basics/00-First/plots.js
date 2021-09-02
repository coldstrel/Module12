let bares_hetero = {
    x: ["uno", "dos","tres"] ,
    y:[1,2,3],
    name:"bares hetero",
    type: "bar",
    marker: {
        color: 'rgb(245, 66, 227)'
    }
};

let bares_gay = {
    x: ["uno", "dos","cuatro"] ,
    y:[3,21,1],
    name:"bares gay",
    type: "bar",
    marker:{
        color: 'rgb(93, 117, 13)',
    }
}

let data = [bares_hetero, bares_gay]

Plotly.newPlot("plot", data)