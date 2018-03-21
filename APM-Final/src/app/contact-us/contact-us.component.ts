import { Component, OnInit, NgModule, Injectable, ViewChild } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import {product} from '../HttpService/product';
import {Employee} from "../HttpService/employee";
import {ApiService} from '../HttpService/ApiService';
import {Http, Response, Headers,RequestOptions, RequestMethod} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { element, Key } from 'protractor';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { NgModel } from '@angular/forms';
import { URLSearchParams } from '@angular/http';
import * as $ from 'jquery';
import { Options } from 'selenium-webdriver/opera';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//declare var $ : any;
@Component({
  selector: 'pm-contact-us',
  providers:[ApiService,ModalDialogComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
 

export class ContactUsComponent implements OnInit {
  serializeObj(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  Employee: any;
  welcome :string ="Employee Data List";
  EmployeeHeadingBar: string="Employee Details via Node";
  heading :string ="Details list";
  keyValue={};
  urlSearchParams = new URLSearchParams();
  EmployeeList: string="New Employee List";
  BtnName: string="New Employee";
  observableEmployee: Observable<any[]>;
  errorMessage: String;
  newErrorMessage: string;
  _postsArray: product[];
  _postEmployeeArray:Employee[];
  private _url:string = "https://www.w3schools.com/angular/customers.php";
  private _postUrlList:string="http://localhost:3000/insertEmployeeList/";
  constructor(private apiSerivce: ApiService, private modalDialog:ModalDialogComponent, private _http:HttpClient){}
  ngOnInit():void {
    this.getEmployeeList();
    this.getEmployeeDetailsList();
  }
  hideDialog(indexCount):void{
    debugger
    if(indexCount==1)
      $('#myModal,.modalOverlayer').css('display','none');
    else if(indexCount==2)
      $('#ModalInsertPopUp,.modalOverlayer').css('display','none');
    this.modalDialog.visible=true;
  }
  showDialog($this,index):void{
      $('#myModal,.modalOverlayer').css('display','block');
      let name =$this._postsArray[index].Name;
      let city=$this._postsArray[index].City;
      let country=$this._postsArray[index].Country;
      $('#empName').val(name);
      $('#empCity').val(city);
      $('#empCountry').val(country);
  }
  sendForm(){
    debugger;
    let FirstName =$("#FirstName").val();
    let lastName=$("#lastName").val();
    let email=$("#email").val();
    let Desig=$("#Desig").val();
    let lblPhone=$("#lblPhone").val();
    let myParams = new URLSearchParams();
    myParams.append('firstname', FirstName.toString());
    myParams.append('lastname', lastName.toString());
    myParams.append('email', email.toString());
    myParams.append('designation', Desig.toString());
    myParams.append('phonenumber', lblPhone.toString());
    console.log(this.urlSearchParams);
    debugger;
    let obj={
      firstname:FirstName,
      lastname:lastName,
      email:email,
      designation:Desig,
      phonenumber:lblPhone
    }
    
    //this.InsertEmployee(myParams);
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams().set('firstname', FirstName.toString()).set('lastname', lastName.toString()).set('email',email.toString()).set('designation',Desig.toString()).set('phonenumber',lblPhone.toString());
    this._http.post(this._postUrlList, body, {
    headers: myheader
  }).subscribe(
    data => {
      console.log("Data Inserted");
      alert('ok');
    },
    error => this.errorMessage=<any> error
  )
  



    /*let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    this._http.post( this._postUrlList,  { headers:headers,  search:myParams })
  .map(
              res => {
                  let newReview = res;
                  console.log(newReview);
              }
          )
          .subscribe(
            data => {
                this.errorMessage = "Review added successfully!";
                //clear form
                this.getEmployeeList();
                this.reset();
            },
            error => {
                console.log(error._body);
                this.errorMessage = error._body;
            }
          )*/
    /*this._http
    .post('http://localhost:3000/api/insertEmployeeList', myParams)
      .subscribe(data => {
            alert('ok');
            console.log(data);
      }, error => {
          console.log(error.json());
      });*/
    /*this._http.post('http://localhost:3000/api/insertEmployeeList', myParams).subscribe(
      data => {
        console.log(data);
        this.getEmployeeList();
        this.reset();
      },
      error => this.newErrorMessage=<any> error
    )*/
  }
  EmptyModalOpening():void{
    $('#ModalInsertPopUp,.modalOverlayer').css('display','block');
  }
  getEmployeeDetailsList():void{
    this.apiSerivce.getNodeEmployeeDetails()
    .subscribe(
      EmployeetArray => this._postEmployeeArray = EmployeetArray,
      error => this.newErrorMessage=<any> error
    )
  }
  getEmployeeList(): void {
    debugger;
    this.apiSerivce.getEmployeeList()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => this.errorMessage=<any> error
        )
} 
InsertEmployee(myParams){
  debugger
  const body = new HttpParams().set('firstname', 'gomesh').set('lastname', 'dey').set('email','kaushik.dey@gmail.com').set('designation','developer').set('phonenumber','9890989890');
  //var body = 'firstname=kaushik&lastname=dey&email=kaushik.dey@gmail.com&designation=developer&phonenumber=9898789098';
  this.apiSerivce.InsertEmployee(body)
  .subscribe(
      data =>{
        console.log("Data Inserted");
        this.getEmployeeDetailsList();
        this.reset();
      },
      error => {
        this.errorMessage = <any>error
        console.log(this.errorMessage)
      }
  )
}
    private reset(){
      $("#FirstName").val('');
      $("#lastname").val('');
      $("#email").val('');
      $("#Desig").val('');
      $("#lblPhone").val('');
      $("#ModalInsertPopUp").hide();
      $('.modalOverlayer').hide();
  }
}
