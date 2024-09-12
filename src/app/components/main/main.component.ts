// import { Component, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-main',
//   templateUrl: './main.component.html',
//   styleUrls: ['./main.component.css']
// })
// export class MainComponent {
//   @Output() searchChanged = new EventEmitter<string>();


//   searchTerm(searchTerm: any) {
//     throw new Error('Method not implemented.');
//   }

 
// }
// function Output(): (target: MainComponent, propertyKey: "searchChanged") => void {
//   throw new Error('Function not implemented.');
// }




























import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  searchTerm: string = '';

  // Method to handle search term change
  onSearchTermChange(newSearchTerm: string) {
    this.searchTerm = newSearchTerm;
  }
}
