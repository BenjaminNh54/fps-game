# FPS Game - Sniper Edition

Un jeu FPS multijoueur en développement avec système de sniper, custom maps et bots.

## 🎮 Fonctionnalités

### Phase 1 (En cours)
- ✅ Système de sniper avec scope
- ✅ Système de visée à la souris
- ✅ Tir et balles visibles
- ✅ Génération de lumière lors de la visée
- ✅ Créateur de map personnalisée
- ✅ Système de bots IA
- ✅ Physics et collision

### Phase 2 (Planifié)
- 🔄 Multijoueur (Socket.io)
- 🔄 Armes additionnelles
- 🔄 Skins avancés
- 🔄 Système de rang

## 📁 Structure du Projet

```
fps-game/
├── public/
│   ├── index.html
│   ├── game.html
│   ├── map-editor.html
│   ├── css/
│   │   ├── style.css
│   │   ├── game.css
│   │   └── map-editor.css
│   └── js/
│       ├── main.js
│       ├── game/
│       │   ├── Game.js
│       │   ├── Player.js
│       │   ├── Weapon.js
│       │   ├── Bot.js
│       │   ├── Physics.js
│       │   └── Renderer.js
│       ├── weapons/
│       │   └── Sniper.js
│       ├── utils/
│       │   ├── Vector2.js
│       │   ├── Camera.js
│       │   └── Config.js
│       └── map-editor/
│           ├── MapEditor.js
│           └── MapRenderer.js
├── server/
│   ├── index.php
│   ├── api/
│   │   ├── map.php
│   │   ├── bot.php
│   │   └── game.php
│   ├── models/
│   │   ├── Map.php
│   │   └── Game.php
│   └── config.php
└── data/
    └── maps/
```

## 🚀 Installation

1. Clone le repo
2. Configure un serveur PHP local
3. Ouvre `public/index.html`

## 📖 Documentation

Voir les fichiers individuels pour les API complètes.
