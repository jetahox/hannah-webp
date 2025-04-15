import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
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
  imports: [CdkDropList, CdkDrag, DragDropModule,NgClass,NgIf],
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

  showModal = false;
  itemToMove: any=null;
  originalContainer: any [] = [];

  drop(event:CdkDragDrop<any[]>){
    // Reset the hover states
    this.isHoveringOverDoneList=false;
    this.isHoveringOverTodoList=false;

    this.showModal = true;
    this.itemToMove = event.item.data;
    this.originalContainer = event.previousContainer.data; 
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
  isHoveringOverDoneList = false;
  onEnterDoneList(){
    this.isHoveringOverDoneList = true;
  }
  onExitDoneList(){
    this.isHoveringOverDoneList = false;
  }
  isHoveringOverTodoList = false;

  onEnterTodoList() {
    this.isHoveringOverTodoList = true;
  }
  
  onExitTodoList() {
    this.isHoveringOverTodoList = false;
  }
  confirmTransfer(confirmed: boolean) {
    if (confirmed) {
    } else {
      
      const index = this.originalContainer.findIndex(item => item === this.itemToMove);
      if (index !== -1) {
        this.originalContainer.splice(index, 0, this.itemToMove);
      }
    }
    this.showModal = false; 
    this.itemToMove = null; 
  }
  }

