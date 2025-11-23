import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Globe, Smartphone, Code, Github } from 'lucide-react'

const Applications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const applications = [
    {
      id: 1,
      title: 'Web Application 1',
      description: 'A brief description of your web application and its main features.',
      url: 'https://example.com',
      githubUrl: 'https://github.com/username/app1',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Web Application 2',
      description: 'A brief description of your web application and its main features.',
      url: 'https://example.com',
      githubUrl: 'https://github.com/username/app2',
      technologies: ['Vue', 'Node.js', 'MongoDB'],
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Web Application 3',
      description: 'A brief description of your web application and its main features.',
      url: 'https://example.com',
      githubUrl: 'https://github.com/username/app3',
      technologies: ['React', 'Python', 'PostgreSQL'],
      icon: <Code className="w-6 h-6" />
    }
  ]

  return (
    <section id="applications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            실용적이고 혁신적인 웹 애플리케이션을 개발하여 
            사용자 경험을 향상시키고 문제를 해결합니다.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              {/* App Icon/Header */}
              <div className="relative h-32 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg text-indigo-600">
                    {app.icon}
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {app.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {app.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Application</span>
                  </a>
                  <a
                    href={app.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>Visit GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">Applications Overview</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-indigo-100">Web Applications</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-indigo-100">Responsive Design</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Active</div>
                <div className="text-indigo-100">All Applications</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Applications

