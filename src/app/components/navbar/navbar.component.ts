import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    signintext: string | null = null;
    isHide:boolean = false;
    // Menu items data
    menus = [
      { title: 'Home', path: '/', active: false },
      { title: 'Pages', path: '#', active: false, children: [{ title: 'About Us', path: '/about' }] }, //{ title: 'Services', path: '/services' }
      { title: 'Academics', path: '#', active: false, children: [{ title: 'Undergraduate', path: 'academics/undergraduate' }, { title: 'Postgraduate', path: 'academics/postgraduate' }] },
      // { title: 'Admissions', path: '#', active: false },
      // { title: 'Courses', path: '#', active: false },
      // { title: 'University Life', path: '#', active: false },
      { title: 'Contact', path: '/contact', active: false },
      { title: 'Signin', path:'/signin', active: false }
    ];
  
    // Variable to control navbar menu toggle
    isMenuOpen = false;
    // Variable to control search visibility
    isSearchVisible = false;

      // Variable to control the offcanvas menu toggle
      isOffcanvasOpen = false;

      // Variable to control active states for the accordion items
      activeAccordion = '';
      
    constructor(private router:Router) {}
  
    hover: boolean = false;  // Track hover state
    ngOnInit(): void {
     
      if(localStorage.getItem("name")!= null || localStorage.getItem("name") != ""){
        this.signintext = localStorage.getItem('name');
        this.isHide = true;
      }
    }
  

    onHover(isHovered: boolean): void {
      this.hover = isHovered;
    }

    // Toggle menu visibility for mobile view
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  
    // Toggle search input field visibility
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
    }
  
    // Method to close the search when the user starts typing
    closeSearch() {
      this.isSearchVisible = false;
    }

    toggleOffcanvasMenu() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen;
    }
  
    // Method to set active accordion item
    toggleAccordion(id: string) {
      this.activeAccordion = this.activeAccordion === id ? '' : id;
    }

    onLogoutClick(): void {
      localStorage.clear();
      alert("Logged out successfully.");
      this.router.navigateByUrl('/signin');
    }

}
