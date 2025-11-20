## Application CRUD – Gestion des Clients (React JS)

### Résumé
Projet développé dans le cadre de ma formation en developpement web avancé **D-Clic 2025 (OIF)**.  
Objectif : concevoir une application React de type **SPA** permettant de gérer une liste de clients via les opérations CRUD (Create, Read, Update, Delete).

Ce projet illustre l’utilisation :
- des hooks React (useState, useEffect),
- de la navigation avec React Router,
- de la consommation d’API REST avec Axios,
- et de **JSON Server** pour simuler une API.

---

### Fonctionnalités principales
- **Afficher** la liste des clients
- **Ajouter** un client
- **Modifier** un client
- **Supprimer** un client
- **Afficher** les détails d’un client
- Navigation complète entre toutes les pages
- API REST simulée avec JSON Server

---

### Stack technique
- **Frontend :** React JS (Vite)
- **Navigation :** react-router-dom
- **Requêtes HTTP :** Axios
- **Fake API :** JSON Server
- **Style :** Bootstrap 5 *(optionnel selon intégration)*
- **Langages :** JavaScript, JSX

---

### Architecture

L'application suit une architecture simple et modulaire :

src/<br>
│
├── components/<br>
│ ├── ClientDetails.jsx<br>
│ ├── ClientList.jsx<br>
│ ├── CreateClient.jsx<br>
│ └── UpdateClient.jsx<br>
├── App.css<br>
├── App.jsx<br>
└── main.jsx<br>

### db.json (fake API)

- **ClientList.jsx** : affichage + suppression  
- **CreateClient.jsx** : création d’un client  
- **ClientDetails.jsx** : détails d’un client  
- **UpdateClient.jsx** : modification  

---

### Démo en ligne (GitHub Pages)

*[Lien du front déployé]* : https://adjagbafortune.github.io/projet-react-crud-app/

---

### 📂 Documentation du projet

Voici la pdf de réalisation du projet : <br>

<a href="./chemin/vers/votre/fichier.pdf" target="_blank">Nom du PDF</a>

---

## ⚙️ Installation & exécution

### 1. Cloner le projet

`git clone https://github.com/adjagbafortune/projet-react-crud-app.git`

`cd crud_app`

### 2. Installer les dépendances du front

`npm install`

`npm run dev`

L’application s’ouvrira sur :<br>

`http://localhost:5173`

### Fake API – JSON Server

1. Installer JSON Server

`npm install -g json-server`

2. Lancer l’API

`json-server db.json --port 3001`


API disponible ici : <br>

`http://localhost:3001/clients`

### Compétences démontrées

- Construction d’une SPA complète avec React

- Manipulation du state et des side effects

- Routage avancé (params dynamiques, navigation)

- Appels API avec Axios (GET, POST, PUT, DELETE)

- Utilisation de JSON Server pour simuler un backend

- Structuration propre d'un projet React

- Documentation technique d’un projet web

- Respect d’un cahier des charges

### Améliorations possibles

- Validation avancée des formulaires (React Hook Form)

- Gestion globale de l’état (Redux ou Zustand)

- Ajout de tests automatisés

- Ajout d’un vrai backend complet (Laravel ou Django REST)

- Connexion à une vraie base de données

👤 Auteur

Fortuné
Développeur Web – Programme D-Clic 2025 (OIF)
