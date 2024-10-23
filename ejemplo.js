// Función para cargar los detalles del estudiante
function loadStudentDetails() {
    const student = JSON.parse(localStorage.getItem('selectedStudent'));

    if (student) {
        const studentDetails = document.getElementById('student-details');

        // Aplicar estilo según el valor de asistencia, participación, esfuerzo y tiempo dedicado
        // Aplicar estilo según el valor de asistencia, participación, esfuerzo y tiempo dedicado
const boxHeight = '50px'; // Establecer una altura fija para las cajas

const attendanceStyle = student.attendance < 60 
    ? `color: white; background-color: red; border: 2px solid darkred; font-weight: bold; padding: 5px; border-radius: 5px; display: inline-block; width: 150px; height: ${boxHeight}; text-align: center;` 
    : `color: black; background-color: lightgreen; border: 2px solid darkgreen; font-weight: bold; padding: 5px; border-radius: 5px; display: inline-block; width: 150px; height: ${boxHeight}; text-align: center;`;

const participationStyle = student.participation < 60 
    ? `color: white; background-color: red; border: 2px solid darkred; font-weight: bold; padding: 5px; border-radius: 5px; display: inline-block; width: 150px; height: ${boxHeight}; text-align: center;` 
    : `color: black; background-color: lightgreen; border: 2px solid darkgreen; font-weight: bold; padding: 5px; border-radius: 5px; display: inline-block; width: 150px; height: ${boxHeight}; text-align: center;`;

const effortStyle = student.effort < 60 
    ? `color: white; background-color: red; border: 2px solid darkred; font-weight: bold; padding: 5px; border-radius: 5px; display: inline-block; width: 150px; height: ${boxHeight}; text-align: center;` 
    : `color: black; background-color: lightgreen; border: 2px solid darkgreen; font-weight: bold; padding: 5px; border-radius: 5px; display: inline-block; width: 150px; height: ${boxHeight}; text-align: center;`;

const timeSpentStyle = student.timeSpent < 60 
    ? `color: white; background-color: red; border: 2px solid darkred; font-weight: bold; padding: 5px; border-radius: 5px; display: inline-block; width: 150px; height: ${boxHeight}; text-align: center;` 
    : `color: black; background-color: lightgreen; border: 2px solid darkgreen; font-weight: bold; padding: 5px; border-radius: 5px; display: inline-block; width: 150px; height: ${boxHeight}; text-align: center;`;



    studentDetails.innerHTML = `
    <h1>${student.name}</h1>
    <p style="${attendanceStyle}">Asistencia a clase: ${student.attendance}%</p>
    <p style="${participationStyle}">Participación: ${student.participation}%</p>
    <p style="${effortStyle}">Calificaciones: ${student.effort}%</p>
    <p style="${timeSpentStyle}">Tiempo dedicado: ${student.timeSpent}%</p>
    <img src="./icono-usuario.jpg" style="max-width: 200px; border-radius: 10px;">
    
    <h2>Comentario de IA:</h2>
    <p id="comment" style="font-family: 'Arial', sans-serif; font-size: 1.2em; color: #333; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; padding: 10px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        ${generateComment(student)}
    </p>
`;

    } else {
        document.getElementById('student-details').textContent = 'No se encontró información del estudiante.';
    }
}

// Función para generar un comentario personalizado
function generateComment(student) {
    // Lógica para generar un comentario basado en las métricas del estudiante
    if (student.attendance < 60) {
        return `${student.name}, tu asistencia es baja. Considera asistir a más clases para mejorar tu rendimiento.`;
    } else if (student.participation < 60) {
        return `${student.name}, intenta participar más en clase. Tu voz es importante!`;
    } else if (student.effort < 60) {
        return `${student.name}, es importante que pongas más esfuerzo en tus estudios para alcanzar tus metas.`;
    } else if (student.timeSpent < 60) {
        return `${student.name}, parece que no estás dedicando suficiente tiempo al estudio. Intenta organizar mejor tu tiempo.`;
    } else {
        return `${student.name}, ¡gran trabajo! Estás manteniendo buenos estándares en asistencia, participación, esfuerzo y tiempo dedicado. Sigue así.`;
    }
}

// Cargar los detalles del estudiante al cargar la página
window.onload = loadStudentDetails;
