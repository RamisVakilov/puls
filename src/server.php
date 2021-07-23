<?php
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require_once 'PHPMailer/src/PHPMailer.php';
    require_once 'PHPMailer/src/Exception.php';
    require_once 'PHPMailer/src/SMTP.php';

    $email = 'c данным емайлом: '. $_POST['email'];
    $phone = $_POST['tel'];
    $name - $_POST['name'];
       
    $mail = new PHPMailer(true);
        $mail->CharSet = "UTF-8";
        $mail->isHTML(true);   
        //Получатели
        $mail->setFrom('info@puls.com', 'Пульсометры');//от кого письмо
        $mail->addAddress('ramis.vakilov@gmail.com');     //Add a recipient
        //
        //$mail->addAddress('ramisvakilov18@gmail.com');               //Name is optional
      
            
    
        //Content
                                       
        $mail->Subject = 'Заявка';
        $mail->Body    = '<h2>Пришла заявка на Консультацию</h2>'.
                            'Клиент '.$name.$email.' и <br>'.
                             'телефоном: '.$phone.' закал консультацию.';
        $mail->AltBody = 'Пришла заявка на Консультацию';
    
        $mail->send();
        echo 'Message has been sent';
    
?>