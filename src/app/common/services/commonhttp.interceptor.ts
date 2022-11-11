import { Injectable } from "@angular/core";
import { HttpRequest,  HttpResponse, HttpClient, HttpHeaders, HttpContext, HttpParams } from "@angular/common/http";
//import { Observable } from "rxjs/Rx";
import { environment } from "../../../environments/environment";

@Injectable()
export class InterceptedHttp extends HttpClient {
  
    /*
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {

        if (!url.startsWith("assets") && !url.startsWith("data")) {
            console.log("InterceptedHttp:get() originalUrl " + url);
            url = this.updateUrl(url);
            console.log("InterceptedHttp:get() finalUrl " + url);
        }
        return super.get(url, this.getRequestOptionArgs(options));
    }


    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.put(url, body, this.getRequestOptionArgs(options));
    }


    private updateUrl(req: string) {
        return environment.apiBaseURL + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }
    */
}