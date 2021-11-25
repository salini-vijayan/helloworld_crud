import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasksLists = [];
  taskName:string ='';
  @ViewChild('taskInput') input;

  constructor(public alertCtrl : AlertController) {}

  addTasks(){
    if(this.taskName.length>0){
      let task = this.taskName;
      this.tasksLists.push(task);
      this.taskName = '';
    }
  }

  deleteTasks(item_index){
    this.tasksLists.splice(item_index,1)
  }

  async updateTasks(item_index){
    let alert = this.alertCtrl.create({
      
      message:'Type in your new task to update.',
      inputs : [{name: 'editTask', placeholder:'Enter task',value:this.tasksLists[item_index]}],
      buttons : [{text:'Cancel',role:'cancel'},
                {text:'Update', handler: data=>{
                  this.tasksLists[item_index] = data.editTask
                }}]
    });
    (await alert).present();
  }

}
