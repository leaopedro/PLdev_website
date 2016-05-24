/**
 * Created by peter on 29/02/2016.
 */

(function(){
    var app = angular.module('BlaBlaBlaGenerator' , [] );


    app.controller("blaGenCtrl", function($scope){
        $scope.generatedBla = "";

        $scope.BlaParts = [
            {blaLevel:1, blaText:"Por outro lado, ", blaCode:1},
            {blaLevel:1, blaText:"Em uma perspectiva global, ", blaCode:2},
            {blaLevel:1, blaText:"Considerando os fatos, ", blaCode:3},
            {blaLevel:1, blaText:"Todavia, ", blaCode:4},
            {blaLevel:1, blaText:"Não obstante, ", blaCode:5},
            {blaLevel:1, blaText:"Neste sentido, ", blaCode:6},
            {blaLevel:1, blaText:"A nível organizacional, ", blaCode:7},
            {blaLevel:1, blaText:"Evidentemente, ", blaCode:8},
            {blaLevel:1, blaText:"Acima de tudo, é fundamental ressaltar que ", blaCode:16},
            {blaLevel:1, blaText:"O que temos que ter sempre em mente é que ", blaCode:17},
            {blaLevel:2, blaText:"a constante divulgação das informações ", blaCode:9},
            {blaLevel:2, blaText:"o acompanhamento das preferências de consumo  ", blaCode:10},
            {blaLevel:2, blaText:"o surgimento das estruturas do comércio virtual ", blaCode:11},
            {blaLevel:2, blaText:"a expansão dos mercados ", blaCode:12},
            {blaLevel:2, blaText:"a consolidação das estruturas ", blaCode:13},
            {blaLevel:2, blaText:"o início da atividade geral de formação ", blaCode:14},
            {blaLevel:2, blaText:"a competitividade nas transações comerciais ", blaCode:23},
            {blaLevel:3, blaText:"aponta para a melhoria das condições financeiras e administrativas.", blaCode:15, blaFinal:true},
            {blaLevel:3, blaText:"faz parte de um processo de gerenciamento do fluxo de informações.", blaCode:18, blaFinal:true},
            {blaLevel:3, blaText:"apresenta tendências no sentido de aprovar a manutenção de alternativas às soluções ortodoxas.", blaCode:19, blaFinal:true},
            //{blaLevel:3, blaText:"faz parte de um processo ", blaCode:20},
            {blaLevel:3, blaText:"pode nos levar a considerar a reestruturação das novas proposições.", blaCode:21, blaFinal:true},
            //{blaLevel:3, blaText:"nos faz entender o processo ", blaCode:22}
        ];

        $scope.generateBla = function(){
            $scope.generatedBla = "";
            for (var a = 1; a<=3 ; a++){
                $scope.generatedBla =  $scope.generatedBla + getBla(a).blaText;
            }
        }
        
        function getBla(level){
            var blaList = _.filter($scope.BlaParts, function(bla) {
                return bla.blaLevel == level;
            });
            var rand = blaList[Math.floor(Math.random()*blaList.length)];;

            return rand;
        };
    });
})();
