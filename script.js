document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get task input value
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        // Create task item
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        // Task text
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);
        
        // Complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', function () {
            taskItem.classList.toggle('completed');
        });
        taskItem.appendChild(completeBtn);
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
        });
        taskItem.appendChild(deleteBtn);
        
        // Add task to list
        document.getElementById('taskList').appendChild(taskItem);
        
        // Clear input
        taskInput.value = '';
    }
});