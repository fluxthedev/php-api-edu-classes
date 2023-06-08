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
});

$router->post('api/resources', [
  'middleware' => 'auth:create:resource',
  'uses' => 'ResourcesController@create'
]);

$router->post('api/users', [
  'middleware' => 'auth:create:user',
  'uses' => 'UserController@create'
]);

$router->get('api/getAuthToken', function () {
  $client = new GuzzleHttp\Client();

  $res = $client->post('https://dev-42py737q1seq232l.us.auth0.com/oauth/token', [
    'json' => [
      'client_id' => env('AUTH0_CLIENT_ID'),
      'client_secret' => env('AUTH0_CLIENT_SECRET'),
      'audience' => env('AUTH0_AUD'),
      'grant_type' => 'client_credentials'
    ]
  ]);

  return response()->json(json_decode((string) $res->getBody(), true));
});
