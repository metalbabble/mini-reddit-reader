<template>
   <div class="container">
        <!-- Sub select -->
        <div class="panel panel-body panel-info">
            Select a Sub-Reddit:
            <select v-model="selectedSubReddit" @change="changedSubReddit">
                <option disabled value="">Please select one</option>
                <option value="">Front Page</option>
                <option>/r/Jeep</option>
                <option>/r/ProgrammerHumor</option>
                <option>/r/Funny</option>
            </select>
        </div>

        <!-- Listings -->
        <div v-for="listing in listings" class="panel panel-primary" :key="listing.id">
            <ListingComponent :listing="listing"></ListingComponent>
        </div>
    </div>
</template>

<script>
  import axios from "axios"
  import ListingComponent from './ListingComponent.vue'
  export default {

  name: 'RedditComponent',

  components: {
    ListingComponent
  },

  data: function() {
    return {
        listings: null,
        defaultRedditUrl: "https://www.reddit.com/.json", 
        selectedSubReddit: ""
        }
    },

  computed: {
    currentRedditUrl: function() {
      return "https://www.reddit.com" + this.selectedSubReddit + "/.json";
    }
  },

  mounted() {
    this.getListings();
  },

  methods: {
    getListings: function() {
        axios
            .get(this.currentRedditUrl)
            .then(response => (this.listings = response.data.data.children));    
    },
    changedSubReddit : function() {
      this.getListings();
    }
  }
}
</script>