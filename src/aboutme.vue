<template>
  <div
    style="
      idth: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      margin-left: 25%;
    "
  >
    <div>
      <img src="./assets/img.jpg" alt="" />
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 900px;
      "
    >
      <div style="width: 300px; padding-left: 100px">
        <p>姓名: &nbsp肖家骐</p>
        <p>性别: &nbsp男</p>
        <p>学校: &nbsp辽宁金融职业学院</p>
        <p>住址: &nbsp辽宁省辽阳市</p>
        <p>出生年月: &nbsp2002.7</p>
        <p>专业: &nbsp移动应用开发</p>
        <p>电话: &nbsp13352331393</p>
      </div>
      <div style="width: 600px; padding-left: 100px">
        <ul class="ulli">
          <li>熟悉安卓，前端，后端开发</li>
          <li>熟练使用HTML,CSS,JAVASCRIPT</li>
          <li>熟练使用mysql数据库</li>
          <li>熟练使用vue和react框架</li>
          <li>精通微信小程序开发</li>
          <li>熟练使用elementplus等组件库</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 200px;
  height: 250px;
}

.ulli li {
  padding-top: 10px;
}
</style>
