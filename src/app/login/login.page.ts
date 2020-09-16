import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  userEmail: string;
  userPassword: string;
  form: FormGroup;
  constructor(public api: ApiService, public router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([Validators.minLength(1)])),
    });
  }

  ngOnInit() {
    this.userPassword = null;
    this.userEmail = null;
    this.form.reset();
  }

  submit() {
    console.log("Username : " + this.userEmail + " Pwd : " + this.userPassword);
    let user: any = {
      username: this.form.value.username,
      password: this.form.value.password
    }

    // this.searchTerm = this.form.value['searchTerm'];

    
    //call API
    this.api.login(user).then((res: any) => {
      console.log(res);
      // if the object res contains userData, 
      // then navigate to aduan list page
      if(res.userData) {
        this.ngOnInit();
        this.api.storeUserData(res.userData);
        this.router.navigateByUrl('list-aduan');
      } else {
        alert(res.error.text);
      }
    });

  }

  change() {
    this.userEmail = "test123@gmail.com"
  }
}
