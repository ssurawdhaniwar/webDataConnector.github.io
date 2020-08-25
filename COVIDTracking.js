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
            dataType: tableau.dataTypeEnum.string
		}, {
            id: "negative",
            alias: "negative",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "pending",
			alias:"pending",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "hospitalizedCurrently",
			alias: "hospitalizedCurrently",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "hospitalizedCumulative",
			alias: "hospitalizedCumulative",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "inIcuCurrently",
			alias: "inIcuCurrently",
            dataType: tableau.dataTypeEnum.string

        }, {
            id: "inIcuCumulative",
			alias: "inIcuCumulative",
            dataType: tableau.dataTypeEnum.string
	
        }, {
            id: "onVentilatorCurrently",
			alias: "onVentilatorCurrently",
            dataType: tableau.dataTypeEnum.string

        }, {
            id: "onVentilatorCumulative",
			alias: "onVentilatorCumulative",
            dataType: tableau.dataTypeEnum.string

        }, {
            id: "recovered",
			alias: "recovered",
            dataType: tableau.dataTypeEnum.string

        }, {
            id: "dataQualityGrade",
			alias: "dataQualityGrade",
            dataType: tableau.dataTypeEnum.string

        }, {
            id: "lastUpdateEt",
			alias: "lastUpdateEt",
            dataType: tableau.dataTypeEnum.date

        }, {
            id: "dateModified",
			alias: "dateModified",
            dataType: tableau.dataTypeEnum.date

        }, {
            id: "checkTimeEt",
			alias: "checkTimeEt",
            dataType: tableau.dataTypeEnum.date

        }, {
            id: "death",
			alias: "death",
            dataType: tableau.dataTypeEnum.string
 
        }, {
            id: "hospitalized",
			alias: "hospitalized",
            dataType: tableau.dataTypeEnum.string
  
        }, {
            id: "dateChecked",
			alias: "dateChecked",
            dataType: tableau.dataTypeEnum.date

        }, {
            id: "totalTestsViral",
			alias: "totalTestsViral",
            dataType: tableau.dataTypeEnum.string

        }, {
            id: "positiveTestsViral",
			alias: "positiveTestsViral",
            dataType: tableau.dataTypeEnum.string
       
        }, {
            id: "negativeTestsViral",
			alias: "negativeTestsViral",
            dataType: tableau.dataTypeEnum.string
     
        }, {
            id: "positiveCasesViral",
			alias: "positiveCasesViral",
            dataType: tableau.dataTypeEnum.string
    
        }, {
            id: "deathConfirmed",
			alias: "deathConfirmed",
            dataType: tableau.dataTypeEnum.string
       
        }, {
            id: "deathProbable",
			alias: "deathProbable",
            dataType: tableau.dataTypeEnum.string
      
        }, {
            id: "totalTestEncountersViral",
			alias: "totalTestEncountersViral",
            dataType: tableau.dataTypeEnum.string
        }, {
      
            id: "totalTestsPeopleViral",
			alias: "totalTestsPeopleViral",
            dataType: tableau.dataTypeEnum.string
        }, {
    
            id: "totalTestsAntibody",
			alias: "totalTestsAntibody",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "positiveTestsAntibody",
			alias: "positiveTestsAntibody",
            dataType: tableau.dataTypeEnum.string
        }, {

        
            id: "negativeTestsAntibody",
			alias: "negativeTestsAntibody",
            dataType: tableau.dataTypeEnum.string
        }, {
     
            id: "totalTestsPeopleAntibody",
			alias: "totalTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.string
        }, {
        
            id: "positiveTestsPeopleAntibody",
			alias: "positiveTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.string
        }, {
        
            id: "negativeTestsPeopleAntibody",
			alias: "negativeTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "totalTestsPeopleAntigen",
			alias: "totalTestsPeopleAntigen",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "positiveTestsPeopleAntigen",
			alias: "positiveTestsPeopleAntigen",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "totalTestsAntigen",
			alias: "totalTestsAntigen",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "positiveTestsAntigen",
			alias: "positiveTestsAntigen",
            dataType: tableau.dataTypeEnum.string
        }, {
      
            id: "fips",
			alias: "fips",
            dataType: tableau.dataTypeEnum.string
        }, {	
       
            id: "positiveIncrease",
			alias: "positiveIncrease",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "negativeIncrease",
			alias: "negativeIncrease",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "total",
			alias: "total",
            dataType: tableau.dataTypeEnum.string
        }, {
 
            id: "totalTestResults",
			alias: "totalTestResults",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "totalTestResultsIncrease",
			alias: "totalTestResultsIncrease",
            dataType: tableau.dataTypeEnum.string
        }, {
      
            id: "posNeg",
			alias: "posNeg",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "deathIncrease",
			alias: "deathIncrease",
            dataType: tableau.dataTypeEnum.string
        }, {
        
            id: "hospitalizedIncrease",
			alias: "hospitalizedIncrease",
            dataType: tableau.dataTypeEnum.string
        }, {
        
            id: "hash",
			alias: "hash",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "commercialScore",
			alias: "commercialScore",
            dataType: tableau.dataTypeEnum.string
        }, {
        
            id: "negativeRegularScore",
			alias: "negativeRegularScore",
            dataType: tableau.dataTypeEnum.string
        }, {
        
            id: "negativeScore",
			alias: "negativeScore",
            dataType: tableau.dataTypeEnum.string
        }, {
      
            id: "positiveScore",
			alias: "positiveScore",
            dataType: tableau.dataTypeEnum.string
        }, {
       
            id: "score",
			alias: "score",
            dataType: tableau.dataTypeEnum.string
        }, {
     
            id: "grade",
			alias: "grade",
            dataType: tableau.dataTypeEnum.string
       			
		}];

        var tableSchema = {
            id: "COVIDTracking",
            alias: "COVIDTracking numbers by state",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://api.covidtracking.com/v1/states/daily.json", function(resp) {
            var feat = resp,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "date": feat[i].date,
                    "state": feat[i].state,
					"positive": feat[i].positive,
                    "negative": feat[i].negative,
					"pending": feat[i].pending,
					"hospitalizedCurrently": feat[i].hospitalizedCurrently,
					"hospitalizedCumulative": feat[i].hospitalizedCumulative,
					"inIcuCurrently": feat[i].inIcuCurrently,
					"inIcuCumulative": feat[i].inIcuCumulative,
					"onVentilatorCurrently": feat[i].onVentilatorCurrently,
					"onVentilatorCumulative": feat[i].onVentilatorCumulative,
					"recovered": feat[i].recovered,
					"dataQualityGrade": feat[i].dataQualityGrade,
					"lastUpdateEt": feat[i].lastUpdateEt,
					"dateModified": feat[i].dateModified,
					"checkTimeEt": feat[i].checkTimeEt,
					"death": feat[i].death,
					"hospitalized": feat[i].hospitalized,
					"dateChecked": feat[i].dateChecked,
					"totalTestsViral": feat[i].totalTestsViral,
					"positiveTestsViral": feat[i].positiveTestsViral,
					"negativeTestsViral": feat[i].negativeTestsViral,
					"positiveCasesViral": feat[i].positiveCasesViral,
					"deathConfirmed": feat[i].deathConfirmed,
					"deathProbable": feat[i].deathProbable,
					"totalTestEncountersViral": feat[i].totalTestEncountersViral,
					"totalTestsPeopleViral": feat[i].totalTestsPeopleViral,
					"totalTestsAntibody": feat[i].totalTestsAntibody,
					"positiveTestsAntibody": feat[i].positiveTestsAntibody,
					"negativeTestsAntibody": feat[i].negativeTestsAntibody,
					"totalTestsPeopleAntibody": feat[i].totalTestsPeopleAntibody,
					"positiveTestsPeopleAntibody": feat[i].positiveTestsPeopleAntibody,
					"negativeTestsPeopleAntibody": feat[i].negativeTestsPeopleAntibody,
					"totalTestsPeopleAntigen": feat[i].totalTestsPeopleAntigen,
					"positiveTestsPeopleAntigen": feat[i].positiveTestsPeopleAntigen,
					"totalTestsAntigen": feat[i].totalTestsAntigen,
					"positiveTestsAntigen": feat[i].positiveTestsAntigen,
					"fips": feat[i].fips,
					"positiveIncrease": feat[i].positiveIncrease,
					"negativeIncrease": feat[i].negativeIncrease,
					"total": feat[i].total,
					"totalTestResults": feat[i].totalTestResults,
					"totalTestResultsIncrease": feat[i].totalTestResultsIncrease,
					"posNeg": feat[i].posNeg,
					"deathIncrease": feat[i].deathIncrease,
					"hospitalizedIncrease": feat[i].hospitalizedIncrease,
					"hash": feat[i].hash,
					"commercialScore": feat[i].commercialScore,
					"negativeRegularScore": feat[i].negativeRegularScore,
					"negativeScore": feat[i].negativeScore,
					"positiveScore": feat[i].positiveScore,
					"score": feat[i].score,
					"grade": feat[i].grade
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
            tableau.connectionName = "COVID Tracking States Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
