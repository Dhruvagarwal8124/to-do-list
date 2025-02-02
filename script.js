    const input=document.querySelector(".inputBox input");
    const addBtn=document.querySelector("button").addEventListener("click",handleAddEvent);
    const taskList=document.querySelector(".checkBoxes ");

    let collectedText="";
    input.addEventListener("input",handleTextInput);
    function handleTextInput(){
        collectedText=input.value;
        
    }

    function handleAddEvent(){
        if(collectedText===""){
            alert("Please enter a task first");
            return;
        }

        const taskDiv=document.createElement("div");
        taskDiv.className="task";

        const newTask=document.createElement('input');
        const newTaskValue=document.createElement('label');

        newTask.type="checkbox";
        newTask.name="task";
        newTask.value=collectedText;

        newTaskValue.className="checkText";
        newTaskValue.textContent=collectedText;

        taskDiv.appendChild(newTask);
        taskDiv.appendChild(newTaskValue);  

        taskList.appendChild(taskDiv);

        input.value="";
        collectedText="";

        newTask.addEventListener("change",function (){
            if(this.checked){
                let confirmDelete=confirm("Do you want to delete the task!");
                if(confirmDelete){
                    taskDiv.remove();
                }
                else{
                    this.checked=false;
                }
            }
        });
    }

