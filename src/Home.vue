<template>
  <el-carousel height="500px">
    <el-carousel-item>
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        alt=""
      />
    </el-carousel-item>
    <el-carousel-item>
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/222d6c61df75f30e6782ec476d5c8273.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        alt=""
      />
    </el-carousel-item>
    <el-carousel-item>
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd741adcce9417d72ea4c1a6dfcc96e2.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        alt=""
      />
    </el-carousel-item>
  </el-carousel>

  <div class="common-layout">
    <el-container class="center_main">
      <el-aside width="200px">
        <div v-for="providers of providers">
          <el-button
            class="sifter"
            type="primary"
            @click="shaixun(providers.name)"
            >{{ providers.name }}</el-button
          >
        </div>
      </el-aside>
      <el-main>
        <div class="lmx1">
          <div v-for="commodities of commodities" class="lmx">
            <div class="lmx2">
              <img
                :src="'http://8.142.160.139/img/image/' + commodities.photo"
                alt=""
                class="image"
              />
              <p>{{ commodities.name }}</p>
              <p>价格：{{ commodities.price }}</p>
              <p>型号：{{ commodities.model }}</p>
              <el-button
                type="primary"
                @click="
                  shopp(commodities);
                  add_to_cart();
                "
                >加入购物车</el-button
              >
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>

  <el-main> </el-main>
</template>
<script setup>
import { ElMessage } from "element-plus";
const add_to_cart = () => {
  ElMessage({
    message: "已添加到购物车",
  });
};
</script>
<script>
import app from "./App.vue";

export default {
  data() {
    return {
      commodities: [],
      providers: [],
    };
  },
  mounted() {
    fetch("http://8.142.160.139:8080/commodities")
      .then((resp) => resp.json())
      .then((commodities) => {
        this.commodities = commodities;
      });
    fetch("http://8.142.160.139:8080/providers")
      .then((resp) => resp.json())
      .then((providers) => {
        this.providers = providers;
      });
  },
  methods: {
    shopp(commodities) {
      fetch("http://8.142.160.139:8080/shopp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commodities),
      });
    },
    shaixun(name) {
      this.commodities = [];
      fetch("http://8.142.160.139:8080/commodities")
        .then((resp) => resp.json())
        .then((commodities) => {
          this.commodities = commodities.filter(
            (com) => com.provider.name == name
          );
        });
    },
  },
};
</script>
<style scoped>
.image {
  width: 200px;
  height: 200px;
}
.lmx {
  border: 1px solid blue;
}
.lmx1 {
  width: 100%;
  margin: 0 auto;
  gap: 30px;
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
}
.lmx2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
}
.lmx2 p {
  text-align: center;
}
.el-carousel {
  width: 1535px;
  margin: auto;
}
.center_main {
  margin-left: 10%;
}
.sifter {
  width: 150px;
  height: 30px;
  margin-top: 2px;
}
</style>
