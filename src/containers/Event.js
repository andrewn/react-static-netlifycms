import React from "react";
import { withRouteData, Link } from "react-static";
import Moment from "react-moment";
import Markdown from "react-markdown";
//

export default withRouteData(({ event, base }) => (
  <div data-page="event">
    <div className="titles">
      <p className="series">{event.data.series.data.title}</p>
      <h2 className="title">{event.data.title}</h2>
      <Moment className="date" format="DD.MM.YYYY">
        {event.data.date}
      </Moment>
      <a href="" className="ticket">
        Get the ticket
      </a>
    </div>

    <img className="image" src={event.data.thumbnail} alt="" />
    <Markdown source={event.content} escapeHtml={false} />
  </div>
));
