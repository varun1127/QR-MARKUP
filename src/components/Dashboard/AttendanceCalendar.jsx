import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './dashboard.css';

const localizer = momentLocalizer(moment);

const AttendanceCalendar = ({ logs }) => {
  const events = logs.map(log => ({
    title: `${log.studentName} - ${log.status}`,
    start: new Date(log.timestamp),
    end: new Date(log.timestamp),
    allDay: false,
    resource: log,
    status: log.status.toLowerCase()
  }));

  const eventStyleGetter = (event) => {
    let backgroundColor = '#3174ad';
    if (event.status === 'present') backgroundColor = '#2ecc71';
    if (event.status === 'late') backgroundColor = '#f39c12';
    if (event.status === 'absent') backgroundColor = '#e74c3c';
    
    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
      }
    };
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month', 'week', 'day']}
        defaultView="month"
        eventPropGetter={eventStyleGetter}
        onSelectEvent={(event) => alert(`Details: ${JSON.stringify(event.resource, null, 2)}`)}
      />
    </div>
  );
};

export default AttendanceCalendar;