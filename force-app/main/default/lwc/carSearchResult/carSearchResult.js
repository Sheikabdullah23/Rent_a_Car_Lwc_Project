import { LightningElement , api , wire , track } from 'lwc';
import getCars from '@salesforce/apex/carSearchResultController.getCars' ;
import { ShowToastEvent } from 'lightning/PlatformShowToastEvent' ; 

export default class CarSearchResult extends LightningElement {
    @api carTypeId ;
    @track cars ;
    @wire(getCars , {carTypeId : '$carTypeId'})
    wiredCars({data , error }){
        if(data){
            this.cars = data ;
        }
        else if(error){
            this.showToast('ERROR!!!' , error.body.message , 'error');
        }
    }

    showToast(title , message , variant){
        const event1  = new ShowToastEvent({
            title: title ,
            message: message , 
            variant: variant
        });
        this.dispatchEvent(event1);
    }
    get carsFound(){
        if(cars){
            return true ;
        }
            return false ;
    }
}