import { Component } from '@angular/core';
@Component({
})
selector: 'app-root',
template: '<app-inventory></app-inventory>',
export class AppComponent {}
src/app/inventory/inventory.component.ts
import { Component } from '@angular/core';
interface Inventoryltem {
id: number;
name: string;
quantity: number;
location: string;
}
@Component({
})
selector: 'app-inventory',
templateUrl: './inventory.component.html',
styleUrls: ['./inventory.component.css']
export class InventoryComponent {
items: Inventoryltem[] = [
{ id: 1, name: 'Item A', quantity: 50, location: 'Shelf 1'},
{ id: 2, name: 'Item B', quantity: 30, location: 'Shelf 2'}
];
addItem(name: string, quantity: number, location: string) {
const newitem: Inventoryltem = {
}
};
id: this.items.length + 1,
name,
quantity: Number(quantity),
location
}
this.items.push(newitem);
src/app/inventory/inventory.component.html
<div>
<h2>Inventory List</h2>
<ul>
<li *ngFor="let item of items">
{{item.name}} - Quantity: {{item.quantity }} - Location: {{item.location }}
</li>
</ul>
<h3>Add New Item</h3>
<form #itemForm="ngForm" (ngSubmit)="addItem(name.value, quantity.value, location.value)">
<input name="name" #name required placeholder="Item Name" />
<input name="quantity" #quantity required type="number" placeholder="Quantity" />
<input name="location" #location required placeholder="Location" />
<button type="submit">Add Item</button>
</form>
</div>
src/app/inventory/inventory.component.css
ul {
list-style: none;
}
padding: 0;
li {
margin-bottom: 10px;
}
input {
margin-right: 5px;
margin-top: 10px;
}
button {
}
margin-top: 10px;