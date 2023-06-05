<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'api', 'middleware' => 'auth'], function () use ($router) {
  $router->get('resources',  ['uses' => 'ResourcesController@showAllResources']);
  $router->get('resources/{id}', ['uses' => 'ResourcesController@showOneResource']);
  $router->put('resources/{id}', ['uses' => 'ResourcesController@update']);
  $router->delete('resources/{id}', ['uses' => 'ResourcesController@delete']);

  $router->get('users',  ['uses' => 'UserController@showAllUsers']);
  $router->get('users/{id}', ['uses' => 'UserController@showOneUser']);
  $router->put('users/{id}', ['uses' => 'UserController@update']);
  $router->delete('users/{id}', ['uses' => 'UserController@delete']);

  // Add routes for creating, updating, and deleting resources as needed
});

$router->post('api/resources', [
  'middleware' => 'auth:create:resource',
  'uses' => 'ResourcesController@create'
]);

$router->post('api/users', [
  'middleware' => 'auth:create:user',
  'uses' => 'UserController@create'
]);
