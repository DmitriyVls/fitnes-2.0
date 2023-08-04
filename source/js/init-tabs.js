import {Tabs} from './tabs';

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  console.log('1')
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;
};

export {initTabs, tabs};

initTabs();
