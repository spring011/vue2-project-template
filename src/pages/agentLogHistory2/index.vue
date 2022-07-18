<template>
  <div id="myapp">
    <el-container class="comm-all-container">
      <div class="comm-right-size">
        <div class="comm-main-content">
          <template>
            <mainContent />
          </template>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import mainContent from './agentLogHistory2.vue';

export default {
  components: {
    mainContent,
  },
};
</script>
