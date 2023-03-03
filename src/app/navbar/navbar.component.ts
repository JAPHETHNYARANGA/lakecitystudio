import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public navbarClass = '';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any){
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 50) {
      this.navbarClass = 'scrolled';
    } else {
      this.navbarClass = '';
    }
  }

}
