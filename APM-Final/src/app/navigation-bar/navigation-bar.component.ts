import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
 UsernameDetails:string=localStorage.getItem("Name");
  constructor() { }

  ngOnInit() {
    
  }

}
