import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
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
  imports: [CdkDropList, CdkDrag, DragDropModule, NgClass, NgIf],
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
  itemToMove: any = null;
  originalContainer: any[] = [];
  targetContainer: any[] = [];
  originalIndex: number = -1;
  targetIndex: number = -1;

  isHoveringOverDoneList = false;
  isHoveringOverTodoList = false;

  drop(event: CdkDragDrop<any[]>) {
    this.isHoveringOverDoneList = false;
    this.isHoveringOverTodoList = false;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    this.itemToMove = event.previousContainer.data[event.previousIndex];
    this.originalContainer = event.previousContainer.data;
    this.targetContainer = event.container.data;
    this.originalIndex = event.previousIndex;
    this.targetIndex = event.currentIndex;

    transferArrayItem(
      this.originalContainer,
      this.targetContainer,
      this.originalIndex,
      this.targetIndex
    );

    this.showModal = true;
  }

  onEnterDoneList() {
    this.isHoveringOverDoneList = true;
  }

  onExitDoneList() {
    this.isHoveringOverDoneList = false;
  }

  onEnterTodoList() {
    this.isHoveringOverTodoList = true;
  }

  onExitTodoList() {
    this.isHoveringOverTodoList = false;
  }

  confirmTransfer(confirmed: boolean) {
    if (!confirmed && this.itemToMove && this.originalContainer && this.targetContainer) {
      const removedIndex = this.targetContainer.findIndex(item => item === this.itemToMove);
      if (removedIndex !== -1) {
        this.targetContainer.splice(removedIndex, 1);
        this.originalContainer.splice(this.originalIndex, 0, this.itemToMove);
      }
    }

    this.showModal = false;
    this.itemToMove = null;
    this.originalContainer = [];
    this.targetContainer = [];
    this.originalIndex = -1;
    this.targetIndex = -1;
  }
}
