import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../models/theme.model';


const baseUrl = 'http://localhost:8080/api/themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Theme[]> {
    return this.http.get<Theme[]>(baseUrl);
  }

  createTheme(data: any ): Observable<any> {
    return this.http.post(`http://localhost:8080/api/themess`, data);
  }


  get(id: any): Observable<Theme> {
    return this.http.get(`${baseUrl}/${id}`);
  }
delete(id:any):Observable<Theme>{
  return this.http.get(`${baseUrl}/${id}`);
}
update(id_theme: any , data: any): Observable<any> {
  return this.http.put(`http://localhost:8080/api/themes/${id_theme}`, data);
}


findByNom(nom: any): Observable<Theme[]> {
  return this.http.get<Theme[]>(`http://localhost:8080/api/themess?nom=${nom}`);
}


}
