<template>
    <div>
    <!-- Events are displayed here -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
            <article>
                <h2 class="text-2xl font-extrabold text-gray-900">OUR EVENTS</h2>
                <section>
                   <EventCard :events="allEvents" />    
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
          allEvents: [],
        }
      },
        mounted() {
         this.getAllEvents()
      },
      methods:{
          getAllEvents() {
              this.allEvents = this.events['data']
          }
      },
      apollo: {
        events: {
          prefetch: true,
          query: allEventQuery,
          variables () {
            console.log('this--->', this.events.data)
            return { 
              id: parseInt(this.events) }
          }
        }
      },
    }
    </script>