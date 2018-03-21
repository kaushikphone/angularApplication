import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpServiceModuleComponent } from './http-service-module/http-service-module.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import { WorkspaceSummaryComponent } from './workspace-summary/workspace-summary.component';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ValidationCheckComponent } from './validation-check/validation-check.component';
//import { MaterialModule } from '@angular/material';
//import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactUsComponent,
    HttpServiceModuleComponent,
    ModalDialogComponent,
    WorkspaceSummaryComponent,
    LoginComponent,
    NavigationBarComponent,
    NotFoundComponent,
    ValidationCheckComponent
    //FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    AccordionModule,
    TableModule,
    DataTableModule,
    CardModule,
    DropdownModule,
    Ng2SearchPipeModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
        { path: 'login', component: LoginComponent },
        { path: 'workspace', component: WorkspaceSummaryComponent },
        { path: 'checktool/:id', component: WelcomeComponent },
        {path: 'validationCheck', component: ValidationCheckComponent},
        {path: '404', component: NotFoundComponent},
        //{ path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: 'contact', component: ContactUsComponent},
        { path: '**', redirectTo: '/404', pathMatch: 'full'},
        {path: '*path', redirectTo: '/404'}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
