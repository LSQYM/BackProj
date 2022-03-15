const Etudiant = require('./Etudiant');
const Theme =require ('./Theme');
module.exports = class Site {
    constructor() {
        this.listeEtudiants = [];
        this.nextId = 0;
        this.listeThemes=[];
        this.nextnum=0;

    }

    estPresent(num){
        for
    }

    ajouterProfil(nom,prenom,contact) {
        const id = this.nextId++;
        this.listeEtudiants[id] = new Etudiant(nom,prenom,contact);
        //console.log(listeComptes);
        return id;
    };

    retirerProfil (id){
        if (typeof this.listeEtudiants[id] === 'undefined')
            return 0;
        this.listeEtudiants[id] = null;
        return this.listeEtudiants[id];

    }

    like (id){
        this.listeEtudiants[id].nbLike++;
        return  this.listeEtudiants[id].nbLike;
    }

    dislike(id){
        this.listeEtudiants[id].nbLike--;
        return  this.listeEtudiants[id].nbLike;
    }


    ajouterTheme (){

    }



}
