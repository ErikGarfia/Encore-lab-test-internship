import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EndpointAPIService {

  constructor( private http: HttpClient, protected router: Router ) { }

  getPhotos(): Observable<any>{
    return this.http.get('https://picsum.photos/v2/list?page=1&limit=100');
	}

  getPhoto(id): Observable<any>{
    return this.http.get('https://picsum.photos/id/'+id+'/info');
	}

  loremText(): Observable<any>{
    return this.http.get('https://baconipsum.com/api/?type=meat-and-filler&sentences=1');
	}
}
