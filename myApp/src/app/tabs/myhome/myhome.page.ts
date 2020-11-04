import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {DatapassService} from '../../datapass.service';
import {IonRouterOutlet, LoadingController} from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.page.html',
  styleUrls: ['./myhome.page.scss'],
})
export class MyhomePage implements OnInit {
    getstore: any;
    loading: any;


  constructor(private Http: HttpClient, private router: Router, private datapass: DatapassService, private routerOutlet: IonRouterOutlet, private localNotifications: LocalNotifications, private loadingController: LoadingController) {


  }

  ngOnInit() {
      this.getstore = this.datapass.datastore;
      // this.routerOutlet.swipeGesture = false;
  }

  async clickstore(idstore) {
      this.loading = await this.loadingController.create({
          message: 'กำลังโหลดข้อมูล...',
      });
      console.log(idstore);

      const dataJSON = {
            id_store: idstore,
        };
      this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getingfield', JSON.stringify(dataJSON))
            .subscribe(datafield => {
                this.datapass.datafield  = datafield;
                this.loading.dismiss();
                this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getstoreformID', JSON.stringify(dataJSON))
                    .subscribe(datastore => {
                        this.datapass.getingfieldfromstore = datastore;
                        this.loading.dismiss();
                        const navigate = this.router.navigate(['/home/tabs/myhome/myhome-field']);
                    });
                this.loading.present();
            });
      this.loading.present();
  }

    Gosearch() {
        // let navigate = this.router.navigate(['./search']);
        const navigate = this.router.navigate(['/home/tabs/search']);

    }

    notifications() {

    }
}
