import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-resource-center',
  templateUrl: './resource-center.component.html',
  styleUrls: ['./resource-center.component.scss']
})
export class ResourceCenterComponent {

public itemsList : Object[] = [
  {
    title: 'How do I add an employee?',
    description: 'Eligible employees can be added using the Enrollment tab on the left side of the screen. Select Add a Member at the top right of the screen.  All required fields will include an asterisk.  To add one or more dependents, select the Add Dependent button below the coverage section.  Select Save to complete the membership modifications.  A confirmation and transaction ID will be displayed and can be saved or printed for your records.  For questions about membership modifications, please contact a Customer Care representative with the transaction information.'
  }, {
    title: 'How do I add or edit dependents on an existing subscribers plan?',
    description: 'Locate the subscriber and select Details to access the modification screen.  Select Edit in the Dependent section.  Choose Add Another at the bottom left to add eligible dependents.  All required fields will include and asterisk.  Select Save Changes to complete the membership modification.'
  }, {
    title: 'How do I terminate coverage for a dependent or subscriber?',
    description: 'Under the Enrollment tab, select Term A Member to open the subscriber search.  Check the box of the correct subscriber and /or and dependents by expanding the dependent records.  Select Term A Member again to enter the termination date (based on your billing parameters) for the dental and/or vision plans.  You will also be required to include the qualifying reason.  A confirmation and transaction ID will be displayed and can be saved or printed for your records.'
  }, {
    title: 'How can I add or change a subscribers plan?',
    description: 'Locate the subscriber and select Details to access the modification screen.  During open enrollment or based on a qualifying event, you will be able to modify a subscribers plan.'
  }, {
    title: 'How can I authorize automatic recurring invoice payments?',
    description: 'If you have not yet elected to pay invoices using our electronic funds transfer program, locate the Payment Account Info section and enter the preferred EFT banking information to enroll.  Or, you can select the Enroll of EFT link to download an authorization form.  Please note that new or changed banking information will not take effect until the next billing cycle.  If you need assistance or for questions, please contact a Customer Care representative.'
  }, {
    title: 'How do I change banking information?',
    description: 'Locate the Payment Account Info section and enter the preferred EFT banking information.  Please note that new or changed banking information will not take effect until the next billing cycle.  If you need assistance or for questions, please contact a Customer Care representative.'
  }, {
    title: 'Can I add multiple administrative users?',
    description: 'Currents users with administrative permission can grant access to additional group contacts from the Group Details tab.  To add multiple users, select Add Another.  Complete all required fields and permission levels.  New user access will be available once Save is selected.'
  }
];

}
