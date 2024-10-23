const apiToken = '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'; // Tu API token de Hugging Face

// Datos de ejemplo de estudiantes
const students = [
    {
        name: "Juan Pérez",
        attendance: 95,
        participation: 88,
        effort: 90,
        timeSpent: 80,
        
    },
    {
        name: "Ana Gómez",
        attendance: 70,
        participation: 65,
        effort: 75,
        timeSpent: 50,
    },
    {
        name: "Luis Martínez",
        attendance: 85,
        participation: 80,
        effort: 78,
        timeSpent: 70,
    },
    {
        name: "María Rodríguez",
        attendance: 50,
        participation: 55,
        effort: 60,
        timeSpent: 40,
    },
    {
        name: "Pedro Sánchez",
        attendance: 60,
        participation: 65,
        effort: 70,
        timeSpent: 55,
    },
    {
        name: "Laura Torres",
        attendance: 90,
        participation: 92,
        effort: 95,
        timeSpent: 85,
    },
    {
        name: "Carlos Fernández",
        attendance: 40,
        participation: 45,
        effort: 50,
        timeSpent: 30,
    },
    {
        name: "Sofía López",
        attendance: 80,
        participation: 75,
        effort: 85,
        timeSpent: 60,
    },
    {
        name: "Javier Castro",
        attendance: 20,
        participation: 15,
        effort: 25,
        timeSpent: 10,
    },
    {
        name: "Paula Jiménez",
        attendance: 99,
        participation: 98,
        effort: 97,
        timeSpent: 90,
    }
];

const students2 = [
    {
        name: "Javier Ibarra",
        attendance: 30,
        participation: 20,
        effort: 10,
        timeSpent: 30,
    },
    {
        name: "David Cánovas",
        attendance: 95,
        participation: 88,
        effort: 90,
        timeSpent: 80,
    },
    {
        name: "Carlos García",
        attendance: 70,
        participation: 65,
        effort: 75,
        timeSpent: 50,
    },
    {
        name: "Luis Martínez",
        attendance: 85,
        participation: 80,
        effort: 78,
        timeSpent: 70,
    },
    {
        name: "María Rodríguez",
        attendance: 50,
        participation: 55,
        effort: 60,
        timeSpent: 40,
    },
    {
        name: "Pedro Sánchez",
        attendance: 60,
        participation: 65,
        effort: 70,
        timeSpent: 55,
    },
    {
        name: "Laura Torres",
        attendance: 90,
        participation: 92,
        effort: 95,
        timeSpent: 85,
    },
    {
        name: "Carlos Fernández",
        attendance: 40,
        participation: 45,
        effort: 50,
        timeSpent: 30,
    },
    {
        name: "Sofía López",
        attendance: 80,
        participation: 75,
        effort: 85,
        timeSpent: 60,
    },
    {
        name: "Javier Castro",
        attendance: 20,
        participation: 15,
        effort: 25,
        timeSpent: 10,
    },
    {
        name: "Paula Jiménez",
        attendance: 99,
        participation: 98,
        effort: 97,
        timeSpent: 90,
    }
];

// Función para evaluar el riesgo y obtener el valor más bajo
function evaluateRisk(student) {
    const { attendance, participation, effort, timeSpent } = student;
    const riskScore = (100 - attendance) * 0.4 + (100 - participation) * 0.3 + (100 - effort) * 0.2 + (100 - timeSpent) * 0.1;

    const lowestValue = Math.min(attendance, participation, effort, timeSpent); // Obtiene el valor más bajo
    const lowestKey = Object.keys(student).find(key => student[key] === lowestValue); // Obtiene la clave del valor más bajo

    if (riskScore < 30) {
        return { level: "bajo", color: "green", lowestValue: null }; // Buen estado de aprendizaje
    } else if (riskScore < 70) {
        return { level: "moderado", color: "orange", lowestValue: { value: lowestValue, key: lowestKey } }; // Riesgo de abandono
    } else {
        return { level: "alto", color: "red", lowestValue: { value: lowestValue, key: lowestKey } }; // Propensión al abandono
    }
}

// Función para mostrar la lista de estudiantes
async function displayStudents() {
    const studentsList = document.getElementById('students-list');
    const studentsList2 = document.getElementById('students-list-2');
    studentsList.innerHTML = ''; // Limpiar la lista existente
    studentsList2.innerHTML = '';

    for (const student of students) {
        const risk = evaluateRisk(student);
        const studentElement = document.createElement('div');
        studentElement.className = 'student';
        studentElement.style.backgroundColor = risk.color;

        // Crear el contenido del estudiante con el icono correspondiente
        const translations = {
            attendance: 'Asistencia',
            participation: 'Participación',
            effort: 'Calificaciones',
            timeSpent: 'Tiempo Dedicado'
        };
        
        // ...
        
        if (risk.lowestValue) {
            const icon = '<i class="fas fa-exclamation-circle" style="color: red; margin-right: 5px;"></i>'; // Icono de advertencia
            const translatedKey = translations[risk.lowestValue.key] || risk.lowestValue.key; // Traducción al español
            studentElement.innerHTML = `${icon} ${student.name} (${translatedKey}: ${risk.lowestValue.value})`; // Muestra el nombre y el valor más bajo
        } else {
            studentElement.textContent = student.name; // Solo muestra el nombre si el riesgo es bajo
        }
        

        // Añadir un evento de clic para redirigir a la página de detalles
        studentElement.addEventListener('click', () => {
            localStorage.setItem('selectedStudent', JSON.stringify(student));
            window.location.href = 'student.html';
        });

        studentsList.appendChild(studentElement);
    }

    for (const student of students2) {
        const risk = evaluateRisk(student);
        const studentElement = document.createElement('div');
        studentElement.className = 'student';
        studentElement.style.backgroundColor = risk.color;

        // Crear el contenido del estudiante con el icono correspondiente

        

        const translations = {
            attendance: 'Asistencia',
            participation: 'Participación',
            effort: 'Calificaciones',
            timeSpent: 'Tiempo Dedicado'
        };
        
        // ...
        
        if (risk.lowestValue) {
            const icon = '<i class="fas fa-exclamation-circle" style="color: red; margin-right: 5px;"></i>'; // Icono de advertencia
            const translatedKey = translations[risk.lowestValue.key] || risk.lowestValue.key; // Traducción al español
            studentElement.innerHTML = `${icon} ${student.name} (${translatedKey}: ${risk.lowestValue.value})`; // Muestra el nombre y el valor más bajo
        } else {
            studentElement.textContent = student.name; // Solo muestra el nombre si el riesgo es bajo
        }

        // Añadir un evento de clic para redirigir a la página de detalles
        studentElement.addEventListener('click', () => {
            localStorage.setItem('selectedStudent', JSON.stringify(student));
            window.location.href = 'student.html';
        });
        
        studentsList2.appendChild(studentElement);
    }
}

// Mostrar estudiantes al cargar la página
displayStudents();
