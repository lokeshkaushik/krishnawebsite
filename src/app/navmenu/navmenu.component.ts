import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobNavComponent } from "../mob-nav/mob-nav.component";
@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [CommonModule, MobNavComponent],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.css'
})
export class NavmenuComponent {
    clickState=false;
    onClickMenu(){
      this.clickState=!this.clickState;
    }
}
