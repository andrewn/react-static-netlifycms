import React from "react";
import { withSiteData, withRouteData } from "react-static";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import Moment from "react-moment";

import { EventTable } from "./Events";

const groupedSpeakers = speakers =>
  groupBy(speakers, s => {
    console.log("s", s);
    return s.data.lastName.slice(0, 1);
  });

const Speaker = ({ speaker }) => (
  <li>
    {speaker.data.lastName}, {speaker.data.otherNames}
  </li>
);

const SpeakerIndex = ({ speakers }) => {
  return (
    <section className="a-z">
      <h1>A&mdash;Z</h1>
      <h2>Speakers &amp; Topics</h2>
      <ul>
        {map(groupedSpeakers(speakers), (inGroup, letter) => (
          <React.Fragment key={letter}>
            <h3>{letter}</h3>
            <ul>
              {inGroup.map(speaker => (
                <Speaker key={speaker.data.title} speaker={speaker} />
              ))}
            </ul>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

const Intro = () => (
  <section className="intro">
    <div className="masthead">
      <h1>Retune</h1>
      <h2>Creative Technology Laboratory</h2>
    </div>
    <nav>
      <ol>
        <li>Platform &amp; Community</li>
        <li>Research &amp; Development</li>
        <li>Workshops &amp; Education</li>
      </ol>
    </nav>
  </section>
);

const Event = ({ event }) => (
  <div className="event">
    <a href={`/events/${event.data.slug}`}>
      <div className="series">{event.data.series.data.title}</div>
      <img className="thumbnail" src={event.data.thumbnail} />
      <div className="title">{event.data.title}</div>
      <div className="date">
        <Moment format="DD.MM.YYYY">
          {event.data.data || event.data.startDate}
        </Moment>
      </div>
    </a>
  </div>
);

const Happening = ({ events }) => (
  <section className="happening">
    {events.map((event, index) => <Event key={index} event={event} />)}
  </section>
);

const Events = ({ events }) => (
  <section className="events">
    <h2>Events</h2>
    <p>
      Retune is a Berlin-based community platform at the intersection of Art,
      Design and Technology. We organize the biennial Retune Festival, Studio
      Visits and workshops.
    </p>
    <EventTable events={events} />
  </section>
);

export default withRouteData(
  withSiteData(({ events, news, speakers }) => {
    return (
      <div>
        <Intro />
        <Happening events={events} />
        <Events events={events} />
        <SpeakerIndex speakers={speakers} />
      </div>
    );
  })
);
