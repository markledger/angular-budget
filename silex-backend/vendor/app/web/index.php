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
   var_dump($app['db']);
    $post = array(
        'name' => $request->request->get('name'),
        'amount' => $request->request->get('amount') * 100,
        'date' => $request->request->get('date'),
        'category' => json_encode($request->request->get('category')),
    );

    $sql = "INSERT INTO spends (name, amount, date, category) VALUES (?, ?, ?, ?)";
    $stmt = $app['db']->prepare($sql);
    $stmt->bindValue(1, $post['name']);
    $stmt->bindValue(2, $post['amount']);
    $stmt->bindValue(3, $post['date']);
    $stmt->bindValue(4, $post['category']);
    $stmt->execute();

    return new Response('Thank you for your feedback!', 201);
});


$app->get('/spend/all',  function (Silex\Application $app ) {

   $sql = "SELECT * FROM spends";
   $stmt = $app['db']->prepare($sql);
   $stmt->execute();
   $result = $stmt->fetchAll();

   return $app->json($result);
});


$app->delete('/spend/delete/{id}',  function ($id, Silex\Application $app ) {
var_dump($id);
   $sql      = "DELETE FROM spends WHERE id = ?";
   $rowCount = $app['db']->executeUpdate($sql, array($id));
   if($rowCount !=  1){
      return new Response('Error deleting record ID: ' . $id, Response::HTTP_NO_CONTENT);
   }
   return new Response('Spend successfully deleted.', Response::HTTP_INTERNAL_SERVER_ERROR);
});


$app->get('/categories/all',  function (Silex\Application $app ) {

   $sql = "SELECT * FROM categories";
   $stmt = $app['db']->prepare($sql);
   $stmt->execute();
   $result = $stmt->fetchAll();

   return $app->json($result);
});

$app->run();
