<template>
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeName(tag)"
      @close="handleClose(tag, index)"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ConmonTag",
  data() {
    return {};
  },
  methods: {
    ...mapMutations("tab", { close: "CLOSETAG" }),
    changeName(tag) {
      this.$router.push({
        // path: tag.path,
        name: tag.name,
      });
    },
    handleClose(tag, index) {
      const length = this.tags.length - 1;
      this.close(tag);
      if (tag.name != this.$route.name) {
        return;
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index + 1].name,
        });
      }
    },
  },
  computed: {
    ...mapState("tab", { tags: "tabsList" }),
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>