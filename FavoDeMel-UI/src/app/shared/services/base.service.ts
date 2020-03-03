import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { buildQueryParams } from '../utils/query-params.util';

export class BaseService<T> {
  private http: HttpClient;
  private readonly BASE_URL;

  constructor(injector: Injector, recurso: string) {
    this.http = injector.get(HttpClient);
    this.BASE_URL = `${environment.api_url}/${recurso}`;
  }

  get(params: any) {
    return this.http.get<T[]>(`${this.BASE_URL}/?${buildQueryParams(params)}`);
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.BASE_URL}/${id}`);
  }

  getAll() {
    return this.http.get<T[]>(this.BASE_URL);
  }

  post(body: T): Observable<T> {
    return this.http.post<T>(this.BASE_URL, body);
  }

  put(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.BASE_URL}/${endpoint}`, body);
  }

  delete() { }
}
