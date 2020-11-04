import { Component, OnInit } from '@angular/core';
import {DatapassService} from '../../datapass.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managestore',
  templateUrl: './managestore.page.html',
  styleUrls: ['./managestore.page.scss'],
})
export class ManagestorePage implements OnInit {
  dataUsername: any;
  dataStore: any;
  products: any;
  constructor(public datapassService: DatapassService, private Http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.dataUsername = this.datapassService.userIDLogin;
    let ownerid;
    for (ownerid of this.dataUsername) {
      }
    const dataJSON = {
      owner_store: ownerid.id_member,
    };
    this.Http.post('https://jongsanamcsmsu.000webhostapp.com/apiFinal/getOwnerstore', JSON.stringify(dataJSON))
        .subscribe(datastore => {
          this.datapassService.datastoreowner = datastore;
          this.products = datastore;
          this.datapassService.managedatastore = this.products;
          console.log(datastore);
        });
  }
  goToAddstore() {
    const navigate = this.router.navigate(['/home/tabs/account/managestore/addstore']);
  }

  gotoEdit() {
    const navigate = this.router.navigate(['/home/tabs/account/managestore/editstore']);
  }

  gotomanagefiled(idstore) {
    this.datapassService.idstoreformmanagestore = idstore;
    console.log(this.datapassService.idstoreformmanagestore);
    const navigate = this.router.navigate(['/home/tabs/account/managestore/managefield']);
  }
}
