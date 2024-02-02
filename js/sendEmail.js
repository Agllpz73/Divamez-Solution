import emailjs from 'emailjs-com'
import keys from '../lib/data.json'
import errors from '../lib/errors.json'

function enviarCorreo(datosFormulario) {
    const templateParams = {
        to_name: keys.email,
        from_name: datosFormulario.nombre,
        message: `Mensaje del formulario:\n${JSON.stringify(datosFormulario, null, 2)}`
    };

    // Cambia 'tu_servicio_id', 'tu_template_id' y 'tu_usuario_id' con tus propias credenciales
    emailjs.send(keys.serviceId, keys.templateId, templateParams)
        .then(function (response) {
            console.log('Correo enviado con éxito:', response);
            return{
                response: response,
                status:200,
                message: "Email send with the formulary info"
            }
        })
        .catch(function (error) {
            console.error('Error al enviar el correo:', error);
            return{
                error: errors.emailError
            }
        });
}

export default enviarCorreo