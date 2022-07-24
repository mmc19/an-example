<template>
  <el-form
    status-icon
    ref="form"
    label-width="100px"
    class="login-container"
    :rules="rules"
    :model="form"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item
      label="用户名"
      label-width="80px"
      prop="username"
      class="username"
    >
      <el-input
        type="input"
        v-model="form.username"
        autocomplete="off"
        placeholder="请输入账号"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" prop="password">
      <el-input
        type="password"
        v-model="form.password"
        autocomplete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item class="login_submit">
      <el-button type="primary" @click="login" class="login_submit">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Mock from "mockjs";
import { getMenu } from "../../api/data";
export default {
  name: "Login",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            message: "用户名长度不能小于3位",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      getMenu(this.form).then(({ data: res }) => {
        if (res.code === 20000) {
          this.$store.commit("tab/CLEARMENU");
          this.$store.commit("tab/SETMENU", res.data.menu);
          this.$store.commit("user/SETTOKEN", res.data.token);
          this.$store.commit("tab/ADDMENU", this.$router);
          this.$router.push({ name: "home" });
          // console.log(111111, res);
        } else {
          this.$message.warning(res.data.message);
        }
      });
      // const token = Mock.random.guid();
      // this.$store.commit("user/SETTOKEN", token);
      // this.$router.push({
      //   name: "home",
      // });
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 15px;
  background-color: #fff;
  border: 1px solid #1a1a1a;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  color: #505458;
  text-align: center;
}

.login_submit {
  margin: 10px auto 0px auto;
}
</style>