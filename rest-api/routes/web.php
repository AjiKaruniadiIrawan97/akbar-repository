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

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'dusun'], function () use ($router){
        $router->get('', "DusunController@index");
});

$router->group(['prefix' => 'penduduk'], function () use ($router){
        $router->get('', "PendudukController@index");
        $router->get('/get-status', "PendudukController@totalByStatus");
        $router->get('/get-dusun/{id}', "PendudukController@totalByDusun");
});