# 🏔️ Itinerario Alpes 2026

Página web interactiva para el viaje a Suiza, Alemania y Austria - Octubre-Noviembre 2026

## 📋 Contenido

- **index.html** - Página principal con el diseño
- **data.js** - Archivo de datos del itinerario (EDITAR AQUÍ)
- **app.js** - Lógica de la aplicación (no editar)
- **README.md** - Este archivo

## ✏️ Cómo editar el itinerario

### Edición simple (solo tú)

1. Abre el archivo `data.js`
2. Busca el día que quieres editar en el array `days`
3. Modifica los campos que necesites:
   - `title`: Título del día
   - `location`: Ubicación principal
   - `places`: Array de lugares a visitar
   - `notes`: Notas importantes
   - `accommodation`: Información de hospedaje
   - `transport`: Detalles de transporte

4. Guarda el archivo
5. Recarga la página en el navegador

### Cómo agregar Google Maps a un lugar:

Para cada lugar en el array `places`, puedes agregar el campo `maps` con un link de Google Maps:

```javascript
{
    name: "Castillo Neuschwanstein",
    time: "Mañana",
    duration: "2-3 horas",
    description: "Castillo de cuento de hadas de Luis II de Baviera",
    type: "castle",
    maps: "https://www.google.com/maps/place/Schloss+Neuschwanstein" // ← Agregar esta línea
}
```

**Cómo obtener el link de Google Maps:**
1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca el lugar que quieres agregar
3. Click en "Compartir" → "Copiar enlace"
4. Pega el enlace en el campo `maps`

**Nota:** Si no agregas el campo `maps`, el botón mostrará "Buscar en Maps" y buscará automáticamente por el nombre del lugar.

### Ejemplo de edición:

```javascript
{
    id: 3,
    dayNumber: "Día 3",
    date: "Dom 18 Oct",
    country: "switzerland",
    title: "Cascadas y Lucerna",
    location: "Lucerna",
    // ... resto de campos
    places: [
        {
            name: "Cascada Stäubifall",
            time: "Salida 5:35 AM",
            duration: "Vuelta a Lucerna 11:38 AM",
            description: "Hermosa cascada en los Alpes suizos",
            type: "nature"
        }
        // Agregar más lugares aquí
    ]
}
```

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Click en el botón "+" arriba a la derecha → "New repository"
3. Nombre del repositorio: `alpes-2026` (o el que prefieras)
4. Marca como "Public"
5. **NO** inicialices con README
6. Click "Create repository"

### Paso 2: Subir archivos al repositorio

**Opción A - Desde la interfaz web:**

1. En tu nuevo repositorio vacío, click "uploading an existing file"
2. Arrastra los archivos:
   - `index.html`
   - `data.js`
   - `app.js`
   - `README.md`
3. Escribe un mensaje de commit: "Initial commit - Itinerario Alpes 2026"
4. Click "Commit changes"

**Opción B - Desde la terminal (si tienes git instalado):**

```bash
# En la carpeta donde están los archivos
git init
git add .
git commit -m "Initial commit - Itinerario Alpes 2026"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/alpes-2026.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (Configuración)
2. En el menú lateral, busca **Pages** (en la sección "Code and automation")
3. En "Source", selecciona **Deploy from a branch**
4. En "Branch", selecciona **main** y la carpeta **/ (root)**
5. Click **Save**
6. Espera 1-2 minutos

### Paso 4: Acceder a tu página

Tu página estará disponible en:
```
https://TU-USUARIO.github.io/alpes-2026/
```

Por ejemplo: `https://juanperez.github.io/alpes-2026/`

## 🔄 Actualizar el itinerario después del despliegue

1. Edita el archivo `data.js` en GitHub:
   - Ve a tu repositorio
   - Click en `data.js`
   - Click en el ícono de lápiz (Edit)
   - Haz tus cambios
   - Scroll abajo → "Commit changes"
   
2. Los cambios se reflejarán automáticamente en la página en 1-2 minutos

## 📱 Características

- ✅ **Timeline interactivo** con todos los días del viaje
- ✅ **Diseño moderno y profesional** con gradientes y animaciones suaves
- ✅ **Responsive** - funciona perfecto en móviles y tablets
- ✅ **Navegación por teclado** - usa flechas ← → para cambiar de día
- ✅ **Indicadores de país** - colores distintivos para Suiza, Alemania y Austria
- ✅ **Google Maps integrado** - botón directo a cada lugar
- ✅ **Información organizada** por:
  - Transporte del día con rutas detalladas
  - Alojamiento
  - Lugares a visitar con horarios y distancias
  - Notas importantes destacadas
- ✅ **Badges visuales** para lugares opcionales
- ✅ **Sombras y efectos hover** para mejor experiencia de usuario

## 🎨 Personalización del diseño

Si quieres cambiar colores, edita las variables CSS en `index.html`:

```css
:root {
    --alpine-dark: #1a2332;
    --alpine-blue: #2d5a7b;
    --alpine-light: #e8f1f5;
    /* ... más colores */
}
```

## 📞 Compartir con otros viajeros

Una vez desplegado en GitHub Pages, simplemente comparte el link:
```
https://TU-USUARIO.github.io/alpes-2026/
```

Los demás solo podrán **ver** la página, no editarla (solo tú puedes editar desde tu cuenta de GitHub).

## 💾 Uso offline

Para usar la página sin internet durante el viaje:

1. Abre la página en tu navegador
2. Menú → "Guardar página como..." → "Página web, completa"
3. Guárdala en tu dispositivo
4. Ábrela cuando quieras, incluso sin internet

## 🔧 Soporte

Si tienes problemas:
- Verifica que los archivos estén en la raíz del repositorio
- Revisa que GitHub Pages esté activado en Settings → Pages
- Espera 2-3 minutos después de hacer cambios
- Limpia la caché del navegador (Ctrl+Shift+R)

---

¡Disfruta tu viaje por los Alpes! 🏔️🇨🇭🇩🇪🇦🇹
