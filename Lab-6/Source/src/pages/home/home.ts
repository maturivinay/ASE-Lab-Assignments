import { Component, ViewChild } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild('map') mapElement;
map: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.initMap();
  }
  initMap(){
    let latlng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
try{
  await this.tts.speak(this.text);
  console.log("Successfully spoke" + this.text)
}
catch(e){
  console.log(e);
}
ionViewDidLoad() {
  console.log('ionViewDidLoad LoginPage');
}
login(){
  this.navCtrl.push(TabsPage);

}
ionViewDidLoad() {
  console.log('ionViewDidLoad WelcomePage');
}
login(){
this.navCtrl.push(LoginPage);
}
signup(){
this.navCtrl.push(SignupPage);

}


    }
  }




