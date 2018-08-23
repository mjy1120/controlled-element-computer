import React,{Component} from "react";
class List extends Component{
constructor(props){
    super(props);
    this.state={
        fromData:{
            name:"zhangsan",
            password:"",
            sex:"1",
            love:["足球"],
            addr:"北京",
            description:"一周年快乐"
        },
        regData:{
            name:{
              reg:/^[a-zA-Z]{6,12}$/,
              msg:"请输入正确的用户名",
              required:true
            },
            password:{
                reg:/^[a-zA-Z0-9]{6,16}$/,
                msg:"请输入正确的密码",
                required:true
            },
            sex:{
                reg:/\S/,
                msg:"请选择性别",
                required:true
            },
            addr:{
                reg:/\S/,
                msg:"请选择城市",
                required:true
            },
            description:{
                reg:/[\u4e00-\u9fa5]/,
                msg:"情输入中文",
                required:false
            }
        }
    }
}

handleOne(e){
    //console.log(e.target.value);
    let obj={};
    switch(e.target.type){
        case "checkbox":{
            let hobby=[...this.state.fromData.love];
            if(hobby.includes(e.target.value)){
                hobby.splice(hobby.indexOf(e.target.value),1)
            }else{
               hobby.push(e.target.value)
            }
            obj={
                 [e.target.name]:hobby
            }
        } break;
        default:{
            obj={
                [e.target.name]:e.target.value
            }
        }
    }
    this.setState({
        fromData:Object.assign(this.state.fromData,obj)
        
    })
    console.log(this.state.fromData);
}
//校验输入内容
testReg(e){
    if(!this.state.regData[e.target.name]){
        return
    }
    //检测类型
    let regTest=()=>{
        let state=this.state.regData[e.target.name].reg.test(this.state.fromData[e.target.name]);
        console.log(state);
        if(!state){
            clearDom();
            let el=document.createElement("p");
            el.innerHTML=this.state.regData[e.target.name].msg;
            el.className="show";
            e.target.parentNode.appendChild(el);
            }else{
                clearDom();
            }
    }
       
    //清空提示消息
let clearDom=()=>{
       let $p=e.target.parentNode.getElementsByTagName("p")[0];
        if($p){
            e.target.parentNode.removeChild($p)
        }
}
//判断是否为必填项
let testRequired=()=>{
    if(this.state.regData[e.target.name.required]){
        regTest()
    }else{
        testNull();
    }
}
//检测不能为空
let testNull=()=>{
    if(this.state.fromData[e.target.name]){
        regTest()
    }
}
testRequired()
}
componentDidMount(){
    let $input=this.refs.form.getElementsByTagName("input");
     let $textarea=this.refs.form.getElementsByTagName("$textarea"); 
     let $select=this.refs.form.getElementsByTagName("select");
     [...$input].forEach(i=>{
         console.log(i);
         i.onblur=this.testReg.bind(this);
     });
     [...$select].forEach(i=>{
         i.onblur=this.testReg.bind(this);
     })
}
render(){
    return <ul ref="form">
        <li>受控组件</li>
        <li>
            <label htmlFor="">用户名</label>
            <input type="text" value={this.state.fromData.name} name="name" onChange={this.handleOne.bind(this)} onBlur={this.testReg.bind(this)}/>
        </li>
       <li>
            <label htmlFor="">密--码</label>
            <input type="password" name="password" value={this.state.fromData.password} onChange={this.handleOne.bind(this)}/>
      </li>
      <li>
            <label htmlFor="">性别--</label>
            男:
            <input type="radio" value="1" name="sex" checked={this.state.fromData.sex==="1"} onChange={this.handleOne.bind(this)}/>
            女：
            <input type="radio" value="0" name="sex" checked={this.state.fromData.sex==="0"} onChange={this.handleOne.bind(this)}/>
      </li>
       <li>
            <label htmlFor="">爱好--</label>
            篮球:
            <input type="checkbox" name="love" value="篮球" checked={this.state.fromData.love.includes("篮球")} onChange={this.handleOne.bind(this)}/>
            足球：
            <input type="checkbox" name="love" value="足球" checked={this.state.fromData.love.includes("足球")} onChange={this.handleOne.bind(this)}/>
            羽毛球：
            <input type="checkbox" name="love" value="羽毛球" checked={this.state.fromData.love.includes("羽毛球")} onChange={this.handleOne.bind(this)}/>
      </li>
      <li>
          <label htmlFor="">城市选择：</label>
              <select name="addr" defaultValue={this.state.fromData.addr} onChange={this.handleOne.bind(this)}>
                  <option value="北京">北京</option>
                  <option value="上海">上海</option>
                  <option value="广州">广州</option>
              </select>
      </li>
      <li>
          <label htmlFor="">描述：</label>
          <textarea name="description" id="" cols="30" rows="10" onChange={this.handleOne.bind(this)} defaultValue={this.state.fromData.description}></textarea>
          </li>
    </ul>;
}
}
export default List;