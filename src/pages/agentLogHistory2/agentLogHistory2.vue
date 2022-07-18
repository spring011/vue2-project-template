<template>
  <!-- 任务履历 -->
  <div id="app">
    <div class="data-content" :class="{ 'no-data': auditHistoryList.length < 1 }">
      <el-table :data="auditHistoryList" style="width: 100%" class="table-list purple-table task-table" :header-cell-style="{ background: '#FAFBFF', color: '#303133 ' }">
        <el-table-column prop="operationEventName" label="操作事件" align="center" min-width="140">
          <template #default="{ row }">
            {{ row.operationEventName }}
            <i v-if="[40, 50, 60, 70].includes(row.operationEvent)" @click="checkoutScript(row)" class="el-icon-document" />
            <i v-if="[80, 90, 100, 110, 120, 130].includes(row.operationEvent)" @click="checkoutWork(row)" class="el-icon-document" />
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="描述" align="center" min-width="140">
          <template #default="{ row }">
            {{ row.remark || '--' }}
          </template>
        </el-table-column>
        <el-table-column prop="updateTimeStr" label="操作时间" align="center" min-width="180">
          <template #default="{ row }">
            {{ row.operationEvent === 150 ? row.createTimeStr : row.updateTimeStr }}
          </template>
        </el-table-column>
        <el-table-column prop="updateUserId" label="操作人" align="center" min-width="140"> </el-table-column>
        <template slot="empty">
          <div class="emputy-data">
            <p>暂无数据</p>
          </div>
        </template>
      </el-table>
      <el-pagination
        class="fenye fenye-part"
        v-if="auditHistoryList.length > 0"
        @size-change="handleSizeChange"
        @current-change="changePage"
        background
        :current-page="pageInfo.pageNum"
        :page-count="pageInfo.pageTotal"
        :page-sizes="[10, 15, 20, 25]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total"
      ></el-pagination>
    </div>
    <el-dialog title="查看作品" :visible.sync="showWork" width="240px" :before-close="() => (showWork = false)">
      <div class="works-cover-area" ref="worksCoverArea"></div>
    </el-dialog>
  </div>
</template>
<script>

export default {
  data() {
    return {
      showWork: false,
      auditHistoryList: [{operationEventName:'删除2',remark:'删除一条订单2',updateTimeStr:'2022-02-21 10:23:12',updateUserId:'李明2'}],
      pageInfo: {
        pageNum: 1,
        pageTotal: 1,
        total: 1,
        pageSize: 10,
      },
    };
  },
  computed: {},
  created() {
    this.query(1);
  },
  methods: {
    checkout() {},
    query(needPageNum) {
    },
    showQRCode(url) {
      this.$refs.worksCoverArea.innerHTML = '';
    },
    checkoutScript(row) {
      window.open(row.workUrl, '_blank');
    },
    checkoutWork(row) {
      this.showWork = true;
      this.$nextTick(() => {
        this.showQRCode(row.workUrl);
      });
    },
    // 切换分页
    changePage(num) {
      this.query(num);
    },
    // 变更每页展示数
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
      this.query(1);
    },
  },
};
</script>
<style lang="scss" scope>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #b20fd3;
}
.el-table .cell {
  color: #303133;
}
.fenye-part {
  background: #fff;
  padding: 18px 20px 25px;
  text-align: right;
}
.el-icon-document {
  cursor: pointer;
}
.works-cover-area {
  display: flex;
  justify-content: center;
  text-align: left;
}
</style>
