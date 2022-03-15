module.exports=class Theme {
constructor(id) {
    this.num=num;
    this.description=description;
    this.motscles=[];
    this.date=date;
    this.nomcreateur=nomcreateur;

}
  get num(){
     return this.num;
   }

    get description(){
        return this.description;
    }

    get motscles(){
        return this.motscles;
    }

    get date(){
        return this.date;
    }

    get nomcreateur(){
        return this.nomcreateur;
    }
}