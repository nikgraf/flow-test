/* @flow */

import React from 'react';
// import type { Event } from '../../types/event';

export type Event = {
  type: string,
  timestamp: number,
  info: string,
}

type EventsProps = {
  events: Array<Event>,
};

const Events = (props : EventsProps) => (
  <div>
    <h2>Events</h2>
    <ul>
      {props.events.map(event =>
        <li key={event.timestamp}>
          {event.type}: {event.info}
        </li>
      )}
    </ul>
  </div>
);

export default Events;
