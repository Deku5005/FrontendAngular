import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Badge {
  idBadge: number;
  nom: string;
  objectif: string;
  description: string;
  image: string;
  nombre: number;
  couleur: string;
}

@Injectable({
  providedIn: 'root'
})
export class BadgesService {
  private apiUrl = 'http://localhost:8080/api/badges';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Badge[]> {
    return this.http.get<Badge[]>(this.apiUrl);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
