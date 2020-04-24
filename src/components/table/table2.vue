<template>
  <div @touchend="handleTouchend" class="table-page">
    <div class="left-table" style="width:134px">
      <div class="table__header-wrapper" ref="scrollHead1">
        <table style="width: 1000px;" class="table__header">
          <colgroup>
            <col :key="index" v-for="(column, index) in tTitle" :width="column.width" />
          </colgroup>
          <thead>
            <tr>
              <th :key="index" v-for="(item,index) in tTitle">
                <div class="cell">{{item.name}}</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="wrapper table__body-wrapper">
        <table style="width: 1000px;" ref="table" class="table">
          <colgroup>
            <col :key="index" v-for="(column, index) in tTitle" :width="column.width" />
          </colgroup>
          <tbody>
            <tr :key="idnex" v-for="(item,idnex) in tableData">
              <template v-for="(item2,idnex2) in tTitle">
                <td :key="idnex2">
                  <div class="cell">{{item[item2.prop]}}</div>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <div
      v-show="showTableHead"
      :style="`transform:translate3d(${-tanslate3dTheadX}px,0px,0px)`"
      ref="scrollHead"
      class="table-fixed-head"
    >
      <table style="width: 1000px;" class="table">
        <colgroup>
          <col :key="index" v-for="(column, index) in tTitle" :width="column.width" />
        </colgroup>
        <thead>
          <tr>
            <th :key="index" v-for="(item,index) in tTitle">
              <div class="cell">{{item.name}}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>-->

    <div class="middle-table">
      <div style="height:100%" v-on:scroll="handleScroll" ref="tableScroll">
        <div class="table__header-wrapper" ref="scrollHead1">
          <!-- 表头内容 -->
          <table style="width: 1000px;" class="table__header">
            <colgroup>
              <col :key="index" v-for="(column, index) in tTitle" :width="column.width" />
            </colgroup>
            <thead>
              <tr>
                <th :key="index" v-for="(item,index) in tTitle">
                  <div class="cell">{{item.name}}</div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="wrapper table__body-wrapper">
          <!-- 表体内容 -->
          <table style="width: 1000px;" ref="table" class="table">
            <colgroup>
              <col :key="index" v-for="(column, index) in tTitle" :width="column.width" />
            </colgroup>
            <tbody>
              <tr :key="idnex" v-for="(item,idnex) in tableData">
                <template v-for="(item2,idnex2) in tTitle">
                  <td :key="idnex2">
                    <div class="cell">{{item[item2.prop]}}</div>
                    <!-- <div v-if="item2.prop!='date'" class="cell">{{item[item2.prop]}}</div>
                    <div v-else class="cell"></div>-->
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      tTitle: [
        {
          name: "日期",
          prop: "date",
          width: 50,
          fixed: "left"
        },
        {
          name: "姓名",
          prop: "name",
          width: 50
        },
        {
          name: "省份",
          prop: "province",
          width: 50
        },
        {
          name: "市区",
          prop: "city",
          width: 50
        },
        {
          name: "地址",
          prop: "address",
          width: 120
        },
        {
          name: "邮编",
          prop: "zip",
          width: 50
        }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      tanslate3dTheadX: "",
      showTableHead: true,
      leftWidth: ""
    };
  },
  watch: {},
  mounted() {
    window.addEventListener("scroll", () => {
      this.showTableHead = false;
    });
  },
  methods: {
    handleScroll(e) {
      // this.scrollValue = this.$refs.tableScroll.scrollLeft;
      this.tanslate3dTheadX = this.$refs.tableScroll.scrollLeft;
      console.log(this.tanslate3dTheadX);
    },
    handleTouchend() {
      this.showTableHead = true;
    }
  }
};
</script>

<style scoped lang='scss'>
* {
  box-sizing: border-box;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  td {
    white-space: nowrap;
    border-bottom: 1px solid #999;
    text-align: center;
  }
}

.table-page {
  position: relative;
  height: 100%;
  overflow: hidden;
  .left-table {
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: hidden;
    background: #fff;
    z-index: 999;
  }
  .table-fixed-head {
    position: fixed;
    top: 0;
    z-index: 999;
    background: red;
  }
  .middle-table {
    height: 100%;
    
  }
}

.table__header-wrapper {
  overflow-x: hidden;
  background: rgb(255, 255, 255);
  width: 100%;
  .table__header {
    table-layout: fixed;
    background: white;
  }
}
.table__body-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x:auto;
  position: relative;
}

.cell {
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  vertical-align: middle;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
</style>