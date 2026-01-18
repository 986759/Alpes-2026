// LÓGICA DE LA APLICACIÓN// Estado actual
let currentDay = 1;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderDay(currentDay);
    
    // Auto-scroll timeline al día actual
    scrollToDay(currentDay);
    
    // Configurar navegación del timeline
    setupTimelineNavigation();
});

// Renderizar timeline
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    
    itineraryData.days.forEach(day => {
        const marker = document.createElement('div');
        marker.className = `day-marker ${day.country}`;
        marker.setAttribute('data-day', day.id);
        
        if (day.id === currentDay) {
            marker.classList.add('active');
        }
        
        marker.innerHTML = `
            <div class="day-number">${day.id}</div>
            <div class="day-date">${day.date}</div>
            <div class="day-icon">${day.transport.icon}</div>
        `;
        
        marker.addEventListener('click', () => {
            changeDay(day.id);
        });
        
        timeline.appendChild(marker);
    });
}

// Cambiar de día
function changeDay(dayId) {
    if (dayId === currentDay) return;
    
    // Actualizar estado
    currentDay = dayId;
    
    // Actualizar timeline
    document.querySelectorAll('.day-marker').forEach(marker => {
        marker.classList.remove('active');
        if (parseInt(marker.getAttribute('data-day')) === dayId) {
            marker.classList.add('active');
        }
    });
    
    // Renderizar nuevo día
    renderDay(dayId);
    
    // Scroll suave al inicio del contenido
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll automático al día en el timeline
function scrollToDay(dayId) {
    const timeline = document.getElementById('timeline');
    const marker = document.querySelector(`.day-marker[data-day="${dayId}"]`);
    
    if (marker && timeline) {
        const markerLeft = marker.offsetLeft;
        const markerWidth = marker.offsetWidth;
        const timelineWidth = timeline.offsetWidth;
        
        timeline.scrollTo({
            left: markerLeft - (timelineWidth / 2) + (markerWidth / 2),
            behavior: 'smooth'
        });
    }
}

// Renderizar contenido del día
function renderDay(dayId) {
    const day = itineraryData.days.find(d => d.id === dayId);
    if (!day) return;
    
    const mainContent = document.getElementById('mainContent');
    
    // Limpiar contenido anterior
    mainContent.innerHTML = '';
    
    // Crear contenedor del día
    const dayContainer = document.createElement('div');
    dayContainer.className = 'day-content active';
    
    // Header del día
    const countryLabel = getCountryLabel(day.country);
    dayContainer.innerHTML = `
        <div class="day-header">
            <h2 class="day-title">
                ${day.title}
                <span class="country-tag ${day.country}">${countryLabel}</span>
            </h2>
            <div class="day-location">
                <span>📍</span>
                <span>${day.location}</span>
            </div>
        </div>
    `;
    
    // 1. PRIMERO: Lugares a visitar
    if (day.places && day.places.length > 0) {
        const placesSection = createPlacesSection(day.places);
        dayContainer.appendChild(placesSection);
    }
    
    // 2. SEGUNDO: Notas importantes
    if (day.notes && day.notes.length > 0) {
        const notesBox = createNotesBox(day.notes);
        dayContainer.appendChild(notesBox);
    }
    
    // 3. TERCERO: Grid de información (Transporte y Alojamiento)
    const infoGrid = document.createElement('div');
    infoGrid.className = 'info-grid';
    
    // Card de transporte
    const transportCard = createTransportCard(day.transport);
    infoGrid.appendChild(transportCard);
    
    // Card de alojamiento (si existe)
    if (day.accommodation) {
        const accommodationCard = createAccommodationCard(day.accommodation);
        infoGrid.appendChild(accommodationCard);
    }
    
    dayContainer.appendChild(infoGrid);
    
    // 4. CUARTO: Ruta de transporte detallada (si tiene detalles de rutas en carro)
    if (day.transport.routes || day.transport.totalKm) {
        const transportRoute = createTransportRoute(day.transport);
        dayContainer.appendChild(transportRoute);
    }
    
    mainContent.appendChild(dayContainer);
}

// Crear card de transporte
function createTransportCard(transport) {
    const card = document.createElement('div');
    card.className = 'info-card transport';
    
    const typeLabels = {
        flight: 'Vuelo',
        train: 'Tren',
        stp: 'Swiss Travel Pass',
        car: 'Carro Rentado',
        mixed: 'Transporte Mixto',
        public: 'Transporte Público'
    };
    
    let details = transport.details;
    if (transport.note) {
        details += `<br><small style="color: #f59e0b;">⚠️ ${transport.note}</small>`;
    }
    if (transport.alternative) {
        details += `<br><small style="color: var(--text-secondary);">💡 ${transport.alternative}</small>`;
    }
    if (transport.pickup) {
        details += `<br><strong>Recogida:</strong> ${transport.pickup}`;
    }
    if (transport.carReturn) {
        details += `<br><strong style="color: #dc2626;">⚠️ ${transport.carReturn}</strong>`;
    }
    
    card.innerHTML = `
        <div class="info-card-header">
            <div class="card-icon">${transport.icon}</div>
            <h3 class="card-title">${typeLabels[transport.type] || 'Transporte'}</h3>
        </div>
        <div class="info-card-body">
            <div class="card-content">
                ${details}
            </div>
        </div>
    `;
    
    return card;
}

// Crear card de alojamiento
function createAccommodationCard(accommodation) {
    const card = document.createElement('div');
    card.className = 'info-card accommodation';
    
    card.innerHTML = `
        <div class="info-card-header">
            <div class="card-icon">🏨</div>
            <h3 class="card-title">Alojamiento</h3>
        </div>
        <div class="info-card-body">
            <div class="card-content">
                <strong>${accommodation.name}</strong><br>
                ${accommodation.platform ? `<em>${accommodation.platform}</em><br>` : ''}
                📍 ${accommodation.location}
            </div>
        </div>
    `;
    
    return card;
}

// Crear ruta de transporte detallada
function createTransportRoute(transport) {
    if (!transport.routes && !transport.totalKm) return null;
    
    const routeDiv = document.createElement('div');
    routeDiv.className = 'transport-route';
    
    let routeHTML = '<h3 style="margin-bottom: 1rem; color: var(--alpine-dark);">🗺️ Ruta del día</h3>';
    
    if (transport.routes) {
        routeHTML += '<div class="route-steps">';
        
        transport.routes.forEach((route, index) => {
            if (index > 0) {
                routeHTML += '<span class="route-arrow">→</span>';
            }
            routeHTML += `<div class="route-point">${route}</div>`;
        });
        
        routeHTML += '</div>';
    }
    
    if (transport.totalKm) {
        routeHTML += `
            <div class="route-details">
                <div><strong>📏 Distancia total:</strong> ${transport.totalKm}</div>
            </div>
        `;
    }
    
    routeDiv.innerHTML = routeHTML;
    return routeDiv;
}

// Crear sección de lugares
function createPlacesSection(places) {
    const section = document.createElement('div');
    section.className = 'places-section';
    
    section.innerHTML = '<h2 class="section-title">Lugares a visitar</h2>';
    
    places.forEach(place => {
        const placeCard = createPlaceCard(place);
        section.appendChild(placeCard);
    });
    
    return section;
}

// Crear card de lugar
function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card';
    card.setAttribute('data-type', place.type || 'default');
    
    const typeIcons = {
        nature: '🏞️',
        city: '🏙️',
        village: '🏘️',
        mountain: '⛰️',
        castle: '🏰',
        church: '⛪',
        viewpoint: '👁️',
        logistics: '📋',
        flexible: '🔄'
    };
    
    const icon = typeIcons[place.type] || '📍';
    
    let metaHTML = '';
    if (place.time) {
        metaHTML += `<div class="meta-item">🕐 ${place.time}</div>`;
    }
    if (place.duration) {
        metaHTML += `<div class="meta-item">⏱️ ${place.duration}</div>`;
    }
    if (place.distance) {
        metaHTML += `<div class="meta-item">📏 ${place.distance}</div>`;
    }
    if (place.travel) {
        metaHTML += `<div class="meta-item">🚗 ${place.travel}</div>`;
    }
    if (place.arrival) {
        metaHTML += `<div class="meta-item">🏁 ${place.arrival}</div>`;
    }
    
    const optionalBadge = place.optional ? '<span class="optional-badge">Opcional</span>' : '';
    
    let bodyHTML = '';
    if (place.description) {
        bodyHTML += `<p class="place-description">${place.description}</p>`;
    }
    if (place.note) {
        bodyHTML += `<p class="place-description" style="color: var(--alpine-blue); font-style: italic; font-weight: 500;">💡 ${place.note}</p>`;
    }
    if (place.location) {
        bodyHTML += `<p class="place-description" style="font-size: 0.95rem; color: var(--text-secondary);">📍 ${place.location}</p>`;
    }
    
    // Agregar botón de Google Maps si existe coordenada o nombre del lugar
    let actionsHTML = '';
    if (place.maps || place.name) {
        actionsHTML += '<div class="place-actions">';
        
        if (place.maps) {
            // Si tiene coordenadas específicas
            actionsHTML += `<a href="${place.maps}" target="_blank" rel="noopener noreferrer" class="btn btn-maps">📍 Ver en Google Maps</a>`;
        } else {
            // Si no tiene coordenadas, hacer búsqueda por nombre
            const searchQuery = encodeURIComponent(place.name);
            actionsHTML += `<a href="https://www.google.com/maps/search/?api=1&query=${searchQuery}" target="_blank" rel="noopener noreferrer" class="btn btn-maps">🔍 Buscar en Maps</a>`;
        }
        
        actionsHTML += '</div>';
    }
    
    card.innerHTML = `
        <div class="place-header">
            <h3 class="place-name">${icon} ${place.name} ${optionalBadge}</h3>
            <div class="place-meta">
                ${metaHTML}
            </div>
        </div>
        ${bodyHTML || actionsHTML ? `<div class="place-body">${bodyHTML}${actionsHTML}</div>` : ''}
    `;
    
    return card;
}

// Crear caja de notas
function createNotesBox(notes) {
    const notesDiv = document.createElement('div');
    notesDiv.className = 'notes-box';
    
    let notesHTML = `
        <div class="notes-title">
            ⚠️ Notas importantes
        </div>
        <ul class="notes-list">
    `;
    
    notes.forEach(note => {
        notesHTML += `<li>${note}</li>`;
    });
    
    notesHTML += '</ul>';
    notesDiv.innerHTML = notesHTML;
    
    return notesDiv;
}

// Obtener etiqueta del país
function getCountryLabel(country) {
    const labels = {
        switzerland: 'Suiza',
        germany: 'Alemania',
        austria: 'Austria'
    };
    return labels[country] || country;
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentDay > 1) {
        changeDay(currentDay - 1);
        scrollToDay(currentDay);
    } else if (e.key === 'ArrowRight' && currentDay < itineraryData.days.length) {
        changeDay(currentDay + 1);
        scrollToDay(currentDay);
    }
});

// Configurar navegación del timeline con flechas
function setupTimelineNavigation() {
    const timeline = document.getElementById('timeline');
    const leftBtn = document.getElementById('timelineNavLeft');
    const rightBtn = document.getElementById('timelineNavRight');
    
    if (!timeline || !leftBtn || !rightBtn) return;
    
    // Función para actualizar visibilidad de botones
    function updateNavButtons() {
        const scrollLeft = timeline.scrollLeft;
        const maxScroll = timeline.scrollWidth - timeline.clientWidth;
        
        // Ocultar botón izquierdo si está al inicio
        if (scrollLeft <= 10) {
            leftBtn.classList.add('hidden');
        } else {
            leftBtn.classList.remove('hidden');
        }
        
        // Ocultar botón derecho si está al final
        if (scrollLeft >= maxScroll - 10) {
            rightBtn.classList.add('hidden');
        } else {
            rightBtn.classList.remove('hidden');
        }
    }
    
    // Scroll hacia la izquierda
    leftBtn.addEventListener('click', () => {
        timeline.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    
    // Scroll hacia la derecha
    rightBtn.addEventListener('click', () => {
        timeline.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
    
    // Actualizar botones al hacer scroll
    timeline.addEventListener('scroll', updateNavButtons);
    
    // Actualizar botones al cargar
    updateNavButtons();
    
    // Actualizar botones al redimensionar ventana
    window.addEventListener('resize', updateNavButtons);
}