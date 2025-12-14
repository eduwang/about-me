import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Play, ChevronDown, ChevronUp } from 'lucide-react'
import { trackEvent, trackProjectLink } from '../utils/analytics.js'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCategory, setActiveCategory] = useState('all')
  const [expanded, setExpanded] = useState(false)
  const [mathJaxReady, setMathJaxReady] = useState(false)

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'educational', name: 'Educational' },
    { id: 'llm', name: 'LLM-Based' },
    { id: 'data', name: 'Data Science' },
    { id: '3dvis', name: 'Visualization' },
    { id: 'ar', name: 'Augmented Reality' },
    { id: 'aiintegrated', name: 'AI Integrated' }
  ]

  // MathJax 초기화 - CDN에서 로드된 MathJax 확인
  useEffect(() => {
    let timeoutId
    let retryCount = 0
    const maxRetries = 50 // 최대 5초 대기 (100ms * 50)

    const checkMathJax = () => {
      if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        setMathJaxReady(true)
      } else if (retryCount < maxRetries) {
        retryCount++
        timeoutId = setTimeout(checkMathJax, 100)
      } else {
        console.warn('MathJax failed to load after maximum retries')
      }
    }
    
    // MathJax 스크립트가 로드될 때까지 대기
    if (document.getElementById('MathJax-script')) {
      checkMathJax()
    } else {
      // 스크립트가 아직 head에 추가되지 않았다면 잠시 대기
      timeoutId = setTimeout(checkMathJax, 100)
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  // MathJax typeset 업데이트
  useEffect(() => {
    if (mathJaxReady && window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      const timer = setTimeout(() => {
        try {
          // Projects 섹션 내의 모든 요소를 타입셋
          const projectsSection = document.getElementById('projects')
          if (projectsSection) {
            window.MathJax.typesetPromise([projectsSection]).catch((err) => {
              // 오류를 조용히 처리 (수식이 없는 경우도 있으므로)
              if (err.message && !err.message.includes('No element')) {
                console.log('MathJax typeset error:', err)
              }
            })
          } else {
            window.MathJax.typesetPromise().catch((err) => {
              if (err.message && !err.message.includes('No element')) {
                console.log('MathJax typeset error:', err)
              }
            })
          }
        } catch (err) {
          // 무시 가능한 오류는 조용히 처리
          if (err.message && !err.message.includes('storage')) {
            console.log('MathJax typeset error:', err)
          }
        }
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [mathJaxReady, inView, expanded, activeCategory])

  // MathJax로 수식을 렌더링하는 함수
  const renderFeatureWithMath = (text) => {
    // MathJax가 자동으로 $...$ 형식의 수식을 인식하도록 그대로 반환
    return text
  }

  const projects = [
    {
      id: 1,
      title: 'Exploring the Volume of Sphere through AR',
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
      title: "Visualizing Translations of Quadratic Functions through AR",
      description: "A WebXR-style demo that overlays a quadratic function graph on live camera video, letting users tweak coefficients and observe vertical shifts in real time with Three.js rendering.",
      category: ['educational', 'augmentedreality'],
      technologies: [
        "Vanilla JavaScript",
        "Three.js",
        "WebXR-style camera overlay"
      ],      
      features: [
        "Render $y = ax^2 + bx + c$ or vertex form graphs over live camera feed",
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
      title: "SNA Visualization Tool V2",
      description: "A web-based platform for visualizing and analyzing social network data with interactive 2D/3D network graphs, community detection using Louvain algorithm, and centrality calculations. Features Firebase authentication for data persistence and report generation capabilities.",
      category: ['educational', 'data', '3dvis','aiintegrated'],
      technologies: [
        "Vite",
        "Vanilla JavaScript",
        "Sigma.js",
        "3d-force-graph",
        "Graphology",
        "Firebase",
      ],
      features: [
        "Interactive 2D and 3D network graph visualization with node dragging and zoom controls",
        "CSV file upload and spreadsheet-style data input interface",
        "Automatic community detection using Louvain algorithm with adjustable resolution",
        "Centrality calculations (Degree and Eigenvector) with top 10 node rankings",
        "Google authentication for secure data storage and retrieval via Firebase",
        "Report generation with embedded graph images and analysis results",
        "PNG export functionality for network graphs",
        "Sample datasets included for quick testing and exploration"
      ],
      demoUrl: 'https://sna-vis-tool-v2.netlify.app/',
      githubUrl: 'https://github.com/eduwang/ew-sna-vis-tool-v2',
      status: 'Active'
    },
    {
      id: 4,
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
      id: 5,
      title: 'Exploring Ideas for Using ChatGPT API',
      description: 'Sample of reinforcement learning. You can try Cart Pole, Lunar Lander, and Maze Solver.',
      category: ['educational', 'aiintegrated', 'llm'],
      technologies: ['Vite', 'Vanilla JavaScript', 'Handsontable', 'OpenAI API'],
      features: [
        'Real-time Interactive AI Chatbot',
        'Rubric-based Text Feedback System (Logical Flow Evaluation)',
        'PDF File Upload and Automatic Summarization',
        'Text/PDF-based Automatic Quiz Generation',
        'Table Data Input and AI Analysis',
        'Individual API Settings per Feature (Model, Prompt, Temperature, etc.)'
      ],
      demoUrl: 'https://how-to-use-gpt-api-ew.netlify.app/',
      githubUrl: 'https://github.com/eduwang/ew-how-to-use-gpt-api',
      status: 'Active'
    },
    {
      id: 6,
      title: 'Perplexity & YouTube Data API Integration Examples',
      description: 'Educational web application demonstrating Perplexity API and YouTube Data API usage. Compare AI search results and analyze YouTube channel data with interactive features.',
      category: ['educational', 'aiintegrated', 'llm'],
      technologies: ['Vite', 'Vanilla JavaScript', 'Chart.js', 'Perplexity API', 'OpenAI API', 'YouTube Data API'],
      features: [
        'Real-time Perplexity API vs GPT API Performance Comparison',
        'Side-by-side Search Result Display for Trend Analysis',
        'YouTube Keyword-based Popular Video Search with Thumbnails',
        'Multi-Channel Data Comparison (Subscribers, Views, Upload Count)',
        'Channel Upload Pattern Analysis with Day/Time Visualization',
      ],
      demoUrl: 'https://perplexity-youtube-api-samp-ew.netlify.app/',
      githubUrl: 'https://github.com/eduwang/perplexity-youtube-api-sample',
      status: 'Active'
    },
    {
      id: 7,
      title: 'Web Application with Google Form Integration Examples',
      description: 'A modern web application demonstrating Google Form integration with OpenAI ChatGPT API. Features include form data submission, real-time AI chatbot conversations, and seamless data collection workflows.',
      category: ['educational', 'aiintegrated', 'llm'],
      technologies: ['Vite', 'Vanilla JavaScript', 'OpenAI API'],
      features: [
        'Google Form Integration and Data Submission',
        'Real-time Interactive AI Chatbot with OpenAI ChatGPT API',
        'User Information Collection (Name, Student ID, Grade, Coding Experience)',
        'Chatbot Conversation History Recording and Submission',
        'Google Sheets Integration for Response Viewing',
      ],
      demoUrl: 'https://webapp-with-googleform-ew.netlify.app/',
      githubUrl: 'https://github.com/eduwang/ew-webapp-with-googleform',
      status: 'Active'
    },
    {
      id: 8,
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
      id: 9,
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
      id: 10,
      title: 'STEAM Chart Network (2024 Siheung Data Science Project Result)',
      description: 'An interactive web-based research report analyzing STEAM bestseller game trends from 2019-2023 through network graph visualization, featuring comprehensive data analysis, research findings, and interactive visualizations of user-defined tags and game relationships',
      category: ['educational', 'data','aiintegrated'],
      technologies: ['Vite', 'Vanilla JavaScript', 'Sigma.js', 'Graphology', 'PapaParse',],      
      features: [
        'Interactive web-based research report format',
        'Comprehensive research methodology and findings presentation',
        'Interactive network graph visualization for tag relationships',
        'Game relationship network based on Jaccard similarity',
        'Degree centrality calculation and visualization',
        'Community detection using Louvain algorithm',
        'Research results and trend analysis sections',
        'Real-time graph updates on filter changes',
      ],
      demoUrl: 'https://steam-chart-network.netlify.app/',
      githubUrl: 'https://github.com/eduwang/steam-chart-network',
      status: 'Active'
    },
    {
      id: 11,
      title: 'Naver Webtoon Thumbnail Image - Emotion Network (2025 Siheung Data Science Project Result)',
      description: "An interactive web-based research report analyzing the relationship between Naver's webtoon thumbnail colors and emotional responses. Features comprehensive data analysis, research findings, and interactive network graph visualizations of webtoon tag relationships and emotion-based connections using Jaccard similarity and community detection algorithms.",
      category: ['educational', 'data','aiintegrated'],
      technologies: ["React", "Vite", "Sigma.js", "Graphology"],
      features: [
        "Interactive research report with comprehensive data analysis",
        "Dual network visualization (tag-based and emotion-based webtoon networks)",
        "Research findings and methodology documentation",
        "Interactive graph exploration with hover effects and tooltips",
        "Community detection using Louvain algorithm with color-coded clusters",
        "Real-time cluster analysis and visualization"
      ],
      demoUrl: 'https://sh-naver-webtoon-network.netlify.app/',
      githubUrl: 'https://github.com/eduwang/naver-webtoon-image-emotion-tag-network',
      status: 'Active'
    },
    {
      id: 12,
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
      id: 13,
      title: 'Polyhedra Explorer: 8-Faced Triangular Polyhedra',
      description: 'An interactive 3D educational visualization exploring the two distinct polyhedra that can be constructed from 8 equilateral triangles. Features immersive 3D models of the Octahedron and Boat Polyhedron (Tritetrahedron) with animated net folding/unfolding sequences, interactive camera controls, and side-by-side comparison views.',
      category: ['educational', '3dvis'],
      technologies: ['Vite', 'Vanilla JavaScript', 'Three.js'],
      features: [
        'Interactive 3D Model Viewing',
        'Animated Net Folding/Unfolding',
        'Interactive Animation Slider Control',
        'Side-by-Side Polyhedra Comparison',
        'GLTF 3D Model Loading'
      ],
      demoUrl: 'https://how-many-8-hedra-ew.netlify.app/',
      githubUrl: 'https://github.com/eduwang/ew-octa-boat-hedron',
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
                onClick={() => {
                  setActiveCategory(category.id)
                  trackEvent('category_filter', { category: category.name })
                }}
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
            onClick={() => {
              setExpanded(!expanded)
              trackEvent('projects_view_toggle', { view: expanded ? 'compact' : 'expanded' })
            }}
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
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1.5"></div>
                          <span className="text-sm text-gray-600">{renderFeatureWithMath(feature)}</span>
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
                      onClick={() => trackProjectLink(project.title, 'demo')}
                    >
                      <Play className="w-4 h-4" />
                      <span>Visit Web App</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                      onClick={() => trackProjectLink(project.title, 'github')}
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
                        onClick={() => trackProjectLink(project.title, 'demo')}
                      >
                        <Play className="w-3 h-3" />
                        <span>Visit Web App</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-1 bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300 text-sm"
                        onClick={() => trackProjectLink(project.title, 'github')}
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