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
            id: "hospitalizedCumulative",
			alias: "hospitalizedCumulative",
            dataType: tableau.dataTypeEnum.float
                }, {
            id: "inIcuCurrently",
			alias: "inIcuCurrently",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "inIcuCumulative",
			alias: "inIcuCumulative",
            dataType: tableau.dataTypeEnum.float
        }, {	
        }, {
            id: "onVentilatorCurrently",
			alias: "onVentilatorCurrently",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "onVentilatorCumulative",
			alias: "onVentilatorCumulative",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "recovered",
			alias: "recovered",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "recovered",
			alias: "recovered",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "dataQualityGrade",
			alias: "dataQualityGrade",
            dataType: tableau.dataTypeEnum.string
        }, {
        }, {
            id: "lastUpdateEt",
			alias: "lastUpdateEt",
            dataType: tableau.dataTypeEnum.string
        }, {
        }, {
            id: "dateModified",
			alias: "dateModified",
            dataType: tableau.dataTypeEnum.string
        }, {
        }, {
            id: "checkTimeEt",
			alias: "checkTimeEt",
            dataType: tableau.dataTypeEnum.string
        }, {
        }, {
            id: "death",
			alias: "death",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "hospitalized",
			alias: "hospitalized",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "dateChecked",
			alias: "dateChecked",
            dataType: tableau.dataTypeEnum.string
        }, {
        }, {
            id: "totalTestsViral",
			alias: "totalTestsViral",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "positiveTestsViral",
			alias: "positiveTestsViral",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "negativeTestsViral",
			alias: "negativeTestsViral",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "positiveCasesViral",
			alias: "positiveCasesViral",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "deathConfirmed",
			alias: "deathConfirmed",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "deathProbable",
			alias: "deathProbable",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "totalTestEncountersViral",
			alias: "totalTestEncountersViral",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "totalTestsPeopleViral",
			alias: "totalTestsPeopleViral",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "totalTestsAntibody",
			alias: "totalTestsAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "positiveTestsAntibody",
			alias: "positiveTestsAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {

        }, {
            id: "negativeTestsAntibody",
			alias: "negativeTestsAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "totalTestsPeopleAntibody",
			alias: "totalTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "positiveTestsPeopleAntibody",
			alias: "positiveTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "negativeTestsPeopleAntibody",
			alias: "negativeTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "totalTestsPeopleAntigen",
			alias: "totalTestsPeopleAntigen",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "totalTestsPeopleAntigen",
			alias: "totalTestsPeopleAntigen",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "positiveTestsAntigen",
			alias: "positiveTestsAntigen",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "fips",
			alias: "fips",
            dataType: tableau.dataTypeEnum.float
        }, {	
        }, {
            id: "positiveIncrease",
			alias: "positiveIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "positiveIncrease",
			alias: "positiveIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "total",
			alias: "total",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "totalTestResults",
			alias: "totalTestResults",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "totalTestResultsIncrease",
			alias: "totalTestResultsIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "posNeg",
			alias: "posNeg",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "deathIncrease",
			alias: "deathIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "hospitalizedIncrease",
			alias: "hospitalizedIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "hash",
			alias: "hash",
            dataType: tableau.dataTypeEnum.string
        }, {
        }, {
            id: "commercialScore",
			alias: "commercialScore",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "negativeRegularScore",
			alias: "negativeRegularScore",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "negativeScore",
			alias: "negativeScore",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "positiveScore",
			alias: "positiveScore",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "score",
			alias: "score",
            dataType: tableau.dataTypeEnum.float
        }, {
        }, {
            id: "grade",
			alias: "grade",
            dataType: tableau.dataTypeEnum.float
        }, {			
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
					"hospitalizedCumulative": feat[i].properties.hospitalizedCumulative,
					"inIcuCurrently": feat[i].properties.inIcuCurrently,
					"inIcuCumulative": feat[i].properties.inIcuCumulative,
					"onVentilatorCurrently": feat[i].properties.onVentilatorCurrently,
					"onVentilatorCumulative": feat[i].properties.onVentilatorCumulative,
					"recovered": feat[i].properties.recovered,
					"dataQualityGrade": feat[i].properties.dataQualityGrade,
					"lastUpdateEt": feat[i].properties.lastUpdateEt,
					"dateModified": feat[i].properties.dateModified,
					"checkTimeEt": feat[i].properties.checkTimeEt,
					"death": feat[i].properties.death,
					"hospitalized": feat[i].properties.hospitalized,
					"dateChecked": feat[i].properties.dateChecked,
					"totalTestsViral": feat[i].properties.totalTestsViral,
					"positiveTestsViral": feat[i].properties.positiveTestsViral,
					"negativeTestsViral": feat[i].properties.negativeTestsViral,
					"positiveCasesViral": feat[i].properties.positiveCasesViral,
					"deathConfirmed": feat[i].properties.deathConfirmed,
					"deathProbable": feat[i].properties.deathProbable,
					"totalTestEncountersViral": feat[i].properties.totalTestEncountersViral,
					"totalTestsPeopleViral": feat[i].properties.totalTestsPeopleViral,
					"totalTestsAntibody": feat[i].properties.totalTestsAntibody,
					"positiveTestsAntibody": feat[i].properties.positiveTestsAntibody,
					"negativeTestsAntibody": feat[i].properties.negativeTestsAntibody,
					"totalTestsPeopleAntibody": feat[i].properties.totalTestsPeopleAntibody,
					"positiveTestsPeopleAntibody": feat[i].properties.positiveTestsPeopleAntibody,
					"negativeTestsPeopleAntibody": feat[i].properties.negativeTestsPeopleAntibody,
					"totalTestsPeopleAntigen": feat[i].properties.totalTestsPeopleAntigen,
					"positiveTestsPeopleAntigen": feat[i].properties.positiveTestsPeopleAntigen,
					"totalTestsAntigen": feat[i].properties.totalTestsAntigen,
					"positiveTestsAntigen": feat[i].properties.positiveTestsAntigen,
					"fips": feat[i].properties.fips,
					"positiveIncrease": feat[i].properties.positiveIncrease,
					"negativeIncrease": feat[i].properties.negativeIncrease,
					"total": feat[i].properties.total,
					"totalTestResults": feat[i].properties.totalTestResults,
					"totalTestResultsIncrease": feat[i].properties.totalTestResultsIncrease,
					"posNeg": feat[i].properties.posNeg,
					"deathIncrease": feat[i].properties.deathIncrease,
					"hospitalizedIncrease": feat[i].properties.hospitalizedIncrease,
					"hash": feat[i].properties.hash,
					"commercialScore": feat[i].properties.commercialScore,
					"negativeRegularScore": feat[i].properties.negativeRegularScore,
					"negativeScore": feat[i].properties.negativeScore,
					"positiveScore": feat[i].properties.positiveScore,
					"score": feat[i].properties.score,
					"grade": feat[i].properties.grade			
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
