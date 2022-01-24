import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  //add customer

  public addCustomer(customer:any){

    return this.http.post('${baseUrl}/customer/',customer);
  
  }

}
