import { Post } from './../models/post';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserOrText'
})
export class FilterUserOrTextPipe implements PipeTransform {

  transform(value: Post[], ...args: unknown[]): Post[] {
    const textFilter: string | any = args[0];
    const userId: number | any = args[1];

    let valuesFilted = [];

    if (!textFilter && !userId) {
      return value
    }

    valuesFilted = value.filter(post => {
      if (!userId && (post.title.includes(textFilter) || post.body.includes(textFilter))) {
        return post
      }

      if (!textFilter && post.userId == userId) {
        return post
      }

      if (post.userId == userId && (post.title.includes(textFilter) || post.body.includes(textFilter))) {
        return post
      }

      return false
    })

    return valuesFilted;
  }

}
