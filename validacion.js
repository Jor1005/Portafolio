//Haz tú validación en javascript acá

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    const nombreInput = document.querySelector('input[name="nombre"]');
    const emailInput = document.querySelector('input[name="email"]');
    const asuntoInput = document.querySelector('input[name="asunto"]');
    const mensajeInput = document.querySelector('textarea[name="mensaje"]');
    const botonEnviar = document.querySelector('.formcontato__botao');

    // Funcion para verificar si está completo
    function verificarFormularioCompleto() {
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const asunto = asuntoInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        // Verificar si todos los campos están llenos
        if (nombre !== '' && email !== '' && asunto !== '' && mensaje !== '') {
            botonEnviar.removeAttribute('disabled'); // Habilitar el botón
        } else {
            botonEnviar.setAttribute('disabled', 'disabled'); // Deshabilitar el botón
        }
    }

    // Saber los cambios en los campos
    nombreInput.addEventListener('input', verificarFormularioCompleto);
    emailInput.addEventListener('input', verificarFormularioCompleto);
    asuntoInput.addEventListener('input', verificarFormularioCompleto);
    mensajeInput.addEventListener('input', verificarFormularioCompleto);

    // Envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const asunto = asuntoInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        if (nombre === '') {
            alert('El campo Nombre no debe estar en blanco o vacío.');
            return;
        }

        if (nombre.length > 50) {
            alert('El campo Nombre debe contener máximo 50 caracteres.');
            return;
        }

        if (email === '') {
            alert('El campo E-mail no debe estar en blanco o vacío.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('El campo E-mail debe estar en formato válido (ejemplo: texto@texto.com).');
            return;
        }

        if (asunto === '') {
            alert('El campo Asunto no debe estar en blanco o vacío');
            return;
        }

        if (asunto.length > 50) {
            alert('El campo Asunto debe contener máximo 50 caracteres.');
            return;
        }

        if (mensaje === '') {
            alert('El campo Mensaje no debe estar en blanco o vacío');
            return;
        }

        if (mensaje.length > 300) {
            alert('El campo Mensaje debe contener máximo 300 caracteres');
            return;
        }

        alert('Formulario enviado correctamente.');
        form.submit();
    });
});

