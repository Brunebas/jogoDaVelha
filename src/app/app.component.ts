import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jogodavelha';

  x = "https://cdn-icons-png.flaticon.com/512/75/75519.png"
  o = "https://cdn-icons-png.flaticon.com/512/32/32341.png"

  q1;
  q2;
  q3;
  q4;
  q5;
  q6;
  q7;
  q8;
  q9;
  cont = 0;

  div1(){
    if(this.q1 == this.x || this.q1 == this.o){

    }else if(this.cont %2 ==0){
      this.q1 = this.x;
      this.cont++
    } else {
      this.q1 = this.o;
      this.cont++;
    }
  }
}


