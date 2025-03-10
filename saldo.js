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
    }else{
        
    }
