import React from 'React';
// import "../assets/styles/budgetResults.css";

//function calling the component
function BudgetBtns() {
    //function that makes the graph into a semicircle
    function semiCircle() {
        if (window.myDoughnut.options.circumference === Math.PI) {
				window.myDoughnut.options.circumference = 2 * Math.PI;
				window.myDoughnut.options.rotation = -Math.PI / 2;
			} else {
				window.myDoughnut.options.circumference = Math.PI;
				window.myDoughnut.options.rotation = -Math.PI;
			}
            window.myDoughnut.update();
    }
    //adding data to the pie chart
    function addData() {
        if (config.data.datasets.length > 0) {
				config.data.labels.push('data #' + config.data.labels.length);

				var colorName = colorNames[config.data.datasets[0].data.length % colorNames.length];
				var newColor = window.chartColors[colorName];

				config.data.datasets.forEach(function(dataset) {
					dataset.data.push(randomScalingFactor());
					dataset.backgroundColor.push(newColor);
				});

				window.myDoughnut.update();
    }
    function addDataset() {
        var newDataset = {
				backgroundColor: [],
				data: [],
				label: 'New dataset ' + config.data.datasets.length,
			};

			for (var index = 0; index < config.data.labels.length; ++index) {
				newDataset.data.push(randomScalingFactor());

				var colorName = colorNames[index % colorNames.length];
				var newColor = window.chartColors[colorName];
				newDataset.backgroundColor.push(newColor);
			}

			config.data.datasets.push(newDataset);
			window.myDoughnut.update();
    }
    function removeData() {
        config.data.labels.splice(-1, 1); // remove the label first

			config.data.datasets.forEach(function(dataset) {
				dataset.data.pop();
				dataset.backgroundColor.pop();
			});

			window.myDoughnut.update();
    }
    function removeDataset() {
        config.data.datasets.splice(0, 1);
			window.myDoughnut.update();
    }
    //returns the buttons that call above functionality
    return(
        <div>
        <Button onClick={semiCircle}>
            Semi Circle Me!    
        </Button>
        <Button onClick={addData}>
            Add Data    
        </Button>
        <Button onClick={addDataset}>
            Add Dataset    
        </Button>
        <Button onClick={removeData}>
            Remove Data    
        </Button>
        <Button onClick={removeDataset}>
            Remove Dataset    
        </Button>
        </div>
    )

};

export default BudgetBtns;