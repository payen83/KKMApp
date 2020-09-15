import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-aduan',
  templateUrl: './list-aduan.page.html',
  styleUrls: ['./list-aduan.page.scss'],
})
export class ListAduanPage implements OnInit {
  public listAduan: Array<any>;
  public form: FormGroup;
  constructor(public api: ApiService, public router: Router) { 
    this.listAduan = [];
    this.form = new FormGroup({
      title: new FormControl('', Validators.compose([Validators.minLength(4)])),
      masalah: new FormControl('', Validators.compose([Validators.pattern('[a-zA-Z ]*')])),
      kategori: new FormControl('', Validators.required)
    })
  }

  submitForm(){
    let aduan: any = {
      title: this.form.value['title'],
      masalah: this.form.value['masalah'],
      kategori: this.form.value['kategori']
    }
    console.log(aduan);
    //submit to API
    this.api.createAduan(aduan).then((response: any)=>{
      if(response.feedData){
        // this.form.controls["title"].setValue('');
        // this.form.controls["masalah"].setValue('');
        // this.form.controls["kategori"].setValue(null);
        this.form.reset();
        this.listAduan.push(response.feedData);
      } else {
        alert('Error while submitting data');
      }
    }).catch((error)=>{ alert(JSON.stringify(error)) })
  }

  logout(){
    //call API logout (if any)
    // clear cache
    this.api.deleteUserData();
    //navigate to login page
    this.router.navigateByUrl('login');

  }

  ngOnInit() {
    this.api.getAduanAll().then((response: any) => {
      console.log(response);
      this.listAduan = response.feedData;
    })
  }

}
