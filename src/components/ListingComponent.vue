<template>
    <div>
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
</template>

<script>
export default {
  name: 'ListingComponent',
  props: {
    listing: Object
  }
}
</script>