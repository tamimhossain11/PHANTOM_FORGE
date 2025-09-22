# 🔧 Technical Specifications - PHANTOM FORGE

## 🤖 Robot Specifications

### 🚁 Diganta Prohori (Surveillance Drone)

**Hardware Components:**
- **Frame**: ZD850 carbon-fiber hexacopter frame
- **Flight Controller**: Pixhawk 6C with PX4 flight software
- **Motors**: 6x brushless motors with 45C electronic speed controllers
- **Battery**: 5500 mAh Li-Polymer in waterproof acrylic compartment
- **Receiver**: Flysky FS-ia10B
- **Controller**: Flysky-i6 remote controller

**Capabilities:**
- **Autonomous Flight**: GPS-guided navigation with waypoint management
- **3D Mapping**: Overlapping photo stitching for depth calculation
- **Emergency Delivery**: Servo-powered supply drop system
- **Live Communication**: Speakers for real-time announcements
- **Multi-Camera System**: High-resolution camera with optical sensors

**Performance:**
- **Flight Time**: 25-30 minutes
- **Payload Capacity**: 2.5 kg
- **Operating Range**: 5 km radius
- **Max Altitude**: 500m AGL
- **Weather Resistance**: IP65 rated

---

### 🌊 HydroJan 0.4 (Autonomous Underwater Vehicle)

**Design Features:**
- **Hull**: Capsule-shaped design for hydrodynamic stability
- **Frame**: Mild steel internal structure for pressure resistance
- **Shell**: Lightweight aluminum with corrosion resistance
- **Thrusters**: High-performance Rovmaker thrusters for precision control

**Navigation Systems:**
- **Autonomous Navigation**: Advanced path planning algorithms
- **Depth Control**: Precise ballast and thruster control
- **Obstacle Avoidance**: Sonar-based collision prevention
- **Surface Communication**: Acoustic modem for data transmission

**Mission Capabilities:**
- **Post-Flood Assessment**: Structural damage evaluation
- **Hazard Detection**: Underwater debris and obstacle mapping
- **Water Quality Analysis**: Multi-parameter sensor suite
- **Search Operations**: Object detection and classification

**Performance:**
- **Operating Depth**: 0-100m
- **Mission Duration**: 4-6 hours
- **Speed**: 2-5 knots
- **Communication Range**: 2 km acoustic

---

### 🚤 Dingi (Water-Floating Rescue Robot)

**Design Characteristics:**
- **Buoyancy**: Optimized for flood water navigation
- **Stability**: Low center of gravity for rough water conditions
- **Propulsion**: Water-jet propulsion system
- **Construction**: Waterproof composite materials

**Rescue Features:**
- **Personnel Assistance**: Flotation device deployment
- **Emergency Communication**: Two-way radio and emergency beacon
- **Supply Delivery**: Waterproof cargo compartment
- **Navigation Aids**: GPS and flood water depth sensors

**Operational Modes:**
- **Manual Control**: Direct operator control via radio link
- **Rescue Mode**: Automated victim assistance protocols
- **Patrol Mode**: Autonomous area monitoring
- **Emergency Response**: Rapid deployment capabilities

**Performance:**
- **Operating Conditions**: Flood waters, rivers, coastal areas
- **Speed**: 5-15 km/h depending on conditions
- **Range**: 10 km operational radius
- **Payload**: 50 kg rescue supplies

---

## 💻 Software Architecture

### Frontend Application

**Framework**: React 18.2.0
```javascript
// Component Architecture
src/
├── components/          // Reusable UI components
│   └── Navbar.jsx      // Navigation with glass morphism
├── pages/              // Route-based page components
│   ├── HomePage.jsx    // Landing page with robot showcase
│   ├── DroneDashboard.jsx    // Diganta Prohori controls
│   ├── AUVDashboard.jsx      // HydroJan 0.4 interface
│   ├── ROVDashboard.jsx      // Dingi control panel
│   ├── AboutPage.jsx         // Team information
│   └── BlogPage.jsx          // Project blog
└── styles/
    └── index.css       // Global styles and animations
```

**State Management**: React Hooks (useState, useEffect)
```javascript
// Real-time Data Simulation
const [telemetryData, setTelemetryData] = useState({
  altitude: 0,
  battery: 87,
  speed: 0,
  temperature: 22,
  // ... other sensor data
});

useEffect(() => {
  const interval = setInterval(() => {
    if (systemActive) {
      updateTelemetryData();
    }
  }, 1000);
  return () => clearInterval(interval);
}, [systemActive]);
```

**Routing**: React Router v6
```javascript
// Route Configuration
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/drone" element={<DroneDashboard />} />
  <Route path="/auv" element={<AUVDashboard />} />
  <Route path="/rov" element={<ROVDashboard />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/blog" element={<BlogPage />} />
</Routes>
```

### Animation System

**Library**: Framer Motion 10.16.0
```javascript
// Page Transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Staggered Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
```

**CSS Animations**: Custom keyframes for specialized effects
```css
/* Glass Morphism Effects */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Data Stream Animation */
@keyframes data-flow {
  0% { left: -100%; }
  100% { left: 100%; }
}
```

### Styling System

**Framework**: Tailwind CSS 3.3.6
```javascript
// Custom Configuration
module.exports = {
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#8b5cf6',
        'cyber-pink': '#ff0080',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      }
    }
  }
}
```

---

## 🏗️ Build & Deployment

### Development Environment
```bash
# Package Manager
npm 9.8.1

# Build Tool
Vite 5.0.8

# Development Server
http://localhost:3001

# Hot Module Replacement
Enabled with React Fast Refresh
```

### Production Build
```bash
# Build Command
npm run build

# Output Directory
dist/

# Asset Optimization
- Code splitting
- Tree shaking
- Minification
- Gzip compression
```

### Deployment Platforms

**Vercel (Recommended)**
```json
{
  "name": "phantom-forge",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

**GitHub Pages**
```yaml
# .github/workflows/deploy.yml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

**Netlify**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔧 Environment Configuration

### Development Variables
```bash
# .env.development
NODE_ENV=development
VITE_APP_URL=http://localhost:3001
VITE_ENABLE_TELEMETRY_SIMULATION=true
VITE_DATA_UPDATE_INTERVAL=1000
```

### Production Variables
```bash
# .env.production
NODE_ENV=production
VITE_APP_URL=https://phantom-forge.vercel.app
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_REAL_TIME_DATA=true
```

### Feature Flags
```javascript
// Feature Toggle System
const features = {
  enableGlassEffects: import.meta.env.VITE_ENABLE_GLASS_EFFECTS === 'true',
  enableTelemetry: import.meta.env.VITE_ENABLE_TELEMETRY_SIMULATION === 'true',
  animationDuration: parseInt(import.meta.env.VITE_ANIMATION_DURATION) || 600,
};
```

---

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

### Bundle Analysis
```bash
# Bundle Size (Estimated)
Total: ~2.5 MB
├── React: ~45 KB
├── Framer Motion: ~180 KB
├── Tailwind CSS: ~15 KB (purged)
├── Lucide Icons: ~25 KB (tree-shaken)
└── Custom Code: ~85 KB
```

### Loading Performance
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms

---

## 🔒 Security Considerations

### Environment Security
- **Sensitive Data**: Stored in .env files (gitignored)
- **API Keys**: Server-side proxy for external APIs
- **CORS**: Configured for production domains only

### Content Security Policy
```javascript
// Recommended CSP Headers
"Content-Security-Policy": 
  "default-src 'self'; " +
  "style-src 'self' 'unsafe-inline' fonts.googleapis.com; " +
  "font-src fonts.gstatic.com; " +
  "img-src 'self' data: https:; " +
  "script-src 'self';"
```

---

## 🧪 Testing Strategy

### Unit Testing
```bash
# Test Framework (Future Implementation)
Jest + React Testing Library

# Test Coverage Target
- Components: 80%+
- Utilities: 90%+
- Integration: 70%+
```

### E2E Testing
```bash
# Playwright/Cypress (Future Implementation)
- Navigation flow
- Dashboard interactions
- Responsive design
- Animation performance
```

---

## 📈 Monitoring & Analytics

### Performance Monitoring
- **Real User Monitoring**: Web Vitals tracking
- **Error Tracking**: Console error monitoring
- **Bundle Analysis**: Regular size audits

### Usage Analytics
- **Page Views**: Route-based tracking
- **User Interactions**: Dashboard usage patterns
- **Performance Metrics**: Loading time analysis

---

*This document is maintained by Team Phantom Forge and updated with each major release.*


