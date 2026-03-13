const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const darkModeBtn = document.getElementById('dark-mode-toggle');


//modo oscuro
darkModeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    darkModeBtn.innerHTML = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

//tareas
addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== "") {
        createTask(text);
        input.value = "";
    }
});

function createTask(text) {
    const li = document.createElement('li');
//boton
    li.className = "relative bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-slate-500 dark:border-slate-400 shadow-md flex flex-col gap-4";
    
    li.innerHTML = `
        <span class="text-lg dark:text-slate-200">${text}</span>
        <div class="flex justify-between items-center">
            <button class="delete-btn bg-blue-400 hover:bg-red-500 text-white text-xs px-3 py-1 rounded border border-slate-800 transition-colors">
                Delete
            </button>
            <div class="w-8 h-8 rounded-full border-4 border-blue-400 bg-blue-100 dark:bg-slate-700"></div>
        </div>
    `;

    // boton eliminar
    li.querySelector('.delete-btn').addEventListener('click', () => li.remove());
    
    taskList.appendChild(li);
}