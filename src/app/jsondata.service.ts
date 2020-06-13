import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONDATAService {

  constructor(private httpClient : HttpClient) { }

  getJsonData(): Observable<any>{
    return this.httpClient.get("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
  }
}
