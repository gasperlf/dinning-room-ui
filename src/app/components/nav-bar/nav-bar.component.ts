import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isOpen: boolean = false;
  isLogged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavBar(){
    this.isOpen = !this.isOpen;
  }

  logout(){
    
  }

}
