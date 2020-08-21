(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "date",
			alias: "date",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "state",
            alias: "state",
            dataType: tableau.dataTypeEnum.string
        }];

        
		var tableSchema = {
            id: "earthquakeFeed",
            alias: "Earthquakes with magnitude greater than 4.5 in the last seven days",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://api.covidtracking.com/v1/states/daily.json", function(resp) {
		var feat = resp.features,
			len = feat.length
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0; i < len; i++) {
                tableData.push({
                    "date": feat[i].properties.date,
                    "state": feat[i].properties.state
                    		
	              });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "COVID Tracking Feed"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
