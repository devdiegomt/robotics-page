# 🤖 GLA Robotics Club — Landing Page

Página promocional del Club de Robótica del **Gimnasio Los Arrayanes Bilingüe**.

## 🚀 Stack

- **React 18** + Create React App
- **Framer Motion** — animaciones suaves
- **Lucide React** — íconos
- **CSS Variables** — sistema de diseño GLA (azul #0057A8 + naranja #F5A623)
- **Google Fonts**: Syne (display) + Space Grotesk (body) + JetBrains Mono (mono)

## 📂 Estructura

```
src/
├── components/
│   ├── Navbar.jsx          # Navbar sticky con scroll effect
│   ├── Hero.jsx            # Hero con robot animado + typewriter
│   ├── Benefits.jsx        # 6 tarjetas de beneficios STEM
│   ├── Achievements.jsx    # Timeline de logros y competencias
│   ├── Gallery.jsx         # Galería de proyectos con filtros
│   ├── Schedule.jsx        # Cronograma semanal + próximos eventos
│   ├── Testimonials.jsx    # Carrusel de testimonios de estudiantes
│   ├── Signup.jsx          # Formulario de inscripción
│   └── Footer.jsx          # Footer con links y contacto
├── App.jsx
├── index.js
└── index.css               # Variables CSS + animaciones globales
```

## ⚙️ Instalación local

```bash
cd gla-robotics
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy en Vercel

### Opción A — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Opción B — GitHub + Vercel (recomendado)
1. Sube el proyecto a un repositorio GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project**
3. Importa el repositorio
4. Framework: **Create React App** (lo detecta automático)
5. Click **Deploy** ✅

## 🎨 Personalización prioritaria

### 1. Reemplazar contenido de placeholder
Los archivos que DEBES editar con información real:

| Archivo | Qué cambiar |
|---|---|
| `Achievements.jsx` | Logros reales del club |
| `Gallery.jsx` | Proyectos reales + imágenes |
| `Schedule.jsx` | Horarios y fechas correctas |
| `Testimonials.jsx` | Testimonios reales de estudiantes |
| `Signup.jsx` | Conectar formulario a backend/email |

### 2. Agregar imágenes reales
```jsx
// En Gallery.jsx, reemplaza el emoji por:
<img src="/images/proyecto1.jpg" alt="Robot GLA" style={{ width: '100%', borderRadius: 12 }} />

// O usa Cloudinary para optimización:
<img src="https://res.cloudinary.com/TU_CLOUD/image/upload/proyecto1.jpg" />
```

### 3. Conectar el formulario de inscripción
Opciones recomendadas:
- **Formspree**: reemplaza el `setTimeout` con `fetch('https://formspree.io/f/TU_ID', {...})`
- **EmailJS**: envío directo a correo sin backend
- **Google Forms**: redirigir al link de un Google Form

```jsx
// Ejemplo con Formspree en Signup.jsx:
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const res = await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form, interests: selected }),
  });
  if (res.ok) setSubmitted(true);
  setLoading(false);
};
```

### 4. Agregar video en el Hero
```jsx
// En Hero.jsx, reemplaza <RobotIcon /> por:
<video autoPlay muted loop playsInline style={{ width: '100%', borderRadius: 20 }}>
  <source src="/videos/club-robotica.mp4" type="video/mp4" />
</video>
```

### 5. Estadísticas reales
En `Hero.jsx`, busca el array de stats y actualiza:
```jsx
{ num: '50+', label: 'Estudiantes activos' },
{ num: '3',   label: 'Competencias ganadas' },
{ num: '5+',  label: 'Años de trayectoria' },
```

## 🎯 SEO & Meta Tags
Edita `public/index.html` para agregar Open Graph:
```html
<meta property="og:title" content="Club de Robótica GLA" />
<meta property="og:description" content="Únete al club de robótica del Gimnasio Los Arrayanes Bilingüe" />
<meta property="og:image" content="https://tu-dominio.vercel.app/og-image.png" />
```

## 📱 Responsive
La página es completamente responsive. Breakpoints principales:
- **Mobile**: < 640px
- **Tablet**: < 900px  
- **Desktop**: > 1200px

## 🛠 Dependencias

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.383.0"
}
```

---

Hecho con ❤️ para el **Club de Robótica GLA** · [gla.edu.co](https://gla.edu.co)
