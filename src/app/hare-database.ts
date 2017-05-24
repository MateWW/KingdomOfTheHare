
import { Hare } from "./hare";

export class HareDataBase{

    private base:[Hare]
    
    constructor(){
        this.loadDB();
    }

    loadDB(){
        try{        
            let haresBaseString = localStorage.getItem("hare_base"),
                haresBase = <[Hare]>JSON.parse(haresBaseString);
            
            this.base = haresBase || <[Hare]>[];
        }
        catch(err)
        {
            let haresBase = <[Hare]>[];
            this.base = haresBase;
        }        
        
    }
    saveDB(){
        try{
            let haresBaseString = JSON.stringify(this.base);
            localStorage.setItem("hare_base",haresBaseString);
        }
        catch(err){
            console.log("failed to save Datas");
        }
    }

    getHares(){
        return this.base;
    }

    getHare( name:string ){
        let hare = this.base.find( (hareObj) => ( hareObj.name.trim() == name) )
        return hare;
    }

    setCarrot( hareName:string , carrotAmount:number ){
        let hare = this.getHare( hareName )

        if( !hare )
            return false;

        hare.carrotAmount = carrotAmount;
        this.saveDB();

        return true;
    }
    
    addHare( hareName:string , carrotAmount:number ){
        let hare = this.getHare( hareName );

        if( hare || hareName.length == 0)
            return false;
        
        let newHare:Hare = {
            name: hareName,
            carrotAmount: carrotAmount
        }

        this.base.push( newHare );

        this.saveDB();

        return true;        
    }

    deleteHare( hareName:string ){
        let hareIndex = this.base.findIndex( (hareObj)=>( hareObj.name.trim() === hareName ));

        

        if( hareIndex >= 0 ){
            this.base.splice( hareIndex, 1 );
            return true;
        }   

        return false;
    }
}