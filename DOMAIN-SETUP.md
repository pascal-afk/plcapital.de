# Custom Domain Setup für PLCapital.de

## 🌐 Aktuelle URLs

### Cloudflare Pages URLs (funktionieren bereits)
- **Haupt-URL**: https://a07602c3.plcapital-de.pages.dev
- **Project URL**: https://plcapital-de.pages.dev
- **API Health**: https://a07602c3.plcapital-de.pages.dev/api/health

---

## 📋 Schritte zur Verknüpfung der Custom Domain `plcapital.de`

### Option 1: Über Cloudflare Dashboard (Empfohlen)

1. **Gehe zum Cloudflare Dashboard**
   - URL: https://dash.cloudflare.com/
   - Login mit deinem Account: pascal@raluecht.com

2. **Navigiere zu Pages**
   - Workers & Pages → Overview
   - Wähle das Projekt `plcapital-de`

3. **Custom Domain hinzufügen**
   - Gehe zum Tab "Custom domains"
   - Klicke auf "Set up a custom domain"
   - Gib `plcapital.de` ein
   - Klicke auf "Continue"

4. **DNS-Einträge konfigurieren**
   Cloudflare zeigt dir automatisch die benötigten DNS-Einträge an:
   
   ```
   CNAME @ plcapital-de.pages.dev
   ```
   
   Oder für www-Subdomain:
   ```
   CNAME www plcapital-de.pages.dev
   ```

5. **DNS Nameserver prüfen**
   - Stelle sicher, dass `plcapital.de` Cloudflare als Nameserver nutzt
   - Falls nicht, ändere die Nameserver bei deinem Domain-Registrar zu:
     ```
     ns1.cloudflare.com
     ns2.cloudflare.com
     ```

6. **Warte auf DNS-Propagierung**
   - DNS-Änderungen können 5-60 Minuten dauern
   - SSL-Zertifikat wird automatisch von Cloudflare erstellt

7. **Überprüfung**
   - Nach erfolgreicher Einrichtung: https://plcapital.de sollte funktionieren
   - API Health: https://plcapital.de/api/health

---

### Option 2: Über CLI (Alternative, nicht empfohlen)

Die Custom Domain Konfiguration über `wrangler` CLI ist aktuell nicht vollständig unterstützt. 
Nutze stattdessen das Dashboard (Option 1).

---

## ✅ Nach erfolgreicher Domain-Einrichtung

### Update Dokumentation
```bash
cd /home/user/webapp

# README.md updaten
# PROJECT.md updaten

git add .
git commit -m "docs: Add custom domain plcapital.de"
git push origin main
```

### URLs nach Domain-Setup
- ✅ **Primary**: https://plcapital.de
- ✅ **API**: https://plcapital.de/api/health
- 🔄 **Fallback**: https://a07602c3.plcapital-de.pages.dev

---

## 🔒 SSL/TLS Zertifikat

Cloudflare stellt automatisch ein kostenloses SSL/TLS-Zertifikat aus:
- **Typ**: Universal SSL
- **Validity**: Automatische Erneuerung
- **HTTPS**: Erzwungen (HTTP → HTTPS Redirect)

---

## 🌍 DNS-Einstellungen Übersicht

Nach erfolgreicher Einrichtung sollten folgende DNS-Einträge existieren:

| Type  | Name | Content                    | Proxy Status |
|-------|------|----------------------------|--------------|
| CNAME | @    | plcapital-de.pages.dev     | Proxied      |
| CNAME | www  | plcapital-de.pages.dev     | Proxied      |

---

## 🧪 Testing nach Domain-Setup

```bash
# Test Hauptseite
curl -I https://plcapital.de

# Test API
curl https://plcapital.de/api/health

# SSL Zertifikat prüfen
openssl s_client -connect plcapital.de:443 -servername plcapital.de < /dev/null 2>/dev/null | openssl x509 -noout -text | grep "CN="
```

---

## 📞 Support

Falls Probleme auftreten:
1. Prüfe Cloudflare Dashboard → Pages → plcapital-de → Custom domains
2. Überprüfe DNS-Einstellungen im DNS-Tab
3. Warte bis zu 60 Minuten für DNS-Propagierung
4. Checke Cloudflare Status Page: https://www.cloudflarestatus.com/

---

**Zuletzt aktualisiert**: 2025-11-01
