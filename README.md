# Projet Test Hetis

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/LP75/projet-test.git
```

2. Installation des dépendances du backend :
```bash
cd backend
npm install
```

3. Installation des dépendances du frontend :
```bash
cd ../frontend
npm install
```

## Configuration

1. Dans le dossier `backend`, créez un fichier `.env` avec la variable d'environnement de connexion à la BDD :
(fournie par mail)
```env
MONGODB_URI=String de connexion mongoDB
```

## Démarrage de l'application

1. Démarrez le serveur backend :
```bash
cd backend
node app.js
```

2. Dans un nouveau terminal, démarrez le frontend :
```bash
cd frontend
npm start
```

L'application devrait maintenant être accessible à l'adresse : `http://localhost:3000`
