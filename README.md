# 🚍 METRO – Application Mobile de Réservation de Transport Collectif

🔗 Repository officiel :
git clone https://github.com/B-martin11/metro.git

---

## 📌 Présentation du projet

METRO est une application mobile visant à structurer et moderniser le transport collectif informel en Côte d’Ivoire.

Face aux problèmes actuels du transport urbain (insécurité, attentes prolongées, manque de visibilité, variation des prix), METRO propose une solution numérique fiable, accessible et adaptée aux réalités locales.

L’objectif est de rendre les trajets :

- Plus fluides
- Plus sûrs
- Plus prévisibles
- Mieux organisés pour les chauffeurs et les passagers

---

## 🎯 Objectifs du projet

- Structurer le transport collectif informel
- Réduire le temps d’attente
- Améliorer la sécurité des passagers
- Offrir un suivi en temps réel des véhicules
- Faciliter la gestion administrative
- Proposer un système évolutif et inclusif

---

## 👥 Cibles

L’application s’adresse à :

- 🚶 Passagers : réservation et suivi des trajets
- 👨‍👩‍👧 Parents / proches : suivi des enfants en temps réel
- 🚐 Chauffeurs : gestion des courses et organisation des arrêts
- 🛠 Administrateurs : supervision globale du système

---

## 🏗 Architecture du système

L’application repose sur trois espaces distincts :

### 📱 1. Espace Passager
- Réservation de place
- Visualisation des places disponibles
- Suivi GPS en temps réel
- Historique des trajets
- Affichage du prix avant départ

### 🚐 2. Espace Chauffeur
- Liste des passagers
- Gestion des arrêts
- Signalement d’incident
- Validation montée / descente

### 🖥 3. Backend central
- Gestion des données
- Authentification sécurisée
- Synchronisation GPS (WebSockets)
- Sécurité des comptes
- Optimisation des performances

---

## 🛠 Technologies utilisées

### 📱 Frontend Mobile
- React Native
- Expo Go
- JavaScript
- TypeScript

### ⚙ Backend
- Spring Boot
- API REST
- WebSockets (temps réel GPS)

### 🖥 Interface Admin
- Interface Web classique

### 🔄 Gestion de version
- Git
- GitHub

---

## 📡 Spécificités techniques

- Optimisation GPS
- Mode offline partiel
- Faible consommation de données
- Sécurisation des comptes et trajets
- Compatibilité Android (priorité)
- Compatibilité iOS
- Interface Web pour l’administration

---

## 📋 Fonctionnalités (Méthode MoSCoW)

### ✅ MUST (Essentielles)
- Réservation d’une place
- Suivi GPS du véhicule
- Affichage du prix avant trajet
- Voir les places disponibles
- Historique des déplacements
- Interface chauffeur
- Interface admin
- Authentification sécurisée

### ⚡ SHOULD (Importantes)
- Estimation heure d’arrivée (ETA)
- Suivi des enfants
- Signalement d’incident
- Notifications temps réel

### ⭐ COULD (Bonus)
- Paiement mobile intégré
- Mode offline partiel
- Statistiques chauffeur
- Cartographie avancée

### ❌ WON’T (Phase future)
- Intégration autres transports
- Tarification dynamique
- Programme de fidélité
- Big Data avancé
- Version desktop passager

---

## ⚙ Installation du projet

### 1️⃣ Cloner le repository
