<template>
  <div id="nav-demo1">
    <div class="content-tool">
      <!--<el-input
        clearable
        placeholder="请输入关键字搜索"
        v-model="qryName"
        :on-icon-click="handleIconClick"
        class="tool-input">
      </el-input>
      &lt;!&ndash;<el-input v-model="minSeatNumber" placeholder="最小座位" class="find-input"
                :maxlength="3"></el-input>&ndash;&gt;
      <div class="find-input el-input">
        <input placeholder="最小座位" class="el-input__inner"
               v-bind:value="minSeatNumber | changeNumber" :maxlength="30"
               v-on:input="minSeatNumber = $event.target.value">
      </div>

      <el-input placeholder="最大座位" class="find-input"
                :maxlength="3" v-model="maxSeatNumber"></el-input>
      <el-button type="primary" class="tool-qry" v-on:click="queryBtn">查询</el-button>
      <el-button type="warning" class="tool-clear">清空条件</el-button>-->
      <el-form :inline="true" :model="queryForm" ref="queryForm" class="demo-form-inline">

        <el-form-item prop="qryName">
          <el-input
            clearable
            placeholder="请输入关键字搜索"
            v-model="queryForm.qryName"
            :on-icon-click="handleIconClick"
            class="tool-input">
          </el-input>
        </el-form-item>
        <div class="find-input el-input">
          <input placeholder="最小座位" class="el-input__inner"
                 v-bind:value="queryForm.minSeatNumber | changeNumber" :maxlength="30"
                 v-on:input="queryForm.minSeatNumber = $event.target.value">
        </div>
        <!--<el-input placeholder="最大座位" class="find-input"-->
                  <!--:maxlength="3" v-model="queryForm.maxSeatNumber"></el-input>-->
        <el-button type="primary" class="tool-qry" v-on:click="queryBtn">查询</el-button>
        <el-button type="warning" class="tool-clear" @click="resetForm('queryForm')">清空条件</el-button>
      </el-form>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="meetingroomList"
        border
        tooltip-effect="dark"
        style="width: 100%; font-size: 13px;"
        :height="tableHeight"
        :default-sort = "{prop: 'tag', order: 'descending'}"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="seatNumber"
          label="座位数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="createDate"
          :formatter="dateFormat"
          label="创建时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="todo"
          label="操作"
          width="180">
          <template scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" style="color: #FB4853;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'mt-meetingroom',
    data () {
      return {
        currentPage: 1,
        meetingroomList: [],
        multipleSelection: [],
        total: 0,
        pageSize: 1,
        pageNum: 1,
        queryForm: {
          qryName: '',
          minSeatNumber: '',
          maxSeatNumber: ''
        }
      }
    },
    computed: {
      tableHeight () {
        if (this.meetingroomList.length > 10) {
          return 570
        }
      }
    },
    filters: {
      'changeNumber': val => {
//        console.log('1', val, !/^[0-9]*$/.test(val))
        if (!val) {
          console.log('2', val, !/^[0-9]*$/.test(val))
          return
        }
        if (!/^[0-9]*$/.test(val)) {
          val = val.substring(0, val.length - 1)
          console.log('3', val, !/^[0-9]*$/.test(val))
        }
        return val
      }
    },
//    watch: {
//      maxSeatNumber (val) {
//        console.log(val, !/^[0-9]*$/.test(val))
//        if (!val) {
//          return
//        }
//        if (!/^[0-9]*$/.test(val)) {
//          console.log('nn', val, !/^[0-9]*$/.test(val))
//          val = val.substring(0, val.length - 1)
//          this.maxSeatNumber.replace('!/^[0-9]*$/', 'g')
//        }
//      }
//    },
    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleClick () {
        this.$router.push({ path: '/mt-meetingroom/edit'})
      },
      handleIconClick () {

      },
      handleSizeChange (val) {
        this.pageSize = val
        this.pageNum = 1
        this.getPage()
      },
      handleCurrentChange (val) {
        this.pageNum = val
        this.getPage()
      },
      queryBtn () {
        this.getPage()
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      dateFormat (row, column) {
        var date = row[column.property]
        if (date) {
          return moment(date).format('YYYY-MM-DD HH:mm:ss')
        }
      },
      getPage () {
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
    },
    created () {
      this.getPage()
    }
  }
</script>

<style scoped>
  .content-title {
    height: 50px;
    line-height: 50px;
    font-family: PingFangHK-Semibold;
    font-size: 16px;
    color: #1F2D3D;
    letter-spacing: 0;
    box-shadow: 0 1px 0 0 #E0E6ED;
  }
  .content-tool {
    height: 60px;
    line-height: 60px;
    background: #F8F8F8;
    margin: 20px 0;
  }
  .tool-input {
    margin-left: 20px;
    width: 400px !important;
  }
  .tool-select {
    width: 150px;
    margin-left: 20px !important;
  }
  .tool-qry, .tool-clear {
    margin-left: 20px !important;
  }
  .find-input {
    margin-left: 20px;
    width: 150px !important;
  }
  .tag-home, .tag-comp {
    width: 48px;
    height: 24px;
    border-radius: 4px;
    text-align: center;
  }
  .tag-home {
    background: #E8F5FF;
    border: 1px solid #BFE4FF;
    color: #20A0FF;
  }
  .tag-comp {
    background: #EEF7EA;
    border: 1px solid #C1E2B2;
    color: #5BB531;
  }
  .block {
    float: right;
    margin-left: -5px;
    margin-top: 20px;
  }
</style>
