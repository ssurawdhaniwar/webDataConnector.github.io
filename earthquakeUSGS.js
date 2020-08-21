
(function() {
    //1: *************************
    // Criação do objeto da conexão
    var myConnector = tableau.makeConnector();

    //2: *************************
    // Definição do esquema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [
            {id:"date", alias: "date", dataType: tableau.dataTypeEnum.string},
            {id:"state", alias: "state", dataType: tableau.dataTypeEnum.string}
        ];

        //Definicao da Tabela
        var tableSchema = {
            id: "Covid_19",
            alias: "Casos-19",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    //3: *************************
    // Obtencão dos dados
    myConnector.getData = function(table, doneCallback) {  
        function getAllData(url) {  
          $.getJSON(url, function(resp) {  
            var feat = resp.results,  
              next = resp.next;  
      
            // Interagindo no objeto JSON  
      
            for (var i = 1, len = feat.length; i < len; i++) {  
              tableData.push({  
                "date": feat[i].date,
                "state": feat[i].state 
              });  
            }  
            // Interagindo entre todas as paginas, para isso fazemos a variavel next = resp.next; para pegar proxima pagina com dados , se nao encontrar mais dados vai ser null
            // https://community.tableau.com/thread/335501 contribuição da Keshia Rose
            if (next !== null) {  
              getAllData(next);  
            } else {  
              table.appendRows(tableData);  
              doneCallback();  
            }  
          });  
        }  
      
        var tableData = [];  
        var url = "https://api.covidtracking.com/v1/states/daily.json";  
        var a= getAllData(url);  
        console.log(a)  
      }; 

    //4: *************************
    tableau.registerConnector(myConnector);

    //5: *************************
    // Criação do evento que fica escutando quando o usuário clica no botão da pagina HTML
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Casos do coronavírus por município por dia"; // Este texto vai ser o nome na fonte de dados no Tableau
            tableau.submit(); // Este comando envia o objeto conexão criado no inicio para o Tableau
        });
    });
})();