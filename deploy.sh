#!/bin/bash
# PLCapital.de - Automatisches Deployment Script
# Usage: ./deploy.sh "Commit message"

set -e

# Check if commit message provided
if [ -z "$1" ]; then
  echo "❌ Fehler: Commit-Nachricht erforderlich"
  echo "Usage: ./deploy.sh \"Ihre Commit-Nachricht\""
  exit 1
fi

COMMIT_MESSAGE="$1"

echo "🚀 PLCapital.de Deployment gestartet..."
echo ""

# Git Commit & Push
echo "📝 Git Commit: $COMMIT_MESSAGE"
git add .
git commit -m "$COMMIT_MESSAGE"

echo "⬆️  Push zu GitHub..."
git push origin main

# Build
echo "🔨 Projekt bauen..."
npm run build

# Deploy zu Cloudflare
echo "☁️  Deploy zu Cloudflare Pages..."
npx wrangler pages deploy dist --project-name plcapital-de

echo ""
echo "✅ Deployment erfolgreich abgeschlossen!"
echo "🌐 Production: https://251a3cb0.plcapital-de.pages.dev"
echo "📊 Dashboard: https://dash.cloudflare.com"
