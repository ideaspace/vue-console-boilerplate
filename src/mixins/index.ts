import { format, isValid } from 'date-fns';

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
