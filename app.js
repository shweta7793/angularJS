var app =angular.module('store',[]);
app.controller('TaskController',function($scope){
  $scope.taskList=tasks;
  //console.log('from ctrl',$scope.task);
  $scope.addTask=function(item){
    //console.log('from function',$scope.task);
  $scope.taskList.push({todo:item,
                        done:false,
                      createdOn:Date.now()});
    $scope.task='';
  //console.log('tasklist',$scope.taskList);  
  };
  $scope.remove=function(){
    $scope.taskList=$scope.taskList.filter((task)=>task.done==false);
  };
  
});

var tasks =[];
