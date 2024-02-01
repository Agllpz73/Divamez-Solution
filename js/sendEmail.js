const keys = require('../lib/data.json')
import emailjs from 'emailjs-com';

function enviarCorreo(datosFormulario) {
    const templateParams = {
        to_name: keys.email,
        from_name: datosFormulario.nombre,
        message: `Mensaje del formulario:\n${JSON.stringify(datosFormulario, null, 2)}`
    };

    // Cambia 'tu_servicio_id', 'tu_template_id' y 'tu_usuario_id' con tus propias credenciales
    emailjs.send(keys.serviceId, keys.templateId, templateParams, keys.user)
        .then(function (response) {
            console.log('Correo enviado con éxito:', response);
        })
        .catch(function (error) {
            console.error('Error al enviar el correo:', error);
        });
}

export default enviarCorreo