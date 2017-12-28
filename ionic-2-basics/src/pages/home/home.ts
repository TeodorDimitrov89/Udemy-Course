import { Component } from '@angular/core';
import {UsersPage} from "../users/users";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrPage = UsersPage;
}
