// PANEL DE ADMINISTRACIÓN - JAVASCRIPT

// Contraseña (cámbiala por la que quieras)
const ADMIN_PASSWORD = 'alpes2026';

let currentEditingDay = null;

// Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('passwordInput').value;
    
    if (password === ADMIN_PASSWORD) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        initAdmin();
    } else {
        document.getElementById('errorMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('errorMessage').style.display = 'none';
        }, 3000);
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('passwordInput').value = '';
});

// Inicializar panel admin
function initAdmin() {
    renderDayButtons();
    if (itineraryData.days.length > 0) {
        editDay(1);
    }
}

// Renderizar botones de días
function renderDayButtons() {
    const container = document.getElementById('dayButtons');
    container.innerHTML = '';
    
    itineraryData.days.forEach(day => {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        btn.textContent = `Día ${day.id}`;
        btn.onclick = () => editDay(day.id);
        container.appendChild(btn);
    });
}

// Editar un día específico
function editDay(dayId) {
    currentEditingDay = dayId;
    const day = itineraryData.days.find(d => d.id === dayId);
    
    // Actualizar botones activos
    document.querySelectorAll('.day-btn').forEach((btn, index) => {
        btn.classList.toggle('active', index === dayId - 1);
    });
    
    const editor = document.getElementById('dayEditor');
    editor.innerHTML = `
        <!-- Información Básica -->
        <div class="editor-card">
            <h2 class="editor-section-title">📋 Información Básica</h2>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Día</label>
                    <input type="text" class="form-input" id="dayNumber" value="${day.dayNumber}">
                </div>
                <div class="form-group">
                    <label class="form-label">Fecha</label>
                    <input type="text" class="form-input" id="date" value="${day.date}">
                </div>
                <div class="form-group">
                    <label class="form-label">País</label>
                    <select class="form-input" id="country">
                        <option value="switzerland" ${day.country === 'switzerland' ? 'selected' : ''}>Suiza</option>
                        <option value="germany" ${day.country === 'germany' ? 'selected' : ''}>Alemania</option>
                        <option value="austria" ${day.country === 'austria' ? 'selected' : ''}>Austria</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Título del día</label>
                    <input type="text" class="form-input" id="title" value="${day.title}">
                </div>
                <div class="form-group">
                    <label class="form-label">Ubicación</label>
                    <input type="text" class="form-input" id="location" value="${day.location}">
                </div>
            </div>
        </div>

        <!-- Transporte -->
        <div class="editor-card">
            <h2 class="editor-section-title">🚗 Transporte</h2>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Tipo</label>
                    <select class="form-input" id="transportType">
                        <option value="flight" ${day.transport.type === 'flight' ? 'selected' : ''}>Vuelo</option>
                        <option value="train" ${day.transport.type === 'train' ? 'selected' : ''}>Tren</option>
                        <option value="stp" ${day.transport.type === 'stp' ? 'selected' : ''}>Swiss Travel Pass</option>
                        <option value="car" ${day.transport.type === 'car' ? 'selected' : ''}>Carro Rentado</option>
                        <option value="mixed" ${day.transport.type === 'mixed' ? 'selected' : ''}>Mixto</option>
                        <option value="public" ${day.transport.type === 'public' ? 'selected' : ''}>Público</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Icono</label>
                    <input type="text" class="form-input" id="transportIcon" value="${day.transport.icon}">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Detalles del transporte</label>
                <textarea class="form-input" id="transportDetails">${day.transport.details}</textarea>
            </div>
        </div>

        <!-- Alojamiento -->
        <div class="editor-card">
            <h2 class="editor-section-title">🏨 Alojamiento</h2>
            ${day.accommodation ? `
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-input" id="accName" value="${day.accommodation.name}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Plataforma</label>
                        <input type="text" class="form-input" id="accPlatform" value="${day.accommodation.platform || ''}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Ubicación</label>
                        <input type="text" class="form-input" id="accLocation" value="${day.accommodation.location}">
                    </div>
                </div>
            ` : '<p style="color: #64748b;">No hay alojamiento configurado para este día</p>'}
        </div>

        <!-- Lugares a Visitar -->
        <div class="editor-card">
            <h2 class="editor-section-title">📍 Lugares a Visitar</h2>
            <div id="placesList"></div>
            <button class="btn btn-add" onclick="addPlace()">+ Agregar Lugar</button>
        </div>

        <!-- Notas -->
        <div class="editor-card">
            <h2 class="editor-section-title">⚠️ Notas Importantes</h2>
            <div id="notesList"></div>
            <div class="form-group" style="margin-top: 1rem;">
                <input type="text" class="form-input" id="newNoteInput" placeholder="Escribe una nueva nota...">
                <button class="btn btn-add" onclick="addNote()">+ Agregar Nota</button>
            </div>
        </div>

        <!-- Guardar Cambios -->
        <button class="btn btn-primary" onclick="saveDay()" style="margin-top: 2rem;">
            💾 Guardar Cambios del Día ${day.id}
        </button>
    `;
    
    renderPlaces();
    renderNotes();
}

// Renderizar lugares
function renderPlaces() {
    const day = itineraryData.days.find(d => d.id === currentEditingDay);
    const container = document.getElementById('placesList');
    container.innerHTML = '';
    
    if (!day.places || day.places.length === 0) {
        container.innerHTML = '<p style="color: #64748b;">No hay lugares agregados</p>';
        return;
    }
    
    day.places.forEach((place, index) => {
        const placeDiv = document.createElement('div');
        placeDiv.className = 'place-item';
        placeDiv.innerHTML = `
            <div class="place-item-header">
                <span class="place-item-title">${place.name}</span>
                <button class="btn btn-danger" onclick="removePlace(${index})">🗑️ Eliminar</button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Nombre</label>
                    <input type="text" class="form-input" value="${place.name}" onchange="updatePlace(${index}, 'name', this.value)">
                </div>
                <div class="form-group">
                    <label class="form-label">Tipo</label>
                    <select class="form-input" onchange="updatePlace(${index}, 'type', this.value)">
                        <option value="nature" ${place.type === 'nature' ? 'selected' : ''}>Naturaleza</option>
                        <option value="city" ${place.type === 'city' ? 'selected' : ''}>Ciudad</option>
                        <option value="village" ${place.type === 'village' ? 'selected' : ''}>Pueblo</option>
                        <option value="mountain" ${place.type === 'mountain' ? 'selected' : ''}>Montaña</option>
                        <option value="castle" ${place.type === 'castle' ? 'selected' : ''}>Castillo</option>
                        <option value="church" ${place.type === 'church' ? 'selected' : ''}>Iglesia</option>
                        <option value="viewpoint" ${place.type === 'viewpoint' ? 'selected' : ''}>Mirador</option>
                        <option value="logistics" ${place.type === 'logistics' ? 'selected' : ''}>Logística</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Hora</label>
                    <input type="text" class="form-input" value="${place.time || ''}" onchange="updatePlace(${index}, 'time', this.value)">
                </div>
                <div class="form-group">
                    <label class="form-label">Duración</label>
                    <input type="text" class="form-input" value="${place.duration || ''}" onchange="updatePlace(${index}, 'duration', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Descripción</label>
                <textarea class="form-input" onchange="updatePlace(${index}, 'description', this.value)">${place.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Google Maps URL (opcional)</label>
                <input type="text" class="form-input" value="${place.maps || ''}" onchange="updatePlace(${index}, 'maps', this.value)" placeholder="https://www.google.com/maps/...">
            </div>
            <div class="checkbox-group">
                <input type="checkbox" ${place.optional ? 'checked' : ''} onchange="updatePlace(${index}, 'optional', this.checked)">
                <label class="form-label" style="margin: 0;">Lugar opcional</label>
            </div>
        `;
        container.appendChild(placeDiv);
    });
}

// Renderizar notas
function renderNotes() {
    const day = itineraryData.days.find(d => d.id === currentEditingDay);
    const container = document.getElementById('notesList');
    container.innerHTML = '';
    
    if (!day.notes || day.notes.length === 0) {
        container.innerHTML = '<p style="color: #64748b;">No hay notas agregadas</p>';
        return;
    }
    
    day.notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note-item';
        noteDiv.innerHTML = `
            <div class="note-text">${note}</div>
            <button class="btn btn-danger" style="width: auto;" onclick="removeNote(${index})">🗑️</button>
        `;
        container.appendChild(noteDiv);
    });
}

// Agregar lugar
function addPlace() {
    const day = itineraryData.days.find(d => d.id === currentEditingDay);
    if (!day.places) day.places = [];
    
    day.places.push({
        name: 'Nuevo Lugar',
        type: 'city',
        time: '',
        duration: '',
        description: '',
        maps: '',
        optional: false
    });
    
    renderPlaces();
}

// Actualizar lugar
function updatePlace(index, field, value) {
    const day = itineraryData.days.find(d => d.id === currentEditingDay);
    day.places[index][field] = value;
}

// Eliminar lugar
function removePlace(index) {
    if (confirm('¿Eliminar este lugar?')) {
        const day = itineraryData.days.find(d => d.id === currentEditingDay);
        day.places.splice(index, 1);
        renderPlaces();
    }
}

// Agregar nota
function addNote() {
    const input = document.getElementById('newNoteInput');
    const text = input.value.trim();
    
    if (!text) return;
    
    const day = itineraryData.days.find(d => d.id === currentEditingDay);
    if (!day.notes) day.notes = [];
    
    day.notes.push(text);
    input.value = '';
    renderNotes();
}

// Eliminar nota
function removeNote(index) {
    if (confirm('¿Eliminar esta nota?')) {
        const day = itineraryData.days.find(d => d.id === currentEditingDay);
        day.notes.splice(index, 1);
        renderNotes();
    }
}

// Guardar cambios del día
function saveDay() {
    const day = itineraryData.days.find(d => d.id === currentEditingDay);
    
    // Información básica
    day.dayNumber = document.getElementById('dayNumber').value;
    day.date = document.getElementById('date').value;
    day.country = document.getElementById('country').value;
    day.title = document.getElementById('title').value;
    day.location = document.getElementById('location').value;
    
    // Transporte
    day.transport.type = document.getElementById('transportType').value;
    day.transport.icon = document.getElementById('transportIcon').value;
    day.transport.details = document.getElementById('transportDetails').value;
    
    // Alojamiento
    if (day.accommodation) {
        const accName = document.getElementById('accName');
        const accPlatform = document.getElementById('accPlatform');
        const accLocation = document.getElementById('accLocation');
        
        if (accName) day.accommodation.name = accName.value;
        if (accPlatform) day.accommodation.platform = accPlatform.value;
        if (accLocation) day.accommodation.location = accLocation.value;
    }
    
    // Mostrar mensaje de éxito
    showSuccessToast();
}

// Mostrar toast de éxito
function showSuccessToast() {
    const toast = document.getElementById('successToast');
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Descargar data.js
document.getElementById('downloadBtn').addEventListener('click', () => {
    const dataString = `// ARCHIVO DE DATOS DEL ITINERARIO
// Para editar el itinerario, simplemente modifica este archivo JSON

const itineraryData = ${JSON.stringify(itineraryData, null, 4)};`;
    
    const blob = new Blob([dataString], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showSuccessToast();
});
