import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Play, ChevronDown, ChevronUp } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCategory, setActiveCategory] = useState('all')
  const [expanded, setExpanded] = useState(false)

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'educational', name: 'Educational' },
    { id: 'llm', name: 'LLM-Based' },
    { id: 'data', name: 'Data Science' },
    { id: '3dvis', name: 'Visualization' },
    { id: 'ar', name: 'Augmented Reality' },
    { id: 'aiintegrated', name: 'AI Integrated' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Exploring the Volume of Sphere',
      description: 'How can we calculate the volume of a sphere? A web-based set of interactive experiments that use 3D rendering, physics, and AR image tracking to build intuition for sphere volume through filling and splitting visualizations.',
      category: ['educational', 'augmentedreality', '3dvis'],
      technologies: [
        "Vanilla JavaScript",
        "Three.js",
        "Cannon-es",
        "MindAR (image-tracking AR)",
        "GLTF assets"
      ],      
      features: [
        "Real-time physics simulations showing the volume relationship between a sphere and a cylinder",
        "AR image-tracking experience to slice and reassemble a sphere with interactive controls",
        "Sphere splitting visual demos comparing cross-sections and volumes",
        "Supplementary learning materials and reference assets (3D models, markers, lectures/examples)",
        "Runs as static files; works with a simple local web server without a build step"
      ],      
      demoUrl: 'https://eduwang.github.io/exploring-volume-of-sphere/',
      githubUrl: 'https://github.com/eduwang/exploring-volume-of-sphere',
      status: 'Active'
    },
    {
      id: 2,
      title: "Visualizing Translations of Quadratic Functions in AR",
      description: "A WebXR-style demo that overlays a quadratic function graph on live camera video, letting users tweak coefficients and observe vertical shifts in real time with Three.js rendering.",
      category: ['educational', 'augmentedreality'],
      technologies: [
        "Vanilla JavaScript",
        "Three.js",
        "WebXR-style camera overlay"
      ],      
      features: [
        "Render y = ax^2 + bx + c or vertex form graphs over live camera feed",
        "Real-time updates as users adjust coefficients and vertical shift slider",
        "Toggleable dashed grid and axes for clearer visualization",
        "Touch drag to move the camera view and reset to defaults with one tap",
        "Runs as static files; open index.html or serve with a simple local server"
      ],      
      demoUrl: 'https://eduwang.github.io/graph-of-quadratic-function/',
      githubUrl: 'https://github.com/eduwang/graph-of-quadratic-function',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Reinforcement Learning Sample for AI Integrated Education',
      description: 'Sample of reinforcement learning. You can try Cart Pole, Lunar Lander, and Maze Solver.',
      category: ['educational', 'aiintegrated'],
      technologies: ['Vite', 'Vanilla JavaScript', 'Canvas API'],
      features: [
        'Real-time Reinforcement Learning Visualization',
        '3 Learning Environments (CartPole, Maze, Lunar Lander)',
        'DQN & Q-Learning Algorithms',
        'Real-time Hyperparameter Adjustment',
        'Training Progress Charts & Statistics'
      ],
      demoUrl: 'https://reinforcement-learning-sample.netlify.app/',
      githubUrl: 'https://github.com/eduwang/reinforcement-learning',
      status: 'Active'
    },
    {
      id: 4,
      title: 'Cryptology Learning Platform',
      description: 'An interactive web application for learning classical and modern cryptography through hands-on experience with 8 different cipher implementations',
      category: ['educational'],
      technologies: ['Vite', 'Vanilla JavaScript', 'BigInt'],
      features: [
        '8 cipher implementations (Scytale, Nihilist, Caesar, Vigenère, Affine, Enigma, Sieve of Eratosthenes, RSA)',
        'Real-time encryption and decryption',
        'Interactive visualizations',
        'Bidirectional cipher operations',
        'Input validation with user feedback',
        'Responsive design for all devices',
        'Educational-focused UI/UX',
        'Step-by-step process logging',
        'Multiple encryption modes (text/number)',
        'Prime number factorization'
      ],
      demoUrl: 'https://explore-classic-cryptography-ew.netlify.app/',
      githubUrl: 'https://github.com/eduwang/cryptology-sample',
      status: 'Active'
    },
    {
      id: 5,
      title: 'Calculus Visualization - 3D Interactive Learning Tool',
      description: 'A web application that visualizes fundamental calculus concepts including Cavalieri\'s principle and Archimedes\' equilibrium method through interactive 3D graphics to enhance mathematical understanding',
      category: ['educational', '3dvis'],
      technologies: ['Vite', 'Vanilla JavaScript', 'Three.js', 'lil-gui'],
      features: [
        'Cavalieri\'s method of indivisibles visualization',
        'Sphere volume calculation using Cavalieri\'s principle',
        'Archimedes\' equilibrium method demonstration',
        'Interactive 3D controls and camera manipulation',
        'Animation controls with frame-by-frame playback',
        'Mathematical formula rendering with MathJax'
      ],
      demoUrl: 'https://calculus-sgj-ew.netlify.app/',
      githubUrl: 'https://github.com/eduwang/calculus-sgj',
      status: 'Active'
    },
    {
      id: 6,
      title: 'Yacht Dice Game',
      description: 'An interactive dice game featuring real-time 3D physics simulation. Play the classic Yacht (Yahtzee) game with immersive 3D dice rolling powered by Three.js and Cannon.js physics engine.',
      category: ['educational', '3dvis'],
      technologies: ['Vite', 'Vanilla JavaScript', 'Three.js', 'Cannon.js', 'GSAP'],
      features: ['3D Physics Simulation', 'Multiplayer Support', 'Real-time Score Calculation', 'Dice Hold System', 'Turn Management', '13 Score Categories', 'Dual Game Modes'],
      demoUrl: 'https://yacht-dice-ew.netlify.app/',
      githubUrl: 'https://github.com/eduwang/yacht-dice-game',
      status: 'Active'
    },
    {
      id: 7,
      title: '수학 성취도 예측 모델',
      description: '머신러닝을 활용하여 학생들의 수학 성취도를 예측하는 웹 서비스',
      category: ['data', 'education'],
      technologies: ['React', 'Python', 'Scikit-learn', 'Flask'],
      features: ['성취도 예측', '학습 전략 제안', '개입 시점 알림', '성과 분석'],
      demoUrl: 'https://math-prediction.demo',
      githubUrl: 'https://github.com/username/math-prediction',
      status: 'Active'
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        // category가 배열인 경우와 문자열인 경우 모두 처리
        const categories = Array.isArray(project.category) 
          ? project.category 
          : [project.category]
        return categories.includes(activeCategory)
      })


  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dev Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I design and develop a range of applications that support mathematics education, data science instruction, and AI-integrated learning environments.
            Below, you can explore a variety of interactive tools featuring 3D visualization, large language models, data science workflows, and dynamic visual analytics.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-gray-100 p-2 rounded-xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Expand/Collapse Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <span>{expanded ? 'Show Less' : 'Show All Projects'}</span>
            {expanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Projects Display */}
        {expanded ? (
          /* Expanded View - All Projects Grid */
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : project.status === 'Private'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">주요 기능:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <Play className="w-4 h-4" />
                      <span>Visit Web App</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Horizontal Scroll View - Compact Cards */
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="flex space-x-4 min-w-max">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
                        project.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : project.status === 'Private'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                      >
                        <Play className="w-3 h-3" />
                        <span>Visit Web App</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-1 bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300 text-sm"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects 