 
/*

Du coup l'objectif est de créer un mini carnet d'adresse pour "Schtroumpf" avec NodeJS pour le back (Express.js sous forme d'API) avec un front sur angular &  DB Mongo de préférence. 
(Inscription  (create) /Connexion/Déconnexion) du "Schtroumpf" par login/mot de passe 

(Afficher (readone user)  /Modifier (update user)) ses informations (âge / famille / race / nourriture) 


(Ajouter/Supprimer) un ami "Schtroumpf"  à partir d'une liste de schtroumpfs déjà inscrits. // read all users, the, select by ID, to add it to a carnet, carnet has relation one-one user


*/
const {app} = require ("./app.js")

const PORT = process.env.PORT || 8080;


app.listen(8080, ()=>{
    console.log(`server start on ${PORT}`)
})

/**
 * 7:10 : preparation des fichiers et structures du mini-projet
 * 7:10pm to 8:50pm : backend done, routes, middlewears, models, setup of mongodb, env..
 * 8:50pm to 11:40 : break 
 * 11:40 to 12:10 : setup front end, 
 * next : add friend, delete friend, authentification, ^password hashing, adapt user infos
 * 
 */