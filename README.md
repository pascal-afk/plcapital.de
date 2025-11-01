# PLCapital - Trading Strategien Plattform

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://pages.cloudflare.com/)
[![Hono](https://img.shields.io/badge/Hono-Framework-blue)](https://hono.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

## 🎯 Projekt-Übersicht

**PLCapital.de** ist eine moderne, KI-gestützte Plattform für die Erstellung und Automatisierung von Handelsstrategien. Trader können ohne Programmierkenntnisse professionelle Trading-Strategien entwickeln, mit historischen Daten testen und automatisieren.

### Hauptfunktionen (geplant)
- 🤖 **KI-Strategie Builder** - Strategien mit KI-Unterstützung erstellen
- 📊 **Backtesting Engine** - Historische Performance-Tests
- 🎯 **Strategie Templates** - Vordefinierte Trading-Strategien
- ⚙️ **Automation** - 24/7 automatisierte Ausführung
- 📈 **Performance Analytics** - Umfassende Analysen und Metriken

---

## 🚀 URLs & Zugriff

### Entwicklung
- **Local Dev Server**: `http://localhost:3000`
- **API Health**: `http://localhost:3000/api/health`

### Production
- **Cloudflare Pages**: https://a07602c3.plcapital-de.pages.dev
- **API Health**: https://a07602c3.plcapital-de.pages.dev/api/health
- **Custom Domain**: plcapital.de (DNS-Konfiguration ausstehend)
- **GitHub Repository**: https://github.com/pascal-afk/plcapital.de

---

## 🏗️ Tech Stack & Architektur

### Backend
- **Framework**: [Hono](https://hono.dev/) v4 - Ultraschnelles Edge-Framework
- **Runtime**: Cloudflare Workers/Pages
- **Language**: TypeScript 5.0
- **Build Tool**: Vite 5.0

### Frontend
- **JavaScript**: Vanilla ES6+
- **Styling**: TailwindCSS (CDN)
- **Icons**: FontAwesome 6.4.0
- **Animations**: Custom CSS + Intersection Observer

### Deployment & Infrastructure
- **Hosting**: Cloudflare Pages
- **CDN**: Cloudflare Global Network
- **Dev Server**: PM2 + Wrangler Pages Dev
- **Version Control**: Git + GitHub

### Geplante Services
- **Database**: Cloudflare D1 (SQLite)
- **KV Storage**: Cloudflare KV (User Sessions)
- **AI**: Google Gemini API
- **Analytics**: Cloudflare Web Analytics

---

## 📁 Projekt-Struktur

```
webapp/
├── src/
│   └── index.tsx              # Hono App Entry Point + HTML
├── public/
│   └── static/
│       └── app.js             # Frontend JavaScript
├── dist/                      # Build Output (generiert)
│   ├── _worker.js             # Compiled Hono Worker
│   └── _routes.json           # Routing Config
├── node_modules/              # Dependencies
├── package.json               # NPM Config & Scripts
├── vite.config.ts             # Vite Build Config
├── wrangler.jsonc             # Cloudflare Config
├── tsconfig.json              # TypeScript Config
├── ecosystem.config.cjs       # PM2 Dev Server Config
├── .gitignore                 # Git Ignore Rules
├── PROJECT.md                 # Detaillierte Projekt-Dokumentation
└── README.md                  # Diese Datei
```

---

## 🛠️ Setup & Installation

### Voraussetzungen
- Node.js 18+ & npm
- Git
- Cloudflare Account (für Deployment)
- PM2 (vorinstalliert in Sandbox)

### Lokale Entwicklung starten

```bash
# 1. Repository klonen
git clone https://github.com/pascal-afk/plcapital.de.git
cd plcapital.de

# 2. Dependencies installieren
npm install

# 3. Projekt bauen
npm run build

# 4. Development Server starten (mit PM2)
pm2 start ecosystem.config.cjs

# 5. Im Browser öffnen
# http://localhost:3000
```

### Nützliche Befehle

```bash
# Build erstellen
npm run build

# Development Server (Sandbox)
npm run dev:sandbox

# Port 3000 bereinigen
npm run clean-port

# API testen
npm test
# oder: curl http://localhost:3000/api/health

# Logs anzeigen
pm2 logs plcapital-dev --nostream

# Service neu starten
pm2 restart plcapital-dev

# Service stoppen
pm2 delete plcapital-dev
```

---

## 🚀 Deployment

### Cloudflare Pages Deployment

```bash
# 1. Projekt bauen
npm run build

# 2. Auf Cloudflare Pages deployen
npm run deploy:prod

# Oder manuell:
npx wrangler pages deploy dist --project-name plcapital-de
```

### Automatisches Deployment
Nach jedem Push auf `main`:
1. GitHub Actions (geplant) triggert Build
2. Wrangler deployed zu Cloudflare Pages
3. Live-URL wird aktualisiert

### Custom Domain konfigurieren
```bash
# Domain zu Cloudflare Pages hinzufügen
npx wrangler pages domain add plcapital.de --project-name plcapital-de
```

---

## 📊 Daten-Architektur

### Aktuell (MVP)
- **Storage**: localStorage (Frontend)
- **Persistenz**: Browser-basiert, keine Backend-DB

### Geplant (Phase 2)
```
Cloudflare D1 Database (SQLite)
├── users              # User Profiles & Auth
├── strategies         # Trading Strategies
├── backtests          # Backtest Results
└── templates          # Strategy Templates

Cloudflare KV
├── sessions           # User Sessions
└── rate_limits        # API Rate Limiting
```

### Datenmodelle (siehe PROJECT.md für Details)
- User Profile
- Trading Strategy
- Backtest Result
- Trade Record

---

## 🎨 Design System

### Farben
- **Primary Gradient**: `#667eea → #764ba2` (Purple)
- **Secondary**: `#3b82f6` (Blue)
- **Success**: `#10b981` (Green)
- **Background**: `#0f1724, #1a2332` (Dark)
- **Text**: `#ffffff, #d1d5db` (White/Gray)

### Komponenten
- **Feature Cards** - Hover-Lift-Effekt mit Shadow
- **Hero Section** - Gradient Background + Animated Entrance
- **CTAs** - Purple Gradient + Scale Animation
- **Navigation** - Sticky Header mit Smooth Scroll

### Design-Referenz
Inspiriert von [fanshow.ai](https://fanshow.ai):
- Moderne Hero-Sections
- Smooth Animations
- Clean Card-Layouts
- Gradient Accents

---

## 📝 API Dokumentation

### Aktuelle Endpoints

#### Health Check
```http
GET /api/health
```

**Response**:
```json
{
  "status": "ok",
  "service": "PLCapital Trading Strategy Platform",
  "timestamp": "2025-11-01T12:00:00.000Z"
}
```

### Geplante Endpoints

#### Strategie erstellen
```http
POST /api/strategies/create
Content-Type: application/json

{
  "name": "RSI Reversal",
  "description": "RSI-based mean reversion",
  "rules": { ... }
}
```

#### Backtest ausführen
```http
POST /api/strategies/backtest
Content-Type: application/json

{
  "strategy_id": "abc123",
  "start_date": "2023-01-01",
  "end_date": "2024-01-01"
}
```

---

## 🧪 Testing

### Manuelles Testing
```bash
# API Health Check
curl http://localhost:3000/api/health

# Static Assets
curl http://localhost:3000/static/app.js
```

### Geplant
- Unit Tests (Vitest)
- E2E Tests (Playwright)
- Performance Tests (Lighthouse CI)

---

## 🔐 Sicherheit

### Implementiert
- ✅ `.gitignore` für sensitive Dateien
- ✅ Environment Variables für Secrets
- ✅ CORS für API-Routen

### Geplant
- ⏳ Rate Limiting
- ⏳ User Authentication (OAuth)
- ⏳ Input Validation
- ⏳ API Key Rotation
- ⏳ Content Security Policy

---

## 🤝 Entwicklung

### Git Workflow
```bash
# Feature entwickeln
git checkout -b feature/strategy-builder
# ... Änderungen machen ...
git add .
git commit -m "feat: Add strategy builder component"
git push origin feature/strategy-builder

# Merge in main
git checkout main
git merge feature/strategy-builder
git push origin main
```

### Commit Conventions
- `feat:` Neue Features
- `fix:` Bug-Fixes
- `docs:` Dokumentation
- `refactor:` Code-Refactoring
- `style:` Styling-Änderungen
- `test:` Tests hinzufügen

---

## 📚 Dokumentation

### Für Entwickler
- **PROJECT.md** - Detaillierte Projekt-Dokumentation (für KI-Systeme optimiert)
- **README.md** - Diese Datei (technische Übersicht)
- **Code Comments** - Inline-Dokumentation im Code

### Externe Resources
- [Hono Dokumentation](https://hono.dev/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

## 🗓️ Roadmap

### ✅ Phase 1 - Foundation (Aktuell)
- [x] Projekt-Setup
- [x] Landing Page Design
- [x] GitHub Integration
- [x] Cloudflare Setup
- [ ] Initial Deployment

### ⏳ Phase 2 - Core Features
- [ ] Strategy Builder UI
- [ ] Template System
- [ ] Backtesting Engine
- [ ] User Profile Management
- [ ] KI-Integration (Gemini)

### 📅 Phase 3 - Advanced
- [ ] Live Trading Integration
- [ ] Strategy Marketplace
- [ ] Subscription System
- [ ] Mobile App (PWA)
- [ ] Social Features

---

## 📈 Performance Ziele

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 90
- **Bundle Size**: < 200KB (gzipped)

---

## 🐛 Bekannte Issues

Keine bekannten Issues (neu gestartet).

---

## 📞 Support & Kontakt

- **GitHub Issues**: [plcapital.de/issues](https://github.com/pascal-afk/plcapital.de/issues)
- **Developer**: Pascal (pascal-afk)
- **Projekt Status**: ✅ Initial Development

---

## 📄 Lizenz

Proprietary - Alle Rechte vorbehalten

---

**Last Updated**: 2025-11-01
**Version**: 0.1.0
**Status**: 🚧 In Development
