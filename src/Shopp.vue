<template>
  <div class="lmx6">
    <div v-for="shopp of shopp" class="lmxx">
      <div class="lmxxx">
        <img
          :src="'http://8.142.160.139/img/image/' + shopp.photo"
          alt=""
          style="width: 200px; height: 200px"
        />
        <p>{{ shopp.name }}</p>
        <p>{{ shopp.price }}</p>
        <el-button type="danger" @click="delet(shopp.uid)">删除</el-button>
        <el-dialog
          v-model="dialogVisible"
          title="Tips"
          width="30%"
          :before-close="handleClose"
        >
          <span>This is a message</span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >Confirm</el-button
              >
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
    <div id="total_area">
      <el-button id="total" type="danger">结算！</el-button>
      <div id="total_amout">
        合计：<span id="shopp.price">{{ total }}</span
        >元
      </div>
    </div>
  </div>
</template>
<script>
import { times } from "lodash";

export default {
  data() {
    return {
      shopp: [],
      total: 0,
    };
  },
  mounted() {
    fetch("http://8.142.160.139:8080/shopp")
      .then((resp) => resp.json())
      .then((shopp) => {
        this.shopp = shopp;
        for (let key in this.shopp) {
          this.total += this.shopp[key].price;
        }
      });
  },
  methods: {
    delet(lid) {
      console.log(lid);
      fetch("http://8.142.160.139:8080/shopp/" + lid, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then((s) => {
          let index = this.shopp.findIndex((shopp) => shopp.uid === lid);
          this.shopp.splice(index, 1);
        });
      fetch("http://8.142.160.139:8080/shopp")
        .then((resp) => resp.json())
        .then((shopp) => {
          this.shopp = shopp;
          for (let key in this.shopp) {
            this.total = 0;
            this.total += this.shopp[key].price;
          }
        });
    },
  },
};
</script>
<style scoped>
.lmxxx {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
#total_area {
  width: 1240px;
  height: 60px;
  background: white;
  margin: 0x auto;
}
#total_area #total {
  width: 250px;
  height: 60px;
  text-align: center;
  float: right;
  line-height: 60px;
  font-size: 19px;
  color: black;
}
#total_area #total_amout {
  width: 250px;
  height: 60px;
  text-align: center;
  float: right;
  line-height: 60px;
  font-size: 16px;
  color: #ff4b00;
}
</style>
