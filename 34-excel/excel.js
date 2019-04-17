$(function() {
  var data = [
    ['login_name', '登录名', 'char', 'N', 'Y', '必须填写'],
    ['password', '密码', 'char', 'N', 'N', '必须填写'],
    ['address', '家庭住址', 'char', 'Y', 'N', '可以不用填写'],
    ['mobile', '联系电话', 'char', 'Y', 'N', '可以不用填写'],
    ['age','年龄','int','Y','N','可以不用填写']
    
  ];
  var container = $('.main');
  /* global Handsontable: true */
  var hot = new Handsontable(container.get(0), {
    data: data,
    contextMenu: true,          // 启用快捷菜单
    manualRowResize : true,     // 允许行拖动  
    manualColumnResize : true,  // 允许列拖动 
    rowHeaders: true,
    colHeaders: [
      '字段',
      '说明',
      '数据类型',
      '允许为空',
      '主键',
      '备注'
    ]
  });
  return hot;
});
