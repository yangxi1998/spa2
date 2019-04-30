//eslint no-console:["error",{allow:["log"]}]
var app={};
app.menuData=[
  { 
    title:'文件(F)',   //{file menu},
    width:202,
    left:0,
    items:[
      { 
        title:'新建(N)',
        shortcut:'Ctrl+N',
        enabled:true,
        handler:function(){
        console.log('menu click 新建');
        }
      },
      { 
        title:'打开(O)',
        shortcut:'Ctrl+O',
        enabled:true,
        handler:function(){
        console.log('menu click 打开');
       }
      },
      { 
        title:'保存(S)',
        shortcut:'Ctrl+S',
        enabled:false,
        handler:function(){
        console.log('menu click 保存');
       }
      },

     { 
        title:'另存为(A)...',
        shortcut:'',
        enabled:true,
        handler:function(){
        console.log('menu click 另存为');
       }
      },

      { 
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
     { 
        title:'页面设置(U)...',
        shortcut:'',
        enabled:true,
        handler:function(){
        console.log('menu click 页面设置');
       }
      },

      { 
        title:'打印(P)...',
        shortcut:'',
        enabled:true,
        handler:function(){
        console.log('menu click 打印');
       }
      },
      { 
        title:'hr',
        shortcut:'',
        enabled:true,
        handler:null
      },
      { 
        title:'退出(X)',
        shortcut:'',
        enabled:true,
        handler:function(){
        console.log('menu click 退出');
        }
      }
     ]
     },
     {
       title:'编辑(E)',
       items:[
         { 
          title:'撤销(U)',
          shortcut:'Ctrl+Z',
          enabled:true,
          handler:function(){
          console.log('menu click 撤销');
          }
         },
         { 
           title:'退出(X)',
           shortcut:'',
           enabled:true,
           handler:function(){
           console.log('menu click 退出');
            }
         }

         ]
    },
    {
      title:'格式(O)',
      items:[]
    },
    {
      title:'查看(V)',
      items:[]
    },
    {
      title:'帮助(H)',
      items:[]
    }

];
