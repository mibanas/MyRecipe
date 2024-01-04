# Livre de Recettes en Ligne

Bienvenue dans le Livre de Recettes en Ligne, une plateforme interactive pour découvrir, partager et contribuer à une collection diversifiée de recettes culinaires.

## Fonctionnalités Clés

- **Exploration de Recettes :** Parcourez une variété de recettes classées par catégories telles que les plats principaux, les desserts, les entrées, etc.
- **Détails de Recette :** Consultez des détails complets sur chaque recette, y compris les ingrédients, les étapes de préparation et des images pour une meilleure visualisation.
- **Ajout et Modification de Recettes :** Contribuez en ajoutant de nouvelles recettes ou en modifiant celles existantes pour les améliorer.
- **Suppression de Recettes :** Supprimez des recettes pour garantir la qualité et la pertinence des contenus partagés.
- **Interface Conviviale :** Une interface utilisateur conviviale et réactive créée avec React.js pour une expérience agréable et intuitive.
- **Stockage et Récupération des Données :** Utilisation de JSON Server pour stocker et récupérer les données des recettes via une API, facilitant ainsi la gestion des recettes.

## Comment Exécuter le Projet

### Prérequis

Assurez-vous d'avoir Node.js installé sur votre machine.

### Installation des Dépendances
### Exécution de JSON Server pour les Données de Recettes Avant de lancer l'application React, assurez-vous que JSON Server est en cours d'exécution sur le port 3000 
### Exécution de l'Application React

```bash
npm install
json-server --watch src/data/db.json --port 3000
npm start

