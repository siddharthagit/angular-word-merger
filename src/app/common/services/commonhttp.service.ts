import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

@Injectable()
export class CommonHttpService {
    public baseURL = environment.apiBaseURL;  //  BASE URL to web api
    private isServerAvailable = false;

    constructor(private http: Http) {

    }

    //methods to interect with server
    public checkIfServerAvailable(t: string, pageId: string): void {
        let url = this.baseURL + "/health";
        this.http.get(url)
            .subscribe(
                response => {
                    this.isServerAvailable = true;
                },
                error => {
                    alert(error.text());
                    //console.log(error.text());
                    this.isServerAvailable = false;
                }
            );

    }

}
