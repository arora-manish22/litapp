import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Settings } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  options: any;
  settingsReady = false;
  form: FormGroup;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService
  ) { }

  ionViewWillEnter() {

    // load settings
    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      // add settings here & in html
      this.form = this.formBuilder.group({
        autoloadnextinseries: [this.options.autoloadnextinseries]
      });

      this.form.valueChanges.subscribe((v) => {
        this.settings.merge(this.form.value);
      });

    });
  }

}
