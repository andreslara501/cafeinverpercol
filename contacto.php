<?php
    function cleanInput($input){
        $search = array(
            '@<script[^>]*?>.*?</script>@si',   // Elimina javascript
            '@<[\/\!]*?[^<>]*?>@si',            // Elimina las etiquetas HTML
            '@<style[^>]*?>.*?</style>@siU',    // Elimina las etiquetas de estilo
            '@<![\s\S]*?--[ \t\n\r]*>@'         // Elimina los comentarios multi-línea
        );

        $output = preg_replace($search, '', $input);
        return $output;
    }

    function sanitize($input){
        return filter_var($input, FILTER_SANITIZE_SPECIAL_CHARS);
    }

    $mail = "Este es un mensaje enviado desde el formulario de contacto de la pagina \r\n<br>
            \r\n<br>Nombre: " . sanitize($_POST["nombre"]) .
            "\r\n<br>Correo: " . sanitize($_POST["correo"]) .
            "\r\n<br>Celular / Telefono: " . sanitize($_POST["celular"]) .
            "\r\n<br>Mensaje: " . sanitize($_POST["mensaje"]);
    $titulo = "Contacto pagina: " . sanitize($_POST["nombre"]);
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .= "From: Contacto pagina < contacto@inverpercol.com >"."\r\n";
    $bool = mail("****@inverpercol.com", $titulo, $mail, $headers);

    echo json_encode(array("respuesta" => "enviado"));
?>
