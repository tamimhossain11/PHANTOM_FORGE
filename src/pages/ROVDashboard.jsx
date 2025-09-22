import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mountain, 
  Battery, 
  Wifi, 
  Navigation, 
  Camera, 
  Gauge,
  MapPin,
  Thermometer,
  Activity,
  Wrench,
  Play,
  Pause,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Zap,
  Cog,
  Target,
  Grip,
  Eye,
  Settings
} from 'lucide-react'

const ROVDashboard = () => {
  const [isActive, setIsActive] = useState(false)
  const [speed, setSpeed] = useState(0)
  const [battery, setBattery] = useState(89)
  const [motorTemp, setMotorTemp] = useState(45)
  const [tiltAngle, setTiltAngle] = useState(0)
  const [armPosition, setArmPosition] = useState({ x: 50, y: 50, z: 50 })
  const [gripperOpen, setGripperOpen] = useState(false)
  const [cameraMode, setCameraMode] = useState('normal')

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSpeed(prev => Math.max(0, prev + (Math.random() - 0.5) * 3))
        setBattery(prev => Math.max(0, prev - 0.12))
        setMotorTemp(prev => Math.max(20, prev + (Math.random() - 0.5) * 2))
        setTiltAngle(prev => prev + (Math.random() - 0.5) * 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  const telemetryData = [
    { label: 'Speed', value: `${speed.toFixed(1)} km/h`, icon: Zap, color: 'text-pink-400' },
    { label: 'Motor Temp', value: `${motorTemp.toFixed(1)}°C`, icon: Thermometer, color: 'text-orange-400' },
    { label: 'Tilt Angle', value: `${tiltAngle.toFixed(1)}°`, icon: Activity, color: 'text-blue-400' },
    { label: 'Grip Force', value: `${gripperOpen ? '15' : '0'} N`, icon: Grip, color: 'text-green-400' }
  ]

  const operationModes = ['Manual Control', 'Rescue Mode', 'Flood Navigation', 'Emergency Response', 'Patrol Mode']
  const [currentMode, setCurrentMode] = useState('Rescue Mode')

  const manipulatorControls = [
    { name: 'Shoulder', value: armPosition.x, color: 'bg-pink-500' },
    { name: 'Elbow', value: armPosition.y, color: 'bg-purple-500' },
    { name: 'Wrist', value: armPosition.z, color: 'bg-indigo-500' }
  ]

  return (
    <div className="min-h-screen pt-24 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-rov rounded-xl">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-cyber font-bold text-white glow-text">
                  DINGI
                </h1>
                <p className="text-gray-400 font-display">Water-Floating Rescue Robot Control Center</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isActive ? 'bg-pink-500/20 text-pink-400' : 'bg-gray-500/20 text-gray-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-pink-400 status-pulse' : 'bg-gray-400'}`}></div>
                <span className="font-display font-medium">
                  {isActive ? 'ACTIVE' : 'STANDBY'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            {/* Movement Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-pink-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-pink-400 mb-6 flex items-center">
                <Navigation className="w-5 h-5 mr-2" />
                MOVEMENT CONTROLS
              </h2>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsActive(!isActive)}
                  className={`w-full py-3 px-6 rounded-lg font-display font-semibold flex items-center justify-center space-x-2 transition-all ${
                    isActive 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isActive ? 'STOP' : 'START'}</span>
                </motion.button>

                {/* Directional Controls */}
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg text-pink-400 transition-colors"
                  >
                    <ArrowUp className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <div></div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg text-pink-400 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-400 transition-colors"
                  >
                    <RotateCcw className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg text-pink-400 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6 mx-auto" />
                  </motion.button>
                  
                  <div></div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg text-pink-400 transition-colors"
                  >
                    <ArrowDown className="w-6 h-6 mx-auto" />
                  </motion.button>
                  <div></div>
                </div>
              </div>
            </motion.div>

            {/* Manipulator Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-pink-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-pink-400 mb-6 flex items-center">
                <Wrench className="w-5 h-5 mr-2" />
                MANIPULATOR ARM
              </h2>
              
              <div className="space-y-4">
                {manipulatorControls.map((control, index) => (
                  <div key={control.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-display text-gray-300">{control.name}</span>
                      <span className="font-cyber text-white">{control.value.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${control.value}%` }}
                        className={`h-2 rounded-full ${control.color}`}
                      />
                    </div>
                  </div>
                ))}
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setGripperOpen(!gripperOpen)}
                  className={`w-full py-2 px-4 rounded-lg font-display font-medium flex items-center justify-center space-x-2 transition-all ${
                    gripperOpen 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/50' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/50'
                  }`}
                >
                  <Grip className="w-4 h-4" />
                  <span>{gripperOpen ? 'CLOSE GRIPPER' : 'OPEN GRIPPER'}</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Operation Modes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-pink-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-pink-400 mb-6">
                OPERATION MODES
              </h2>
              <div className="space-y-2">
                {operationModes.map((mode) => (
                  <motion.button
                    key={mode}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentMode(mode)}
                    className={`w-full p-3 rounded-lg text-left font-display transition-all ${
                      currentMode === mode
                        ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                        : 'bg-gray-700/20 text-gray-300 hover:bg-gray-700/30'
                    }`}
                  >
                    {mode}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center Column - Main Display */}
          <div className="space-y-6">
            {/* Camera Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-pink-500/30 energy-pulse"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-cyber font-bold text-pink-400 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  CAMERA FEED
                </h2>
                <div className="flex space-x-2">
                  {['normal', 'infrared', 'lowlight'].map((mode) => (
                    <motion.button
                      key={mode}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCameraMode(mode)}
                      className={`px-3 py-1 rounded-md text-sm font-display capitalize transition-colors ${
                        cameraMode === mode
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {mode}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div className="aspect-video bg-black/50 rounded-lg relative overflow-hidden">
                {/* Background Image based on camera mode */}
                <div className="absolute inset-0">
                  {cameraMode === 'normal' && (
                    <img 
                      src="/images/img-8.jpeg" 
                      alt="ROV Camera Feed" 
                      className="w-full h-full object-cover opacity-70"
                    />
                  )}
                  {cameraMode === 'infrared' && (
                    <img 
                      src="/images/img-5.jpeg" 
                      alt="Infrared Camera Feed" 
                      className="w-full h-full object-cover opacity-60 filter hue-rotate-180 contrast-125"
                    />
                  )}
                  {cameraMode === 'lowlight' && (
                    <img 
                      src="/images/img-4.jpeg" 
                      alt="Low Light Feed" 
                      className="w-full h-full object-cover opacity-50 filter brightness-75 contrast-150"
                    />
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20">
                  <div className="absolute inset-4 border border-pink-500/30 rounded">
                    <div className="absolute top-2 left-2 text-pink-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      {cameraMode.toUpperCase()} MODE
                    </div>
                    <div className="absolute top-2 right-2 text-pink-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      REC ●
                    </div>
                    <div className="absolute bottom-2 left-2 text-pink-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      ZOOM: 2.5x
                    </div>
                    <div className="absolute bottom-2 right-2 text-pink-400 text-xs font-mono bg-black/50 px-2 py-1 rounded">
                      {new Date().toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                
                {/* Crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <Target className="w-16 h-16 text-pink-400/50" />
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="absolute inset-0"
                    >
                      <div className="w-4 h-0.5 bg-pink-400/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="w-0.5 h-4 bg-pink-400/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terrain Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-pink-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-pink-400 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                TERRAIN MAPPING
              </h2>
              <div className="aspect-video bg-gray-900/50 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-20"></div>
                
                {/* Terrain features */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-8 h-6 bg-gray-600/50 rounded transform rotate-12"></div>
                  <div className="absolute top-1/2 right-1/3 w-6 h-8 bg-gray-700/50 rounded transform -rotate-12"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-10 h-4 bg-gray-500/50 rounded"></div>
                </div>
                
                {/* ROV position */}
                <motion.div
                  animate={{
                    x: [120, 140, 120],
                    y: [100, 120, 100]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute w-6 h-4 bg-pink-400 rounded"
                  style={{ top: '50%', left: '35%' }}
                >
                  <div className="w-full h-full bg-pink-400 rounded"></div>
                </motion.div>
                
                {/* Path trail */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M 100 150 Q 150 100 200 120 T 300 140"
                    stroke="#ec4899"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </svg>
                
                <div className="absolute bottom-4 left-4 text-pink-400 text-sm font-mono">
                  GPS: 40.7589° N, 73.9851° W
                </div>
                <div className="absolute bottom-4 right-4 text-pink-400 text-sm font-mono">
                  ELEVATION: 125m
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Telemetry */}
          <div className="space-y-6">
            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-pink-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-pink-400 mb-6 flex items-center">
                <Gauge className="w-5 h-5 mr-2" />
                SYSTEM STATUS
              </h2>
              
              <div className="space-y-4">
                {/* Battery */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Battery className="w-5 h-5 text-green-400" />
                    <span className="font-display text-gray-300">Battery</span>
                  </div>
                  <span className="font-cyber text-green-400">{battery.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${battery}%` }}
                    className={`h-2 rounded-full ${
                      battery > 50 ? 'bg-green-400' : battery > 20 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                  />
                </div>

                {/* Communication */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-pink-400" />
                    <span className="font-display text-gray-300">Radio Link</span>
                  </div>
                  <span className="font-cyber text-pink-400">Excellent</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-4 rounded ${
                        i < 5 ? 'bg-pink-400' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Performance Data */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-pink-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-pink-400 mb-6">
                PERFORMANCE DATA
              </h2>
              
              <div className="space-y-4">
                {telemetryData.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-dark-bg/30 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="font-display text-gray-300">{item.label}</span>
                    </div>
                    <span className={`font-cyber font-bold ${item.color}`}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission Control */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-pink-500/30 energy-pulse"
            >
              <h2 className="text-xl font-cyber font-bold text-pink-400 mb-4">
                MISSION CONTROL
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Operation Time</span>
                  <span className="font-cyber text-white">
                    {isActive ? '28:47' : '00:00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Distance</span>
                  <span className="font-cyber text-white">3.7 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Tasks</span>
                  <span className="font-cyber text-white">7/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Mode</span>
                  <span className="font-cyber text-pink-400">{currentMode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-display text-gray-300">Arm Status</span>
                  <span className={`font-cyber ${gripperOpen ? 'text-red-400' : 'text-green-400'}`}>
                    {gripperOpen ? 'Gripping' : 'Ready'}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 py-2 px-4 bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 rounded-lg font-display font-medium flex items-center justify-center space-x-2 transition-all"
              >
                <Settings className="w-4 h-4" />
                <span>SYSTEM SETTINGS</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ROVDashboard
