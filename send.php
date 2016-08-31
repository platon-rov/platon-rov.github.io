<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['order'])&&$_POST['order']!="")){
        $to = 'platon.rov@gmail.com';
        $subject = 'Заказ с Vishenka.DP.UA';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Заказ: '.$_POST['order'].'</p> 
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <vishenka.dp.ua>\r\n";
        mail($to, $subject, $message, $headers);
}
?>