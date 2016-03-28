<?php

require __DIR__.'/../includes/bootstrap.include.php';
require __DIR__.'/../includes/db.include.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});

$app->post('/spend/add', function (Silex\Application $app, Request $request) {
    
    $post = array(
        'name' => $request->request->get('name'),
        'amount' => $request->request->get('amount'),
        'date' => $request->request->get('date'),
        'category' => $request->request->get('category'),
    );

    $queryBuilder = $app['db']->createQueryBuilder();
    $queryBuilder
        ->insert('spends')
        ->values(
            array(
                'name' => '?',
                'amount' => '?',
                'date' => '?',
                'category' => '?',
            )
        )
        ->setParameter(0, $post['name'])
        ->setParameter(1, $post['amount'])
        ->setParameter(1, $post['date'])
        ->setParameter(1, $post['category']);

    return new Response('Thank you for your feedback!', 201);
});

// Declare our primary action
$app->get('/', function () {
    return 'Mr Watson, come here, I want to see you.';
});

$app->run();
