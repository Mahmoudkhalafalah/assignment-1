import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  userInputs = ["" , "", "", ""]
  translateStates = [true,true,true,true]
  checkInput(index:number){
    if(this.userInputs[index].length> 0){
      this.translateStates[index] = false;
    }
    else{
      this.translateStates[index] = true;
    }
  }
}
  