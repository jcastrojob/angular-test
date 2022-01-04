import { Address } from './../models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAddress'
})
export class UserAddressPipe implements PipeTransform {

  transform(address: Address, ...args: unknown[]): unknown {
    if(address){
      return `${address.street} ${address.suite} City: ${address.city} Zipcode: ${address.zipcode}`
    }

    return null;
  }
}
