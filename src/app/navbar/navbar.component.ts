import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSmallScreen = false;
  isItemVisible = true;
  public navbarClass = '';

  @ViewChild('myDiv')
  myDiv!: ElementRef;
  isClickable: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 50) {
      this.navbarClass = 'scrolled';
    } else {
      this.navbarClass = '';
    }
  }

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])

  
  onResize(event: any) {
    this.checkScreenSize();
  }
  private checkScreenSize() {
    if (window.innerWidth < 600) {
      this.isItemVisible = false
    } else {
      this.isItemVisible = true
    }
  }

  ngOnInit() {
   
    
    
  }




}
