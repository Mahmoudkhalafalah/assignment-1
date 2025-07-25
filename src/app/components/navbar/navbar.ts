import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navPadding: string = "py-4"  ;
  changePadding(e: any): void {
    if (window.scrollY > 0) {
      this.navPadding = "";
    }else{
      this.navPadding = "py-4"
    }
  }
}
