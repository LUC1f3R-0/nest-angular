import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root', })

class PublicApiService{
  private readonly baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  getPokemonId(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/pokemon/${id}`);
  }
}

export { PublicApiService }
