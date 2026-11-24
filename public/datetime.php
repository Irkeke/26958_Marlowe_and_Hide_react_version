<?php
// Server-side PHP endpoint: returns the current server date/time as JSON.
// The React "Server Clock" page fetches this; if PHP isn't available
// (e.g. running `npm run dev`), the page falls back to the browser's clock.
header('Content-Type: application/json');
date_default_timezone_set('Africa/Nairobi');
echo json_encode(array(
    'date'     => date('l, F j, Y'),
    'time'     => date('H:i:s'),
    'timezone' => date('T (P)'),
));
