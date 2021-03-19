import * as React from "react";
import * as ReactDOM from "react-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel
} from "@syncfusion/ej2-react-schedule";

import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

export default class Calendario extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 2,
        Subject: "Aula",
        StartTime: new Date(2021, 2, 15, 10, 0),
        EndTime: new Date(2021, 2, 18, 12, 30)
      },
      {
        Id: 3,
        Subject: "to",
        StartTime: new Date(2021, 2, 16, 9, 0),
        EndTime: new Date(2021, 2, 25, 12, 30)
      }
    ];
  }
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <ScheduleComponent
          currentView="Month"
          height="550px"
          width="80%"
          style={{ margin: "auto", marginTop: "50px" }}
          eventSettings={{ dataSource: this.data }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}
