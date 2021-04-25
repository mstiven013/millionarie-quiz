<?php 

class Scores {

	protected $db;
	protected $db_host;
	protected $db_user;
	protected $db_pass;
	protected $db_name;
	protected $scores_table;

	public function __construct() {
		$this->db_host = 'localhost';
		$this->db_name = 'juego_quiz';
		$this->db_user = 'root';
		$this->db_pass = '';
		$this->scores_table = 'scores';

		// Create connection
		$conn = new mysqli($this->db_host, $this->db_user, $this->db_pass, $this->db_name);

		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
		
		// Return connection
		$this->db = $conn;
	}

	public function getRanking( $orderby = 'score', $order = 'DESC', $max = 10 ) {
		$sql = "SELECT * FROM $this->scores_table";
		$result = $this->db->query($sql);
		$this->db->close();

		// Define ranking returned array
		$ranking = ( $result->num_rows > 0 ) ? $result->fetch_all(MYSQLI_ASSOC) : [];

		return $ranking;
	}

	public function postScore( $user_name, $user_email, $score, $playing_time ) {

		$response = [];

		$sql = "INSERT INTO $this->scores_table ( user_name, user_email, score, playing_time ) VALUES ( '$user_name', '$user_email', '$score', '$playing_time' )";
		$query = $this->db->query($sql);

		if( $query ) {
			$response["status"] = 200;
			$response["message"] = "Resource saved successfully";
		} else {
			$response["status"] = 500;
			$response["message"] = $this->db->error;
		}

		return $response;
	}

}