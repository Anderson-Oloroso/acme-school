class Rate{
    constructor(id = null, inscriptionId, rate, comments){
        this.id = id;
        this.inscriptionId = inscriptionId;
        this.rate = rate;
        this.comments = comments;
    }
}

export default Rate;