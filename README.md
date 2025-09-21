# 🚁 PHANTOM FORGE - Smart Flood Management System

<div align="center">

![Phantom Forge Banner](https://img.shields.io/badge/PHANTOM_FORGE-Advanced_Robotics-00d4ff?style=for-the-badge&logo=react&logoColor=white)
![Team](https://img.shields.io/badge/Team-Dreams_of_Bangladesh-8b5cf6?style=for-the-badge)
![Competition](https://img.shields.io/badge/Competition-7th_World_Invention-ff0080?style=for-the-badge)

**Next-generation flood management robotic vehicles for human rescue and water resources management**

[🚀 Live Demo](https://phantom-forge.vercel.app) • [📖 Documentation](#documentation) • [🎮 Features](#features) • [🤝 Contributing](#contributing)

</div>

---

## 🌟 About Team Phantom Forge

**Team Phantom Forge**, representing **Dreams of Bangladesh**, has developed an innovative three-part Smart Flood Management System to address one of Bangladesh's most devastating challenges. Our solution combines cutting-edge robotics, AI, and real-time monitoring to save lives and protect communities.

### 🎯 The Challenge
Bangladesh faces severe floods every monsoon season:
- **6.3 million people** affected annually
- **$12.2 billion** in economic losses (1971-2014)
- **41,700+ lives** lost to major floods
- **$1 billion** average annual economic impact

### 💡 Our Solution
A comprehensive three-robot system designed for flood management:

| Robot | Purpose | Key Features |
|-------|---------|-------------|
| **🚁 Diganta Prohori** | Aerial Surveillance | ZD850 Carbon Fiber, Pixhawk 6C, 3D Mapping |
| **🌊 HydroJan 0.4** | Underwater Assessment | Capsule Hull, Rovmaker Thrusters, Hazard Detection |
| **🚤 Dingi** | Water Rescue Operations | Water-Floating, Emergency Response, Flood Navigation |

---

## ✨ Features

### 🏠 Interactive Web Dashboard
- **Futuristic UI** with glass morphism effects and cyberpunk aesthetics
- **Real-time Telemetry** with live data simulation
- **Interactive Controls** for each robotic system
- **Mission Management** with progress tracking
- **Responsive Design** optimized for all devices

### 🚁 Diganta Prohori (Surveillance Drone)
- **Advanced Flight Controls** with autonomous and manual modes
- **Multi-Camera System** (Normal, Thermal, Night Vision)
- **GPS Navigation** with waypoint management
- **Emergency Delivery System** for supply drops
- **3D Mapping** with overlapping photo stitching

### 🌊 HydroJan 0.4 (Autonomous Underwater Vehicle)
- **Deep Water Navigation** with capsule hull design
- **Sonar Mapping** for underwater terrain analysis
- **Post-Flood Hazard Detection** for structural assessment
- **Environmental Monitoring** (temperature, pressure, salinity)
- **Autonomous Mission Execution** with real-time feedback

### 🚤 Dingi (Water-Floating Rescue Robot)
- **All-Weather Operation** in flood conditions
- **Rescue Assistance** for people in immediate danger
- **Terrain Adaptation** for various water levels
- **Emergency Communication** systems
- **Robotic Manipulation** for object handling

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern component architecture
- **Vite** - Lightning-fast development and build
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side navigation

### Design & UX
- **Glass Morphism** - Modern transparent card effects
- **Cyberpunk Aesthetics** - Futuristic color schemes
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant interactions

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - Advanced CSS processing
- **Git** - Version control with proper .gitignore
- **Environment Variables** - Secure configuration management

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tamimhossain11/PHANTOM_FORGE.git
   cd PHANTOM_FORGE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3001`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📱 Navigation & Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 **Home** | `/` | Landing page with project overview |
| 🚁 **Drone** | `/drone` | Diganta Prohori control dashboard |
| 🌊 **AUV** | `/auv` | HydroJan 0.4 underwater operations |
| 🚤 **ROV** | `/rov` | Dingi rescue robot interface |
| 👥 **About** | `/about` | Team story and mission |
| 📝 **Blog** | `/blog` | Development journey and updates |

---

## 🎮 Interactive Features

### Real-time Simulations
- **Live Telemetry Updates** - Dynamic sensor data
- **Battery Management** - Realistic power consumption
- **Environmental Data** - Weather and condition monitoring
- **Mission Progress** - Real-time task completion tracking

### Control Systems
- **Flight Controls** - Takeoff, landing, and navigation
- **Dive Operations** - Underwater maneuvering and depth control
- **Rescue Protocols** - Emergency response procedures
- **Camera Systems** - Multi-mode visual monitoring

### Data Visualization
- **Interactive Maps** - GPS tracking and waypoint visualization
- **Sensor Graphs** - Real-time environmental monitoring
- **Status Indicators** - System health and operational status
- **Mission Timelines** - Progress tracking and reporting

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--cyber-blue: #00d4ff;    /* Primary actions and highlights */
--cyber-purple: #8b5cf6;  /* Secondary elements */
--cyber-pink: #ff0080;    /* Accent and warnings */

/* Background Colors */
--dark-bg: #0a0a0f;       /* Main background */
--card-bg: #1a1a2e;       /* Card backgrounds */
```

### Typography
- **Orbitron** - Cyberpunk headings and technical displays
- **Space Grotesk** - Body text and interface elements

### Animations
- **Subtle Pulses** - Status indicators (3s duration)
- **Glass Effects** - Card hover states and interactions
- **Data Streams** - Information flow visualization
- **Smooth Transitions** - Page navigation and state changes

---

## 🏆 Competition & Recognition

### 7th World Invention Competition and Exhibition
- **Representing**: Bangladesh
- **Category**: Advanced Robotics & AI
- **Focus**: Disaster Management & Community Safety
- **Innovation**: Multi-robot flood response system

### Project Impact
- **Target Beneficiaries**: 6.3M+ flood-affected people annually
- **Economic Impact**: Potential $1B+ in prevented losses
- **Community Reach**: 100+ students in STEM programs
- **Workshops Conducted**: 50+ robotics education sessions

---

## 📚 Documentation

### Project Structure
```
PHANTOM_FORGE/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Main application pages
│   ├── styles/        # CSS and styling files
│   └── assets/        # Images and static resources
├── public/            # Static assets
├── docs/             # Additional documentation
└── README.md         # This file
```

### Environment Configuration
The project uses environment variables for configuration:
- Copy `.env.example` to `.env`
- Update variables for your deployment environment
- Never commit `.env` files to version control

### Development Guidelines
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling consistency
- Implement responsive design for all components
- Test interactive features across different devices

---

## 🌍 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

### Environment Variables for Production
```bash
VITE_APP_URL=https://your-domain.com
VITE_API_BASE_URL=https://api.your-domain.com
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup
```bash
git clone https://github.com/tamimhossain11/PHANTOM_FORGE.git
cd PHANTOM_FORGE
npm install
npm run dev
```

### Code Style
- Use ESLint configuration provided
- Follow React functional component patterns
- Write descriptive commit messages
- Add comments for complex logic

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

### Team Phantom Forge
- **Organization**: Dreams of Bangladesh
- **Email**: team@phantomforge.bd
- **Location**: Bangladesh
- **GitHub**: [@tamimhossain11](https://github.com/tamimhossain11)

### Links
- 🌐 **Website**: [phantom-forge.vercel.app](https://phantom-forge.vercel.app)
- 📱 **Repository**: [github.com/tamimhossain11/PHANTOM_FORGE](https://github.com/tamimhossain11/PHANTOM_FORGE)
- 📧 **Contact**: team@phantomforge.bd

---

## 🙏 Acknowledgments

- **Dreams of Bangladesh** - Our parent organization
- **7th World Invention Competition** - Platform for innovation
- **Open Source Community** - Tools and libraries that made this possible
- **Bangladesh Flood Victims** - The inspiration behind our mission

---

<div align="center">

**Built with ❤️ for humanity by Team Phantom Forge**

*"To encourage the next generation to dream big and believe in their power to create change."*

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat&logo=react&logoColor=white)
![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

</div>
