import getComp from "setjs/template/component";
export default {
  templates: ["site/about"],
  comp: () => {
    let page = getComp("site/about");
    return page;
  },
};
