function colorList($scope, $http) {

    $http.get('/api/Data').success(function (list) {
        $scope.colors = list;
    });



    $scope.getVotesByColor = function (index) {

        $http.get('/api/Data?colorId=' + $scope.colors[index].Id).success(function (res) {
            $scope.colors[index].sum = res;

        })
    };


    $scope.getTotal = function () {
        var t = 0
        angular.forEach($scope.colors, function (value) {
            if (value.sum != null)
                t = t + value.sum;
        });
        $scope.total = t
    }





}