---
to: src/apis/<%= h.inflection.dasherize(name) %>.ts
---
import http from './index';

interface <%= h.inflection.capitalize(name) %>VO {
}

export const get = () => http.get(`/<%= h.inflection.dasherize(name) %>`);

export const post = () => http.post(`/<%= h.inflection.dasherize(name) %>`);

export const put = () => http.put(`/<%= h.inflection.dasherize(name) %>`);

export const delete = () => http.delete(`/<%= h.inflection.dasherize(name) %>`);

export default {
  get,
  post,
  put,
  delete,
};
