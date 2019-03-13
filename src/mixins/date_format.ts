import Vue from 'vue';
import {format, isValid} from 'date-fns';

export class DateFormat extends Vue {
  public onFormatTime(val: number, formatString = 'YYYY-MM-DD HH:mm:ss') {
    if (val && isValid(new Date(val))) {
      return format(val, formatString);
    }
    return '- -';
  }
}
