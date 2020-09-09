window.ToDoList = {

    //weak typed(JavaScript) vs strong typed(Java)
    API_URL: "http://localhost:8082/task",

    createTask:function (){
        const descriptionValue = $('#task-description').val();
        const deadlineValue = $('#task-deadline').val();



        let body={
            description:descriptionValue,
            deadline:deadlineValue
        }


        $.ajax({
            url:ToDoList.API_URL,
            method:"POST",
            //MIME type
            contentType:"application/json",
            data:JSON.stringify(body)
        }).done(function (){
            console.log("success");
        });
    },

    bindEvents : function (){
        $('#create-task-form').submit(function (event){
            event.preventDefault();

            ToDoList.createTask();
        });

    }
};

ToDoList.bindEvents();