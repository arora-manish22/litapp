import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { List } from '../../models/list';
import { Lists } from '../../providers/providers';

@IonicPage({priority: 'high'})
@Component({
  selector: 'page-list-list',
  templateUrl: 'list-list.html',
})
export class ListListPage {

  lists: List[];
  showLoader = false;

  constructor(public navCtrl: NavController, public l: Lists) {
    this.showLoader = true;
    this.l.onReady().then(() => {
    	this.refreshLists();
    });
  }

  openList(list: List) {
    this.navCtrl.push('ListViewPage', {
      list: list
    });
  }

  addList() {
    this.navCtrl.push('ListCreatePage', {
      callback: () => this.refreshLists()
    });
  }

  edit(list: List, item, event) {
    event.stopPropagation();
    item.close();
    this.navCtrl.push('ListCreatePage', {
      list: list
    });
  }

  delete(list: List, item, event) {
    event.stopPropagation();
    this.l.delete(list).subscribe((d) => {
      if (d) {
        item.close();
        this.refreshLists()
      }
    });
  }

  private refreshLists() {
    this.l.query().subscribe((data: any) => {
      if (data) {
        this.lists = [];
        data.forEach((d: any) => this.lists.push(d));
        this.showLoader = false;
      }
    });
  }

}
