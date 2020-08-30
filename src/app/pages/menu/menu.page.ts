import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from "../../services/authentication.service";
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  userEmail: string;
  isLookedOut: boolean;
  isLookedIn: boolean;
  activePath = '';
  pages = [
    {
      name: 'Home',
      path: '/menu/tabmenu',
      icon: 'home'
    },
    

  ]

  constructor(private router: Router,
    public authService: AuthenticationService,
    private navCtrl: NavController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.isLookedIn = this.authService.isLoggedIn;
      this.isLookedOut = !this.authService.isLoggedIn;
      this.activePath = event.url
    })
  }

 

  ngOnInit() { 
  
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);      
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
}
