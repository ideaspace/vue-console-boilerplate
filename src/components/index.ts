import {VueConstructor} from 'vue';
import ViewContainer from './layout/Container.vue';
import SpinLoader from './SpinLoader.vue';
import SvgIcon from './SvgIcon.vue';

interface CompsList {
  [key: string]: VueConstructor;
}

export const Comps: CompsList = {
  ViewContainer,
  SpinLoader,
  SvgIcon,
};

const requireSvgIcon = require.context('@/assets/icons', false, /\.svg$/);

requireSvgIcon.keys().forEach((fileName) => {
  requireSvgIcon(fileName);
});
