const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const darkModeBtn = document.getElementById('dark-mode-toggle');

darkModeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    if (document.documentElement.classList.contains('dark')) {
        darkModeBtn.innerHTML = '☀️';
    } else {
        darkModeBtn.innerHTML = '🌙';
    }
});

addBtn.addEventListener('click', () => {
    const texto = input.value.trim();
    
    if (texto !== "") {
        crearTarea(texto);
        input.value = ""; // Limpiamos el cuadrito después de añadir
    }
});

function crearTarea(texto) {
    const li = document.createElement('li');

    li.className = "relative bg-white dark:bg-slate-800 p-8 rounded-xl border-2 border-slate-500 dark:border-slate-400 shadow-md flex flex-col gap-4";
    
    li.innerHTML = `
        <span class="text-lg dark:text-slate-200">${texto}</span>
        <div class="flex justify-between items-center">
            <button class="delete-btn bg-blue-400 hover:bg-red-500 text-white text-xs px-3 py-1 rounded border border-slate-800">
                Delete
            </button>
            <div class="complete-btn w-8 h-8 rounded-full border-4 border-blue-400 bg-blue-100 dark:bg-slate-700 cursor-pointer flex items-center justify-center font-bold text-green-600">
            </div>
        </div>
    `;

    const botonBorrar = li.querySelector('.delete-btn');
    const circulo = li.querySelector('.complete-btn');
    const textoTarea = li.querySelector('span');

    circulo.addEventListener('click', () => {
        // Tachamos el texto
        textoTarea.classList.toggle('line-through');
        textoTarea.classList.toggle('opacity-50');
        
        circulo.classList.toggle('bg-green-200');
        circulo.classList.toggle('border-green-500');

        if (circulo.innerHTML === '✓') {
            circulo.innerHTML = '';
        } else {
            circulo.innerHTML = '✓';
        }
    });

    botonBorrar.addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
}