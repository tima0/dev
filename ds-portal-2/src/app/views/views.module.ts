import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule } from 'angular-calendar';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../main-layout/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LockComponent } from './pages/lock/lock.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { DashboardAdminComponent } from './dashboards/dashboard-admin/dashboard-admin.component';
import { DashboardBrokerComponent } from './dashboards/dashboard-broker/dashboard-broker.component';
import { DashboardGroupComponent } from './dashboards/dashboard-group/dashboard-group.component';
import { DashboardProviderComponent } from './dashboards/dashboard-provider/dashboard-provider.component';
import { DashboardMemberComponent } from './dashboards/dashboard-member/dashboard-member.component';
import { HelpComponent } from './help/help.component';
import { BrokerComponent } from './broker/broker.component';
import { AccountComponent } from './broker/account/account.component';
import { AccountContactComponent } from './broker/account-contact/account-contact.component';
import { MessageCenterComponent } from './broker/message-center/message-center.component';
import { CommissionsComponent } from './broker/commissions/commissions.component';
import { LicenseComponent } from './broker/license/license.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ManageGroupsComponent } from './broker/manage-groups/manage-groups.component';
import { GroupDetailsComponent } from './broker/group-details/group-details.component';
import { GroupDetailsEditComponent } from './broker/group-details-edit/group-details-edit.component';
import { PlansComponent } from './broker/plans/plans.component';
import { EnrollmentComponent } from './broker/enrollment/enrollment.component';
import { EnrollmentAddMemberComponent } from './broker/enrollment-add-member/enrollment-add-member.component';
import { EnrollmentTerminateMemberComponent } from './broker/enrollment-terminate-member/enrollment-terminate-member.component';
import { MemberDetailsComponent } from './broker/member-details/member-details.component';
import { MemberDetailsDependentsComponent } from './broker/member-details-dependents/member-details-dependents.component';
import { MemberDetailsDependentsAddComponent } from './broker/member-details-dependents-add/member-details-dependents-add.component';
import { MemberDetailsDependentEditComponent } from './broker/member-details-dependent-edit/member-details-dependent-edit.component';
import { MemberDetailsPlansComponent } from './broker/member-details-plans/member-details-plans.component';
import { BillingComponent } from './broker/billing/billing.component';
import { GroupDocsComponent } from './broker/group-docs/group-docs.component';
import { ManageIdpComponent } from './broker/manage-idp/manage-idp.component';
import { RenewalsComponent } from './broker/renewals/renewals.component';
import { ResourceCenterComponent } from './broker/resource-center/resource-center.component';
import { GroupComponent } from './group/group.component';
import { MemberComponent } from './member/member.component';
import { ProviderComponent } from './provider/provider.component';
import { AdminComponent } from './admin/admin.component';
import { FirstTimeUserComponent } from './pages/first-time-user/first-time-user.component';
import { RegisterBrokerComponent } from './pages/register-broker/register-broker.component';
import { RegisterGroupAdminComponent } from './pages/register-group-admin/register-group-admin.component';
import { RegisterDentistComponent } from './pages/register-dentist/register-dentist.component';
import { RegisterMemberComponent } from './pages/register-member/register-member.component';
import { RegistrationConfirmationComponent } from './pages/registration-confirmation/registration-confirmation.component';
import { MemberProfileComponent } from './member/member-profile/member-profile.component';
import { MyPlanComponent } from './member/my-plan/my-plan.component';
import { ClaimsComponent } from './member/claims/claims.component';
import { IdCardComponent } from './member/id-card/id-card.component';
import { FindProviderComponent } from './member/find-provider/find-provider.component';
import { MemberResourceCenterComponent } from './member/member-resource-center/member-resource-center.component';
import { BrokerProfileComponent } from './broker/broker-profile/broker-profile.component';
import { TestComponent } from './test/test/test.component';
import { SubgroupsComponent } from './broker/subgroups/subgroups.component';
import { GroupProfileComponent } from './group/group-profile/group-profile.component';
import { GroupMessageCenterComponent } from './group/group-message-center/group-message-center.component';
import { GroupGroupDetailsComponent } from './group/group-group-details/group-group-details.component';
import { GroupGroupPlansComponent } from './group/group-group-plans/group-group-plans.component';
import { GroupGroupEnrollmentComponent } from './group/group-group-enrollment/group-group-enrollment.component';
import { GroupGroupBillingComponent } from './group/group-group-billing/group-group-billing.component';
import { GroupGroupDocsComponent } from './group/group-group-docs/group-group-docs.component';
import { GroupSubgroupsComponent } from './group/group-subgroups/group-subgroups.component';
import { GroupResourceCenterComponent } from './group/group-resource-center/group-resource-center.component';
import { GroupEnrollmentAddMemberComponent } from './group/group-enrollment-add-member/group-enrollment-add-member.component';
// tslint:disable-next-line:max-line-length
import { GroupEnrollmentTerminateMemberComponent } from './group/group-enrollment-terminate-member/group-enrollment-terminate-member.component';
import { GroupMemberDetailsComponent } from './group/group-member-details/group-member-details.component';
import { GroupMemberDetailsDependentsComponent } from './group/group-member-details-dependents/group-member-details-dependents.component';
// tslint:disable-next-line:max-line-length
import { GroupMemberDetailsDependentsAddComponent } from './group/group-member-details-dependents-add/group-member-details-dependents-add.component';
// tslint:disable-next-line:max-line-length
import { GroupMemberDetailsDependentsEditComponent } from './group/group-member-details-dependents-edit/group-member-details-dependents-edit.component';
import { GroupMemberDetailsPlansComponent } from './group/group-member-details-plans/group-member-details-plans.component';
import { ProviderProfileComponent } from './provider/provider-profile/provider-profile.component';
import { ProviderMessageCenterComponent } from './provider/provider-message-center/provider-message-center.component';
import { PracticeDetailsComponent } from './provider/practice-details/practice-details.component';
import { ProviderClaimsComponent } from './provider/provider-claims/provider-claims.component';
import { ProviderPaymentsComponent } from './provider/provider-payments/provider-payments.component';
import { EligibilityBenefitsComponent } from './provider/eligibility-benefits/eligibility-benefits.component';
import { FeeSchedulesComponent } from './provider/fee-schedules/fee-schedules.component';
import { ProviderResourceCenterComponent } from './provider/provider-resource-center/provider-resource-center.component';
import { MemberMessageCenterComponent } from './member/member-message-center/member-message-center.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyBfwKgvHmD9JXyS5ozpKP0AyZ_3iTE-DH4'
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LockComponent,
    StatsCardComponent,
    StatsCard2Component,
    DashboardAdminComponent,
    DashboardBrokerComponent,
    DashboardGroupComponent,
    DashboardProviderComponent,
    DashboardMemberComponent,
    HelpComponent,
    BrokerComponent,
    AccountComponent,
    AccountContactComponent,
    MessageCenterComponent,
    CommissionsComponent,
    LicenseComponent,
    LogoutComponent,
    ManageGroupsComponent,
    GroupDetailsComponent,
    GroupDetailsEditComponent,
    PlansComponent,
    EnrollmentComponent,
    EnrollmentAddMemberComponent,
    EnrollmentTerminateMemberComponent,
    MemberDetailsComponent,
    MemberDetailsDependentsComponent,
    MemberDetailsDependentsAddComponent,
    MemberDetailsDependentEditComponent,
    MemberDetailsPlansComponent,
    BillingComponent,
    GroupDocsComponent,
    ManageIdpComponent,
    RenewalsComponent,
    ResourceCenterComponent,
    GroupComponent,
    MemberComponent,
    ProviderComponent,
    AdminComponent,
    FirstTimeUserComponent,
    RegisterBrokerComponent,
    RegisterGroupAdminComponent,
    RegisterDentistComponent,
    RegisterMemberComponent,
    RegistrationConfirmationComponent,
    MemberProfileComponent,
    MyPlanComponent,
    ClaimsComponent,
    IdCardComponent,
    FindProviderComponent,
    MemberResourceCenterComponent,
    BrokerProfileComponent,
    TestComponent,
    SubgroupsComponent,
    GroupProfileComponent,
    GroupMessageCenterComponent,
    GroupGroupDetailsComponent,
    GroupGroupPlansComponent,
    GroupGroupEnrollmentComponent,
    GroupGroupBillingComponent,
    GroupGroupDocsComponent,
    GroupSubgroupsComponent,
    GroupResourceCenterComponent,
    GroupEnrollmentAddMemberComponent,
    GroupEnrollmentTerminateMemberComponent,
    GroupMemberDetailsComponent,
    GroupMemberDetailsDependentsComponent,
    GroupMemberDetailsDependentsAddComponent,
    GroupMemberDetailsDependentsEditComponent,
    GroupMemberDetailsPlansComponent,
    ProviderProfileComponent,
    ProviderMessageCenterComponent,
    PracticeDetailsComponent,
    ProviderClaimsComponent,
    ProviderPaymentsComponent,
    EligibilityBenefitsComponent,
    FeeSchedulesComponent,
    ProviderResourceCenterComponent,
    MemberMessageCenterComponent
  ],
  exports: [
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    StatsCardComponent,
    StatsCard2Component,
    DashboardAdminComponent,
    DashboardBrokerComponent,
    DashboardGroupComponent,
    DashboardProviderComponent,
    DashboardMemberComponent,
    BrokerComponent,
    AccountComponent,
    AccountContactComponent,
    MessageCenterComponent,
    CommissionsComponent,
    LicenseComponent,
    LogoutComponent,
    ManageGroupsComponent,
    GroupDetailsComponent,
    GroupDetailsEditComponent,
    PlansComponent,
    MyPlanComponent,
    EnrollmentComponent,
    EnrollmentAddMemberComponent,
    EnrollmentTerminateMemberComponent,
    MemberDetailsComponent,
    MemberDetailsDependentsComponent,
    MemberDetailsDependentsAddComponent,
    MemberDetailsDependentEditComponent,
    MemberDetailsPlansComponent,
    MemberProfileComponent,
    BillingComponent,
    GroupDocsComponent,
    ManageIdpComponent,
    RenewalsComponent,
    ResourceCenterComponent,
    GroupComponent,
    MemberComponent,
    ProviderComponent,
    AdminComponent,
    FirstTimeUserComponent,
    RegisterBrokerComponent,
    RegisterGroupAdminComponent,
    RegisterDentistComponent,
    RegisterMemberComponent,
    RegistrationConfirmationComponent,
    IdCardComponent,
    ClaimsComponent,
    MemberResourceCenterComponent,
    FindProviderComponent,
    BrokerProfileComponent,
    MessageCenterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
