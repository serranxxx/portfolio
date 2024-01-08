import { message } from "antd"
import { assets, gifs } from "./gifsPaths"

export const goTo = (index) => {
    switch (index) {
        case gifs.taskify:
            return `https://serranxxx.github.io/taskify/`


        case gifs.avatar:
            return `https://serranxxx.github.io/avatar-studio/`


        case gifs.send:
            return `https://serranxxx.github.io/send-review/`


        case gifs.pancrasio:
            return `https://serranxxx.github.io/san-pancrasio/`

        case gifs.journal:
            return `https://serranxxx.github.io/journal/`


        default:

    }
}

export const handleDownload = (language) => {

    // message.success('enter')
    // Ruta relativa al archivo PDF en la carpeta "assets"
    
    const pdfPath = `${language ? assets.resume : assets.cv}`;

    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank'; // Abre en una nueva pestaña (opcional)
    link.download = `${language ? 'AlbertoSerrano-Resume' : 'AlbertoSerrano-Curriculum'}`; // Nombre del archivo al descargar (opcional)

    // Simular el clic en el enlace para iniciar la descarga
    link.click();
};

export function stringsCorrection(str) {
    // Convierte la primera letra a mayúscula y concatena el resto del string en minúsculas
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }