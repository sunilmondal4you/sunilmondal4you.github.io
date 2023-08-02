import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mypage';

  basicInfo = {
    firstName: 'Sunil',
    lastName: 'Mondal',
    email: 'sunilmondal4you@gmail.com',
    mobile: '+91 8779529714',
    role: 'Senior Angular Developer | NodeJS Developer',
    discription:
      "I am a Senior Angular Developer with more than 7 years of experience writing Angular, Typescript, Angular JS, Bootstrap, Node JS, HTML, CSS, and JS. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
  };
}
