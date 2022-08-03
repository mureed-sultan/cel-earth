import getComp from 'setjs/template/component.js';
let rumiBooks={
  book1:{
    image:'/images/cal-earth/book(1).png',
    title:'The Spritual poems of Rumi',
    price:'16.99'
  },   
  book2:{
    image:'/images/cal-earth/book(2).png',
    title:'The friendship poems of rumi',
    price:'16.99'
  },    
  book3:{
    image:'/images/cal-earth/book(3).png',
    title:'Love poems of Rumi',
    price:'16.99'
  },  
};
export default {
  templates:['site/home'],
  comp:()=>{
    let page = getComp('site/home',{rumiBooks});
    return page;
  }
};