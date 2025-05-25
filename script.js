let tasks = [];
let name = document.getElementById('taskName');
let date = document.getElementById('taskDate');
let i = 0
document.querySelector('form').addEventListener('submit', (e)=> {
    e.preventDefault();
    document.getElementById('taskList').innerHTML += `<tr>
    <td><input type='checkbox' class="checkBox"></td>
    <td>${name.value}</td>
    <td>${date.value}</td>
    </tr>`;
    tasks.push({
        name: name.value,
        date: date.value,
        completed: false,
        id: i
    });
    i++;
});

document.querySelectorAll('.topButton').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.id === "all" ){
            display = tasks.filter(task=> !(task.completed));
        } else if(e.target.id === "completed"){
            display = tasks.filter(task=> task.completed);
        } else{
            const today = new Date().toISOString().split('T')[0];
            display = tasks.filter(task => task.date === today);
        } document.getElementById('taskList').innerHTML = `<thead>
                <tr>
                    <th></th>
                    <th>Task</th>
                    <th>Date</th>
                </tr>
            </thead>
            `;
        display.forEach(task => {
            document.getElementById('taskList').innerHTML += `<tr>
            <td><input type="checkbox" data-id="${task.id}" class="checkBox" ${task.completed ? "checked" : ""}></td>
            <td>${task.name}</td>
            <td>${task.date}</td>
            </tr>`
        });
    });
});

document.querySelector('#taskList').addEventListener('change', (e) => {
    if (e.target.classList.contains('checkBox')){
        const task = tasks.find(task => task.id == e.target.dataset.id);
        task.completed = e.target.checked;
        console.log(tasks)
    };
});