<?php

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'dbs.options' => array (
        'mysql' => array(
            'driver'    => 'pdo_mysql',
            'host'      => 'localhost',
            'dbname'    => 'budget',
            'user'      => 'budget',
            'password'  => 'budget',
            'charset'   => 'utf8mb4',
        ),
    ),
));