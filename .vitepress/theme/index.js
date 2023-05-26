// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import { inBrowser, useRoute } from "vitepress";
import { onMounted, watch, nextTick } from "vue";
import mediumZoom from "medium-zoom";
// import { registerAnalytics, siteIds, trackPageview,} from "./plugins/baidutongji";

export default {
  ...Theme,

  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },

  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ router }) {
    // if (inBrowser) {
    //   registerAnalytics(siteIds);

    //   router.onAfterRouteChanged = (to) => {
    //     trackPageview(siteIds, to);
    //   };
    // }
  },
};
