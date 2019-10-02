<?php

require ('vendor/autoload.php');

function run_digital() {
    $plugin = new UTKDigital\Digital();
    $plugin->run();
}

run_digital();
