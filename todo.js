let input = prompt("what do you wamt to do, type list : to see your todo list. quit: to quit, new : to add , delete : to delete");
let todo = ['study dsa', 'paly cricket'];
while (input !== 'quit') {
    input = prompt("what do you wamt to do, type list : to see your todo list. quit: to quit, new : to add , delete : to delete");

     //to see the list of to-do
    if (input === 'list') {
        console.log("****************");

        for (let i = 0; i < todo.length; i++){
            console.log(`${i} : ${todo[i]}`);

        }
        console.log("****************");
    }
        
    //add a new elememt 
    if(input == 'new'){
        const newtodo = prompt("ok what do you want to addd");
        todo.push(newtodo);
        console.log(`${newtodo}: added to the list`)
    }
    //delete the element of any index
    if(input === 'delete'){
        const index = prompt("at what index you want to delete ");
        const deleted = todo.splice(index ,1);
        console.log(`ok you deleted :  ${deleted} from the list`);

    }

}
console.log("ok , you quited");