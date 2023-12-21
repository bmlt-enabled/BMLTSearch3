import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async present(text: string) {
    this.isLoading = true;
    return await this.loadingController.create({
      spinner: 'circles',
      message: text
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
}


// import { Injectable } from '@angular/core';
// import { LoadingController } from '@ionic/angular';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoadingService {

//   isLoading = false;

//   constructor(public loadingController: LoadingController) { }

//   async present(text: string) {
//     this.isLoading = true;
//     const loading = await this.loadingController.create({
//       spinner: 'circles',
//       message: text
//     });

//     loading.present();
//   }

//   async dismiss() {
//     this.isLoading = false;
//     return await this.loadingController.dismiss();
//   }
// }