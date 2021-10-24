import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarfixed:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

 @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 50)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }

}
