'use strict';

angular.module('taskModule')
	.controller('TasksController', TasksController)
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/tasks/main.html',
				controller: 'TasksController',
				controllerAs: 'task'
			})
	});

function TasksController($scope, $http, $resource) {

		var me= this;
		var taskList = [];
		var taskResource = $resource('v1/tasks');

		taskResource.get(function(response) {
			console.log(response.tasks);
			me.taskList = response.tasks;
		}, function(erro) {
			console.log(erro);
		});
};