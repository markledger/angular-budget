<?php

require __DIR__ . '/../includes/bootstrap.include.php';
require __DIR__ . '/../includes/db.include.php';


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->get( '/spend/add', function (Silex\Application $app, Request $request) {
    $queryBuilder = $app['db']->createQueryBuilder();
    return new Response('Thank you for your feedback!', 201);
});

// Declare our primary action
$app->get( '/', function() {
    return 'Mr Watson, come here, I want to see you.';
});



$app->run();