import { Component, OnInit, NgModule, Injectable,ViewChild, Type} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccordionModule} from 'primeng/accordion';
import { Observable } from 'rxjs/Observable';
import {Employee} from "../HttpService/employee";
import {Http, Response, Headers,RequestOptions, RequestMethod} from '@angular/http';
import "rxjs/Rx";
import {ApiService} from '../HttpService/ApiService';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { product } from '../HttpService/product';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: [
        './home.component.css',
        './validationCheck.css'],
    providers:[ApiService]
})

export class WelcomeComponent {
    public PanelSubheading:string="Similar Score:Kaustav srivastav..";
    public documentNetScore:string="Document Net Risk Score";
    public googleChart:string="Google Chart display here";
    public pageTitle: string = 'Welcome';
    isloginCheck=true;
    _dynamicUrlid: string;
    errorMessage: String;
    cars=[];
    _postsArray: product[];
    carCount = 0;
    cols: any[];
    selectedRow : Number;
    setClickedRow : Function;
    
    constructor(
        route: ActivatedRoute,
        private apiSerivce: ApiService, 
        private _http:HttpClient,
        private router: Router,
        private _location: Location
    ){
        this._dynamicUrlid = "Dynamic Id:"+route.snapshot.params.id;
    }
    backToworkSpace(){
        this._location.back();
        //this.router.navigate(['./workspace']);
    }
    NavigateToValidationCheck(){
        this.router.navigate(['./validationCheck']);
    }
    ngOnInit():void {
        console.log(this._postsArray);
        this.getEmployeeList();

        this.cols = [
            { field: 'Dname', header: 'Document Name' },
            { field: 'Type', header: 'Type' },
            { field: 'Date', header: 'Date' },
            { field: 'Status', header: 'Status' },
            { field: 'workspace', header: 'workspace' },
            { field: 'Action', header: 'Action' }
        ];
        this.setClickedRow = function(index){
            this.selectedRow = index;
        }
      }
      
      getEmployeeList(): void {
        debugger;
        this.apiSerivce.getEmployeeList()
            .subscribe(
                _postsArray => this._postsArray = _postsArray,
                error => this.errorMessage=<any> error
            )
    }
    openPopUp():any{
        $(".slideDownWrapper").slideToggle("slow");
    }

    eventEdit($this):any{
        debugger;
        console.log("SameId:"+$this);
    }
}


