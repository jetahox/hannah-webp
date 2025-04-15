import { Component } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  DragDropModule
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-alarmkette',
  standalone: true,
  imports: [CdkDropList, CdkDrag, DragDropModule],
  templateUrl: './alarmkette.component.html',
  styleUrl: './alarmkette.component.css',
})
export class AlarmketteComponent {
  todo = [
    { name: 'Trudo Qa', avatar: '/assets/avatar1.png' },
    { name: 'Ylber Pllana', avatar: '/assets/avatar2.png' }
  ];
  
  done = [
    { name: 'Trudo', avatar: '/assets/avatar2.png' }
  ];
  

  drop(event: CdkDragDrop<any[]>) {
    // moving inside the todolist
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, 
        event.previousIndex, 
        event.currentIndex);
    } 
    // moving in the done list
    else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  
}
