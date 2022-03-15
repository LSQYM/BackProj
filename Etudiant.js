module.exports = class Etudiant {
    constructor (nom,prenom,contact,ville){
        this._id = id;
        this._nom = nom;
        this._prenom= prenom;
        this._contact= contact;
        this._ville=ville
        this._nbLike= 0;
    }

    get id() {
        return this._id;
    }

    get nom() {
        return this._nom;
    }

    get prenom(){
        return this._prenom;
    }

    get contact(){
        return this._contact;
    }

    get nbLike(){
        return this._nbLike;
    }

    get ville(){
        return this._ville
    }





}