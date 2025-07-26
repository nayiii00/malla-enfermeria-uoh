document.addEventListener('DOMContentLoaded', () => {
    // Definición de los datos de la malla curricular
    // Extraído del PDF "Perrequisitos_2025_docx_2_ (1).pdf"
    const curriculumData = [
        // Semestre 1
        { id: 'FG101', name: 'Fundamentos de Enfermería', semester: 1, credits: 7, prerequisites: [] },
        { id: 'CB101', name: 'Matemáticas y Bioestadística', semester: 1, credits: 6, prerequisites: [] },
        { id: 'HU101', name: 'Ética y Bioética', semester: 1, credits: 5, prerequisites: [] },
        { id: 'CB102', name: 'Química y Bioquímica', semester: 1, credits: 6, prerequisites: [] },
        { id: 'HU102', name: 'Sociedad y Salud I', semester: 1, credits: 3, prerequisites: [] },
        { id: 'SI101', name: 'Alfabetización Académica', semester: 1, credits: 3, prerequisites: [] },

        // Semestre 2
        { id: 'FP201', name: 'Gestión del Cuidado I', semester: 2, credits: 7, prerequisites: ['FG101'] },
        { id: 'HU201', name: 'Sociedad y Salud II', semester: 2, credits: 3, prerequisites: ['HU102'] },
        { id: 'CB201', name: 'Histología y Embriología', semester: 2, credits: 5, prerequisites: [] },
        { id: 'CB202', name: 'Anatomía', semester: 2, credits: 6, prerequisites: [] },
        { id: 'CB203', name: 'Biología y Genética', semester: 2, credits: 6, prerequisites: ['CB101', 'CB102'] },
        { id: 'SI201', name: 'CFG Electivo', semester: 2, credits: 3, prerequisites: [] },

        // Semestre 3
        { id: 'FP301', name: 'Gestión del Cuidado II', semester: 3, credits: 7, prerequisites: ['FP201', 'CB203', 'CB202'] },
        { id: 'FP302', name: 'Educación para la Salud', semester: 3, credits: 3, prerequisites: [] },
        { id: 'HU301', name: 'Sociedad y Salud III', semester: 3, credits: 3, prerequisites: ['HU201'] },
        { id: 'CB301', name: 'Psicología General y Evolutiva', semester: 3, credits: 3, prerequisites: ['HU201', 'FP201'] },
        { id: 'CB302', name: 'Salud Pública', semester: 3, credits: 4, prerequisites: ['CB101', 'HU201'] },
        { id: 'CB303', name: 'Biofísica y Fisiología', semester: 3, credits: 7, prerequisites: ['CB203', 'CB202', 'CB201'] },
        { id: 'SI301', name: 'Inglés I / CFG', semester: 3, credits: 3, prerequisites: [] },

        // Semestre 4
        { id: 'FP401', name: 'Enfermería en Salud Mental', semester: 4, credits: 8, prerequisites: ['CB303', 'FP301', 'FP302', 'CB301', 'HU301'] },
        { id: 'CB401', name: 'Nutrición', semester: 4, credits: 3, prerequisites: ['CB203', 'CB303'] },
        { id: 'CB402', name: 'Agentes Vivos de Enfermedad', semester: 4, credits: 4, prerequisites: ['CB203'] },
        { id: 'CB403', name: 'Fisiopatología', semester: 4, credits: 5, prerequisites: ['CB303'] },
        { id: 'CB404', name: 'Farmacología', semester: 4, credits: 7, prerequisites: ['CB303'] },
        { id: 'SI401', name: 'Inglés II / CFG', semester: 4, credits: 3, prerequisites: ['SI301'] },

        // Semestre 5
        { id: 'FP501', name: 'Enfermería en Niños, Niñas y Adolescentes', semester: 5, credits: 16, prerequisites: ['FP401', 'CB404', 'CB403', 'CB401'] },
        { id: 'FP502', name: 'Salud Escolar', semester: 5, credits: 4, prerequisites: ['FP401', 'CB401'] },
        { id: 'CB501', name: 'Salud Pública en Enfermería', semester: 5, credits: 4, prerequisites: ['CB302'] },
        { id: 'FP503', name: 'Gestión en Salud I', semester: 5, credits: 3, prerequisites: [] },
        { id: 'SI501', name: 'Inglés III / CFG', semester: 5, credits: 3, prerequisites: ['SI401'] },
        
        // Semestre 6
        { id: 'FP601', name: 'Enfermería en Adulto y Adulto Mayor I', semester: 6, credits: 16, prerequisites: ['FP501', 'FP502'] },
        { id: 'HU601', name: 'Psicología y Salud Comunitaria', semester: 6, credits: 4, prerequisites: ['CB301', 'CB501'] },
        { id: 'FP602', name: 'Gestión en Salud II', semester: 6, credits: 3, prerequisites: ['FP503'] },
        { id: 'CB601', name: 'Investigación en Salud', semester: 6, credits: 4, prerequisites: ['CB101', 'HU101'] },
        { id: 'SI601', name: 'Inglés IV', semester: 6, credits: 3, prerequisites: ['SI501'] },

        // Semestre 7
        { id: 'FP701', name: 'Enfermería en Adulto y Adulto Mayor II', semester: 7, credits: 16, prerequisites: ['FP601'] },
        { id: 'FP702', name: 'Enfermería Ocupacional', semester: 7, credits: 3, prerequisites: ['HU601'] },
        { id: 'FP703', name: 'Gestión en Salud III', semester: 7, credits: 4, prerequisites: ['FP602'] },
        { id: 'CB701', name: 'Seminario de Investigación I', semester: 7, credits: 4, prerequisites: ['CB601'] },
        { id: 'SI701', name: 'Inglés V', semester: 7, credits: 3, prerequisites: ['SI601'] },

        // Semestre 8
        { id: 'FP801', name: 'Cuidados Complejos en Enfermería', semester: 8, credits: 14, prerequisites: ['FP701'] },
        { id: 'FP802', name: 'Modelos Emergentes del Cuidado', semester: 8, credits: 9, prerequisites: ['FP701'] },
        { id: 'CB801', name: 'Seminario de Investigación II', semester: 8, credits: 4, prerequisites: ['CB701'] },
        { id: 'SI801', name: 'Inglés VI', semester: 8, credits: 3, prerequisites: ['SI701'] },

        // Semestre 9
        { id: 'FP901', name: 'Internado I', semester: 9, credits: 23, prerequisites: ['FP801', 'FP802', 'CB801', 'SI801'] },
        { id: 'FP902', name: 'Enfermería en Urgencia', semester: 9, credits: 11, prerequisites: ['FP801', 'FP802', 'CB801', 'SI801'] },

        // Semestre 10
        { id: 'FP1001', name: 'Internado II', semester: 10, credits: 23, prerequisites: ['FP901', 'FP902'] },
        { id: 'FP1002', name: 'Integración Profesional', semester: 10, credits: 3, prerequisites: ['FP901', 'FP902'] },
    ];

    const grid = document.getElementById('curriculum-grid');
    const creditsApprovedEl = document.getElementById('credits-approved');
    const creditsTotalEl = document.getElementById('credits-total');

    let completedCourses = new Set(JSON.parse(localStorage.getItem('completedCourses')) || []);

    function getCourseById(id) {
        return curriculumData.find(course => course.id === id);
    }

    function renderGrid() {
        grid.innerHTML = '';
        const totalSemesters = Math.max(...curriculumData.map(c => c.semester));
        const totalYears = Math.ceil(totalSemesters / 2);
        const totalCredits = curriculumData.reduce((sum, course) => sum + course.credits, 0);

        for (let year = 1; year <= totalYears; year++) {
            const yearContainer = document.createElement('div');
            yearContainer.className = 'year-container';

            const yearTitle = document.createElement('h2');
            yearTitle.className = 'year-title';
            yearTitle.textContent = `Año ${year}`;
            yearContainer.appendChild(yearTitle);

            const semestersWrapper = document.createElement('div');
            semestersWrapper.className = 'semesters-wrapper';

            const semesterNumbers = [year * 2 - 1, year * 2];
            
            semesterNumbers.forEach(semesterNum => {
                if (semesterNum > totalSemesters) return;

                const semesterColumn = document.createElement('div');
                semesterColumn.className = 'semester-column';
                
                const semesterTitle = document.createElement('h3');
                semesterTitle.className = 'semester-title';
                semesterTitle.textContent = `Semestre ${semesterNum}`;
                semesterColumn.appendChild(semesterTitle);

                const semesterCourses = curriculumData.filter(course => course.semester === semesterNum);
                semesterCourses.forEach(course => {
                    const courseEl = createCourseElement(course);
                    semesterColumn.appendChild(courseEl);
                });
                semestersWrapper.appendChild(semesterColumn);
            });

            yearContainer.appendChild(semestersWrapper);
            grid.appendChild(yearContainer);
        }
        
        creditsTotalEl.textContent = totalCredits;
        updateAllCourseStates();
        updateApprovedCredits();
    }


    function createCourseElement(course) {
        const courseEl = document.createElement('div');
        courseEl.id = course.id;
        courseEl.className = 'course tooltip';
        courseEl.dataset.id = course.id;

        const title = document.createElement('div');
        title.className = 'course-title';
        title.textContent = course.name;
        courseEl.appendChild(title);
        
        const credits = document.createElement('div');
        credits.className = 'course-credits';
        credits.textContent = `${course.credits} créditos`;
        courseEl.appendChild(credits);

        if (course.prerequisites.length > 0) {
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltiptext';
            const prereqNames = course.prerequisites.map(id => getCourseById(id)?.name || 'N/A').join(', ');
            tooltipText.textContent = `Prerreq: ${prereqNames}`;
            courseEl.appendChild(tooltipText);
        }

        courseEl.addEventListener('click', () => toggleCourse(course.id));
        return courseEl;
    }

    function arePrerequisitesMet(courseId) {
        const course = getCourseById(courseId);
        if (!course || course.prerequisites.length === 0) {
            return true;
        }
        if (course.prerequisites.includes('Todo hasta 8 semestre')) {
             const allPreviousSemestersCompleted = curriculumData
                .filter(c => c.semester <= 8)
                .every(c => completedCourses.has(c.id));
            return allPreviousSemestersCompleted;
        }
        
        return course.prerequisites.every(prereqId => completedCourses.has(prereqId));
    }

    function updateCourseState(courseId) {
        const courseEl = document.getElementById(courseId);
        if (!courseEl) return;

        courseEl.classList.remove('locked', 'available', 'completed');

        if (completedCourses.has(courseId)) {
            courseEl.classList.add('completed');
        } else if (arePrerequisitesMet(courseId)) {
            courseEl.classList.add('available');
        } else {
            courseEl.classList.add('locked');
        }
    }
    
    function updateAllCourseStates() {
        curriculumData.forEach(course => updateCourseState(course.id));
    }

    function toggleCourse(courseId) {
        const course = getCourseById(courseId);
        if (!course) return;

        if (completedCourses.has(courseId)) {
            const coursesToUncomplete = new Set([courseId]);
            let changed = true;
            while(changed) {
                changed = false;
                curriculumData.forEach(c => {
                    if(completedCourses.has(c.id) && !coursesToUncomplete.has(c.id)) {
                       if(c.prerequisites.some(p => coursesToUncomplete.has(p))) {
                           coursesToUncomplete.add(c.id);
                           changed = true;
                       }
                    }
                });
            }
            coursesToUncomplete.forEach(id => completedCourses.delete(id));

        } else if (arePrerequisitesMet(courseId)) {
            completedCourses.add(courseId);
        } else {
            console.log(`Prerrequisitos para ${course.name} no cumplidos.`);
            return;
        }

        localStorage.setItem('completedCourses', JSON.stringify(Array.from(completedCourses)));
        updateAllCourseStates();
        updateApprovedCredits();
    }
    
    function updateApprovedCredits() {
        const approvedCredits = curriculumData
            .filter(course => completedCourses.has(course.id))
            .reduce((sum, course) => sum + course.credits, 0);
        creditsApprovedEl.textContent = approvedCredits;
    }

    // Initial render
    renderGrid();
});
