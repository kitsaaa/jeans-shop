import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  data: any;

  constructor(private http: HttpClient) { }

  getPosts(page: number): Observable<Item[]> {
    this.data = this.http.get<Item[]>("https://jeans-shop-api.vercel.app/api/posts?page=" + page + "&perPage=100");
    console.log(this.data);
    return this.data;
  }

  getPostById(id: string): Observable<Item> {
    return this.http.get<Item>("https://jeans-shop-api.vercel.app/api/posts/" + id);
  }

  newPost(data: Item): Observable<any> {
    return this.http.post<any>(`https://jeans-shop-api.vercel.app/api/posts/`, data);
  }

  updatePostById(id: string, data: Item): Observable<any> {
    return this.http.put<any>(`https://jeans-shop-api.vercel.app/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://jeans-shop-api.vercel.app/api/posts/${id}`);
  }
}
