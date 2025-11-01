# PLCapital.de - Projekt Dokumentation für KI-Agenten

## 🎯 Projekt-Übersicht

**Projekt Name**: PLCapital.de  
**Zweck**: Plattform für Erstellung und Automatisierung von Trading-Strategien  
**Status**: In aktiver Entwicklung  
**Version**: 1.0.0  
**Letzte Aktualisierung**: 2025-11-01

---

## 📋 Was ist PLCapital.de?

Eine professionelle Web-Plattform für Trader, die:
- Trading-Strategien visuell erstellen können
- Strategien automatisieren und testen können
- Echtzeit-Marktanalysen durchführen können
- Ihre Trading-Performance überwachen können

**Design-Inspiration**: fanshow.ai (modernes, glassmorphisches Design)  
**Funktionale Referenz**: https://plcapital-de-handels-system-architekt-286916261399.us-west1.run.app/

---

## 🏗️ Technologie-Stack

### Frontend
- **Framework**: Vanilla JavaScript mit Hono SSR
- **Styling**: TailwindCSS (via CDN)
- **Icons**: Font Awesome 6.4.0
- **HTTP Client**: Axios 1.6.0

### Backend
- **Framework**: Hono (Cloudflare Workers)
- **Runtime**: Cloudflare Pages
- **Language**: TypeScript
- **Build Tool**: Vite

### Deployment
- **Platform**: Cloudflare Pages
- **CDN**: Cloudflare Global Network
- **Domain**: plcapital.de (geplant)
- **Git**: GitHub Repository `pascal-afk/plcapital.de`

---

## 📁 Projektstruktur

```
webapp/
├── src/
│   └── index.tsx              # Haupt-Hono-App mit Routes
├── public/
│   └── static/
│       ├── app.js             # Frontend JavaScript
│       └── styles.css         # Custom CSS
├── migrations/                 # Datenbank-Migrationen (zukünftig)
├── dist/                      # Build Output (generiert)
├── wrangler.jsonc             # Cloudflare Konfiguration
├── vite.config.ts             # Vite Build Konfiguration
├── tsconfig.json              # TypeScript Konfiguration
├── ecosystem.config.cjs       # PM2 Konfiguration für Sandbox
├── package.json               # Dependencies & Scripts
├── PROJECT.md                 # Diese Datei
└── README.md                  # Technische Dokumentation
```

---

## ✅ Bereits implementiert (Stand: 2025-11-01)

### Phase 1: Initial Setup ✅
- [x] Hono + Cloudflare Pages Projekt-Setup
- [x] Git Repository initialisiert
- [x] GitHub Repository verbunden (`pascal-afk/plcapital.de`)
- [x] Cloudflare API Token konfiguriert
- [x] Basis-Projektstruktur erstellt

### Phase 2: Basis-UI ✅
- [x] Landing Page mit Hero Section
- [x] Responsive Navigation
- [x] Features Grid (3 Hauptfeatures)
- [x] Glassmorphic Design (fanshow.ai-inspiriert)
- [x] Gradient-Hintergrund (Slate/Purple)
- [x] Status-Badge mit Animation

### Phase 3: API Grundlagen ✅
- [x] Health-Check Endpoint (`/api/health`)
- [x] Strategies Endpoint Placeholder (`/api/strategies`)
- [x] CORS-Konfiguration für API
- [x] Static File Serving (`/static/*`)

---

## 🚧 Noch nicht implementiert

### Phase 4: User Authentication
- [ ] User Registration & Login
- [ ] JWT-basierte Authentifizierung
- [ ] Session Management
- [ ] Passwort-Reset-Funktion

### Phase 5: Strategy Builder
- [ ] Visueller Strategie-Editor (Drag & Drop)
- [ ] Strategy Templates
- [ ] Technische Indikatoren (MA, RSI, MACD, etc.)
- [ ] Bedingungen & Trigger-System
- [ ] Strategy Preview/Visualization

### Phase 6: Backtesting Engine
- [ ] Historische Marktdaten-Integration
- [ ] Backtesting-Algorithmus
- [ ] Performance-Metriken (Sharpe Ratio, Drawdown, etc.)
- [ ] Backtesting-Reports & Charts

### Phase 7: Live Trading Integration
- [ ] Broker-API-Integrationen (Interactive Brokers, Alpaca, etc.)
- [ ] Paper Trading Mode
- [ ] Live Order Execution
- [ ] Position Management
- [ ] Risk Management Controls

### Phase 8: Dashboard & Analytics
- [ ] User Dashboard
- [ ] Portfolio Performance Charts
- [ ] Trade History
- [ ] Real-time Market Data
- [ ] Alerts & Notifications

### Phase 9: Database Integration
- [ ] Cloudflare D1 Setup
- [ ] User Data Models
- [ ] Strategy Storage
- [ ] Trade History Storage
- [ ] Performance Metrics Storage

---

## 🎨 Design-Prinzipien

### Farb-Schema
- **Primär**: Purple/Pink Gradients (#a855f7 → #ec4899)
- **Hintergrund**: Dark Slate (#0f172a, #1e1b4b)
- **Akzente**: Purple-600 (#9333ea)
- **Text**: White & Gray-300

### UI-Komponenten Stil
- **Glassmorphism**: `bg-white/5 backdrop-blur-lg`
- **Borders**: Subtile weiße Borders (`border-white/10`)
- **Hover Effects**: Scale & Color Transitions
- **Icons**: Font Awesome mit Purple-Akzenten

### Responsive Design
- **Mobile First**: TailwindCSS responsive utilities
- **Breakpoints**: sm (640px), md (768px), lg (1024px)

---

## 🔄 Automatischer Workflow

**WICHTIG**: Bei jeder Änderung MUSS dieser Workflow durchgeführt werden:

1. **Code ändern** → Dateien bearbeiten
2. **Git Commit** → `git add . && git commit -m "Beschreibung"`
3. **GitHub Push** → `git push origin main`
4. **Build** → `npm run build`
5. **Cloudflare Deploy** → `npx wrangler pages deploy dist --project-name plcapital-de`

**Automatisierungs-Script** (geplant):
```bash
#!/bin/bash
# deploy.sh - Automatisches Deployment
git add .
git commit -m "$1"
git push origin main
npm run build
npx wrangler pages deploy dist --project-name plcapital-de
```

---

## 📊 API-Endpunkte (aktuell)

### GET `/api/health`
**Status**: ✅ Implementiert  
**Beschreibung**: Health-Check für API  
**Response**:
```json
{
  "status": "ok",
  "timestamp": "2025-11-01T...",
  "service": "PLCapital Trading Platform"
}
```

### GET `/api/strategies`
**Status**: 🚧 Placeholder  
**Beschreibung**: Listet alle Strategien  
**Response**:
```json
{
  "strategies": [],
  "message": "Trading strategies endpoint - coming soon"
}
```

---

## 🔐 Authentifizierung & Secrets

### GitHub
- **Setup**: `setup_github_environment` bereits ausgeführt
- **User**: pascal-afk
- **Repo**: plcapital.de

### Cloudflare
- **Setup**: `setup_cloudflare_api_key` bereits ausgeführt
- **Account**: pascal@raluecht.com
- **API Token**: Als Environment Variable konfiguriert

---

## 🚀 Nächste Schritte (Empfohlen)

1. **Immediate**: Initial Deployment auf Cloudflare Pages
2. **Short-term**: User Authentication System
3. **Mid-term**: Strategy Builder Interface
4. **Long-term**: Live Trading Integration

---

## 📝 Wichtige Hinweise für KI-Agenten

### Deployment-Workflow
- **IMMER** zuerst `npm run build` ausführen
- **IMMER** nach Änderungen committen und pushen
- **IMMER** nach GitHub Push deployen
- **PROJECT.md** bei größeren Änderungen aktualisieren

### Code-Konventionen
- TypeScript für Backend (src/)
- Vanilla JS für Frontend (public/static/)
- Hono für API Routes
- TailwindCSS für Styling (CDN)

### Cloudflare-Spezifika
- **Kein Node.js `fs` Modul** → Nutze Cloudflare D1/KV/R2
- **Kein `serveStatic` von @hono/node-server** → Nutze `hono/cloudflare-workers`
- **Statische Dateien** → Müssen in `public/` sein

### Testing
- Lokal: `npm run build && pm2 start ecosystem.config.cjs`
- Test: `curl http://localhost:3000`
- Logs: `pm2 logs plcapital-de --nostream`

---

## 🔗 Wichtige Links

- **GitHub Repo**: https://github.com/pascal-afk/plcapital.de
- **Referenz-Projekt**: https://plcapital-de-handels-system-architekt-286916261399.us-west1.run.app/
- **Design-Inspiration**: fanshow.ai
- **Cloudflare Dashboard**: https://dash.cloudflare.com/

---

## 📞 Projekt-Owner

**Name**: Pascal  
**Email**: pascal@raluecht.com  
**GitHub**: pascal-afk

---

_Dieses Dokument wird automatisch bei jeder größeren Projektänderung aktualisiert._
