import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'DealershipAppV1.0.2';
  user = '';
  
  constructor(private readonly keyCloakService: KeycloakService) { }

  public isLoggedIn: boolean = false;
  public userProfile: KeycloakProfile | null = null;

  public async ngOnInit() {
    this.initializeUserOptions();
    this.isLoggedIn = await this.keyCloakService.isLoggedIn();

    // if (this.isLoggedIn) {
    //   this.userProfile = await this.keyCloakService.loadUserProfile();
    // }
  }
  private initializeUserOptions(): void {
    this.user = this.keyCloakService.getUsername();
  }

  public onSigninClicked(): void {
    console.log('Signin button clicked');
    this.keyCloakService.login();
  }

  public onSignOutClicked(): void {
    this.isLoggedIn = true;
    this.keyCloakService.logout('http://localhost:4200/signin');
  }
}