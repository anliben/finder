import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import TabsInterface from './interface/tabs.interface';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  menuItems: Array<TabsInterface> = [
    {
      title: 'Characters',
      active: true,
      link: '/'
    },
    {
      title: 'Teams',
      active: false,
      link: '/teams'
    },
    {
      title: 'Clans',
      active: false,
      link: '/clans'
    },
    {
      title: 'Villages',
      active: false,
      link: '/villages'
    },
  ]

  constructor() { }

  ngOnInit(): void {}

  changeTabActive() {
    setTimeout(() => {
      const pathname = window.location.pathname
      console.log(pathname)

      this.menuItems.forEach(item => {
        item.active = false
        if (item.link === pathname) {
          item.active = true
        }
      })
    }, 500)
  }
}
