import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  constructor(private http: HttpClient) { }

  // getPosts(page: number): Promise<Item[]> {
  //   const data: any = this.http.get<Item[]>("https://jeans-shop-api-updated.vercel.app/api/posts/");
  //   console.log(data)
  //   return data;
  // }

  data: any;

  getPosts(page: number) : Observable<Item[]> {
    return this.http.get<Item[]>("https://jeans-shop-api-updated.vercel.app/api/posts/");
  }

  getPostById(id: string): Observable<Item> {
    return this.http.get<Item>("https://jeans-shop-api-updated.vercel.app/api/posts/" + id);
  }

  newPost(data: Item): Observable<any> {
    return this.http.post<any>(`https://jeans-shop-api-updated.vercel.app/api/posts/`, data);
  }

  updatePostById(id: string, data: Item): Observable<any> {
    return this.http.put<any>(`https://jeans-shop-api-updated.vercel.app/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://jeans-shop-api-updated.vercel.app/api/posts/${id}`);
  }
}
