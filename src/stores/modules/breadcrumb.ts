import * as types from '../mutation-types';

interface BreadcrumbVO {
  routeName: string;
  routeText: string;
  menuTree: any;
  routeParent: any;
}

interface CacheVo {
  [key: string]: any;
}

const state = {};

const actions = {
  createRouteData({commit}: any, data: BreadcrumbVO) {
    commit(types.ROUTE_DATA_CREATE, data);
  },
};

const mutations = {
  [types.ROUTE_DATA_CREATE](state: CacheVo, data: BreadcrumbVO) {
    if (!state[data.routeName]) {
    }
    if (data.routeParent) {
    }
  },
};

const getters = {
  trace: (state: CacheVo) => state,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
