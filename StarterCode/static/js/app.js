
d3.json("http://127.0.0.1:5000/data").then((data) => {
    console.log(data);
// FERTILITY
    var fertility= data.filter(sampleObj => sampleObj[2] === "FERTILITY"); 
    var time = [];
    var fertilityValue = [];
      for (var i = 0; i < fertility.length; i++) {
            time.push(fertility[i][5]);
            fertilityValue.push(fertility[i][6]);
      }
      // console.log("time=", time);
      // console.log("fertilityValue=", fertilityValue);
// HHDI GROSS 
    var hhdiGross= data.filter(sampleObj => sampleObj[3] === "GROSSADJ"); 
    var hhdiGrossValue=[];
    for (var i = 0; i < hhdiGross.length; i++) {
      hhdiGrossValue.push(hhdiGross[i][6]);
      }
      // console.log("hhdiGrossValue=", hhdiGrossValue);
// HHDI NET
    var hhdiNet= data.filter(sampleObj => sampleObj[3] === "NET"); 
    var hhdiNetValue=[];
    for (var i = 0; i < hhdiNet.length; i++) {
      hhdiNetValue.push(hhdiNet[i][6]);
      }
      // console.log("hhdiNetValue=", hhdiNetValue);
// HOUSING COST
    var housingCost = data.filter(sampleObj => sampleObj[2] === "HOUSECOST"); 
    var housingCostValue =[];
    for (var i = 0; i < housingCost.length; i++) {
      housingCostValue.push(housingCost[i][6]);
      }
      // console.log("housingCostValue=", housingCostValue);
// EDUCATION
    var education = data.filter(sampleObj => sampleObj[2] === "EDUTRY"); 
    var educationValue=[];
    for (var i = 0; i < education.length; i++) {
      educationValue.push(education[i][6]);
      }
      // console.log("educationValue=", educationValue);
// NATIONAL DEBT
    var natlDebt = data.filter(sampleObj => sampleObj[2] === "HHDEBT"); 
    var debtTime = [];
    var natlDebtValue= [];
    for (var i = 0; i < natlDebt.length; i++) {
      debtTime.push(natlDebt[i][5]);
      natlDebtValue.push(natlDebt[i][6]);
      }
      // console.log("natlDebtValue=", natlDebtValue);

      // LINE GRAPH FOR FERTILITY     
      var trace1 = {
      x: time,
      y: fertilityValue,
      type: "line"
      };
      var data = [trace1];
      var layout = {
      title: "Fertility Rate over Time"
      }
      Plotly.newPlot("bar", data, layout);

      // LINE GRAPH FOR HHDI (GROSS)     
      var trace1 = {
      x: time,
      y: hhdiGrossValue,
      type: "line"
      };
      var data = [trace1];
      var layout = {
      title: "Disposable Income over Time (GROSS)"
      }
      Plotly.newPlot("bar1", data, layout);

       // LINE GRAPH FOR NATL DEBT 
       var trace1 = {
      x: debtTime,
      y: natlDebtValue,
      type: "line"
      };
      var data = [trace1];
      var layout = {
      title: "National Debt over Time"
      }
      Plotly.newPlot("bar2", data, layout);

      // LINE GRAPH FOR HOUSING COST   
      var trace1 = {
      x: time,
      y: housingCostValue,
      type: "line"
      };
      var data = [trace1];
      var layout = {
      title: "Housing Cost over Time"
      }
      Plotly.newPlot("bar3", data, layout);

      // LINE GRAPH FOR EDUCATION LEVEL  
      var trace1 = {
      x: time,
      y: educationValue,
      type: "line"
      };
      var data = [trace1];
      var layout = {
      title: "Education Level over Time"
      }
      Plotly.newPlot("bar4", data, layout);

       // LINE GRAPH FOR HHDI (NET)     
      // var trace1 = {
      // x: time,
      // y: hhdiNetValue,
      // type: "line"
      // };
      // var data = [trace1];
      // var layout = {
      // title: "Disposable Income over Time (NET)"
      // }
      // Plotly.newPlot("bar2", data, layout);

     
});