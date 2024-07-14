import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent
{
  @Output() hidePersonalData : EventEmitter<any> = new EventEmitter;
  @Output() showPersonalData : EventEmitter<any> = new EventEmitter;

  settingsPopupVisible = false;
  hideSettingsPopup() { this.settingsPopupVisible = false; }
  showSettingsPopup() { this.settingsPopupVisible = true; }

  resetSettings() {
    this.hideSettingsPopup();

  }
}
