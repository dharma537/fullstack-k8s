import { Component } from '@angular/core';
import { AppUserService } from './app.user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-app';
  public users: any[] | undefined;
  public user: any | undefined;

  constructor(private userService: AppUserService){
    this.getUsers();
  }

  private getUsers () {
    this.userService.getUsers()
    .subscribe((data: Number[]) => {
      this.users = data;
    });
  }

  public addUser () {
    this.userService.createUser(this.user)?.subscribe(_ => {
      this.getUsers();
    });
    
  }

}
