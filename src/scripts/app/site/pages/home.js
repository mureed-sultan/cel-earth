import getComp from 'setjs/template/component.js';
import {rumiBooks, recentNews} from './data.js';
export default {
  templates:['site/home'],
  loaded:()=>{
   
  },
  comp:()=>{
   let listFunc={
      menuToogle:()=>{
        console.log('test function how it work');
      }
    };
    let page = getComp('site/home',{rumiBooks,recentNews},listFunc);
    return page;
  }
};