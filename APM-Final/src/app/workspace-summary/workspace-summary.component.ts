import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
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
import { workspaceSummary } from '../HttpService/workspacesummary';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import { Router, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'pm-workspace-summary',
  templateUrl: './workspace-summary.component.html',
  styleUrls: ['./workspace-summary.component.css'],
  providers:[ApiService]
})
export class WorkspaceSummaryComponent implements OnInit {
  errorMessage: String;
  isloginCheck=true;
  _workspaceummary: workspaceSummary[];
  _workspaceDropdown: SelectItem[];
  constructor(
    private apiSerivce: ApiService, 
    private _http:HttpClient,
    private _router:Router
){}

  ngOnInit() {
    this._workSpaceSummaryDetails();
    this._workspaceDropdown = [
      {label:'Select workspace title', value:null},
      {label:'workspace title 1', value:{id:1, name: 'WorkSpaceTitle1', code: 'WSPT1'}},
      {label:'workspace title 2', value:{id:2, name: 'WorkSpaceTitle2', code: 'WSPT2'}},
      {label:'workspace title 3', value:{id:3, name: 'WorkSpaceTitle3', code: 'WSPT3'}},
      {label:'workspace title 4', value:{id:4, name: 'WorkSpaceTitle4', code: 'WSPT4'}},
      {label:'workspace title 5', value:{id:5, name: 'WorkSpaceTitle5', code: 'WSPT5'}}
  ];
  }
  workspaceOnchanger($event){
    //debugger
    console.log($event.value.code);
    //alert($event.value.name);
  }
  _workSpaceSummaryDetails():void{
    this.apiSerivce.workSpaceSummaryDetails()
            .subscribe(
              _workspaceummary => this._workspaceummary = _workspaceummary,
                error => this.errorMessage=<any> error
            )
  }

}
