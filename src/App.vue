<template>
  <el-menu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1"
      ><router-link to="/" class="router" @click="btn"
        >全部</router-link
      ></el-menu-item
    >
    <el-sub-menu index="2">
      <template #title>分类</template>
      <el-menu-item @click="jump(cats.name)" v-for="cats of cats" index="2-1">{{
        cats.name
      }}</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3"
      ><router-link to="/shopp" class="router"
        >购物车</router-link
      ></el-menu-item
    >
    <el-menu-item index="4"
      ><router-link to="/aboutme" class="router" @click="btn"
        >我的简历</router-link
      ></el-menu-item
    >
  </el-menu>

  <router-view></router-view>
</template>
<script>
import Home from "./Home.vue";

export default {
  data() {
    return {
      cats: [],
    };
  },
  mounted() {
    fetch("http://8.142.160.139:8080/cats")
      .then((resp) => resp.json())
      .then((cats) => {
        this.cats = cats;
      });
  },
  methods: {
    jump(name) {
      this.$router.push({
        path: "/fenlei",
        query: {
          name: name,
        },
      });
    },
  },
};
</script>
<style scoped>
.router {
  text-decoration: none;
  color: white;
}
</style>
