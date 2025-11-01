import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// API Routes
app.get('/api/health', (c) => {
  return c.json({ 
    status: 'ok',
    service: 'PLCapital Trading Strategy Platform',
    timestamp: new Date().toISOString()
  })
})

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PLCapital - Trading Strategien Plattform</title>
        <meta name="description" content="Erstellen und automatisieren Sie Handelsstrategien mit KI-Unterstützung">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            /* Custom Animations */
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .animate-fade-in-up {
                animation: fadeInUp 0.6s ease-out;
            }
            
            /* Gradient Text */
            .gradient-text {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            /* Custom Card Hover */
            .feature-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .feature-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
            }
            
            /* Hero Background */
            .hero-gradient {
                background: linear-gradient(135deg, #0f1724 0%, #1a2332 50%, #0f1724 100%);
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Header -->
        <header class="bg-white shadow-sm sticky top-0 z-50">
            <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-chart-line text-2xl text-purple-600"></i>
                        <span class="text-xl font-bold gradient-text">PLCapital</span>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#features" class="text-gray-600 hover:text-purple-600 transition">Features</a>
                        <a href="#strategies" class="text-gray-600 hover:text-purple-600 transition">Strategien</a>
                        <a href="#automation" class="text-gray-600 hover:text-purple-600 transition">Automation</a>
                        <a href="#pricing" class="text-gray-600 hover:text-purple-600 transition">Pricing</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="text-gray-600 hover:text-purple-600 transition">
                            <i class="fas fa-user-circle text-2xl"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero-gradient text-white py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center animate-fade-in-up">
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">
                        Trading Strategien<br>
                        <span class="gradient-text">mit KI erstellen</span>
                    </h1>
                    <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Erstellen, testen und automatisieren Sie professionelle Handelsstrategien 
                        mit KI-Unterstützung. Keine Programmierkenntnisse erforderlich.
                    </p>
                    <div class="flex justify-center space-x-4">
                        <button class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105">
                            <i class="fas fa-rocket mr-2"></i>
                            Jetzt starten
                        </button>
                        <button class="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                            <i class="fas fa-play-circle mr-2"></i>
                            Demo ansehen
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Leistungsstarke Features
                    </h2>
                    <p class="text-xl text-gray-600">
                        Alles was Sie für erfolgreiches Trading benötigen
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div class="feature-card bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <i class="fas fa-brain text-3xl text-purple-600"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">KI-Strategie Builder</h3>
                        <p class="text-gray-600 mb-4">
                            Erstellen Sie komplexe Trading-Strategien mit KI-Unterstützung. 
                            Beschreiben Sie einfach Ihre Idee und lassen Sie die KI den Rest erledigen.
                        </p>
                        <a href="#" class="text-purple-600 font-semibold hover:text-purple-700">
                            Mehr erfahren <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>

                    <!-- Feature 2 -->
                    <div class="feature-card bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <i class="fas fa-chart-bar text-3xl text-blue-600"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Backtesting Engine</h3>
                        <p class="text-gray-600 mb-4">
                            Testen Sie Ihre Strategien mit historischen Daten. 
                            Umfassende Analysen und Performance-Metriken inklusive.
                        </p>
                        <a href="#" class="text-blue-600 font-semibold hover:text-blue-700">
                            Mehr erfahren <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>

                    <!-- Feature 3 -->
                    <div class="feature-card bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                            <i class="fas fa-robot text-3xl text-green-600"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Automation</h3>
                        <p class="text-gray-600 mb-4">
                            Automatisieren Sie Ihre Trading-Strategien und lassen Sie sie 
                            24/7 für Sie arbeiten. Vollständige Kontrolle inklusive.
                        </p>
                        <a href="#" class="text-green-600 font-semibold hover:text-green-700">
                            Mehr erfahren <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl font-bold text-white mb-4">
                    Bereit loszulegen?
                </h2>
                <p class="text-xl text-white/90 mb-8">
                    Starten Sie heute noch mit Ihrer ersten Trading-Strategie
                </p>
                <button class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105">
                    <i class="fas fa-rocket mr-2"></i>
                    Kostenlos registrieren
                </button>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-300 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8">
                    <div>
                        <div class="flex items-center space-x-2 mb-4">
                            <i class="fas fa-chart-line text-2xl text-purple-500"></i>
                            <span class="text-xl font-bold text-white">PLCapital</span>
                        </div>
                        <p class="text-gray-400">
                            Die Zukunft des algorithmischen Tradings
                        </p>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Produkt</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Features</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Pricing</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Unternehmen</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Über uns</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Blog</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Kontakt</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Legal</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-purple-400 transition">Datenschutz</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">Impressum</a></li>
                            <li><a href="#" class="hover:text-purple-400 transition">AGB</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                    <p>&copy; 2025 PLCapital. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>

        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
