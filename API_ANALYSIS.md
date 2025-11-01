# API-Analyse: Marktdaten & Trading-Anbindung

**Datum**: 2025-11-01  
**Zweck**: Entscheidungsgrundlage für PLCapital.de  
**Status**: Vollständige Analyse

---

## 📊 Übersicht

Für PLCapital.de benötigen wir zwei Arten von APIs:
1. **Market Data APIs** - Historische & Echtzeit-Kursdaten
2. **Trading APIs** - Broker-Anbindung für Live Trading

---

## 🏦 Trading APIs - Broker-Anbindung

### 1. Interactive Brokers (IBKR) ⭐⭐⭐⭐

#### Übersicht
- **Typ**: Professional Broker mit TWS API & Client Portal Web API
- **Märkte**: Stocks, Options, Futures, Forex, Crypto (100+ Börsen weltweit)
- **Zielgruppe**: Professional Traders & Algorithmic Trading

#### API-Varianten

**A) TWS API (Trader Workstation API)**
- Socket-basiert (TCP)
- Lokale Installation erforderlich
- Sehr mächtig, komplexe Integration
- Python, Java, C++, C# SDKs

**B) Client Portal Web API (REST/WebSocket)** ✅ **EMPFOHLEN**
- REST API + WebSocket
- Base URL: `https://localhost:5000/v1/api` (mit CP Gateway)
- OAuth 1.0a / OAuth 2.0 / SSO Support
- JavaScript/Node.js kompatibel

#### Authentication
- **Client Portal Gateway (CPGW)**: Java-basierter lokaler Reverse Proxy
- **2FA obligatorisch**
- **Session Management**: 
  - Read-only Portal Session
  - Brokerage Session (für Trading)
  - 24h Lifetime, 6min Timeout ohne Activity
  - Keepalive: `/tickle` alle 1 Minute

#### Trading Features
- **REST Endpoints**: `/iserver/account/orders`, `/iserver/account/pnl`
- **Order Types**: Market, Limit, Stop, Stop-Limit, Trailing Stop, etc.
- **Alerts & Automation**: Alert Management, Conditional Orders
- **WebSocket**: Real-time Order Updates, Positions, P&L

#### Market Data
- **Historical**: `/iserver/marketdata/history`
- **Real-time**: `/iserver/marketdata/snapshot`
- **Scanner**: `/iserver/scanner/params`, `/iserver/scanner/run`
- **Subscription Required**: Market Data separate kostenpflichtig

#### Rate Limits ⚠️
- **Global**: 10 requests/second
- **Per Endpoint**: Variiert (z.B. Orders: 1 req/5sec)
- **Penalty**: HTTP 429 → IP blockiert für 15 Min
- **Strict Enforcement**: Mehrfache Verstöße = permanente Blockierung

#### Kosten
- **API**: Kostenlos (keine API-Gebühren)
- **Konto**: IBKR Pro Account erforderlich
- **Market Data**: Subscription-basiert (username-gebunden)
- **Kommissionen**: Tiered Pricing (ab $0.0035/Aktie)

#### Paper Trading
- ✅ Unterstützt (Paper Trading Username)
- ✅ Real-time Market Data für Tests
- ⚠️ Demo Accounts können keine Daten abonnieren

#### Account Requirements
- **Kontotyp**: Nur IBKR Pro (nicht Lite)
- **Funded Account**: Muss finanziert sein
- **Fully Activated**: Vollständige Aktivierung erforderlich
- **Java Runtime**: JRE 8 update 192+ für CP Gateway

#### Pros
- ✅ Professional-grade Trading Platform
- ✅ 100+ Börsen weltweit
- ✅ Niedrige Kommissionen
- ✅ Alle Asset-Klassen (Stocks, Options, Futures, Forex)
- ✅ Paper Trading Support
- ✅ REST API + WebSocket

#### Cons
- ❌ Komplexe Setup (CP Gateway + 2FA)
- ❌ Nur IBKR Pro Accounts
- ❌ Market Data Subscriptions extra
- ❌ Strict Rate Limits
- ❌ Session Management komplex
- ❌ Keine offiziellen JS/TS SDKs

---

### 2. Alpaca ⭐⭐⭐⭐⭐ **EMPFOHLEN FÜR MVP**

#### Übersicht
- **Typ**: Developer-friendly Broker & Market Data API
- **Märkte**: US Stocks, Crypto
- **Zielgruppe**: Developers, Algo Traders, FinTech Apps

#### API Features
- **REST API**: Clean, modern REST API
- **WebSocket**: Real-time Market Data & Trade Updates
- **Paper Trading**: ✅ Kostenlos, ohne echtes Konto
- **Live Trading**: Brokerage Account verfügbar

#### Authentication
- **API Keys**: Simple Key-basiert (Key ID + Secret)
- **Separate Keys**: Paper Trading & Live Trading
- **No 2FA hassle**: Einfache Integration

#### Trading Features
- **Order Types**: Market, Limit, Stop, Stop-Limit, Trailing Stop
- **Fractional Shares**: 2,000+ US Stocks
- **Crypto Trading**: 24/7 Trading
- **Order Management**: Full CRUD über REST API

#### Market Data
- **Real-time**: WebSocket Streams (Trades, Quotes, Bars)
- **Historical**: REST API (Bars, Trades, Quotes)
- **Free Tier**: Paper Trading nutzt echte Real-time Daten
- **IEX Data**: Free real-time für alle Nutzer
- **SIP Data**: Premium für professionelle Feeds

#### Rate Limits
- **Trading API**: 200 requests/minute (Free Paper)
- **Market Data**: Unlimited WebSocket Streams (Free IEX)
- **Generous Limits**: Developer-friendly

#### Kosten
- **Paper Trading**: ✅ 100% Kostenlos
- **Market Data (Free)**: IEX real-time für Paper Trading
- **Market Data (Paid)**: SIP Level 1/2 für professionelle Daten
- **Live Trading**: Commission-free (US Stocks)
- **Crypto**: Competitive spreads

#### Paper Trading
- ✅ Unbegrenzt, kostenlos
- ✅ Echte Real-time Market Data (IEX)
- ✅ Keine Kontoeröffnung erforderlich
- ✅ Nur Email-Registrierung

#### Account Requirements
- **Paper Only**: Nur Email
- **Live Trading**: KYC/Verifizierung erforderlich
- **US Residents**: Volle Features
- **International**: Eingeschränkt (Crypto verfügbar)

#### JavaScript/TypeScript Support
- **Official SDK**: `@alpacahq/alpaca-trade-api` (npm)
- **TypeScript**: Vollständig typisiert
- **Examples**: Umfangreiche Dokumentation & Samples

#### Pros
- ✅ Extrem Developer-friendly
- ✅ Paper Trading kostenlos mit echten Daten
- ✅ Einfache API Keys (keine 2FA, kein Gateway)
- ✅ Official TypeScript SDK
- ✅ WebSocket Support
- ✅ Großzügige Rate Limits
- ✅ Fractional Shares
- ✅ Commission-free US Stocks
- ✅ 24/7 Crypto Trading
- ✅ Perfekt für MVP & Prototyping

#### Cons
- ❌ Nur US Stocks (keine EU-Märkte)
- ❌ Keine Options (noch in Beta)
- ❌ Keine Futures
- ❌ International eingeschränkt

---

## 📈 Market Data APIs - Vergleich

### 1. Alpha Vantage ⭐⭐⭐⭐

#### Übersicht
- **Typ**: Financial Market Data API
- **Märkte**: Stocks, Forex, Crypto, Commodities
- **Beliebtheit**: Sehr populär bei Entwicklern

#### Features
- **Real-time**: Intraday (1min, 5min, 15min, etc.)
- **Historical**: Daily, Weekly, Monthly (20+ Jahre)
- **Technical Indicators**: 50+ Indikatoren (SMA, EMA, RSI, MACD, etc.)
- **Fundamentals**: Earnings, Balance Sheet, Cash Flow
- **Global Coverage**: US + International Stocks

#### API
- **Type**: REST API
- **Format**: JSON, CSV
- **Endpoints**: 
  - `TIME_SERIES_INTRADAY`
  - `TIME_SERIES_DAILY`
  - `TECHNICAL_INDICATOR` (SMA, EMA, RSI, MACD, etc.)

#### Rate Limits
- **Free Tier**: 25 requests/day, 5 requests/minute
- **Premium**: 75-1200 requests/minute (je nach Plan)

#### Kosten
- **Free**: $0/month (25 calls/day)
- **Basic**: $49.99/month (75 calls/min)
- **Pro**: $149.99/month (600 calls/min)
- **Enterprise**: Custom Pricing

#### Pros
- ✅ Großzügiger Free Tier
- ✅ 50+ Technical Indicators built-in
- ✅ Historische Daten (20+ Jahre)
- ✅ Fundamentals verfügbar
- ✅ Einfache REST API
- ✅ JSON & CSV Support

#### Cons
- ❌ Sehr limitiert im Free Tier (25/day)
- ❌ Rate Limits restriktiv
- ❌ Kein WebSocket
- ❌ Premium teuer für kleine Projekte

---

### 2. Twelve Data ⭐⭐⭐⭐⭐ **EMPFOHLEN**

#### Übersicht
- **Typ**: Global Financial Market Data API
- **Märkte**: Stocks, Forex, Crypto, ETFs, Indices
- **Coverage**: 80+ Börsen weltweit

#### Features
- **Real-time**: WebSocket Streaming ✅
- **Historical**: Up to 15 Jahre
- **Technical Indicators**: 100+ Indikatoren
- **Global**: US, EU, Asia Markets
- **Time Series**: 1min bis Monthly
- **Fundamentals**: Profile, Statistics, Dividends

#### API
- **REST API**: Clean, modern API
- **WebSocket**: Real-time Streaming
- **Endpoints**: 
  - `/time_series` (OHLCV)
  - `/quote` (Latest Quote)
  - `/technical_indicator/{indicator}` (SMA, RSI, etc.)

#### Rate Limits
- **Free Tier**: 800 requests/day, 8 requests/minute
- **Basic**: 10,000 requests/day
- **Pro**: 50,000 requests/day

#### Kosten
- **Free**: $0/month (800 calls/day)
- **Basic**: $29/month (10K calls/day)
- **Pro**: $79/month (50K calls/day)
- **Enterprise**: Custom Pricing

#### Pros
- ✅ WebSocket Support (Real-time Streaming)
- ✅ 800 calls/day (Free) - besser als Alpha Vantage
- ✅ 100+ Technical Indicators
- ✅ Global Markets (80+ Börsen)
- ✅ Günstige Premium-Pläne
- ✅ REST + WebSocket

#### Cons
- ❌ 8 requests/minute (Free) relativ langsam
- ❌ Historical Data auf 15 Jahre limitiert

---

### 3. Polygon.io ⭐⭐⭐⭐

#### Übersicht
- **Typ**: Real-time & Historical Market Data API
- **Märkte**: US Stocks, Options, Forex, Crypto
- **Fokus**: High-quality, Exchange-licensed Data

#### Features
- **Real-time**: WebSocket Streaming
- **Historical**: Tick-level Precision
- **Aggregates**: Second, Minute, Hour, Day
- **Options**: Full Options Chain
- **Reference Data**: Tickers, Exchanges, Splits, Dividends

#### API
- **REST API**: Modern REST API
- **WebSocket**: Real-time Streaming
- **Endpoints**: 
  - `/v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}`
  - `/v2/snapshot/locale/us/markets/stocks/tickers`

#### Rate Limits
- **Free Tier**: 5 requests/minute (sehr limitiert)
- **Starter**: Unlimited requests
- **Developer**: Unlimited requests

#### Kosten
- **Free**: $0/month (5 calls/min, 2 Jahre historical)
- **Starter**: $29/month (Unlimited, 5 WebSocket connections)
- **Developer**: $99/month (Unlimited, Real-time, 10 WebSockets)
- **Advanced**: $399/month (Professional Data)

#### Pros
- ✅ Exchange-licensed Data (höchste Qualität)
- ✅ Tick-level Precision
- ✅ Options Data
- ✅ WebSocket Real-time
- ✅ Unlimited requests (Paid Plans)

#### Cons
- ❌ Free Tier extrem limitiert (5/min)
- ❌ Relativ teuer
- ❌ Nur US Märkte

---

### 4. Yahoo Finance (via yfinance) ⭐⭐⭐

#### Übersicht
- **Typ**: Inoffizielle API via Python Library
- **Märkte**: Global (alle auf Yahoo Finance verfügbaren)
- **Cost**: Kostenlos

#### Features
- **Historical**: Jahrzehnte zurück
- **Intraday**: 1min bis Daily
- **Fundamentals**: Basic Info, Dividends, Splits
- **Global**: Worldwide Coverage

#### API
- **Python Library**: `yfinance` (pip install yfinance)
- **JavaScript**: Keine offizielle Library, aber scraping möglich
- **Endpoints**: Keine REST API, nur Python SDK

#### Rate Limits
- **Informal**: Keine offiziellen Limits
- **Risk**: Kann jederzeit blockiert werden (inoffizielle API)

#### Kosten
- **Free**: $0 (100% kostenlos)

#### Pros
- ✅ Komplett kostenlos
- ✅ Global Coverage
- ✅ Historische Daten (Jahrzehnte)
- ✅ Keine Rate Limits
- ✅ Einfach zu nutzen

#### Cons
- ❌ Inoffiziell (kann jederzeit blockiert werden)
- ❌ Keine Garantie auf Verfügbarkeit
- ❌ Primär Python-basiert
- ❌ Kein WebSocket
- ❌ Qualität variiert

---

## 🎯 Empfehlungen für PLCapital.de

### Phase 1: MVP (Jetzt)

#### Market Data: **Twelve Data** (Free Tier) ⭐⭐⭐⭐⭐
**Warum:**
- ✅ 800 requests/day (ausreichend für MVP)
- ✅ 100+ Technical Indicators built-in
- ✅ WebSocket für Real-time (später)
- ✅ Global Markets
- ✅ Günstiger Upgrade-Path ($29/month)

**Alternative (Backup):** Yahoo Finance (yfinance) für Backtesting

#### Trading: **Alpaca Paper Trading** ⭐⭐⭐⭐⭐
**Warum:**
- ✅ 100% Kostenlos
- ✅ Echte Real-time Daten (IEX)
- ✅ Official TypeScript SDK
- ✅ Einfache Integration (nur API Keys)
- ✅ Keine Kontoeröffnung nötig
- ✅ Perfekt für Development & Testing

---

### Phase 2: Beta/Testing (1-2 Monate)

#### Market Data: **Twelve Data Basic** ($29/month)
- 10,000 requests/day
- WebSocket Streaming aktivieren
- Mehr Technical Indicators

#### Trading: **Alpaca Paper Trading** (weiterhin)
- Extensive Testing vor Live Trading
- Multiple User Testing
- Performance Optimization

---

### Phase 3: Production (3+ Monate)

#### Market Data: **Twelve Data Pro** ($79/month) oder **Polygon.io Developer** ($99/month)
**Entscheidung basiert auf:**
- User-Anzahl & Traffic
- Benötigte Markets (Global vs US-only)
- Real-time Requirements

#### Trading: **Alpaca Live Trading** + **Interactive Brokers**
**Warum beide:**
- **Alpaca**: US Stocks, einfach, commission-free (Standard-User)
- **IBKR**: Global Markets, Options, Professional Traders

---

## 📊 Vergleichstabelle

| Feature | Twelve Data (Free) | Alpha Vantage (Free) | Polygon (Free) | Alpaca (Paper) |
|---------|-------------------|----------------------|----------------|----------------|
| **Requests/Day** | 800 | 25 | Unlimited (5/min) | Unlimited |
| **Requests/Min** | 8 | 5 | 5 | 200 |
| **Real-time** | WebSocket ✅ | ❌ | WebSocket ✅ | WebSocket ✅ |
| **Historical** | 15 Jahre | 20+ Jahre | 2 Jahre | Jahre |
| **Indicators** | 100+ | 50+ | ❌ | Basic |
| **Global Markets** | ✅ | ✅ | US only | US only |
| **Trading** | ❌ | ❌ | ❌ | ✅ |
| **Cost** | $0 | $0 | $0 | $0 |
| **Upgrade Path** | $29/month | $50/month | $29/month | Free |

---

## 🔧 Technische Integration

### Twelve Data (Market Data)

```typescript
// REST API Example
const API_KEY = 'your_api_key';
const symbol = 'AAPL';

// Get Historical Data
const response = await fetch(
  `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`
);
const data = await response.json();

// Get Technical Indicator
const rsi = await fetch(
  `https://api.twelvedata.com/rsi?symbol=${symbol}&interval=1day&time_period=14&apikey=${API_KEY}`
);

// WebSocket (Real-time)
const ws = new WebSocket(`wss://ws.twelvedata.com/v1/quotes/price?apikey=${API_KEY}`);
ws.onopen = () => {
  ws.send(JSON.stringify({
    action: 'subscribe',
    params: { symbols: 'AAPL,MSFT' }
  }));
};
```

### Alpaca (Trading + Market Data)

```typescript
import Alpaca from '@alpacahq/alpaca-trade-api';

const alpaca = new Alpaca({
  keyId: 'YOUR_API_KEY_ID',
  secretKey: 'YOUR_SECRET_KEY',
  paper: true // Paper Trading
});

// Get Account Info
const account = await alpaca.getAccount();

// Place Order
const order = await alpaca.createOrder({
  symbol: 'AAPL',
  qty: 1,
  side: 'buy',
  type: 'market',
  time_in_force: 'day'
});

// Get Historical Bars
const bars = await alpaca.getBarsV2('AAPL', {
  start: '2025-01-01',
  end: '2025-11-01',
  timeframe: '1Day'
});

// WebSocket (Real-time Data)
const stream = alpaca.data_stream_v2;
stream.onStockTrade((trade) => {
  console.log(trade);
});
stream.subscribeForTrades(['AAPL']);
stream.connect();
```

---

## 🚀 Implementation Roadmap

### Week 1-2: Market Data Integration
1. Twelve Data Account erstellen
2. API Key holen
3. REST API Integration für Historical Data
4. Technical Indicators testen
5. Caching-Layer (Cloudflare KV) implementieren

### Week 3-4: Trading Integration (Paper)
1. Alpaca Paper Trading Account
2. TypeScript SDK installieren
3. Order Placement API testen
4. WebSocket für Real-time Orders
5. UI für Paper Trading Results

### Week 5+: Advanced Features
1. WebSocket Real-time Data (Twelve Data)
2. Live Trading (Alpaca + IBKR)
3. Performance Optimization
4. Cost Monitoring & Management

---

## 💰 Kosten-Schätzung (Monatlich)

### MVP Phase (0-3 Monate)
- **Market Data**: $0 (Twelve Data Free)
- **Trading**: $0 (Alpaca Paper)
- **Total**: **$0/Monat** ✅

### Beta Phase (3-6 Monate)
- **Market Data**: $29 (Twelve Data Basic)
- **Trading**: $0 (Alpaca Paper)
- **Total**: **$29/Monat**

### Production Phase (6+ Monate)
- **Market Data**: $79 (Twelve Data Pro) oder $99 (Polygon Developer)
- **Trading**: $0 (Alpaca commission-free)
- **IBKR** (optional): Nur Account-Kosten
- **Total**: **$79-99/Monat**

### Scale Phase (100+ User)
- **Market Data**: $199+ (Higher Tier)
- **Trading**: Mehrere Broker-Accounts
- **Total**: **$200-500/Monat**

---

## ✅ Finale Empfehlung

### ⭐ Für PLCapital.de MVP:

1. **Market Data**: **Twelve Data (Free Tier)**
   - 800 calls/day ausreichend für Development
   - Upgrade zu $29/month sobald User kommen
   - WebSocket für Real-time später aktivieren

2. **Trading**: **Alpaca Paper Trading**
   - Kostenlos, unbegrenzt
   - Official TypeScript SDK
   - Echte Real-time Daten
   - Perfekt für MVP & Testing

3. **Alternative (Backup)**: **Yahoo Finance (yfinance)**
   - Für Backtesting mit historischen Daten
   - 100% kostenlos
   - Als Fallback wenn Twelve Data Limit erreicht

4. **Production (später)**: **IBKR für Professional Traders**
   - Als Premium-Feature
   - Für User mit echtem Trading-Bedarf
   - Global Markets & Options

---

**Bereit für Integration! 🚀**

Sollen wir mit der Twelve Data Integration starten?
