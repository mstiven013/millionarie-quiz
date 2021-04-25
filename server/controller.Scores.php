<?php 

if( !isset($_REQUEST['action']) ) {
	$error = ["status" => 400, "message" => "Action param is required"];
	echo json_encode($error);
	return false;
}

// Run Scores class
require_once 'class.Scores.php';
$scores = new Scores();

$response = [];

switch ( $_REQUEST['action'] ) {

	case 'get_ranking':
		$response = $scores->getRanking();
		break;
	
	case 'save_score':
		$user_name = isset($_REQUEST['user_name']) ? $_REQUEST['user_name'] : 'Sin nombre';
		$user_email = isset($_REQUEST['user_email']) ? $_REQUEST['user_email'] : 'sin_email@mail.com';
		$score = isset($_REQUEST['score']) ? $_REQUEST['score'] : 0;
		$playing_time = isset($_REQUEST['playing_time']) ? $_REQUEST['playing_time'] : 0;

		$response = $scores->postScore( $user_name, $user_email, $score, $playing_time );
		break;

}

// Show response
echo json_encode($response);
return false;