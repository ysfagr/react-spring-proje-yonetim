import React, { Component } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";

class Backlog extends Component {
  render() {
    const { project_tasks_prop } = this.props;

    const tasks = project_tasks_prop.map(project_task => (
      <ProjectTask key={project_task.id} project_task={project_task} />
    ));

    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.project_task.status === "TO_DO") {
        todoItems.push(tasks[i]);
      }

      if (tasks[i].props.project_task.status === "IN_PROGRESS") {
        inProgressItems.push(tasks[i]);
      }

      if (tasks[i].props.project_task.status === "DONE") {
        doneItems.push(tasks[i]);
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-secondary text-white">
                <h3>YAPILACAK</h3>
              </div>
            </div>
            {todoItems}
            {
              // taskı ekle
            }
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-primary text-white">
                <h3>YAPILIYOR</h3>
              </div>
            </div>
            {inProgressItems}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-success text-white">
                <h3>TAMAMLANDI</h3>
              </div>
            </div>
            {doneItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Backlog;