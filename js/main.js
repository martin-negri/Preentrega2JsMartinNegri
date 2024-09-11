function comprarVehiculo() {
    const concesionarios = [
        {
            marca: 'toyota',
            modelos: [
                { nombre: 'hilux', precio: 500 },
                { nombre: 'corolla', precio: 350 },
                { nombre: 'etios', precio: 220 }
            ]
        },
        {
            marca: 'ford',
            modelos: [
                { nombre: 'focus', precio: 300 },
                { nombre: 'fiesta', precio: 230 },
                { nombre: 'ranger', precio: 580 }
            ]
        },
        {
            marca: 'chevrolet',
            modelos: [
                { nombre: 'corsa', precio: 80 },
                { nombre: 'tracker', precio: 220 },
                { nombre: 's10', precio: 560 }
            ]
        },
        {
            marca: 'volkswagen',
            modelos: [
                { nombre: 'golf', precio: 240 },
                { nombre: 'polo', precio: 310 },
                { nombre: 'amarok', precio: 590 }
            ]
        }
    ];

    let total = 0;

    function buscarMarca(marca) {
        return concesionarios.find(concesionario => concesionario.marca === marca);
    }

    function buscarModelo(concesionario, modelo) {
        return concesionario.modelos.find(m => m.nombre.toLowerCase() === modelo.toLowerCase());
    }

    let seguirComprando = true;

    while (seguirComprando) {
        let concesionarioSeleccionado = prompt("¿Hola, qué vehículo busca?\n Toyota \n Ford \n Chevrolet \n Volkswagen").toLowerCase();
        let concesionario = buscarMarca(concesionarioSeleccionado);

        if (concesionario) {
            let modeloSeleccionado = prompt(`¿Qué ${concesionario.marca.charAt(0).toUpperCase() + concesionario.marca.slice(1)} busca?\n ${concesionario.modelos.map(m => m.nombre).join(' \n ')}`);
            let modelo = buscarModelo(concesionario, modeloSeleccionado);

            if (modelo) {
                alert(`¡Felicitaciones, acaba de comprar su ${concesionario.marca.charAt(0).toUpperCase() + concesionario.marca.slice(1)} ${modelo.nombre.charAt(0).toUpperCase() + modelo.nombre.slice(1)} por $${modelo.precio}!`);
                total += modelo.precio;
            } else {
                alert(`Ese modelo de ${concesionario.marca.charAt(0).toUpperCase() + concesionario.marca.slice(1)} no lo tenemos disponible`);
            }

        } else {
            alert("Ese vehículo no lo tenemos disponible");
        }

        seguirComprando = confirm("¿Quieres comprar otro vehículo?");
    }

    alert(`¡Muchas gracias por su compra! El total a pagar es: $${total}`);
}

comprarVehiculo();



