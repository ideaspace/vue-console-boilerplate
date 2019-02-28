import 'element-ui/lib/theme-chalk/index.css';
import './assets/style.scss';
import {VueConstructor} from 'vue';
import {Route} from 'vue-router';
import Element from 'element-ui';
import {Comps} from './components/index';
import router from './router';
import stores from './store';

class Bootstrap {
  public router: any;
  public stores: any;

  constructor(routers: any, stores: any) {
    this.router = router;
    this.stores = stores;
  }

  public install(Vue: VueConstructor, options: any) {

    for (const key in Comps) {
      if (Comps.hasOwnProperty(key)) {
        Vue.component(key, Comps[key]);
      }
    }


    this.router.beforeEach(async (to: Route, from: Route, next: any) => {
      if (to.name === 'login') {
        this.stores.dispatch('user/deleteUserData')
        this.stores.dispatch('menu/deleteMenuData')
        next();
      } else if (
        this.stores.state.menu &&
        (
          this.stores.state.menu.menuTree === undefined ||
          this.stores.state.menu.menuTree.length === 0
        )
      ) {
        this.stores.dispatch('user/createUserData');
        this.stores.dispatch('menu/createMenuData', {toName: to.name, fromName: from.name});
        next();
      } else {
        next();
      }
    });

    this.router.afterEach((to: Route, from: Route) => {
      // document.title = `云桌面运营管理-${to.meta.title || ''}`;
    });

    // 重置 Element-Ui 部分组件的样式
    // @ts-ignore
    Element.Pagination.props.layout.default = 'total, prev, pager, next, sizes';
    // @ts-ignore
    Element.Table.props.border = {type: Boolean, default: true};
    // @ts-ignore
    Element.Input.props.clearable = {type: Boolean, default: true};
    // @ts-ignore
    Element.Card.props.shadow = {type: String, default: 'never'};
    // @ts-ignore
    Element.Dialog.props.appendToBody = {type: Boolean, default: true};
    // @ts-ignore
    Element.Dialog.props.closeOnClickModal = {type: Boolean, default: false};
    // @ts-ignore
    Element.Dialog.props.width = {type: String, default: '580px'};
    // @ts-ignore
    Element.Table.props.highlightCurrentRow = {type: Boolean, default: true};
    // @ts-ignore
    Element.TableColumn.props.showOverflowTooltip = {type: Boolean, default: true};
    // @ts-ignore
    Element.Pagination.props.background = {type: Boolean, default: true};
    Element.MessageBox.setDefaults({type: 'warning'});
    Vue.use(Element, {size: 'small'});
  }
}

export default new Bootstrap(router, stores);
