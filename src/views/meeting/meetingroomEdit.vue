<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top: 22px">
    <el-form-item label="会议室名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="座位数" prop="seatNumber">
      <el-input v-model="ruleForm.seatNumber"></el-input>
    </el-form-item>
    <el-form-item label="创建时间" prop="createDate">
      <el-input v-model="ruleForm.createDate" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="更新时间" prop="updateDate">
      <el-input v-model="ruleForm.updateDate" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          seatNumber: '',
          createDate: '',
          updateDate: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入会议室名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          seatNumber: [
            { required: true, message: '请选择座位数', trigger: 'change' }
          ],
          createDate: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          updateDate: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created () {
      window.getApi('/meeting-api/api/meetingRoom/page', {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        name: this.queryForm.qryName,
        minSeatNumber: this.queryForm.minSeatNumber,
        maxSeatNumber: this.queryForm.maxSeatNumber
      }, data => {
        this.meetingroomList = data.list
        this.total = data.total
      })
    }
  }
</script>
