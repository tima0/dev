// tslint:disable-next-line:max-line-length
import { GroupMemberDetailsDependentsEditComponent } from './views/group/group-member-details-dependents-edit/group-member-details-dependents-edit.component';
import { GroupGroupPlansComponent } from './views/group/group-group-plans/group-group-plans.component';
import { GroupGroupBillingComponent } from './views/group/group-group-billing/group-group-billing.component';
import { TestComponent } from './views/test/test/test.component';
import { BrokerProfileComponent } from './views/broker/broker-profile/broker-profile.component';
import { HelpComponent } from './views/help/help.component';
import { AlertComponent } from './shared/alerts/alert/alert.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { LockComponent } from './views/pages/lock/lock.component';
import { FirstTimeUserComponent } from './views/pages/first-time-user/first-time-user.component';
import { RegisterBrokerComponent } from './views/pages/register-broker/register-broker.component';
import { RegisterGroupAdminComponent } from './views/pages/register-group-admin/register-group-admin.component';
import { RegisterDentistComponent } from './views/pages/register-dentist/register-dentist.component';
import { RegisterMemberComponent } from './views/pages/register-member/register-member.component';
import { RegistrationConfirmationComponent} from './views/pages/registration-confirmation/registration-confirmation.component';
import { DashboardAdminComponent } from './views/dashboards/dashboard-admin/dashboard-admin.component';
import { DashboardBrokerComponent } from './views/dashboards/dashboard-broker/dashboard-broker.component';
import { DashboardGroupComponent } from './views/dashboards/dashboard-group/dashboard-group.component';
import { DashboardProviderComponent } from './views/dashboards/dashboard-provider/dashboard-provider.component';
import { DashboardMemberComponent } from './views/dashboards/dashboard-member/dashboard-member.component';
import { AccountComponent } from './views/broker/account/account.component';
import { AccountContactComponent } from './views/broker/account-contact/account-contact.component';
import { MessageCenterComponent } from './views/broker/message-center/message-center.component';
import { CommissionsComponent } from './views/broker/commissions/commissions.component';
import { LicenseComponent } from './views/broker/license/license.component';
import { LogoutComponent } from './views/pages/logout/logout.component';
import { ManageGroupsComponent } from './views/broker/manage-groups/manage-groups.component';
import { GroupDetailsComponent } from './views/broker/group-details/group-details.component';
import { GroupDetailsEditComponent } from './views/broker/group-details-edit/group-details-edit.component';
import { PlansComponent } from './views/broker/plans/plans.component';
import { EnrollmentComponent } from './views/broker/enrollment/enrollment.component';
import { EnrollmentAddMemberComponent } from './views/broker/enrollment-add-member/enrollment-add-member.component';
import { EnrollmentTerminateMemberComponent } from './views/broker/enrollment-terminate-member/enrollment-terminate-member.component';
import { MemberDetailsComponent } from './views/broker/member-details/member-details.component';
import { MemberDetailsDependentsComponent } from './views/broker/member-details-dependents/member-details-dependents.component';
import { MemberDetailsDependentsAddComponent } from './views/broker/member-details-dependents-add/member-details-dependents-add.component';
import { MemberDetailsDependentEditComponent } from './views/broker/member-details-dependent-edit/member-details-dependent-edit.component';
import { MemberDetailsPlansComponent } from './views/broker/member-details-plans/member-details-plans.component';
import { BillingComponent } from './views/broker/billing/billing.component';
import { GroupDocsComponent } from './views/broker/group-docs/group-docs.component';
import { ManageIdpComponent } from './views/broker/manage-idp/manage-idp.component';
import { RenewalsComponent } from './views/broker/renewals/renewals.component';
import { ResourceCenterComponent } from './views/broker/resource-center/resource-center.component';
import { MemberProfileComponent } from './views/member/member-profile/member-profile.component';
import { MyPlanComponent } from './views/member/my-plan/my-plan.component';
import { ClaimsComponent } from './views/member/claims/claims.component';
import { IdCardComponent } from './views/member/id-card/id-card.component';
import { FindProviderComponent } from './views/member/find-provider/find-provider.component';
import { MemberResourceCenterComponent } from './views/member/member-resource-center/member-resource-center.component';
import { SubgroupsComponent } from './views/broker/subgroups/subgroups.component';
import { GroupProfileComponent } from './views/group/group-profile/group-profile.component';
import { GroupMessageCenterComponent } from './views/group/group-message-center/group-message-center.component';
import { GroupResourceCenterComponent } from './views/group/group-resource-center/group-resource-center.component';
import { GroupSubgroupsComponent } from './views/group/group-subgroups/group-subgroups.component';
import { GroupGroupDetailsComponent } from './views/group/group-group-details/group-group-details.component';
import { GroupGroupEnrollmentComponent } from './views/group/group-group-enrollment/group-group-enrollment.component';
import { GroupGroupDocsComponent } from './views/group/group-group-docs/group-group-docs.component';
// tslint:disable-next-line:max-line-length
import { GroupEnrollmentTerminateMemberComponent } from './views/group/group-enrollment-terminate-member/group-enrollment-terminate-member.component';
import { GroupEnrollmentAddMemberComponent } from './views/group/group-enrollment-add-member/group-enrollment-add-member.component';
import { GroupMemberDetailsPlansComponent } from './views/group/group-member-details-plans/group-member-details-plans.component';
// tslint:disable-next-line:max-line-length
import { GroupMemberDetailsDependentsAddComponent } from './views/group/group-member-details-dependents-add/group-member-details-dependents-add.component';
import { GroupMemberDetailsDependentsComponent } from './views/group/group-member-details-dependents/group-member-details-dependents.component';
import { GroupMemberDetailsComponent } from './views/group/group-member-details/group-member-details.component';
import { ProviderProfileComponent } from './views/provider/provider-profile/provider-profile.component';
import { ProviderMessageCenterComponent } from './views/provider/provider-message-center/provider-message-center.component';
import { PracticeDetailsComponent } from './views/provider/practice-details/practice-details.component';
import { ProviderClaimsComponent } from './views/provider/provider-claims/provider-claims.component';
import { ProviderPaymentsComponent } from './views/provider/provider-payments/provider-payments.component';
import { EligibilityBenefitsComponent } from './views/provider/eligibility-benefits/eligibility-benefits.component';
import { FeeSchedulesComponent } from './views/provider/fee-schedules/fee-schedules.component';
import { ProviderResourceCenterComponent } from './views/provider/provider-resource-center/provider-resource-center.component';
import { MemberMessageCenterComponent } from './views/member/member-message-center/member-message-center.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'pages/login' },
  { path: 'pages', children:
    [
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'lock', component: LockComponent },
      { path: 'first-time-user', component: FirstTimeUserComponent },
      { path: 'register-broker', component: RegisterBrokerComponent },
      { path: 'register-group-admin', component: RegisterGroupAdminComponent },
      { path: 'register-dentist', component: RegisterDentistComponent },
      { path: 'register-member', component: RegisterMemberComponent },
      { path: 'registration-confirmation', component: RegistrationConfirmationComponent },
    ]
  },
  { path: 'dashboards', children:
    [
      { path: 'admin', component: DashboardAdminComponent },
      { path: 'broker', component: DashboardBrokerComponent },
      { path: 'group', component: DashboardGroupComponent },
      { path: 'provider', component: DashboardProviderComponent },
      { path: 'member', component: DashboardMemberComponent },
    ]
  },
  { path: 'member', children:
    [
      { path: 'claims', component: ClaimsComponent},
      { path: 'find-provider', component: FindProviderComponent},
      { path: 'id-card', component: IdCardComponent},
      { path: 'member-profile', component: MemberProfileComponent},
      { path: 'member-resource-center', component: MemberResourceCenterComponent},
      { path: 'message-center', component: MemberMessageCenterComponent},
      { path: 'my-plan', component: MyPlanComponent},
    ]
  },
  { path: 'broker', children:
    [
      { path: 'account', component: AccountComponent},
      { path: 'account-contact', component: AccountContactComponent},
      { path: 'broker-profile', component: BrokerProfileComponent },
      { path: 'message-center', component: MessageCenterComponent},
      { path: 'commissions', component: CommissionsComponent},
      { path: 'license', component: LicenseComponent},
      { path: 'logout', component: LogoutComponent},
      { path: 'manage-groups', component: ManageGroupsComponent},
      { path: 'group-details', component: GroupDetailsComponent},
      { path: 'group-details-edit', component: GroupDetailsEditComponent},
      { path: 'plans', component: PlansComponent},
      { path: 'enrollment', component: EnrollmentComponent},
      { path: 'enrollment-add-member', component: EnrollmentAddMemberComponent},
      { path: 'enrollment-terminate-member', component: EnrollmentTerminateMemberComponent},
      { path: 'member-details', component: MemberDetailsComponent},
      { path: 'member-details-dependents', component: MemberDetailsDependentsComponent},
      { path: 'member-details-dependents-add', component: MemberDetailsDependentsAddComponent},
      { path: 'member-details-dependent-edit', component: MemberDetailsDependentEditComponent},
      { path: 'member-details-plans', component: MemberDetailsPlansComponent},
      { path: 'billing', component: BillingComponent},
      { path: 'group-docs', component: GroupDocsComponent},
      { path: 'manage-idp', component: ManageIdpComponent},
      { path: 'renewals', component: RenewalsComponent},
      { path: 'resource-center', component: ResourceCenterComponent},
      { path: 'subgroups', component: SubgroupsComponent },
    ]

  },
  {
    path: 'group', children:
      [
        { path: 'group-profile', component: GroupProfileComponent },
        { path: 'message-center', component: GroupMessageCenterComponent },
        { path: 'logout', component: LogoutComponent },
        { path: 'manage-groups', component: ManageGroupsComponent },
        { path: 'group-details', component: GroupGroupDetailsComponent },
        { path: 'group-details-edit', component: GroupDetailsEditComponent },
        { path: 'plans', component: GroupGroupPlansComponent },
        { path: 'enrollment', component: GroupGroupEnrollmentComponent },
        { path: 'enrollment-add-member', component: GroupEnrollmentAddMemberComponent },
        { path: 'enrollment-terminate-member', component: GroupEnrollmentTerminateMemberComponent },
        { path: 'member-details', component: GroupMemberDetailsComponent },
        { path: 'member-details-dependents', component: GroupMemberDetailsDependentsComponent },
        { path: 'member-details-dependents-add', component: GroupMemberDetailsDependentsAddComponent },
        { path: 'member-details-dependent-edit', component: GroupMemberDetailsDependentsEditComponent },
        { path: 'member-details-plans', component: GroupMemberDetailsPlansComponent },
        { path: 'billing', component: GroupGroupBillingComponent },
        { path: 'group-docs', component: GroupGroupDocsComponent },
        { path: 'resource-center', component: GroupResourceCenterComponent },
        { path: 'subgroups', component: GroupSubgroupsComponent },
      ]

  },
  {
    path: 'provider', children:
      [
        { path: 'provider-profile', component: ProviderProfileComponent },
        { path: 'provider-message-center', component: ProviderMessageCenterComponent },
        { path: 'logout', component: LogoutComponent },
        { path: 'practice-details', component: PracticeDetailsComponent },
        { path: 'provider-claims', component: ProviderClaimsComponent },
        { path: 'provider-payments', component: ProviderPaymentsComponent },
        { path: 'eligibility-benefits', component: EligibilityBenefitsComponent },
        { path: 'fee-schedules', component: FeeSchedulesComponent },
        { path: 'provider-resource-center', component: ProviderResourceCenterComponent },
      ]

  },
  { path: 'alerts', component: AlertComponent },
  { path: 'help', component: HelpComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
