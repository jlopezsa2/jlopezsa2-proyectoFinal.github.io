const apiToken = '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'; // Tu API token de Hugging Face


// Función para cargar los detalles del estudiante
function loadStudentDetails() {
    const student = JSON.parse(localStorage.getItem('selectedStudent'));

    if (student) {
        const studentDetails = document.getElementById('student-details');
        studentDetails.innerHTML = `
            <h1>${student.name}</h1>
            <p>Asistencia: ${student.attendance}%</p>
            <p>Participación: ${student.participation}%</p>
            <p>Esfuerzo: ${student.effort}%</p>
            <p>Tiempo dedicado: ${student.timeSpent}%</p>
            <h2>Comentario:</h2>
            <p id="comment">${student.name}</p>
            
        `;
        getCommentFromHuggingFace(student);
    } else {
        document.getElementById('student-details').textContent = 'No se encontró información del estudiante.';
    }
}

// Función para obtener el comentario de la IA
/*async function getCommentFromHuggingFace(student) {
    const inputMessage = `Proporciona un comentario útil sobre el rendimiento del estudiante ${student.name} basado en los siguientes datos: Asistencia: ${student.attendance}%, Participación: ${student.participation}%, Esfuerzo: ${student.effort}%, Tiempo dedicado: ${student.timeSpent}%. Incluye sugerencias para mejorar.`;

    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B',
            { inputs: inputMessage },
            { headers: { Authorization: `Bearer ${apiToken}`, 'Content-Type': 'application/json' } }
        );

        const comment = response.data[0]?.generated_text || "No se pudo generar un comentario.";
        document.getElementById('comment').textContent = comment;
    } catch (error) {
        console.error('Error al obtener el comentario:', error);
        document.getElementById('comment').textContent = 'No se pudo obtener un comentario.';
    }
}*/

// Cargar los detalles del estudiante al cargar la página
window.onload = loadStudentDetails;
