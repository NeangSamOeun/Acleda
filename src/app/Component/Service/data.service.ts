import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = ' https://jsonplaceholder.typicode.com/users';
  private apiUrls = 'https://jsonplaceholder.typicode.com/todos/posts';

  constructor(private http: HttpClient) {
    console.log(this.http)
  }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // // Fetch all data from the API
  // fetchAllData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  // // Optional: parse AppData if necessary
  // parseAppData(appData: string): any {
  //   try {
  //     return JSON.parse(appData);
  //   } catch (error) {
  //     return appData;
  //   }
  // }

  // fetchAllData(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }

  // // Parse the AppData field, which is stringified JSON
  // processAppData(data: any): any[] {
  //   // Parse the AppData to extract the relevant details
  //   return data.map((item: any) => {
  //     const parsedAppData = JSON.parse(item.AppData); // Parse the stringified JSON

  //     // Parse listContact (which is also stringified JSON) if available
  //     const listContact = parsedAppData.listContact ? JSON.parse(parsedAppData.listContact) : [];

  //     return {
  //       ...item,
  //       latlong: parsedAppData.latlong,
  //       contacts: listContact
  //     };
  //   });
  // }

}
