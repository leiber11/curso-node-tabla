//setTimeout(function() {
//    console.log('hola leiber')
//}, 2000);

const getUsuarioById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'leiber'

    }
    setTimeout(() => {
        callback(usuario)
    }, 2500);

}
getUsuarioById(10, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase());
});