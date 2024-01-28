import React from 'react'
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Year, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-400 rounded-3xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{dataSource: scheduleData}}
        >
        <Inject services={[Day, Week, WorkWeek, Month, Year, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
