import Vue from 'vue';

interface PageVO {
  [key: string]: any;
  pageNow: number;
  pageSize: number;
}

export class PageData extends Vue {
  public page: PageVO = {
    pageNow: 1,
    pageSize: 10,
  };
  public pageTotal: number = 0;
}
