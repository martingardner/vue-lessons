<template>
  <div class="online-status">
    <div v-if="online" class="online">
      <span class="light"></span>
      <p>A staff member is online and available</p>
    </div>
    <div v-if="!online" class="offline">
      <span class="light"></span>
      <p>A staff member is offline</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      online: false
    };
  }
};
</script>

<style>
.online-status {
  background: #eee;
  border: 1px dashed #ddd;
  display: inline-block;
  padding: 10px;
}

p {
  display: inline-block;
  font-family: arial;
  margin: 0;
  color: #555;
}

.light {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.online .light {
  background: limegreen;
}

.offline .light {
  background: crimson;
}
</style>
