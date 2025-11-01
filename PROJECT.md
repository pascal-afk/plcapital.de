# PLCapital - Trading Strategien Plattform

## 🎯 Projektübersicht

**PLCapital.de** ist eine KI-gestützte Plattform zur Erstellung und Automatisierung von Handelsstrategien für Trader. Die Plattform ermöglicht es Nutzern ohne Programmierkenntnisse, professionelle Trading-Strategien zu entwickeln, zu testen und zu automatisieren.

### Projektstatus
- **Phase**: Initial Development ✅ DEPLOYED
- **Version**: 0.1.0
- **Letztes Update**: 2025-11-01
- **Produktions-URL**: https://a07602c3.plcapital-de.pages.dev
- **API Health**: https://a07602c3.plcapital-de.pages.dev/api/health
- **GitHub**: https://github.com/pascal-afk/plcapital.de

---

## 📋 Funktionale Anforderungen

### Kernfunktionen (Priorität 1 - In Entwicklung)
1. ✅ **Landing Page** - Moderne, ansprechende Startseite mit Hero-Section
2. ⏳ **KI-Strategie Builder** - Interaktive Strategie-Erstellung mit KI-Unterstützung
3. ⏳ **Backtesting Engine** - Historische Tests mit Performance-Metriken
4. ⏳ **Strategie-Templates** - Vordefinierte Strategien (RSI, MA-Cross, MACD, etc.)
5. ⏳ **User Profile Management** - Speicherung von Präferenzen und Risikoprofil

### Features (Priorität 2 - Geplant)
6. ⏳ **Trading Automation** - 24/7 automatisierte Strategieausführung
7. ⏳ **Performance Dashboard** - Echtzeit-Monitoring und Analytics
8. ⏳ **Strategie Marketplace** - Teilen und Veröffentlichen von Strategien
9. ⏳ **Educational Content** - KI-generierte Trading-Tipps und Artikel
10. ⏳ **Subscription System** - Freemium-Modell mit Backtest-Limits

### Erweiterte Features (Priorität 3 - Zukünftig)
11. ⏳ **Live Trading Integration** - Broker-API-Anbindung
12. ⏳ **Social Trading** - Community-Features und Strategy Sharing
13. ⏳ **Mobile App** - iOS/Android Progressive Web App
14. ⏳ **Coaching & Support** - Live-Chat und Voice-Calls mit KI

---

## 🏗️ Technische Architektur

### Tech Stack
- **Framework**: Hono (Edge-first Web Framework)
- **Runtime**: Cloudflare Workers/Pages
- **Frontend**: Vanilla JavaScript + TailwindCSS
- **Backend**: TypeScript + Hono API Routes
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions (geplant)
- **Monitoring**: Cloudflare Analytics

### Projektstruktur
```
/home/user/webapp/
├── src/
│   └── index.tsx           # Hono App Entry Point
├── public/
│   └── static/
│       └── app.js          # Frontend JavaScript
├── dist/                   # Build Output (auto-generiert)
├── package.json
├── vite.config.ts
├── wrangler.jsonc          # Cloudflare Config
├── tsconfig.json
├── ecosystem.config.cjs    # PM2 Dev Server Config
├── .gitignore
├── PROJECT.md              # Diese Datei
└── README.md               # Technische Dokumentation

```

### API Endpoints (Current)
- `GET /` - Landing Page
- `GET /api/health` - Health Check

### API Endpoints (Geplant)
- `POST /api/strategies/create` - Neue Strategie erstellen
- `POST /api/strategies/backtest` - Backtest ausführen
- `GET /api/strategies/:id` - Strategie abrufen
- `POST /api/strategies/:id/publish` - Strategie veröffentlichen
- `GET /api/templates` - Verfügbare Templates abrufen
- `POST /api/user/profile` - User-Profil speichern

---

## 🎨 Design System

### Farben (basierend auf fanshow.ai)
- **Primary**: Purple/Violet (#667eea → #764ba2)
- **Secondary**: Blue (#3b82f6)
- **Accent**: Green (#10b981)
- **Background**: Dark (#0f1724, #1a2332)
- **Text**: White/Gray (#ffffff, #d1d5db)

### Typografie
- **Headings**: Bold, große Schrift (48-60px)
- **Body**: 16-18px, gray-600
- **CTAs**: Semibold, 18px

### Komponenten
- **Feature Cards**: Hover-Effekt mit lift + shadow
- **Hero Section**: Gradient background + animated entrance
- **CTAs**: Purple gradient, hover scale animation
- **Icons**: FontAwesome 6.4.0

---

## 📊 Datenmodelle (Geplant)

### User Profile
```typescript
{
  id: string
  name: string
  email: string
  persona: "Conservative" | "Balanced" | "Aggressive"
  risk_tolerance: number (1-10)
  preferences: {
    markets: string[]
    timeframes: string[]
  }
  created_at: timestamp
}
```

### Trading Strategy
```typescript
{
  id: string
  user_id: string
  name: string
  description: string
  rules: {
    entry: Rule[]
    exit: Rule[]
  }
  indicators: Indicator[]
  backtest_results: BacktestResult
  is_published: boolean
  created_at: timestamp
}
```

### Backtest Result
```typescript
{
  id: string
  strategy_id: string
  performance: {
    total_return: number
    sharpe_ratio: number
    max_drawdown: number
    win_rate: number
  }
  equity_curve: DataPoint[]
  trades: Trade[]
  executed_at: timestamp
}
```

---

## 🔄 Entwicklungs-Workflow

### Standard Workflow
1. **Änderungen machen** im Code
2. **Git Commit** mit aussagekräftiger Message
3. **GitHub Push** automatisch
4. **Cloudflare Deploy** nach Push
5. **Testen** der Live-URL
6. **Dokumentation updaten** (PROJECT.md, README.md)

### Git Workflow
```bash
# Änderungen committen
git add .
git commit -m "feat: Beschreibung der Änderung"
git push origin main

# Deployment (automatisch nach Push)
npm run deploy:prod
```

### Lokale Entwicklung
```bash
# Build erstellen
npm run build

# Development Server starten
pm2 start ecosystem.config.cjs

# Logs anzeigen
pm2 logs plcapital-dev --nostream

# Service neu starten
fuser -k 3000/tcp && npm run build && pm2 restart plcapital-dev
```

---

## 🚀 Deployment Status

### Aktuelle Umgebungen
- **Development**: PM2 + Wrangler Pages Dev (Port 3000)
- **Production**: TBD (Cloudflare Pages)

### Deployment Checklist
- ✅ GitHub Repository verbunden
- ✅ Cloudflare API Key konfiguriert
- ⏳ Cloudflare Pages Projekt erstellt
- ⏳ Custom Domain (plcapital.de) verknüpft
- ⏳ CI/CD Pipeline eingerichtet

---

## 📝 Offene Aufgaben (TODO)

### Sofort (Sprint 1)
1. ⏳ Strategy Builder UI entwickeln
2. ⏳ Template-System implementieren
3. ⏳ Backtesting Mock-Engine erstellen
4. ⏳ User Profile Storage (localStorage)
5. ⏳ Cloudflare Pages Deployment durchführen

### Kurzfristig (Sprint 2)
6. ⏳ KI-Integration (Gemini API) für Strategy Generation
7. ⏳ Performance Charts mit Chart.js
8. ⏳ Strategie-Export (Python Code Download)
9. ⏳ Responsive Mobile Design
10. ⏳ Cloudflare D1 Database für Persistenz

### Mittelfristig (Sprint 3+)
11. ⏳ Subscription System mit Stripe
12. ⏳ Strategy Marketplace
13. ⏳ Real-time Dashboard mit WebSockets
14. ⏳ Broker API Integration
15. ⏳ Advanced Analytics

---

## 🔐 Sicherheit & Best Practices

### Implementiert
- ✅ .gitignore für sensitive Dateien
- ✅ Environment Variables für API Keys
- ✅ CORS Configuration für API

### Geplant
- ⏳ Rate Limiting für API
- ⏳ User Authentication (OAuth)
- ⏳ API Key Rotation
- ⏳ Input Validation & Sanitization
- ⏳ HTTPS Erzwingung

---

## 📚 Referenzen

### Design Inspiration
- **fanshow.ai** - Moderne UI/UX, Animations, Layout-Struktur
  - Hero-Section mit großen Headlines
  - Feature Cards mit Hover-Effekten
  - Gradient Backgrounds
  - Smooth Animations

### Funktionale Referenz
- **Eigenes Projekt** (https://plcapital-de-handels-system-architekt-286916261399.us-west1.run.app/)
  - Strategy Builder Flow
  - Template System
  - Backtesting Engine
  - KI-Integration (Gemini)
  - User Profile Management

---

## 🤝 Entwicklernotizen

### Für andere KI-Systeme
Dieses Projekt ist so strukturiert, dass KI-Assistenten schnell verstehen können:
- **Was**: Trading-Strategie-Plattform mit KI
- **Wo**: Cloudflare Pages + Hono Framework
- **Wie**: TypeScript Backend, Vanilla JS Frontend
- **Status**: Initiale Entwicklung, Landing Page live
- **Next Steps**: Strategy Builder, Backtesting, KI-Integration

### Wichtige Konventionen
- **Commits**: Conventional Commits (feat:, fix:, docs:, refactor:)
- **Branches**: `main` für Production
- **Deployment**: Automatisch nach Push
- **Dokumentation**: Immer PROJECT.md + README.md updaten

### Performance Ziele
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 90

---

## 📞 Kontakt & Support

- **GitHub**: https://github.com/pascal-afk/plcapital.de
- **Developer**: Pascal
- **Plattform**: Cloudflare Pages + Hono

---

**Zuletzt aktualisiert**: 2025-11-01
**Nächstes Review**: Nach Sprint 1 Completion
