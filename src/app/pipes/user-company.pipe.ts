import { Company } from './../models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userCompany'
})
export class UserCompanyPipe implements PipeTransform {

  transform(company: Company, ...args: unknown[]): unknown {
    if (company) {
      return `${company.name} catchPhrase: ${company.catchPhrase} bs:${company.bs}`
    }

    return null;
  }
}