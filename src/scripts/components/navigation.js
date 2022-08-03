import getComp from 'setjs/template/component.js';
import eventManager, {eventTypes} from 'setjs/kernel/event-manager.js';

/**
* Initializes the nav
*/
const navFunctions = {
  menuToogle:()=>{
    $('nav ul').toggleClass('display-item');
    $('#home').toggleClass('display-item');
    // console.log("this workl");
  }
};
export default function() {

  var comp = getComp('common/navigation',{},navFunctions);
  $('#nav-placeholder').replaceWith(comp.$root);
  eventManager.addListener(eventTypes.route, 'nav', comp.update, null);
}
