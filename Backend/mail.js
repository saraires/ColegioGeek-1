const express = require('express');
const smtpTransport = require('nodemailer-smtp-transport');
const router = express.Router();
// Nodemailer

// smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

// Configuramos transporter
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'bicipoint01@gmail.com',
        pass: 'bicipoint123'
    }
}));

router.post('/send', (req, res) => {
    
    let {to, full_name} = req.body;

    // var to = req.body.to,
    // subject = req.body.subject,
    // message = req.body.message

    // Configuracion inicial del nodemailer
    const mailOptions = {
        from: '<academiageek@gmail.com>',
        to: to,
        subject: "Bienvenido a Colegio Geek",
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        
        <body>
            <div style="
            max-width:625px;
            margin-top:0;
            margin-left:auto;
            margin-bottom:0;
            margin-right:auto">
                <table border="0" cellpadding="0" cellspacing="0" dir="ltr" id="m_22375324755315983container" style="
                    border-collapse:collapse;
                    border-bottom-style:none;
                    border-right-style:none;
                    border-top-style:none;
                    border-left-style:none;
                    color: #DEDDDD;
                    font-family:Helvetica,Arial,sans-serif" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" id="m_22375324755315983preheaderRow"
                                style="line-height:1em;text-align:left;font-size:12px;padding-top:0;padding-right:0;padding-bottom:12px;padding-left:0">
                            </td>
                        </tr>
                        <tr>
                            <td align="left" id="m_22375324755315983logoRow"
                                style="background-color: #e9e9e9;line-height:1em;padding-bottom:18px;padding-left:13px;padding-right:13px;padding-top:24px;text-align:left"
                                valign="middle">
                                <table align="left" cellpadding="0" cellspacing="0" id="m_22375324755315983logo"
                                    style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#337DB8;font-family:Helvetica,Arial,sans-serif"
                                    width="200">
                                    <tbody>
                                        <tr>
                                            <td align="left" style="line-height:1em;text-align:left; display: flex;"
                                                valign="middle"><img alt="" border="0"
                                                    src="https://lh3.googleusercontent.com/QtawW52gkTik73elKe59QHR5Qfyer_U_WeiFsx26BVbwM9z8aUVfnuITicY2gEhKGNFkNTakJebSavlsWSeXLT-v_rvQWFY_a3e1IytBzsW8Wojm9NW2_OwJiTDQQftRCIXqub8-DJRqSABijbyj4HgdaTuAWnKyLVZ12nTOX1Suf-DwfDpr2rbjj0awFuHJ9mvmUsdHRqHbdghrtpTI8mQ93hj_YhK7WNjfQpu1jIybl3plVCFPg7X69nfiaaWr3TGdhGDjtjzU78JNL8CTHg-AZsIQavjQQ4GPDYLObllKDpipns75e3uDzBkMg0SWNjVHS6sBiOZlJwczLLSd8D2eutb2uccTZbkPTHdxTyeJyb4kBqwQbOxddiid9mAfmftX5delhynkRlYXxT5-UBSdhnZWzFbppgKYayGM8FaTQFn-MG3kRy9iYTmjVlrRF-t5goi01v8uIO_8P5z44p4t0yFyPG4rkX1YdpUZ4KtIzs2gmQETnqVtFxgnp_bf2mGeTQm5VPwNfDFVUWKfvAYsPfQt72c6wjxcqWOBobjrMEv3qWEzbX7H7_FVwCeexu5NZiOrj0ySHlUJRO04W1lLX_8LwM395TVngYU129JA8smrrfWI9dqlsOJHEa8Uya4J8e2N7lNmPgcNpwgkOcx9qEBRc5_4pV2JlZSYHMM30gOgrPlVZtrkcveiiTo=w1192-h501-no?authuser=0"
                                                    style="margin-left: auto; margin-right: auto; outline:none" width="150px"
                                                    title="Google for Education" width="200" class="CToWUd"></td>
                                            <h1 style="display: inline;"></h1>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="right" cellpadding="0" cellspacing="0" id="m_22375324755315983date"
                                    style="border-collapse:collapse;color:#e9e9e9;font-family:Helvetica,Arial,sans-serif;font-size:16px;text-align:right!important;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none"
                                    width="289">
                                    <tbody>
                                        <tr>
                                            <td align="right" id="m_22375324755315983Edition" height="26"
                                                style="line-height:1em;text-align:right;padding-top:0;padding-right:30px;padding-bottom:0;padding-left:0"
                                                valign="middle"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" id="m_22375324755315983contentRow"
                                style="background-color:#e9e9e9;line-height:2em;padding-bottom:20px;padding-left:40px;padding-right:40px;padding-top:0;text-align:left">
                                <table cellpadding="0" cellspacing="0" id="m_22375324755315983moduleContainer"
                                    style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="left" style="line-height:1em;text-align:left;padding-bottom:20px">
                                                <table cellpadding="0" cellspacing="0"
                                                    style="border-collapse:collapse;color:#666666;font-family:Helvetica,Arial,sans-serif;border-top-color:#e9e9e9;border-right-color:#e9e9e9;border-bottom-color:#e9e9e9;border-left-color:#e9e9e9;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px"
                                                    width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="left"
                                                                style="background-color:#ffffff;line-height:1em;padding-bottom:30px;padding-left:31px;padding-right:31px;padding-top:30px;text-align:left">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif"
                                                                    width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="left"
                                                                                id="m_22375324755315983IntroHeadline"
                                                                                style="line-height:26px;text-align:left;font-size:14px;font-weight:normal;padding-bottom:10px">
                                                                                <span
                                                                                    style="font-family:helvetica,arial,sans-serif;font-size:14px">
                                                                                    Hola, ${full_name}!<br><br>
                                                                                    Muchas gracias por el interés mostrado a la
                                                                                    hora de mandar la documentación necesaria
                                                                                    para la inscripción
                                                                                    en nuestra academia, queremos informarte que
                                                                                    has sido aceptado dentro de la institución y
                                                                                    deseamos que tu
                                                                                    estancia en ella resulte lo más cómoda
                                                                                    posible.
                                                                                    <br><br>
                                                                                    Como primeros pasos, queremos darte la
                                                                                    bienvenida a nuestra plataforma educativa en
                                                                                    la que
                                                                                    siendo un estudiante podrás hacer el
                                                                                    seguimiento de tu rendimiento académico y
                                                                                    como docente
                                                                                    podrás tener acceso a una base de datos que
                                                                                    se acomode a las tus necesidades.<br><br>
                                                                                    Las credenciales que tendrás que ingresar
                                                                                    serán tu correo electrónico (el mismo con el
                                                                                    que te inscribiste a la academia) y tu nombre con 
                                                                                    inicial mayuscula seguido de tu
                                                                                    tarjeta de identidad como contraseña.
                                                                                    <br>
                                                                                    <br>
                                                                                    <i>Ejemplo:</i> 
                                                                                    <br>
                                                                                    <b>Correo: laura@gmail.com</b>
                                                                                    <br>
                                                                                    <b>Contraseña: Laura1234567890</b>
                                                                                    <br><br>
                                                                                    Muchas Gracias,<br>
                                                                                    Grupo de trabajo de Colegio Geek
                                                                                </span><br
                                                                                    style="color:#666666;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" id="m_22375324755315983emailCopyright"
                                                style="line-height:16px;text-align:left;padding-top:0;padding-right:30px;padding-bottom:5px;padding-left:30px">
                                                <a style="color:#000000!important;text-decoration:none; font-size: 12px;"
                                                    href="#m_22375324755315983_">© Todos los derechos reservados Academia Geek
                                                    2021</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
        
        </html>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return res.sendStatus(500).send()
        } else {
            console.log(`sent: ${info.response}`);
            res.sendStatus(200).send("Revisa tu bandeja de entrada")
        };
    });
    

});

module.exports = router;