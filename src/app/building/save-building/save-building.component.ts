import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-save-building',
  templateUrl: './save-building.component.html',
  styleUrls: ['./save-building.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaveBuildingComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    });
  }



  ngOnInit(): void {
    this.items = [];
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = [];
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
