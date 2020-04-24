<template>
  <div @scroll="handleScrollPage" @touchend="handleTouchend" class="table-page" ref="tablePage">
    <div class="left-table" style="width:134px">
      <div class="table__header-wrapper" ref="scrollHead1">
        <table style="width: 1000px;" class="table__header">
          <colgroup>
            <col :key="index" v-for="(column, index) in columns" :width="column.width" />
          </colgroup>
          <thead>
            <tr>
              <th :key="index" v-for="(item,index) in columns">
                <div class="cell">{{item.name}}</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="wrapper table__body-wrapper">
        <table style="width: 1000px;" ref="table" class="table">
          <colgroup>
            <col :key="index" v-for="(column, index) in columns" :width="column.width" />
          </colgroup>
          <tbody>
            <tr :key="idnex" v-for="(item,idnex) in tableData">
              <template v-for="(item2,idnex2) in columns">
                <td :key="idnex2">
                  <div class="cell">{{item[item2.prop]}}</div>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-show="showTableHead" ref="scrollHead" class="table-fixed-head">
      <table style="width: 1000px;" class="table">
        <colgroup>
          <col :key="index" v-for="(column, index) in columns" :width="column.width" />
        </colgroup>
        <thead>
          <tr>
            <th :key="index" v-for="(item,index) in columns">
              <div
                :style="item.prop!=fixedProp?`transform:translate3d(${-scrollX}px,${scrollY}px,0px);z-index:99`:`transform:translate3d(0px,${scrollY}px,0px);z-index:999`"
                class="cell"
              >{{item.name}}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    <div class="middle-table">
      <div style="overflow-x:auto" v-on:scroll="handleScroll" ref="tableScroll">
        <div class="table__header-wrapper" ref="scrollHead1">
          <!-- 表头内容 -->
          <table style="width: 1000px;" class="table__header">
            <colgroup>
              <col :key="index" v-for="(column, index) in columns" :width="column.width" />
            </colgroup>
            <thead>
              <tr>
                <th :key="index" v-for="(item,index) in columns">
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
              <col :key="index" v-for="(column, index) in columns" :width="column.width" />
            </colgroup>
            <tbody>
              <tr :key="idnex" v-for="(item,idnex) in tableData">
                <template v-for="(item2,idnex2) in columns">
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
  props: ["columns", "tableData"],
  data() {
    return {
      fixedProp: "date",
      scrollY: "",
      scrollX: "",
      showTableHead: false,
      timer: ""
    };
  },
  watch: {},
  mounted() {},
  methods: {
    handleScroll() {
      // this.scrollValue = this.$refs.tableScroll.scrollLeft;
      this.scrollX = this.$refs.tableScroll.scrollLeft;
      // console.log(this.scrollX);
    },
    handleTouchend() {},
    handleScrollPage() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (this.scrollY === this.$refs.tablePage.scrollTop) {
          console.log("滚动停止");
          if (this.$refs.tablePage.scrollTop === 0) {
            this.showTableHead = false;
          } else {
            this.showTableHead = true;
          }
        }
      }, 200);
      this.showTableHead = false;
      this.scrollY = this.$refs.tablePage.scrollTop;
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
  overflow-y: auto;
  .left-table {
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: hidden;
    background: #fff;
    z-index: 99;
  }
  .table-fixed-head {
    position: absolute;
    top: 0;
    left: 0;
    // z-index: 999;
    .cell {
      background: #fff;
      padding: 0;
      text-align: center;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
      vertical-align: top;
    }
  }
  .middle-table {
    z-index: 9;
    .table__body-wrapper {
      .table {
      }
    }
  }
}

.table__header-wrapper {
  width: 100%;
  .table__header {
    table-layout: fixed;
    background: white;
  }
}

.cell {
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  vertical-align: middle;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 100%;
}
</style>