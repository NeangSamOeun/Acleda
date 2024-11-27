import { Component } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  image: string = 'assets/image/studentProfile.png'
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
