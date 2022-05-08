// // const intervalId = setInterval(() => {
// //     console.log('hola');
// // }, 1000);

// // setTimeout(() => {
// //     clearInterval(intervalId);
// // }, 5000);

// // FileSystem.writeFile('output.txt','este es el output', () => {
// //     console.log('archivo creado');
// // })

// // const escrituaConPromesa = (nombreArchivo, contenido) => {
// //     return new Promise((resolve, reject) => {
// //         FileSystem.writeFile(nombreArchivo, contenido, (err) => {
// //             if (err) {
// //                 reject(err);
// //             } else {
// //                 resolve();
// //             }
// //         });
// //     });
// // }

// // console.log("inicio");
// // escrituaConPromesa('output.txt', 'este es el output')
// //     .then(() => {
// //         console.log("archivo creado");
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// // const mostrarLetras = (palabra,fin) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             palabra.split('').forEach((letra) => {
// //                 console.log(letra);
// //             });
// //         }, 1000);
// //         fin();
// //     });
// // }

// // const fin = () => console.log('fin');
// // mostrarLetras('hola',fin);

// const mostrarIntervalado = (mensaje, intervalo, callback) => {
//     let contador = 0;
//     const intervalId = setInterval(() => {
//         console.log(mensaje[contador]);
//         contador++;
//         if(contador === mensaje.length) {
//             clearInterval(intervalId);
//             callback();
//         }
//     }, intervalo);
// }

// // mostrarIntervalado('hola', 250, () => {
// //     console.log('fin');
// // });

// // mostrarIntervalado('hola', 500, () => {
// //     console.log('fin');
// // });

// // mostrarIntervalado('hola', 1000, () => {
// //     console.log('fin');
// // });

// fs = require("fs");
// crearArchivo = (nombreArchivo, contenido) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(nombreArchivo, contenido, (err) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         });
//     });
// }
// crearArchivo('output.txt', 'este es el output')
//     .then(() => {
//         console.log("archivo creado");
//     })  .catch((err) => {
//         console.log(err);
//     });

// leerArchivo = (nombreArchivo) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(nombreArchivo, 'utf-8', (err, contenido) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(contenido);
//             }
//         });
//     });
// }
// leerArchivo('output.txt')
//     .then((contenido) => {
//         console.log(contenido);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const escribitArchivoProfe = () => {
//     try{
//         fs.writeFileSync('fyh.txt',(new Date()).toString());
//         console.log('archivo creado');
//     }catch(err){
//         throw new Error(err);
//     }
// }

// const leerArchivoProfe = () => {
//     try{
//         const contenido = fs.readFileSync('fyh.txt','utf-8');
//         console.log(contenido);
//     }catch(err){
//         throw new Error(err);
//     }
// }

// // try{
// //     escribitArchivoProfe();
// //     leerArchivoProfe();
// // }catch{
// //     console.log(err);
// // }

const fs = require("fs");

fs.stat('package.json', (err, stats) => {
    const tamano = stats.size;
    fs.readFile('package.json', 'utf-8', (err, contenido) => {
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: tamano
        }
        fs.writeFile('info.txt', JSON.stringify(info), (err) => {
            console.log('archivo creado');
        });
    });
});

const leerConPromesas = async () => {
    
}

leerConPromesas();