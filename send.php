<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){
        $to = 'platon_rov@gmail.com';
        $subject = 'Заказ';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>     
			<p>Телефон: '.$_POST['order'].'</p>                    
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
}
?>