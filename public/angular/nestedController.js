var firstControllerScope = function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "John";
};

var secondControllerScope = function ($scope)
{
  // Initialize the model variables
  $scope.lastName = "Doe";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  };
};

var thirdControllerScope = function ($scope)
{
  // Initialize the model variables
  $scope.middleName = "Al";
  $scope.lastName = "Smith";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  };
};

var firstControllerObj = function ($scope)
{
  // Initialize the model object
  $scope.firstModelObj = {
    firstName: "John"
  };
};

var secondControllerObj = function ($scope)
{
  // Initialize the model object
  $scope.secondModelObj = {
    lastName: "Doe"
  };

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstModelObj.firstName + " " +
      $scope.secondModelObj.lastName;
  };
};

var thirdControllerObj = function ($scope)
{
  // Initialize the model object
  $scope.thirdModelObj = {
    middleName: "Al",
    lastName: "Smith"
  };

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstModelObj.firstName + " " +
      $scope.thirdModelObj.middleName + " " +
      $scope.thirdModelObj.lastName;
  };
};



<!DOCTYPE html>
<html>
<head>
  <script src="angular.js"></script>
  <script src="script.js"></script>
</head>

<body ng-app>
  <p>
    <h2>Nested controllers with model variables defined directly on the scopes</h2>
    (typing on an input field, with a data binding to the model, overrides the same variable of a parent scope)
  </p>
  <div ng-controller="firstControllerScope">
    <h3>First controller</h3>
    <strong>First name:</strong> {{firstName}}<br />
    <br />
    <label>Set the first name: <input type="text" ng-model="firstName"/></label><br />
    <br />
    <div ng-controller="secondControllerScope">
      <h3>Second controller (inside First)</h3>
      <strong>First name (from First):</strong> {{firstName}}<br />
      <strong>Last name (new variable):</strong> {{lastName}}<br />
      <strong>Full name:</strong> {{getFullName()}}<br />
      <br />
      <label>Set the first name: <input type="text" ng-model="firstName"/></label><br />
      <label>Set the last name: <input type="text" ng-model="lastName"/></label><br />
      <br />
      <div ng-controller="thirdControllerScope">
        <h3>Third controller (inside Second and First)</h3>
        <strong>First name (from First):</strong> {{firstName}}<br />
        <strong>Middle name (new variable):</strong> {{middleName}}<br />
        <strong>Last name (from Second):</strong> {{$parent.lastName}}<br />
        <strong>Last name (redefined in Third):</strong> {{lastName}}<br />
        <strong>Full name (redefined in Third):</strong> {{getFullName()}}<br />
        <br />
        <label>Set the first name: <input type="text" ng-model="firstName"/></label><br />
        <label>Set the middle name: <input type="text" ng-model="middleName"/></label><br />
        <label>Set the last name: <input type="text" ng-model="lastName"/></label>
      </div>
    </div>
  </div>
  <br />
  <p>
    <h2>Nested controllers with model variables defined inside objects</h2>
    (typing on an input field, with a data binding to the model, acts on a specific object without overriding variables)
  </p>
  <div ng-controller="firstControllerObj">
    <h3>First controller</h3>
    <strong>First name:</strong> {{firstModelObj.firstName}}<br />
    <br />
    <label>Set the first name: <input type="text" ng-model="firstModelObj.firstName"/></label><br />
    <br />
    <div ng-controller="secondControllerObj">
      <h3>Second controller (inside First)</h3>
      <strong>First name (from First):</strong> {{firstModelObj.firstName}}<br />
      <strong>Last name (from Second):</strong> {{secondModelObj.lastName}}<br />
      <strong>Full name:</strong> {{getFullName()}}<br />
      <br />
      <label>Set the first name: <input type="text" ng-model="firstModelObj.firstName"/></label><br />
      <label>Set the last name: <input type="text" ng-model="secondModelObj.lastName"/></label><br />
      <br />
      <div ng-controller="thirdControllerObj">
        <h3>Third controller (inside Second and First)</h3>
        <strong>First name (from First):</strong> {{firstModelObj.firstName}}<br />
        <strong>Middle name (from Third):</strong> {{thirdModelObj.middleName}}<br />
        <strong>Last name (from Second):</strong> {{secondModelObj.lastName}}<br />
        <strong>Last name (from Third):</strong> {{thirdModelObj.lastName}}<br />
        <strong>Full name (redefined in Third):</strong> {{getFullName()}}<br />
        <br />
        <label>Set the first name: <input type="text" ng-model="firstModelObj.firstName"/></label><br />
        <label>Set the middle name: <input type="text" ng-model="thirdModelObj.middleName"/></label><br />
        <label>Set the last name: <input type="text" ng-model="thirdModelObj.lastName"/></label>
      </div>
    </div>
  </div>
</body>
</html>