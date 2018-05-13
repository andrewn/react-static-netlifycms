import orderBy from "lodash/orderBy";
import moment from "moment";
import getContent from "./getContent";

const sortPostOrEvent = function(a, b) {
  const aDate = moment(a.data.date || a.data.startDate);
  const bDate = moment(b.data.date || b.data.startDate);
  return bDate - aDate;
};

export default async function allContent() {
  const posts = await getContent("posts");
  const series = await getContent("series");
  const events = (await getContent("events")).map(event => ({
    ...event,
    data: {
      ...event.data,
      series: series.find(s => s.data.id === event.data.series)
    }
  }));
  const speakers = await getContent("speakers");

  const news = [...posts, ...events].sort(sortPostOrEvent);

  return {
    posts,
    series,
    events,
    speakers,
    news
  };
}
