import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL: string;
  public userData: any;
  constructor(public http: HttpClient) { 
    // this.baseURL = 'http://nre.appsmalaya.com/helpdesk/api/';
    this.baseURL = 'http://localhost:8888/helpdesk/api/';
    this.userData = {};
  }

  storeUserData(data: any){
    this.userData = data;
  }

  deleteUserData(){
    this.userData = {};
  }

  getUserData(){
    return this.userData;
  }

  createAduan(aduan: any){
    let url: string = this.baseURL + "createAduan";
    let userData = this.getUserData();
    return new Promise((resolve, reject) => {
      let body: any = {
        "user_id": userData.user_id,
        "token": userData.token,
        "title": aduan.title,
        "masalah": aduan.masalah,
        "kategori": aduan.kategori
      };
      this.http.post(url, body)
      .subscribe((res: any) => {
        resolve(res);
      }, (error)=>{ reject(error) })
    });
  }

  getAduanAll(){
    let url: string = this.baseURL + "getAduanAll";
    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe((response: any) => {
        resolve(response);
      }, (error) => { reject(error) });
    });
  }
  
  login(user: any){
    let url: string = this.baseURL + 'login';
    return new Promise((resolve, reject) => { 
      let body: any = {
        "username": user.username,
        "password": user.password
      };
      this.http.post(url, body)
      .subscribe((response: any) => {
        resolve(response);
      }, (error: any) => { reject(error) })
      
    });


  }


}
