import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent
{
  settingsPopupVisible = false;
  hideSettingsPopup() { this.settingsPopupVisible = false; }
  showSettingsPopup() { this.settingsPopupVisible = true; }

  resetSettings() { this.hideSettingsPopup() }
  showPersonalData() { this.hideSettingsPopup() }
}
