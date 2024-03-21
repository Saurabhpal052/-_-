var c_task=[];
var p_task=[];
var i=0;
var j=0; 
var k=0;

function deleted(ind){
    p_task.splice(ind,1);
    presentation(p_task);
    
    
}
function edited(ind){
    
    let id=document.getElementById(`img-edit${ind}`);

    if(id.alt=="edit"){

           id.setAttribute("alt","save");
            const save=id.setAttribute("src","./public/diskette.png");
            const ele=document.getElementById(`box7${ind}`);
            ele.removeAttribute("readonly","readonly");
            ele.focus();
            ele.style.color="red";
            const eles=document.getElementById(`box8${ind}`);
            eles.removeAttribute("readonly");
            eles.focus();
            eles.style.color="red";

    }
    else{
                id.setAttribute("alt","edit");
                id.setAttribute("src","public/edit_image.png");
                const ele=document.getElementById(`box7${ind}`);
                ele.setAttribute("readonly", "readonly");
                ele.style.color="black";
                const eles=document.getElementById(`box8${ind}`);
                eles.setAttribute("readonly","readonly");
                p_task[ind].title=ele.value; 
                p_task[ind].detail=eles.value;
                eles.style.color="black";

    }
    
}
function deleted_c(ind){
    c_task.splice(ind,1);
    console.log(ind);
    presentation_c(c_task);
    k++;

}

function  completed(ind){
    var id=document.getElementById(`img-com${ind}`);
    c_task.push({title:p_task[ind].title, detail:p_task[ind].detail,time:p_task[ind].time});
    p_task.splice(ind,1);
    console.log(p_task);
    console.log(c_task);
    document.getElementById("data").innerHTML="";
    presentation(p_task);



}

function presentation_c(arr){
    const d= new Date();
    const date=d.getDate();
    const month=d.getMonth()+1;
    const year=d.getFullYear();
    const hrs=d.getHours();
    const min=d.getMinutes();
    const final_date=date+"-"+month+"-"+year+" "+hrs+":"+min;

    
    
    
   
    document.getElementById("data").innerHTML="";
     k++;
    if(document.getElementById("text1")!=null)
    {
        document.getElementById("text1").remove();
    }
    document.getElementById("boxes2").classList.add("box2c");
    document.getElementById("text4").innerHTML="Completing Time";
    document.getElementById("boxes3").classList.add("box3c");
    document.getElementById("boxes4").classList.add("box4c");

    for(var j=0;j<arr.length;j++){
        

            
             const div7=document.createElement("div");
             const text7=document.createElement("textarea");
             text7.setAttribute("name","textarea");
             text7.classList.add("cells")
             text7.setAttribute("readonly","readonly");
             text7.id=`box7${i}`;
             div7.appendChild(text7);
             div7.classList.add("box2c","box");
             document.getElementById("data").appendChild(div7);
             
         
             const div8=document.createElement("div");
             const text8=document.createElement("textarea");
             text8.setAttribute("readonly","readonly");
             text8.id=`box8${i}`;
             text8.classList.add("cells")
             div8.appendChild(text8);
             div8.classList.add("box3c","box");
             document.getElementById("data").appendChild(div8);
             
             
         
             const div9=document.createElement("div");
             const text9=document.createElement("textarea");
             text9.setAttribute("readonly","readonly");
             text9.classList.add("cells");
             text9.id=`box9${i}`;
             div9.appendChild(text9);
             div9.classList.add("box4c","box");
             document.getElementById("data").appendChild(div9);
            
         
             const div10=document.createElement("div");
             const text10=document.createElement("input");
             text10.setAttribute("type","image");
             text10.setAttribute("src","public/edit_image.png");
             text10.setAttribute("alt","edit");
             text10.setAttribute("onclick",`edited(${i})`);
             text10.classList.add("img-edit");
             text10.id=`img-edit${i}`;
             div10.appendChild(text10);
             div10.classList.add("box6","box");
             document.getElementById("data").appendChild(div10);

             text10.remove();
             
         
             const div11=document.createElement("div");
             const text11=document.createElement("input");
             text11.setAttribute("type","image");
             text11.setAttribute("src","./public/delete.png");
             text11.classList.add("img-del");
             text11.id=`img-del${i}`;
             text11.setAttribute("onclick",`deleted_c(${j})`);
             div11.appendChild(text11);
             div11.classList.add("box6");
             document.getElementById("data").appendChild(div11);
    
             text7.innerHTML=(arr[j].title);
             text8.innerHTML=(arr[j].detail);
             text9.innerHTML=(final_date);
    
    
   }

}

function presentation(arr){


     document.getElementById("data").innerHTML="";
  if(k>0){
    k=0;
    const text1=document.createElement("textarea");
    text1.classList.add("cells");
    text1.id="text1";
    document.getElementById("boxes1").appendChild(text1);

    document.getElementById("text1").innerHTML="Done";
    document.getElementById("boxes2").classList.remove("box2c");
    document.getElementById("boxes3").classList.remove("box3c");
    document.getElementById("text4").innerHTML="Adding Time";
    document.getElementById("boxes4").classList.remove("box4c");
  }

for(var i=0;i<arr.length;i++){

         
    
         const div6=document.createElement("div");
         const text6=document.createElement("input");
         text6.setAttribute("type","image");
         text6.setAttribute("src","./public/check-mark.png");
         text6.classList.add("img-com");
         text6.setAttribute("onclick",`completed(${i})`);
         text6.id=`img-com${i}`;
         div6.appendChild(text6);
         div6.classList.add("box6","box");
         document.getElementById("data").appendChild(div6);
         
     
         const div7=document.createElement("div");
         const text7=document.createElement("textarea");
         text7.setAttribute("name","textarea");
         text7.classList.add("cells")
         text7.setAttribute("readonly","readonly");
         text7.id=`box7${i}`;
         div7.appendChild(text7);
         div7.classList.add("box7","box");
         document.getElementById("data").appendChild(div7);
         
     
         const div8=document.createElement("div");
         const text8=document.createElement("textarea");
         text8.setAttribute("readonly","readonly");
         text8.id=`box8${i}`;
         text8.classList.add("cells")
         div8.appendChild(text8);
         div8.classList.add("box8","box");
         document.getElementById("data").appendChild(div8);
         
     
         const div9=document.createElement("div");
         const text9=document.createElement("textarea");
         text9.setAttribute("readonly","readonly");
         text9.classList.add("cells");
         text9.id=`box9${i}`;
         div9.appendChild(text9);
         div9.classList.add("box9","box");
         document.getElementById("data").appendChild(div9);
        
     
         const div10=document.createElement("div");
         const text10=document.createElement("input");
         text10.setAttribute("type","image");
         text10.setAttribute("src","public/edit_image.png");
         text10.setAttribute("alt","edit");
         text10.setAttribute("onclick",`edited(${i})`);
         text10.classList.add("img-edit");
         text10.id=`img-edit${i}`;
         div10.appendChild(text10);
         div10.classList.add("box6","box");
         document.getElementById("data").appendChild(div10);
         
     
         const div11=document.createElement("div");
         const text11=document.createElement("input");
         text11.setAttribute("type","image");
         text11.setAttribute("src","./public/delete.png");
         text11.classList.add("img-del");
         text11.id=`img-del${i}`;
         text11.setAttribute("onclick",`deleted(${i})`);
         div11.appendChild(text11);
         div11.classList.add("box6");
         document.getElementById("data").appendChild(div11);

         text7.innerHTML=(arr[i].title);
         text8.innerHTML=(arr[i].detail);
         text9.innerHTML=(arr[i].time);

}
}


function completed_tesks(){

    presentation_c(c_task);
}
function pending_tasks(){
    presentation(p_task);
}


function task_input(){


    var in_data=document.getElementById("myform");
    var obj1={
        title:"",
        detail:"",
        time:""
    };
    const d= new Date();
    const date=d.getDate();
    const month=d.getMonth()+1;
    const year=d.getFullYear();
    const hrs=d.getHours();
    const min=d.getMinutes();
    const final_date=date+"-"+month+"-"+year+" "+hrs+":"+min;
    
    obj1.title=in_data.elements[0].value;
    obj1.detail=in_data.elements[1].value;
    obj1.time=final_date;
    document.getElementById("myform").elements[0].value="";
    document.getElementById("myform").elements[1].value="";
    

    if(obj1.title==""){
        alert("Please enter the title of the Task!")
    }
    else{

        
         p_task.push(obj1);
         presentation(p_task);
        
        
}
}
