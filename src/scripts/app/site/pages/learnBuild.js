import getComp from 'setjs/template/component';
import { workshopData } from './data';
export default{
    templates:['site/learn-build'],
    comp: ()=>{
        let page = getComp('site/learn-build',{workshopData});
        return page;
    }
};