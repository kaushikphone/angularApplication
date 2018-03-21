import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';

@Component({
  selector: 'pm-validation-check',
  templateUrl: './validation-check.component.html',
  styleUrls: ['./validation-check.component.css']
})
export class ValidationCheckComponent implements OnInit {
  propsedClauses:string="Proposed Clauses";
  constructor(
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
  }
  backToworkSpace(){
    //this.router.navigate(['./workspace']);
    this._location.back();

}
}
