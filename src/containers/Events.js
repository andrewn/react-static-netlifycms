import React from "react";
import { withRouteData, Link } from "react-static";
import Moment from "react-moment";
//

export const EventTable = ({ events }) => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Title</th>
        <th>Date</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {events.map(event => (
        <tr key={event.data.slug}>
          <td>{event.data.series.data.title}</td>
          <td>{event.data.title}</td>
          <td>
            <Moment format="YYYY/MM">{event.data.startDate}</Moment>
          </td>
          <td>
            <Link to={`/events/${event.data.slug}`}>
              <pre>--></pre>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default withRouteData(({ base, events }) => (
  <div>
    <h1>Events</h1>
    <br />
  </div>
));
