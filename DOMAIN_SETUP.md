# Custom Domain Setup für plcapital.de

## 🌐 Domain-Verbindung einrichten

Die Custom Domain `plcapital.de` muss über das Cloudflare Dashboard verbunden werden.

---

## 📋 Schritt-für-Schritt Anleitung

### Schritt 1: Cloudflare Dashboard öffnen

1. Gehe zu: https://dash.cloudflare.com
2. Melde dich mit `pascal@raluecht.com` an

### Schritt 2: Pages Projekt öffnen

1. Klicke auf **Workers & Pages** in der linken Sidebar
2. Wähle dein Projekt: **plcapital-de**
3. Gehe zum Tab: **Custom domains**

### Schritt 3: Custom Domain hinzufügen

1. Klicke auf **Set up a custom domain**
2. Gebe ein: `plcapital.de`
3. Klicke auf **Continue**

### Schritt 4a: Domain ist bereits bei Cloudflare (empfohlen)

Wenn `plcapital.de` bereits in deinem Cloudflare Account ist:

✅ Cloudflare wird automatisch die DNS-Einträge erstellen
✅ Keine manuellen DNS-Änderungen nötig
✅ Domain sollte innerhalb von Minuten aktiv sein

**DNS-Einträge werden automatisch erstellt:**
```
CNAME @ plcapital-de.pages.dev
```

### Schritt 4b: Domain ist NICHT bei Cloudflare

Falls die Domain bei einem anderen Provider ist (z.B. GoDaddy, Namecheap):

#### Option A: Domain zu Cloudflare transferieren (empfohlen)
1. Gehe zu: **Add a Site** in Cloudflare Dashboard
2. Füge `plcapital.de` hinzu
3. Wähle den Free Plan
4. Cloudflare zeigt dir die Nameserver:
   ```
   firstname.ns.cloudflare.com
   lastname.ns.cloudflare.com
   ```
5. Gehe zu deinem Domain-Provider
6. Ändere die Nameserver zu den Cloudflare Nameservern
7. Warte auf DNS-Propagation (bis zu 24h)
8. Kehre zurück zu Schritt 3

#### Option B: Nur DNS-Einträge erstellen (ohne Transfer)
1. Gehe zu deinem Domain-Provider
2. Erstelle einen **CNAME**-Eintrag:
   ```
   Type: CNAME
   Name: @ (oder leer)
   Value: plcapital-de.pages.dev
   TTL: Auto oder 3600
   ```
3. Wenn CNAME für @ nicht erlaubt ist, verwende **A-Records**:
   ```
   Type: A
   Name: @
   Value: [IP von Cloudflare Pages]
   ```

### Schritt 5: www-Subdomain hinzufügen (optional)

1. Im Custom Domains Tab
2. Klicke erneut auf **Set up a custom domain**
3. Gebe ein: `www.plcapital.de`
4. Cloudflare erstellt automatisch die Weiterleitung

---

## 🔍 Aktueller Status überprüfen

### Via Cloudflare Dashboard:
- **Dashboard**: https://dash.cloudflare.com
- **Pages Projekt**: https://dash.cloudflare.com → Workers & Pages → plcapital-de

### Via Command Line:
```bash
# Projekt-Info anzeigen
npx wrangler pages project list

# DNS überprüfen (nach Setup)
dig plcapital.de
nslookup plcapital.de
```

### Via Browser (nach Setup):
```
https://plcapital.de
https://www.plcapital.de (falls konfiguriert)
```

---

## ⚙️ Erwartete Konfiguration nach Setup

### DNS-Einträge (bei Cloudflare):
```
Type    Name    Content                      Proxy Status
----    ----    -------                      ------------
CNAME   @       plcapital-de.pages.dev      Proxied (Orange Cloud)
CNAME   www     plcapital-de.pages.dev      Proxied (Orange Cloud)
```

### SSL/TLS:
- ✅ Automatisch aktiviert (Cloudflare Universal SSL)
- ✅ HTTPS erzwungen
- ✅ Kostenlos

---

## 🚨 Wichtige Hinweise

### DNS-Propagation
- **Zeit**: 5 Minuten bis 24 Stunden
- **Überprüfung**: https://dnschecker.org
- **Geduld**: Bei externen Providern kann es länger dauern

### SSL-Zertifikat
- Wird automatisch von Cloudflare bereitgestellt
- Aktivierung dauert ca. 15 Minuten nach DNS-Setup
- Kein Aufwand nötig

### Domain-Einstellungen in Cloudflare
- **SSL/TLS Mode**: Full (strict) empfohlen
- **Always Use HTTPS**: An
- **Auto Minify**: An (HTML, CSS, JS)
- **Brotli Compression**: An

---

## ✅ Nach erfolgreicher Verbindung

### 1. Domain testen:
```bash
curl -I https://plcapital.de
```

### 2. Dokumentation aktualisieren:
```bash
# In README.md und PROJECT.md die Production URL ändern zu:
https://plcapital.de
```

### 3. Deployment Script aktualisieren:
```bash
# In deploy.sh die URL aktualisieren
```

### 4. Git Commit:
```bash
./deploy.sh "Update: Custom Domain plcapital.de verbunden"
```

---

## 🔗 Nützliche Links

- **Cloudflare Dashboard**: https://dash.cloudflare.com
- **Pages Projekt**: https://dash.cloudflare.com → Workers & Pages → plcapital-de
- **DNS Checker**: https://dnschecker.org
- **SSL Checker**: https://www.sslshopper.com/ssl-checker.html
- **Cloudflare Docs**: https://developers.cloudflare.com/pages/configuration/custom-domains/

---

## 📞 Support

Bei Problemen:
1. Überprüfe DNS-Einträge in Cloudflare Dashboard
2. Warte auf DNS-Propagation (bis zu 24h)
3. Prüfe SSL/TLS Einstellungen
4. Kontaktiere Cloudflare Support bei persistenten Problemen

---

**Viel Erfolg beim Domain-Setup! 🚀**
