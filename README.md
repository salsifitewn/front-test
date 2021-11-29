# Test technique front
Dans ce test technique vous allez développer un wiki sur les personnages de Star Wars en vous appuyant sur l'api publique : https://swapi.dev/.
Pour cela vous utiliserez le framework Vue.js ainsi que la librairie Axios afin de pouvoir faire les calls API.

**Aucun CSS n'est nécessaire pour ce test technique, cependant libre a vous d'en faire**

Ce test se divise en 3 étapes :
- Création de la home page qui affiche l'ensemble des personnages du film.
- Pouvoir faire la recherche d'un personnage dans la home page.
- Utiliser le Router Vue afin de pouvoir accéder aux détails d'un personnage

## Introduction
Dans un premier temps, il est nécessaire de cloner le repo GitLab. L'ensemble des outils nécessaires est installé dans le projet (Vue, router, axios). Vous pouvez si vous le souhaitez rajouter des librairies telles que Bootstrap. Cependant, aucun css ne vous ait demandé lors de ce test.

## Mise en place du serveur de dev
Il est dans un premier temps nécessaire d'avoir Node.js et npm sur sa machine.
Ensuite il faudra taper les deux lignes de commande suivantes :
- npm install
- npm run serve

Votre serveur de développement sera alors UP. Si vous avez des soucis sur cette partie, n'hésitez pas a nous contacter.

## 1. Création de la home page
Le call API chargé de récupérer les personnages sera fait dans le fichier Home.vue, la liste récupérée sera ensuite passé en paramètre (props) d'un composant qui sera chargé d'afficher la liste.

Vous créerez un fichier **people.vue** dans le dossier **components**. Ce .vue sera chargé de récupérer la liste des personnages et de l'afficher, de plus il faudra penser à utiliser des router-link afin de pouvoir accéder aux détails d'un personnage.

## 2. Création de la barre de recherche.
Vous allez créer une barre de recherche, qui est chargé de filtrer les personnages par leurs noms. Pour cela il ne faudra pas utiliser un algorithme JavaScript mais une requête API. Il est conseillé d'utiliser l'attribut **?search=**.

Vous allez créer un composant **search.vue**. Il sera composé d'un input et renverra le contenu du input. Pour cela il est largement conseillé d'overwrite la l'attribut v-model.

A l'instant ou l'utilisateur écrit une lettre sur la barre de recherche, une nouvelle requête API doit être lancée afin de récupérer les personnages possédant un nom similaire à celui que l'utilisateur est en train d'écrire.

## 3.Page contenant les détails des personnages
Vous allez créer un fichier **caracter.vue** dans le dossier View. Le fichier que vous venez de créer va contenir quelques informations sur un personnage.

Lorsque vous allez cliquer sur l'un des personnages présent dans la Hompage, alors vous devrez être redirigé vers la page contenant les informations de ce dernier.

**Pour cela il est fortement conseillé d'utiliser le Router Vue.**

Finalement, sur cette page vous afficherez le nom, le poids, et la couleur des yeux du personnage en question. De plus vous mettrez un bouton permettant de retourner sur la HomePage.

## Exemple de page attendue

Vous trouverez en suivant ce lien : https://drive.google.com/file/d/16Up5Df6mPVkp651DQE3LfCO1el0FGgRC/view?usp=sharing
une démo de ce qui est attendu.


# front-test
