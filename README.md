# PLCapital.de - Trading Strategien Plattform

## 🎯 Projekt-Übersicht
- **Name**: PLCapital.de
- **Ziel**: Professionelle Plattform für Erstellung und Automatisierung von Trading-Strategien
- **Features**: Strategy Builder, Backtesting, Live Trading, Portfolio Management

## 🌐 URLs
- **GitHub**: https://github.com/pascal-afk/plcapital.de
- **Production**: (wird nach erstem Deployment verfügbar)
- **Domain**: plcapital.de (geplant)

## 📊 Aktuell implementierte Features

### ✅ Basis-Infrastruktur
- Hono + Cloudflare Pages Setup
- Responsive Landing Page
- API Health-Check Endpoint
- Static File Serving
- Git Repository & GitHub Integration

### ✅ UI-Komponenten
- **Navigation**: Responsive Header mit Branding
- **Hero Section**: Gradient-Hintergrund, CTA-Buttons
- **Features Grid**: 3 Hauptfeatures (Automatisierung, Analyse, Sicherheit)
- **Design**: Glassmorphic Style inspiriert von fanshow.ai
- **Status Badge**: Live-Status-Anzeige mit Animation

### ✅ API-Endpunkte
- `GET /api/health` - System Health Check
- `GET /api/strategies` - Strategien-Liste (Placeholder)

## 🚧 Noch nicht implementiert

### Phase 1: User Management
- [ ] Registration & Login
- [ ] JWT Authentication
- [ ] User Profiles
- [ ] Password Reset

### Phase 2: Strategy Builder
- [ ] Drag & Drop Interface
- [ ] Technical Indicators
- [ ] Conditional Logic Builder
- [ ] Strategy Templates

### Phase 3: Backtesting
- [ ] Historical Data Integration
- [ ] Backtesting Engine
- [ ] Performance Metrics
- [ ] Visual Reports

### Phase 4: Live Trading
- [ ] Broker Integrations
- [ ] Paper Trading
- [ ] Live Order Execution
- [ ] Risk Management

### Phase 5: Analytics Dashboard
- [ ] Portfolio Overview
- [ ] Performance Charts
- [ ] Trade History
- [ ] Real-time Market Data

## 🏗️ Datenarchitektur

### Geplante Datenmodelle
```typescript
// User
interface User {
  id: string
  email: string
  name: string
  created_at: Date
}

// Strategy
interface Strategy {
  id: string
  user_id: string
  name: string
  description: string
  config: StrategyConfig
  status: 'draft' | 'active' | 'paused'
  created_at: Date
}

// Trade
interface Trade {
  id: string
  strategy_id: string
  symbol: string
  type: 'buy' | 'sell'
  price: number
  quantity: number
  timestamp: Date
}
```

### Speicher-Services (geplant)
- **Cloudflare D1**: User & Strategy Data (SQLite)
- **Cloudflare KV**: Session Management & Cache
- **Cloudflare R2**: Strategy Backtest Results & Reports

## 📖 Benutzer-Anleitung

### Lokale Entwicklung

1. **Repository klonen**:
```bash
git clone https://github.com/pascal-afk/plcapital.de.git
cd plcapital.de
```

2. **Dependencies installieren**:
```bash
npm install
```

3. **Development Server starten**:
```bash
# Build first
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Test
curl http://localhost:3000
```

4. **Logs anzeigen**:
```bash
pm2 logs plcapital-de --nostream
```

### Deployment auf Cloudflare Pages

1. **Build erstellen**:
```bash
npm run build
```

2. **Zu Cloudflare deployen**:
```bash
npx wrangler pages deploy dist --project-name plcapital-de
```

3. **Mit Custom Domain**:
```bash
npx wrangler pages domain add plcapital.de --project-name plcapital-de
```

## 🔄 Git Workflow

```bash
# Änderungen committen
git add .
git commit -m "Beschreibung der Änderungen"

# Zu GitHub pushen
git push origin main

# Build & Deploy
npm run build
npx wrangler pages deploy dist --project-name plcapital-de
```

## 🚀 Deployment-Status

- **Platform**: Cloudflare Pages
- **Status**: 🚧 Initial Setup (noch nicht deployed)
- **Tech Stack**: Hono + TypeScript + TailwindCSS + Cloudflare Workers
- **Last Updated**: 2025-11-01

## 🛠️ Verfügbare Scripts

```bash
npm run dev              # Vite Dev Server
npm run dev:sandbox      # Wrangler Pages Dev (Sandbox)
npm run build            # Vite Build
npm run preview          # Preview Production Build
npm run deploy           # Build + Deploy
npm run deploy:prod      # Deploy mit Projekt-Name
npm run clean-port       # Port 3000 freigeben
npm run test             # API Test mit curl
```

## 🔐 Environment Variables

Aktuell keine Environment Variables erforderlich. Für zukünftige Features:

```env
# .dev.vars (lokal)
DATABASE_URL=...
API_KEY=...
```

## 📦 Dependencies

### Production
- `hono`: ^4.0.0 - Web Framework

### Development
- `@cloudflare/workers-types`: ^4.20250705.0
- `@hono/vite-cloudflare-pages`: ^0.4.2
- `vite`: ^5.0.0
- `wrangler`: ^3.78.0
- `typescript`: ^5.0.0

## 🤝 Contributing

Dieses Projekt wird von Pascal entwickelt. Für Fragen oder Verbesserungsvorschläge:
- **GitHub Issues**: https://github.com/pascal-afk/plcapital.de/issues
- **Email**: pascal@raluecht.com

## 📄 Lizenz

Proprietary - Alle Rechte vorbehalten

---

**Letzte Aktualisierung**: 2025-11-01  
**Version**: 1.0.0  
**Entwickler**: Pascal (@pascal-afk)
