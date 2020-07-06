<template>
  <vue-echarts :options="options" />
</template>

<script>
import "echarts/extension/bmap/bmap";
export default {
  mounted() {
    this.options = {
      bmap: {
        key: "uotjzADk7E2CMrDvLWDZbQIfbPgMyCcC",
        center: [106.556137, 29.557938],
        zoom: 15,
        roam: true,
        mapStyle: {
          styleJson: [
            {
              featureType: "water",
              elementType: "all",
              stylers: {
                color: "#044161"
              }
            },
            {
              featureType: "land",
              elementType: "all",
              stylers: {
                color: "#091934"
              }
            },
            {
              featureType: "boundary",
              elementType: "geometry",
              stylers: {
                color: "#064f85"
              }
            },
            {
              featureType: "railway",
              elementType: "all",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                color: "#004981"
              }
            },
            {
              featureType: "highway",
              elementType: "geometry.fill",
              stylers: {
                color: "#005b96",
                lightness: 1
              }
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "on"
              }
            },
            {
              featureType: "arterial",
              elementType: "geometry",
              stylers: {
                color: "#004981",
                lightness: -39
              }
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: {
                color: "#00508b"
              }
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "green",
              elementType: "all",
              stylers: {
                color: "#056197",
                visibility: "off"
              }
            },
            {
              featureType: "subway",
              elementType: "all",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "manmade",
              elementType: "all",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "local",
              elementType: "all",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "arterial",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "boundary",
              elementType: "geometry.fill",
              stylers: {
                color: "#029fd4"
              }
            },
            {
              featureType: "building",
              elementType: "all",
              stylers: {
                color: "#1a5787"
              }
            },
            {
              featureType: "label",
              elementType: "all",
              stylers: {
                visibility: "true"
              }
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ffffff"
              }
            },
            {
              featureType: "poi",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#1e1c1c"
              }
            },
            {
              featureType: "administrative",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            }
          ]
        }
      }
    };
  },
  data() {
    return {
      options: {}
    };
  }
};
</script>

<style lang="scss" scoped>
</style>