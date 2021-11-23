import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { ReportLossComponent } from './report-loss.component';
import { RouterModule } from '@angular/router';
import { CheckinComponent } from '@flight-workspace/luggage/feature-checkin';

@NgModule({
  imports: [
    CommonModule,
    LuggageDomainModule,
    // Add this:
    RouterModule.forChild([
      { path: '', component: CheckinComponent }
    ])
  ],
  declarations: [ReportLossComponent],
  exports: [ReportLossComponent],
})
export class LuggageFeatureReportLossModule {}
