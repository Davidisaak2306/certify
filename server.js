const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Cargar variables de entorno

const app = express();
const port = 3001;

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.use(cors());
app.use(bodyParser.json());

app.post('/enviar-correo', (req, res) => {
    const { email, total } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmación de Compra',
        text: `Gracias por tu compra.acontinuacion un asesor se pondra en contacto contigio via email  $${total}.`,
        html: `<p>Gracias por tu compra. un asesor se pondra en contacto contigio via email El total de tu compra es <strong>$${total}</strong>.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send('Error al enviar el correo');
        }
        console.log('Correo enviado:', info.response);
        res.status(200).send('Correo enviado');
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
