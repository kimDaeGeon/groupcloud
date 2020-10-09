window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: false,
        animationEnabled: true,
        title: {
            text: "Contributions",
            fontSize: 30
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 51.08, label: "Member1" },
                { y: 27.34, label: "Member2" },
                { y: 10.62, label: "Member3" },
                { y: 5.02, label: "Member4" }
            ]
        }]
    });
    chart.render();
    
    }