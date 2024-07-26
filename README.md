# TestSEDADI

Projet de gestion de téléphones mobiles.

Projet développé en Angular 17

## Installation

Pour installer le projet, il suffit de cloner le dépôt git :

```bash
git clone https://github.com/Mr-Quokka/TestSEDADI
```

Ensuite, pour lancer le projet, il est nécessaire d'avoir installé [Node.js]('https://nodejs.org/en').

Une fois Node.js installé, il faut installer la version 17 de Angular CLI à l'aide de la commande suivante :

```bash
npm install -g @angular/cli@17
```

Une fois cette étape faite, il suffit de lancer les commandes suivantes à la racine du projet :

```bash
npm install

ng serve
```

En cas de doute, vous pouvez consulter la documentation officielle d'Angular : [Build your first Angular app]('https://v17.angular.io/tutorial/first-app')

## Problèmes rencontrés

Je n'ai pas réussi à faire fonctionner les validations du formulaire d'ajout.

Le numéro IMEI, la marque et la capacité de stockage ne sont donc pas obligatoires.\
De plus, la longueur de l'IMEI n'est pas vérifiée et la capacité de stockage n'est forcément un multiple de 2.