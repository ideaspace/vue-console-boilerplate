/**
 * this is the Global Mixin
 */
import {format, isValid} from 'date-fns';
import {ComponentOptions} from 'vue';
import {Vue} from 'vue/types/vue';

interface Mixin {
  [key: string]: ComponentOptions<Vue>;
}

// the date format handle use in template
const dateFormat = {
  methods: {
    onFormatTime(val: number, formatString = 'YYYY-MM-DD HH:mm:ss') {
      if (val && isValid(new Date(val))) {
        return format(val, formatString);
      }
      return '- -';
    },
  },
};

// the page params setting according to your api
const pageData = {
  data() {
    return {
      page: {
        pageNow: 1,
        pageSize: 10,
      },
      pageTotal: 0,
    };
  },
};

export const Mixins: Mixin = {
  dateFormat,
  pageData,
};
