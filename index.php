<?php

require ('vendor/autoload.php');

function run_utk_calendar() {
    $plugin = new UTKDigital\Digital();
    $plugin->run();
}

run_utk_calendar();
