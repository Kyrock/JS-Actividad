// Asegurando que el archivo esté vinculado a depositar.html y Banco.html
// No se requiere enlace directo en JavaScript, pero se puede agregar un comentario para referencia.

function guardarSaldo() {
    let saldo = document.getElementById('saldo').value;
    if (saldo) {
        localStorage.setItem('saldo', saldo);
        document.getElementById('mensaje').innerText = "Saldo guardado correctamente.";
    } else {
        document.getElementById('mensaje').innerText = "Ingrese un saldo válido.";
    }
}

let saldo = localStorage.getItem('saldo');
if (saldo) {
    document.getElementById('cout').innerText = saldo;
} else {

}

function retirarSaldo() {
    let retirar = parseFloat(document.getElementById('retiro').value);
    let saldo = parseFloat(localStorage.getItem('saldo'));
        let nuevoSaldo = saldo - retirar;
        localStorage.setItem('saldo', nuevoSaldo);
        document.getElementById('mensaje').innerText = "Nuevo saldo: " + nuevoSaldo;
}

function depositarSaldo() {
    let depositar = parseFloat(document.getElementById('deposito').value);
    let saldo = parseFloat(localStorage.getItem('saldo'));
        let nuevoSaldo = saldo + depositar;
        localStorage.setItem('saldo', nuevoSaldo);
        document.getElementById('mensaje').innerText = "Nuevo saldo: " + nuevoSaldo;
}
