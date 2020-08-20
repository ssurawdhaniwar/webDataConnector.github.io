(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "date",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "state",
            alias: "state",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "positive",
            alias: "positive",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "negative",
			alias: "negative",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "pending",
			alias:"pending",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "hospitalizedCurrently",
			alias: "hospitalizedCurrently",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "inIcuCurrently",
			alias: "inIcuCurrently",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "COVIDTacking",
            alias: "COVIDTacking_Data",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://api.covidtracking.com/v1/states/daily.json", function(resp) {
            var feat = resp.features,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "date": feat[i].properties.date,
                    "state": feat[i].properties.state,
                    "positive": feat[i].properties.positive,
                    "negative": feat[i].properties.negative,
					"pending": feat[i].properties.pending,
					"hospitalizedCurrently": feat[i].properties.hospitalizedCurrently,
					"inIcuCurrently": feat[i].properties.inIcuCurrently
					
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
            tableau.connectionName = "USGS Earthquake Feed"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
