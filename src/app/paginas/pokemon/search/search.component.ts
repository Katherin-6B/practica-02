import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'pokemon-search',
    standalone: true,
    imports: [],
    template: `
    <div class="col-12">
    <div class="input-group mb-3">
  <input type="text"
  #txtSearch
   class="form-control"
    placeholder="Recipient's username"
     aria-label="Recipient's username"
     (keydown.enter)="searchPokemon(txtSearch.value)"
      aria-describedby="button-addon2"
      >
  <button 
  class="btn btn-outline-secondary" 
  type="button" 
  (click)="searchPokemon(txtSearch.value)"
  id="button-addon2">
  <i class="bi bi-search"></i></button>
</div>
    </div>
    `,
    styles: [``]
})

export class SearchComponent{
    @Output() public eventSearch=new EventEmitter<string>();
searchPokemon(termino:string|number):void{
    const termSearch=termino.toString().trim();
   // if(termSearch.length===0){

      //  return;
   // }
    
  this.eventSearch.emit(termSearch); 

}
}