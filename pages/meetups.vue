<template>
        <div>
             <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
            <article>
                <h2 class="text-2xl font-extrabold text-gray-900">MEETUP EVENTS</h2>
                <section>
                   <EventCard :events="meetupEvent" />    
                </section>
            </article>
        </section>
        </div>
    </template>
    <script>
    import { allEventQuery } from "../graphql/query";
    export default {
      data() {
        return {
          events: [],
          meetupEvent: []
        }
      },
      mounted() {
         this.getMeetUps()
      },
      methods:{
          getMeetUps() {
              this.meetupEvent = this.events['data'].filter(event => {
                  return event.attributes.categories.data[0]['attributes'].name === "meetup"
              })
          }
      },
      apollo: {
        events: {
          prefetch: true,
          query: allEventQuery,
                variables () {
            return { id: parseInt(this.events) }
          }
        }
      },
    }
    </script>