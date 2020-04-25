<template>
  <div @scroll.stop="handleScrollPage"
    @touchstart.stop="handleTouchStart"
    @touchend.stop="handleTouchend"
    class="table-page"
    ref="tablePage">
    <div class="left-table"
      style="width:134px">
      <div class="table__header-wrapper"
        ref="scrollHead1">
        <table style="width: 1000px;"
          class="table__header">
          <colgroup>
            <col :key="index"
              v-for="(column, index) in columns"
              :width="column.width" />
          </colgroup>
          <thead>
            <tr>
              <th :key="index"
                v-for="(item,index) in columns">
                <div class="cell">{{item.name}}</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="wrapper table__body-wrapper">
        <table style="width: 1000px;"
          ref="table"
          class="table">
          <colgroup>
            <col :key="index"
              v-for="(column, index) in columns"
              :width="column.width" />
          </colgroup>
          <tbody>
            <tr :key="idnex"
              v-for="(item,idnex) in tableData">
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

    <div v-show="showTableHead"
      ref="scrollHead"
      class="table-fixed-head">
      <table style="width: 1000px;"
        class="table">
        <colgroup>
          <col :key="index"
            v-for="(column, index) in columns"
            :width="column.width" />
        </colgroup>
        <thead>
          <tr>
            <th :key="index"
              v-for="(item,index) in columns">
              <div :style="!item.fixed?`transform:translate3d(${-scrollX}px,${scrollY}px,0px);z-index:99`:`transform:translate3d(0px,${scrollY}px,0px);z-index:999`"
                class="cell">{{item.name}}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    <div class="middle-table">
      <div style="overflow-x:auto"
        @scroll.stop="handleScroll"
        ref="tableScroll">
        <div class="table__header-wrapper"
          ref="scrollHead1">
          <!-- 表头内容 -->
          <table style="width: 1000px;"
            class="table__header">
            <colgroup>
              <col :key="index"
                v-for="(column, index) in columns"
                :width="column.width" />
            </colgroup>
            <thead>
              <tr>
                <th :key="index"
                  v-for="(item,index) in columns">
                  <div></div>
                   <div v-if="!item.fixed"
                      class="cell">{{item.name}}</div>
                  <div v-else class="cell"></div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="wrapper table__body-wrapper">
          <!-- 表体内容 -->
          <table style="width: 1000px;"
            ref="table"
            class="table">
            <colgroup>
              <col :key="index"
                v-for="(column, index) in columns"
                :width="column.width" />
            </colgroup>
            <tbody>
              <tr :key="idnex"
                v-for="(item,idnex) in tableData">
                <template v-for="(item2,idnex2) in columns">
                  <td :key="idnex2">
                    <div v-if="!item2.fixed"
                      class="cell">{{item[item2.prop]}}</div>
                    <div v-else
                      class="cell"></div>
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
// import BScroll from "better-scroll";
export default {
  props: ["columns", "tableData"],
  data () {
    return {
      // fixedProp: "date",
      scrollY: "",
      scrollX: "",
      showTableHead: false,
      timer: ""
    };
  },
  watch: {},
  mounted () { },
  methods: {
    handleScroll () {
      // this.scrollValue = this.$refs.tableScroll.scrollLeft;
      this.scrollX = this.$refs.tableScroll.scrollLeft;
      // console.log(this.scrollX);
    },
    handleTouchStart () {
      this.raise = false;
    },
    handleTouchend () {
      this.raise = true;
      if (this.scrollY != 0) {
        this.showTableHead = true;
      }
    },
    handleScrollPage () {
      clearTimeout(this.timer);
      // console.log(this.scrollY, this.$refs.tablePage.scrollTop);
      this.timer = setTimeout(() => {
        if (this.scrollY === this.$refs.tablePage.scrollTop && this.raise) {
          console.log("滚动停止并已经抬起手指");
          if (this.$refs.tablePage.scrollTop === 0) {
            this.showTableHead = false;
          } else {
            this.showTableHead = true;
          }
        }
      }, 200);
      this.showTableHead = false;
      this.scrollY = this.$refs.tablePage.scrollTop;
      // console.log(this.scrollY)
    }
  }
};
</script>

<style scoped lang='scss'>
* {
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none; //webkit浏览器/
  -moz-user-select: none; //火狐/
  -ms-user-select: none; //IE10/
  user-select: none;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  th{
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }
  td {
    white-space: nowrap;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    text-align: center;
  }
}

.table-page {
  background: #fff;
  position: relative;
  margin: 20px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: auto;
  border: 1px solid #eee;
  .left-table {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
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
      vertical-align: top;
      border-bottom: 1px solid #eee;
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
  padding: 0.625rem;
  width: 100%;
}
</style>