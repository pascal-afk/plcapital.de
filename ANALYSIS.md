# PLCapital.de - Referenzprojekt-Analyse & Entwicklungsplan

**Datum**: 2025-11-01  
**Analysiert**: Referenzprojekt + Trading Engines  
**Status**: Bereit für Implementierung

---

## 📊 Referenzprojekt-Analyse

### Quelle
**URL**: https://plcapital-de-handels-system-architekt-286916261399.us-west1.run.app/

### Hauptfunktionen

#### 1. **AI-gestützter Strategy Builder** 🤖
- **Komponenten**: 
  - Regel-basiertes System (Entry/Exit Rules)
  - Conditions (Indicator, Parameters, Operator, Value)
  - Actions (BUY/SELL mit Amount %)
  - Universe Selection (NASDAQ, Europa, etc.)
  - Timeframe Selection (Daily, Hourly, Monthly)

- **Datenmodell**:
```typescript
interface Rule {
  id: string
  type: 'entry' | 'exit'
  conditions: Condition[]
  action: Action
}

interface Condition {
  indicator: string  // 'SMA', 'RSI', 'MACD', etc.
  parameters: string // '50', '14', '12,26,9'
  operator: string   // 'kreuzt über', '>', '<', '='
  value: string      // 'SMA(200)', '70', numeric
}

interface Action {
  id: string
  type: 'BUY' | 'SELL'
  amount: string  // '100%', '50%'
}
```

#### 2. **AI-generierte Backtests** 🧪
- Verwendet **Google Gemini AI** (gemini-2.5-pro, gemini-flash)
- Generiert Python-Backtestcode (yfinance, backtesting.py)
- Mock/AI-simulierte Backtest-Ergebnisse
- Equity Curve (60 Monate Simulation)
- Performance-Metriken (Sharpe, Drawdown, Win Rate)

#### 3. **Strategy Templates** 📋
Vordefinierte Strategien (20+):
- Golden Cross (SMA 50/200)
- RSI Mean Reversion
- MACD Momentum Trader
- Bollinger Bands Breakout
- EMA Ribbon Strategy
- ATR Volatility Strategy
- Volume Breakout
- Stochastic Oscillator
- Pivot Point Trading
- Und viele mehr...

#### 4. **Technische Indikatoren** 📈
- **Trend**: SMA, EMA, MACD, ADX
- **Momentum**: RSI, Stochastic, ROC
- **Volatilität**: Bollinger Bands, ATR
- **Volume**: Volume, VWAP
- **Support/Resistance**: Pivot Points

#### 5. **UI/UX Design** 🎨
- **Stil**: Google Sans Font, Utility Classes (Tailwind-ähnlich)
- **Layout**: Header + View-based Navigation + Footer
- **Views**: Welcome, Dashboard, Builder, Results, Education, Coaching
- **Modals**: Chat, Subscription, Feedback
- **Cards**: Templates, Personas
- **Responsive**: Mobile-friendly

#### 6. **Zusatz-Features** ✨
- User Profile & Preferences
- Education Content (AI-generierte Artikel)
- Trading Tips
- Coaching/Voice Call (geplant)
- Subscription System (Freemium)
- Strategy Marketplace
- Wealth Management Page

---

## 🔧 Trading Engines - Recherche

### Python-basierte Engines (Backend/API)

#### 1. **Zipline / Zipline-Reloaded** ⭐⭐⭐⭐⭐
- **Stars**: ~17k (quantopian/zipline)
- **Status**: Zipline-Reloaded aktiv maintained (2025)
- **Typ**: Event-driven Backtesting Engine
- **Features**:
  - Professional-grade Backtesting
  - Slippage & Commission Models
  - Live Trading Support (Alpaca, Interactive Brokers)
  - Daily & Minute-level Data
  - Pipeline API für Data Ingestion
- **Deployment**: 
  - CLI-Tool für Live-Trading (zipline → Alpaca/IBKR)
  - Python-Backend als Microservice
- **Use Case**: **Empfohlen für Production-Grade Backtesting**

#### 2. **Backtrader** ⭐⭐⭐⭐
- Sehr flexible Event-driven Engine
- Indicators Library (100+)
- Live Trading Support
- Cerebro Engine (Strategy Runner)

#### 3. **VectorBT** ⭐⭐⭐⭐
- Numpy-basiert, extrem schnell
- Vectorized Backtesting
- Gut für Parameter-Optimization

#### 4. **Backtesting.py** ⭐⭐⭐
- Einfache API, pandas-basiert
- Gut für Prototyping
- Keine Live-Trading Features

### JavaScript/TypeScript Engines (Browser)

#### 1. **Grademark** ⭐⭐⭐
- **GitHub**: Grademark/grademark
- **Typ**: TypeScript Backtesting API
- **Features**:
  - Entry/Exit Rules (JavaScript Functions)
  - Intrabar Logic (Stop-Loss, Profit-Target, Trailing Stop)
  - Short Selling Support
  - Data-Forge Integration (DataFrame/Series)
  - Indicators via data-forge-indicators
  - Monte-Carlo Simulation
  - Parameter Optimization (Grid Search, Hill-Climb)
  - Walk-Forward Optimization
  - Equity Curve & Drawdown Computation
  - Plotting via data-forge-plot
- **Limitations**:
  - Keine native Fees/Slippage (muss selbst implementiert werden)
  - Single Instrument (kein Portfolio)
  - Primär für Node.js (Browser möglich mit Anpassungen)
- **Use Case**: **Gut für Client-Side Prototyping**

#### 2. **TradingView-API**
- Real-time Stock Data von TradingView
- Keine Backtesting-Engine, nur Data Provider

#### 3. **Custom Lightweight Solutions**
- Für Browser: Einfache Backtesting-Logic selbst implementieren
- Technische Indikatoren: `technicalindicators` (npm)
- Charts: Lightweight Charts (TradingView), Chart.js

---

## 🎯 Entwicklungsstrategie für PLCapital.de

### Phase 1: Foundation (Woche 1-2) ✅ **AKTUELL**
- [x] Projekt-Setup (Hono + Cloudflare)
- [x] GitHub Integration
- [x] Deployment Pipeline
- [x] Landing Page
- [x] Domain plcapital.de verbunden
- [ ] Cloudflare D1 Datenbank Setup
- [ ] User Authentication (JWT)

### Phase 2: Strategy Builder (Woche 2-3)
**Architektur-Entscheidung**: Hybrid Approach

#### Frontend (Browser)
- **UI**: Visual Strategy Builder (ähnlich Referenzprojekt)
- **Komponenten**:
  - Rule Builder (Add/Edit/Delete Rules)
  - Condition Builder (Indicator, Operator, Value)
  - Template Gallery (vordefinierte Strategien)
  - Preview Pane (Strategie-Zusammenfassung)
- **Technische Indikatoren Library**: 
  - `technicalindicators` (npm) für Browser
  - SMA, EMA, RSI, MACD, Bollinger Bands, etc.

#### Backend (Cloudflare Workers)
- **API Endpoints**:
  - `POST /api/strategies` - Strategie speichern
  - `GET /api/strategies` - Strategien auflisten
  - `GET /api/strategies/:id` - Strategie laden
  - `DELETE /api/strategies/:id` - Strategie löschen
  - `POST /api/strategies/:id/backtest` - Backtest starten
  - `GET /api/templates` - Templates laden

- **Datenbank (Cloudflare D1)**:
```sql
CREATE TABLE strategies (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  rules JSON NOT NULL,
  universe TEXT,
  timeframe TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE backtests (
  id TEXT PRIMARY KEY,
  strategy_id TEXT NOT NULL,
  results JSON NOT NULL,
  equity_curve JSON,
  performance_metrics JSON,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (strategy_id) REFERENCES strategies(id)
);
```

### Phase 3: Backtesting Engine (Woche 3-4)
**Zwei Ansätze** (parallel implementieren):

#### Ansatz A: AI-generierte Backtests (MVP - Schnell) 🤖
- **Wie Referenzprojekt**: Google Gemini AI
- **Vorteile**: 
  - Schnell implementierbar
  - Keine komplexe Backend-Infrastruktur
  - Gut für Prototyping und Education
- **Nachteile**:
  - Nicht 100% akkurat
  - API-Kosten
  - Abhängigkeit von AI-Service
- **Implementation**:
  - Cloudflare Worker ruft Google AI API auf
  - Generiert Python-Code + Mock-Ergebnisse
  - Frontend zeigt Ergebnisse visuell

#### Ansatz B: JavaScript Backtesting (Grademark-basiert) 📊
- **Client-Side Backtesting**
- **Vorteile**:
  - Echte Berechnungen
  - Keine Backend-Last
  - Schnelles Feedback
  - Kostenlos
- **Nachteile**:
  - Browser-Performance-Limits
  - Große Datenmengen problematisch
- **Implementation**:
  - Grademark Integration (oder custom lightweight engine)
  - Historical Data via API (Alpha Vantage, Twelve Data)
  - Backtest läuft im Browser
  - Ergebnisse speichern in D1

#### Ansatz C: Python Backend Microservice (Production) 🚀
- **Für später (Live Trading)**
- **Stack**: Zipline-Reloaded + FastAPI
- **Deployment**: Cloud Run / Cloud Functions
- **Features**:
  - Professional Backtesting
  - Live Trading Integration
  - Broker-Anbindung (Alpaca, IBKR)
  - Real-time Data Feeds

### Phase 4: Dashboard & Analytics (Woche 4-5)
- User Dashboard
- Strategy Performance Overview
- Equity Curves (Lightweight Charts)
- Trade History Table
- Performance Metrics Cards
- Portfolio View

### Phase 5: Advanced Features (Woche 5+)
- Strategy Optimization (Parameter Tuning)
- Monte-Carlo Simulation
- Walk-Forward Analysis
- Paper Trading Mode
- Strategy Marketplace
- Social Features (Share Strategies)

---

## 🛠️ Technologie-Entscheidungen

### Frontend
- **Framework**: Vanilla JS + Hono SSR (wie aktuell)
- **Styling**: TailwindCSS (CDN)
- **Charts**: Lightweight Charts (TradingView)
- **Indicators**: `technicalindicators` (npm)
- **Backtesting**: Grademark (adapted) oder Custom Lightweight

### Backend
- **API**: Hono + Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2 (für große Backtest-Ergebnisse)
- **Cache**: Cloudflare KV (für Market Data)
- **AI**: Google Gemini API (für AI-Features)

### Data Providers (Market Data)
- **Option 1**: Alpha Vantage (Free Tier: 500 calls/day)
- **Option 2**: Twelve Data (Free: 800 calls/day)
- **Option 3**: Yahoo Finance (via yfinance-API-Wrapper)
- **Option 4**: Polygon.io (Free: 5 calls/min)

### Python Backend (für später)
- **Engine**: Zipline-Reloaded
- **Framework**: FastAPI
- **Deployment**: Google Cloud Run
- **Broker**: Alpaca (Paper Trading Free)

---

## 📋 Nächste Schritte (Priorisiert)

### Sofort (heute/morgen)
1. ✅ Referenzprojekt analysiert
2. ✅ Trading Engines recherchiert
3. **Next**: Cloudflare D1 Datenbank Setup
4. **Next**: Strategy Builder UI entwickeln (Basis)

### Diese Woche
5. Template System implementieren (20+ vordefinierte Strategien)
6. Rule Builder Interface (Add/Edit Rules)
7. Indicator Dropdown (SMA, EMA, RSI, MACD, etc.)
8. Strategy Preview & Save to D1

### Nächste Woche
9. AI-generierte Backtests (Google Gemini)
10. Backtest Results Display
11. Equity Curve Visualization
12. Performance Metrics Cards

---

## 💡 Architektur-Empfehlung

### MVP (4 Wochen)
```
┌─────────────────────────────────────────────┐
│           Frontend (Browser)                │
│  - Strategy Builder UI                      │
│  - Template Gallery                         │
│  - Lightweight Backtesting (Grademark)      │
│  - Charts (Lightweight Charts)              │
└─────────────────┬───────────────────────────┘
                  │ HTTPS/REST
┌─────────────────▼───────────────────────────┐
│    Cloudflare Workers + Hono (Edge)         │
│  - API Routes (/api/strategies, /backtest)  │
│  - Google Gemini AI Integration             │
│  - JWT Authentication                       │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│         Cloudflare D1 (SQLite)              │
│  - Users, Strategies, Backtests             │
└─────────────────────────────────────────────┘
```

### Production (später)
```
┌─────────────────────────────────────────────┐
│           Frontend (Browser)                │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│    Cloudflare Workers (Edge API)            │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│  Python Microservice (Cloud Run)            │
│  - Zipline-Reloaded                         │
│  - Professional Backtesting                 │
│  - Broker Integration (Alpaca/IBKR)         │
└─────────────────────────────────────────────┘
```

---

## 📚 Ressourcen

### Referenzen
- **Referenzprojekt**: https://plcapital-de-handels-system-architekt-286916261399.us-west1.run.app/
- **Zipline-Reloaded**: https://github.com/stefan-jansen/zipline-reloaded
- **Grademark**: https://github.com/Grademark/grademark
- **Lightweight Charts**: https://tradingview.github.io/lightweight-charts/

### APIs & Libraries
- **Technical Indicators**: https://www.npmjs.com/package/technicalindicators
- **Market Data**: https://www.alphavantage.co/documentation/
- **AI**: https://ai.google.dev/gemini-api/docs

### Inspiration
- **fanshow.ai**: Design-Referenz (glassmorphic, modern)
- **TradingView**: Strategy Tester (Referenz für UI/UX)

---

**Bereit für Entwicklung! 🚀**

Möchtest du mit der D1-Datenbank starten oder direkt mit dem Strategy Builder Interface?
