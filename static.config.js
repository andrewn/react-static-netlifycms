import allContent from "./src/lib/allContent";

export default {
  getSiteData: () => ({
    title: "React Static with Netlify CMS"
  }),
  getRoutes: async () => {
    const content = await allContent();

    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          ...content
        })
      },
      // {
      //   path: "/series",
      //   component: "src/containers/Events",
      //   getData: () => ({
      //     events: content.series,
      //     base: "/series"
      //   }),
      //   children: content.series.map(s => {
      //     return {
      //       path: `/${s.data.slug}`,
      //       component: "src/containers/Event",
      //       getData: () => ({
      //         event: s,
      //         base: "/series"
      //       })
      //     };
      //   })
      // },
      {
        path: "/events",
        component: "src/containers/Events",
        getData: () => ({
          events: content.events,
          base: "/events"
        }),
        children: content.events.map(event => {
          return {
            path: `/${event.data.slug}`,
            component: "src/containers/Event",
            getData: () => ({
              event,
              base: "/events"
            })
          };
        })
      },
      // {
      //   path: "/news",
      //   component: "src/containers/Blog",
      //   getData: () => ({
      //     posts: content.posts
      //   }),
      //   children: content.posts.map(post => ({
      //     path: `/post/${post.data.slug}`,
      //     component: "src/containers/Post",
      //     getData: () => ({
      //       post
      //     })
      //   }))
      // },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
