import getComp from 'setjs/template/component.js';
import {rumiBooks, recentNews} from './data.js';
export default {
  templates:['site/home'],
  comp:()=>{
    let page = getComp('site/home',{rumiBooks,recentNews});
    return page;
  }
};