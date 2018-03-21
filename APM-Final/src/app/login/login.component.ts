import { Component, OnInit, ViewContainerRef, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //constructor() { }
  constructor(
    private element: ElementRef,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    private router: Router
  ) {
    this.toastr.setRootViewContainerRef(vcr);
 }

  @ViewChild('username') 
    private elTitle : ElementRef; 
  @ViewChild('password') 
    private elPass : ElementRef;
  ngOnInit() {
  }
  submit_by_id(){
    let name:string = this.elTitle.nativeElement.value.toString();
    localStorage.setItem("Name",name);
    let password:string = this.elPass.nativeElement.value.toString();
    if (name === '' || password === '') {
        this.toastr.warning('Please fill all fields!', 'warning!');
      return false;
      } else if (!((name).toString()=="testuser" || (password).toString()=="password")) {
        this.toastr.error('Invalid username or password!!!!!!', 'warning!');
      return false;
      } else {
      //return true;
        this.toastr.success('Matched', 'success!');
        $("#username").val("");
        $("#password").val("");
        this.router.navigate(['./workspace']);
      }
  }
}
