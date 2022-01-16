(this["webpackJsonptodo-list2.0"]=this["webpackJsonptodo-list2.0"]||[]).push([[0],{30:function(t,e,a){},51:function(t,e,a){"use strict";a.r(e);var s=a(2),n=a.n(s),i=a(20),r=a.n(i),c=(a(30),a(4)),o=a.n(c),d=a(5),k=a(21),u=a(22),l=a(25),h=a(24),T=a(9),f=a(10),p=a(1),m=function(t){var e=[];if(t.todoTasks)for(var a=0;a<t.todoTasks.length;a++)e.push(Object(p.jsx)(b,{currentTaskOpen:t.currentTaskOpen,task:t.todoTasks[a],taskNameEdit:t.taskNameEdit,onClick:t.onClick,onChange:t.onChange},"IndTodoTask "+a));return Object(p.jsxs)("div",{className:"currentTasksCntr",children:[Object(p.jsxs)("div",{className:"nav-bar",children:[Object(p.jsx)("p",{className:"headingApp",children:"Todo-List"}),Object(p.jsx)("p",{className:"dateDisplay",children:t.clockTime})]}),Object(p.jsxs)("div",{className:"addTaskBar",children:[Object(p.jsx)("input",{className:"addTaskInput",placeholder:"Add Task...",onChange:t.onChange}),Object(p.jsx)("p",{className:"addTaskBtnLrg",onClick:t.addNewTask,children:"Add Task"}),Object(p.jsx)(T.a,{className:"addTaskBtn",onClick:t.addNewTask}),Object(p.jsx)(f.b,{className:"viewFinishedTaskBtn",onClick:t.handleFinishedTsksView})]}),Object(p.jsx)("div",{className:"todoTasksCntr",children:e})]})},j=a(23),g=function(t){var e=[];if(t.finishedTasks)for(var a=0;a<t.finishedTasks.length;a++)e.push(Object(p.jsx)(N,{currentTaskOpen:t.currentTaskOpen,task:t.finishedTasks[a],taskNameEdit:t.taskNameEdit,onClick:t.onClick,onChange:t.onChange},"FinishedTask "+a));var s=t.finishedTsksActive?"active":"";return Object(p.jsxs)("div",{className:"finishedTasksCntr "+s,children:[Object(p.jsxs)("div",{className:"returnBtn-headingCntr",children:[Object(p.jsxs)("div",{className:"returnBtnCntr",onClick:t.handleFinishedTsksView,children:[Object(p.jsx)(j.a,{className:"returnBtn"}),Object(p.jsx)("p",{className:"returnBtnHeading",children:"Return"})]}),Object(p.jsx)("p",{className:"finishedTasksHeading",children:"Finished"})]}),Object(p.jsx)("div",{className:"indFnshdTasksCntr",children:e})]})},b=function(t){var e=!1;return t.currentTaskOpen===t.task._id&&(e=t.taskNameEdit),Object(p.jsxs)("div",{className:"indTodoTask",children:[Object(p.jsx)("div",{className:"finishTaskBtn",onClick:t.onClick,task:t.task._id,children:Object(p.jsx)(T.b,{className:"icon"})}),e?Object(p.jsx)("textarea",{className:"taskNameInput",type:"text",defaultValue:t.task.name,task:t.task._id,onChange:t.onChange}):Object(p.jsx)("p",{className:"taskName",onClick:t.onClick,task:t.task._id,children:t.task.name}),Object(p.jsx)("input",{type:"date",className:"dateInput",value:""!==t.task.date?t.task.date:null,onChange:t.onChange,task:t.task._id}),Object(p.jsx)("div",{className:"removeTaskBtn",onClick:t.onClick,task:t.task._id,children:"Remove"})]})},N=function(t){var e=!1;return t.currentTaskOpen===t.task._id&&(e=t.taskNameEdit),Object(p.jsxs)("div",{className:"indFinishedTask",children:[Object(p.jsx)("div",{className:"returnTaskBtn",onClick:t.onClick,task:t.task._id,children:Object(p.jsx)(f.a,{className:"icon"})}),e?Object(p.jsx)("textarea",{className:"taskNameInput",type:"text",defaultValue:t.task.name,task:t.task._id,onChange:t.onChange}):Object(p.jsx)("p",{className:"taskName",task:t.task._id,onClick:t.onClick,children:t.task.name})]})},x=a(6),v=a.n(x),O={insertTask:function(t){return v.a.post("/api/task",t)},getAllTasks:function(){return v.a.get("/api/tasks")},updateTaskById:function(t,e){return v.a.put("/api/task/".concat(t),e)},deleteTaskById:function(t){return v.a.delete("/api/task/".concat(t))}},C=function(t){Object(l.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(k.a)(this,a),(s=e.call(this,t)).state={},s}return Object(u.a)(a,[{key:"handleShowingTasks",value:function(){var t=Object(d.a)(o.a.mark((function t(){var e,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getAllTasks().then((function(t){return e=t.data.data})).catch(e=[]);case 2:return t.next=4,e.filter((function(t){return"to-do"===t.type}));case 4:return a=t.sent,t.next=7,e.filter((function(t){return"finished"===t.type}));case 7:s=t.sent,this.setState({allTasks:e}),this.setState({todoTasks:a}),this.setState({finishedTasks:s});case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setClockTime",value:function(){var t=Object(d.a)(o.a.mark((function t(){var e,a,s,n,i=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new Date,t.next=3,e.toLocaleString("en-US",{timezone:"America/New_York"}).split(",");case 3:a=t.sent,e=e.toString().split(" "),s="".concat(e[1]," ").concat(e[2]," |").concat(a[1]),this.setState({clockTime:s}),n=setTimeout((function(){return i.setClockTime()}),1e3),this.state.clockStopped&&clearTimeout(n);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setClockTime(),this.handleShowingTasks()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.setClockTime())}},{key:"render",value:function(){var t=this,e=function(){var e=Object(d.a)(o.a.mark((function e(a){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("taskNameInput"!==a.target.className){e.next=7;break}return e.next=3,t.setState({taskNameInput:a.target.value});case 3:return(s=t.state.allTasks.filter((function(t){return t._id===a.target.getAttribute("task")})))[0].name=a.target.value,e.next=7,O.updateTaskById(s[0]._id,s[0]).then((function(t){return console.log("Task Updated")})).catch((function(t){return alert(t)}));case 7:if("addTaskInput"===a.target.className&&t.setState({addTaskInput:a.target.value}),"dateInput"!==a.target.className){e.next=13;break}return n=t.state.todoTasks.filter((function(t){return t._id===a.target.getAttribute("task")})),n[0].date=a.target.value,e.next=13,O.updateTaskById(n[0]._id,n[0]).then((function(t){return console.log("Task Updated")}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(d.a)(o.a.mark((function e(a){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("taskName"===a.target.className&&(t.setState({currentTaskOpen:a.target.getAttribute("task")}),t.setState({taskNameEdit:!0})),"todoTasksCntr"!==a.target.className&&"indFnshdTasksCntr"!==a.target.className||t.setState({taskNameEdit:!1}),"removeTaskBtn"!==a.target.className){e.next=9;break}return e.next=5,t.setState({currentId:a.target.getAttribute("task")});case 5:return e.next=7,O.deleteTaskById(a.target.getAttribute("task")).then((function(t){return console.log("Task Removed")})).catch((function(e){return t.setState({allTasks:[]})}));case 7:t.handleShowingTasks(),window.location.reload();case 9:if("finishTaskBtn"!==a.target.className){e.next=15;break}return(s=t.state.todoTasks.filter((function(t){return t._id===a.target.getAttribute("task")})))[0].type="finished",e.next=14,O.updateTaskById(s[0]._id,s[0]).then((function(t){return console.log("task updated")}));case 14:t.handleShowingTasks();case 15:if("returnTaskBtn"!==a.target.className){e.next=21;break}return n=t.state.finishedTasks.filter((function(t){return t._id===a.target.getAttribute("task")})),n[0].type="to-do",e.next=20,O.updateTaskById(n[0]._id,n[0]).then((function(t){return console.log("task updated")}));case 20:t.handleShowingTasks();case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){return t.setState({finishedTasksViewOn:!t.state.finishedTasksViewOn})},n=function(){var e=Object(d.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t.state.addTaskInput,date:" ",type:"to-do"},e.next=3,O.insertTask(a).then((function(t){return console.log("Task Added")})).catch((function(t){return alert("Name needed for adding task.")}));case 3:t.handleShowingTasks(),document.querySelector(".addTaskInput").value="";case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container",onClick:a,children:[Object(p.jsx)(m,{clockTime:this.state.clockTime,currentTaskOpen:this.state.currentTaskOpen,todoTasks:this.state.todoTasks,taskNameEdit:this.state.taskNameEdit,handleFinishedTsksView:s,onChange:e,addNewTask:n,onClick:a}),Object(p.jsx)(g,{currentTaskOpen:this.state.currentTaskOpen,finishedTasks:this.state.finishedTasks,taskNameEdit:this.state.taskNameEdit,finishedTsksActive:this.state.finishedTasksViewOn,handleFinishedTsksView:s,onClick:a,onChange:e})]})}}]),a}(s.Component),w=C,y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),s(t),n(t),i(t),r(t)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),y()}},[[51,1,2]]]);
//# sourceMappingURL=main.6d4a2c92.chunk.js.map