import {Injectable} from "@angular/core";
import {Http, Response, Headers,RequestOptions, RequestMethod} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {product} from "./product";
import {workspaceSummary} from "./workspacesummary";
import {Employee} from "./employee";


@Injectable()
    export class ApiService{
        private _getURL = "https://www.w3schools.com/angular/customers.php";
        private _getEmployeeList="http://localhost:3000/api/employeeList";
        private _postUrlList="http://localhost:3000/insertEmployeeList/";
        private _monthDetailsJsonUrl="/api/products/products.json";
        private _cardViewUrl="/api/products/file_structure.json";
        constructor(private _http: Http) {}
        getEmployeeList(): Observable<product[]> {
            var caches=window.caches;
            console.log(caches);
            return this._http
                .get(this._monthDetailsJsonUrl)
                .map(this.extractData)
                .catch(this.handleError);
        }
        private extractData(response: Response){
            let body = <product[]>response.json();
            console.log(body);
            return body || []; 
        }
        private ExtractEmployeeList(response: Response){
            debugger
            let body = <Employee[]>response.json()[1].data.recordsets[0];
            console.log(body);
            return body || [];
        }
        private handleError(error: Response) {
            return Observable.throw(error.statusText);
        }
        //work space summary details fetch from server api
        workSpaceSummaryDetails():Observable<workspaceSummary[]>{
                return this._http
                           .get(this._cardViewUrl)
                           .map(this._extractCardView)
                           .catch(this.handleError);
        }
        private _extractCardView(response: Response){
                    let cardViewDedtails = <workspaceSummary[]>response.json();
                    console.log(cardViewDedtails);
                    return cardViewDedtails || [];
        }
        getNodeEmployeeDetails():Observable<Employee[]>{
            return this._http.get(this._getEmployeeList)
                             .map(this.ExtractEmployeeList)
                             .catch(this.handleError);
        }
        InsertEmployee(data: any): Observable<any> {
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
                let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
                return this._http.post(this._postUrlList, data, options)
                       .map(this.PostData)
                        .catch(this.handleError);
            }
            private PostData(res: Response) {
                console.log(Response);
                let body = res.json();
                    return body || {};
                
            }
            private handleErrorPromise (error: Response | any) {
                console.error(error.message || error);
                return Promise.reject(error.message || error);
                }
        
    }

