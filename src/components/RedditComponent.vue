<template>
   <div id="app" class="container">

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
        <div v-for="listing in listings" class="panel panel-primary">
            <div class="panel-heading">
                <b>{{ listing.data.title }}</b>
            </div>
            <div class="panel-body">
                {{ listing.data.selftext }}
                <img v-if="listing.data.thumbnail != 'self'" :src="listing.data.thumbnail" :height="listing.data.thumbnail_height"
                    :width="listing.data.thumbnail_width" :alt="listing.data.title" />
            </div>
            <div class="panel-footer">
                <em class="pull-right">+ {{ listing.data.ups }}</em>
                <a :href="listing.data.url" target="_blank" class="btn btn-primary">View on Reddit</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data: {
    listings: null,
    defaultRedditUrl: "https://www.reddit.com/.json", 
    selectedSubReddit: ""
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