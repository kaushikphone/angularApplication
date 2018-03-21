import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import {product} from '../HttpService/product';
import {ApiService} from '../HttpService/ApiService';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { element, Key } from 'protractor';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
@Component({
  selector: 'pm-contact-us',
  providers:[ApiService,ModalDialogComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
 

export class ContactUsComponent implements OnInit {
  welcome :string ="Employee Data List";
  observableEmployee: Observable<any[]>;
  errorMessage: String;
  _postsArray: product[];
  private _url:string = "https://www.w3schools.com/angular/customers.php";
  //constructor(private _http:HttpClient,private apiSerivce: ApiService){}
  constructor(private apiSerivce: ApiService){}
  ngOnInit():void {
    this.getEmployeeList();
  }
  /*commonApiBinding(){
    debugger
    return this._http.get(this._url).subscribe(function(response) {
      console.log(JSON.stringify(response));
      this.getEmployeeData=response;
      console.log(this.getEmployeeData);
  });
  }*/
  EachRowValue($this,index):void{
    debugger
    /*this._postsArray.forEach((key: any) => {
      let retObj = {childValue: name[key]};
      retObj[name] = key;
      alert(retObj);
  });*/
  let name =$this._postsArray[index].Name;
  alert(name);
  }
  getEmployeeList(): void {
    debugger;
    this.apiSerivce.getEmployeeList()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => this.errorMessage=<any> error
        )
}
}
