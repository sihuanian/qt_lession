<template>
  <el-dialog title="登录" :visible="dialogVisible" @close="cancel">
    <el-form>
      <el-form-item label="邮箱" label-width="80px">
        <el-input v-model="params.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px">
        <el-input v-model="params.password"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator';
@Component
export default class RegisterAndLogin extends Vue {
  @Prop({ default: false }) private visible!: boolean;
  get dialogVisible(): boolean {
    return this.visible;
  }

  private params: any = {
    email: '',
    password: '',
  };

  @Emit()
  private cancel() {
    return false;
  }
}
</script>

<style scoped>
</style>