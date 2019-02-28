import http from './index';

export const getMenuTree = () => http.get(`/menu`);

export default {
  getMenuTree,
};
