import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Plane, 
  Waves, 
  Mountain, 
  ArrowRight, 
  Zap, 
  Shield, 
  Target,
  Cpu,
  Radio,
  Camera
} from 'lucide-react'

const HomePage = () => {
  const robots = [
    {
      id: 'drone',
      name: 'Diganta Prohori',
      subtitle: 'Surveillance Drone',
      description: 'High-end surveillance drone with hexacopter carbon-fiber frame, Pixhawk 6C controller, and PX4 flight software. Equipped with high-resolution camera, optical sensors, and emergency supply delivery system.',
      icon: Plane,
      path: '/drone',
      gradient: 'from-cyan-400 to-blue-600',
      bgGradient: 'bg-gradient-drone',
      features: ['ZD850 Carbon Fiber', 'Pixhawk 6C Controller', '3D Mapping', 'Emergency Delivery']
    },
    {
      id: 'auv',
      name: 'HydroJan 0.4',
      subtitle: 'Autonomous Underwater Vehicle',
      description: 'Advanced AUV with capsule-shaped hull for hydrodynamic stability, high-performance Rovmaker thrusters, and mild steel frame designed for post-flood hazard detection.',
      icon: Waves,
      path: '/auv',
      gradient: 'from-purple-400 to-indigo-600',
      bgGradient: 'bg-gradient-auv',
      features: ['Capsule Hull Design', 'Rovmaker Thrusters', 'Deep Water Navigation', 'Hazard Detection']
    },
    {
      id: 'rov',
      name: 'Dingi',
      subtitle: 'Water-Floating Rescue Robot',
      description: 'Water-floating rescue robot designed to assist people in immediate danger during floods, with advanced navigation and rescue capabilities.',
      icon: Mountain,
      path: '/rov',
      gradient: 'from-pink-400 to-red-600',
      bgGradient: 'bg-gradient-rov',
      features: ['Water Floating', 'Rescue Operations', 'Emergency Response', 'Flood Navigation']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative py-20 px-4 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-cyber font-black mb-6 glow-text">
              <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                PHANTOM
              </span>
              <br />
              <span className="text-white">FORGE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-display max-w-4xl mx-auto leading-relaxed">
              Team Phantom Forge, representing Dreams Of Bangladesh, designs next-generation flood management robotic vehicles to support human rescue and water resources management for the 7th World Invention Competition and Exhibition.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Zap, label: 'Lives Affected Annually', value: '6.3M' },
              { icon: Shield, label: 'Economic Loss Prevented', value: '$1B+' },
              { icon: Target, label: 'Mission Success', value: '100%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 border border-cyber-blue/30 energy-pulse"
              >
                <stat.icon className="w-8 h-8 text-cyber-blue mx-auto mb-4" />
                <div className="text-3xl font-cyber font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-display">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Robots Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-blue">
              SMART FLOOD MANAGEMENT SYSTEM
            </h2>
            <p className="text-lg text-gray-300 font-display max-w-3xl mx-auto">
              Our three-part flood response system designed to save lives, improve rescue efforts, and reduce the long-term impact of floods on communities in Bangladesh.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {robots.map((robot, index) => (
              <motion.div
                key={robot.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="robot-card glass-card rounded-2xl border border-gray-700/30 overflow-hidden group"
              >
                <div className={`h-48 ${robot.bgGradient} relative overflow-hidden`}>
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <robot.icon className="w-24 h-24 text-white/90" />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-cyber font-bold text-white mb-1">
                        {robot.name}
                      </h3>
                      <p className="text-sm text-gray-400 font-display">
                        {robot.subtitle}
                      </p>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full status-pulse"></div>
                  </div>

                  <p className="text-gray-300 font-display mb-6 leading-relaxed">
                    {robot.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {robot.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={robot.path}
                    className="block w-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full ${robot.bgGradient} text-white font-display font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all group-hover:shadow-lg group-hover:shadow-current/25`}
                    >
                      <span>Access Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-card-bg/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-purple">
              OUR MISSION & VISION
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="glass-card border border-purple-500/30 rounded-xl p-8 circuit-lines"
            >
              <h3 className="text-2xl font-cyber font-bold text-purple-400 mb-6">
                OUR MISSION
              </h3>
              <p className="text-gray-300 font-display leading-relaxed mb-6">
                Team Phantom Forge, representing Dreams Of Bangladesh, designs next-generation flood management robotic vehicles to support human rescue and water resources management. As participants in the 7th World Invention Competition and Exhibition, we are committed to advancing flood defense and hazard management.
              </p>
              <p className="text-gray-300 font-display leading-relaxed">
                Beyond the competition, we are passionate about giving back to our community. In Bangladesh, we run STEM programs and door-to-door robotics workshops to spark curiosity and confidence among young souls.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card border border-cyan-500/30 rounded-xl p-8 data-stream"
            >
              <h3 className="text-2xl font-cyber font-bold text-cyan-400 mb-6">
                OUR VISION
              </h3>
              <p className="text-gray-300 font-display leading-relaxed mb-6">
                At Phantom Forge, we are more than just a team, we are a group of people who dare to make a difference. By combining creativity, determination, and teamwork, we strive to build technologies that not only save lives but also help communities stand stronger against floods and the challenges of climate change.
              </p>
              <p className="text-gray-300 font-display leading-relaxed">
                Our goal is simple: <span className="text-cyber-blue font-semibold">"To encourage the next generation to dream big and believe in their power to create change."</span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Impact Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 glow-text text-cyber-pink">
              PROJECT IMPACT
            </h2>
            <p className="text-lg text-gray-300 font-display max-w-4xl mx-auto leading-relaxed">
              Bangladesh faces severe challenges every monsoon, with floods being one of the most devastating natural disasters. 
              Between 1971 and 2014, 78 major floods claimed over 41,700 lives and caused economic losses of $12.2 billion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Real-time Monitoring',
                description: 'Diganta Prohori provides aerial surveillance and 3D mapping of flood-affected areas for immediate assessment and response coordination.'
              },
              {
                icon: Shield,
                title: 'Emergency Rescue',
                description: 'Dingi assists people in immediate danger during floods with advanced navigation and rescue capabilities in water-logged areas.'
              },
              {
                icon: Radio,
                title: 'Post-Flood Assessment',
                description: 'HydroJan 0.4 detects underwater hazards and structural damage to ensure safe recovery and rebuilding efforts.'
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-xl glass-card border border-gray-700/30 energy-pulse"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 bg-gradient-cyber rounded-full mb-6"
                >
                  <impact.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-cyber font-bold text-white mb-4">
                  {impact.title}
                </h3>
                <p className="text-gray-400 font-display leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage
