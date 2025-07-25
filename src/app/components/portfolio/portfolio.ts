import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  displayModal = true;
  imageLayerSrc: string = '';
  showImage(src : string) {
    this.imageLayerSrc = src;
  }
  changeDisplay(state : boolean){
    this.displayModal = state; 
  }
}
