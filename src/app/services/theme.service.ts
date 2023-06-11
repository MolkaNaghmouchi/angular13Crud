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



}
