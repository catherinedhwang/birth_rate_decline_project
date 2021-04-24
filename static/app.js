d3.json("data.json").then(function(data){
    console.log(data)
})

function init(){
    // Select drop down menu in the HTML
    var dropDownMenu = d3.select("#selDataset")
    //Getting data from json
    d3.json("data.json").then(data => {
        console.log(data)
        var idName = data.indicator;
        idName.forEach(name => dropDownMenu.append('option').text(name).property('value', name))    
    buildPlot(idName[0]);
    
    });
};

function optionChanged(id){
    buildPlot(id);
}

