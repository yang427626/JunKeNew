<template>
  <div class="app-container">
    <el-row>
      <el-col :span="16">
        <el-form :inline="true" :model="filters">
          <el-form-item>
            <el-input v-model="filters.name" placeholder="姓名" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="search" @click="name_Search()" >查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" style="text-align: right">
        <el-button v-if="has_permission('account_user_add')" style="float: right" type="primary" @click="handleAdd()" >添加用户</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="listLoading" :data="userList" stripe border style="width: 100%" >
      <el-table-column type="index" label="ID" width="60" />
      <el-table-column prop="userName" label="用户名" sortable />
      <el-table-column prop="deptName" label="部门" />
      <el-table-column v-if="has_permission('account_user_edit|account_user_disable')" label="操作" width="320">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
          <el-button size="mini" type="warning" @click="deleteUser(scope.row.userId)">删除用户</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="pageNum" :limit.sync="pageSize" @pagination="getInitData()" />

    <!--编辑新增界面-->
    <el-dialog :title="editFormTitle" :visible.sync="dialogShow" :close-on-click-modal="false">
      <el-form ref="editForm" :model="editForm" :rules="rules" label-width="80px">
        <el-form-item prop="userName" label="用户名">
          <el-input v-model="editForm.userName" auto-complete="off" />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="editForm.password" type="password" auto-complete="off"/>
        </el-form-item>
        <el-form-item prop="checkPassWord" label="确认密码" width="180">
          <el-input v-model="editForm.checkPassWord" type="text" />
        </el-form-item>

        <el-form-item label="部门">
          <el-select v-model="editForm.deptId" :disabled="addDisabled" @change="changeDept">
            <el-option v-for="dept in deptList" :key="dept.deptId" :label="dept.deptName" :value="dept.deptId"/>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="text" @click.native="dialogShow = false" >取消</el-button>
        <el-button type="primary" :loading="editLoading" @click.native="editSubmit">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  finduserlist,
  alldept_find,
  modifyuserlist,
  adduserlist,
  deleteuserlistex
} from '@/api/userReally'
import Pagination from '@/components/Pagination' 
export default {
  components: { Pagination },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.editForm.checkPassWord !== '') {
          this.$refs.editForm.validateField('checkPassWord')
        }
        callback()
      }
    }

    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.editForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      filters: {
        name: ''
      },
      error: '',
      dialogShow: false,
      roles: undefined,
      roles_map: {},
      display: '',
      listLoading: false,
      btnDelLoading: {},
      editFormTitle: '',
      editLoading: false,
      is_disabled: '',
      addForm: {
        userName: '',
        password: '',
        checkPassWord: '',
        deptId: ''
      },
      editForm: {},
      rules: {
        userName: [
          { required: true, message: '请输入登录名', trigger: 'blur' }
        ],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPassWord: [{ validator: validatePass2, trigger: 'blur' }]
      },
      pageNum: 1,
      pageSize: 10,
      total:0,
      userList: [],
      deptList: [],
      addDisabled: false
    }
  },
  created() {
    this.getInitData()
  },
  methods: {
    deleteUser(id) {
      deleteuserlistex(this.baseUrl, {
        userId:id
      }).then(data => {
        if (data.resultCode == 200) {
          this.$message.success('删除成功');
          this.getInitData();
        }
      })
    },
    changeDept(data) {
      console.log(data)
      this.deptList.map(item => {
        console.log(item);
        if (item.id === data) {
          this.editForm.depart = item.depname
        }
      })
    },
    // 获取初始化数据
    getInitData() {
      finduserlist(this.baseUrl, {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        userName:this.filters.name
      }).then(data => {
        this.total = data.data.total;
        this.userList = data.data.list; 
      })
      alldept_find(this.baseUrl).then(data => {
        this.deptList = data.data
      })
    },
    has_permission() {
      return true
    },
    // handleCurrentChange(val) {
    //   this.currentPage = val
    //   this.getUsers(this.currentPage)
    // },

    // 名字查询
    name_Search() {
      console.log(this.filters.name)
      this.pageNum = 1
      this.getInitData()
    },

    // 显示添加界面
    handleAdd: function() {
      this.addDisabled = false
      this.dialogShow = true
      this.editFormTitle = '添加用户'
      this.editForm = this.addForm
    },

    // 显示编辑界面
    handleEdit: function(index, row) {
      console.log("index:"+ index);
      console.log("row:"+ row.userId);
      
      
      this.addDisabled = true
      this.dialogShow = true
      this.editFormTitle = '编辑用户'
      this.editForm = Object.assign({}, row)
      console.log("editForm",this.editForm);
      this.$set(this.editForm, 'checkPassWord', this.editForm.password)
    },
    editSubmit: function() {
      this.$refs['editForm'].validate(valid => {
        if (valid) {
          if (this.addDisabled) {
            modifyuserlist(this.baseUrl, this.editForm).then(data => {
              if (data.resultCode == 200) {
                this.$message.success('修改成功')
                this.getInitData()
              }
            })
          } else {
            adduserlist(this.baseUrl, this.editForm).then(data => {
              if (data.resultCode == 200) {
                this.$message.success('添加成功')
                this.addForm = {
                  userName: '',
                  password: '',
                  checkPassWord: '',
                  deptId : ''
                }
                this.getInitData()
              }
            })
          }
          this.dialogShow = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
