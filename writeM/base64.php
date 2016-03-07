<?php
    header('Content-type:text/html;charset=utf-8');
	require_once('ucloud/proxy.php');
    $data = $_POST['dataStr'];
	$decode_data = base64_decode($data);
	$id = $_POST['id'];
	 $new_file = "{$id}.png";
  if (file_put_contents($new_file, $decode_data)){
	    $bucket = 'stois';
		$key    = $new_file;
		$file   = $new_file;

		list($data, $err) = UCloud_MInit($bucket, $key);
		if ($err)
		{
			echo "error: " . $err->ErrMsg . "\n";
			echo "code: " . $err->Code . "\n";
			exit;
		}

		$uploadId = $data['UploadId'];
		$blkSize  = $data['BlkSize'];
		echo "UploadId: " . $uploadId . "\n";
		echo "BlkSize:  " . $blkSize . "\n";

		list($etagList, $err) = UCloud_MUpload($bucket, $key, $file, $uploadId, $blkSize);
		if ($err) {
			echo "error: " . $err->ErrMsg . "\n";
			echo "code: " . $err->Code . "\n";
			exit;
		}

		list($data, $err) = UCloud_MFinish($bucket, $key, $uploadId, $etagList);
		if ($err) {
			echo "error: " . $err->ErrMsg . "\n";
			echo "code: " . $err->Code . "\n";
			exit;
		}
		unlink($new_file);
		echo "Etag:     " . $data['ETag'] . "\n";
		echo "FileSize: " . $data['FileSize'] . "\n";
				
	}
     else{
	   echo 'fail';
	 }
		//	base64_decode
			
			//echo $me1 ;
			
	
?>