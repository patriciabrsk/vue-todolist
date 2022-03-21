/**
 *
 *
 *
    Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue
    Bonus:
    1- al click su una thumb, visualizzare in grande l'immagine corrispondente
    2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
    3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
 *
 */

const app = new Vue(
    {
        el: '#app',
        data: {
            newTask: {
                text: '',
                done: false
            },
            tasks: [],
        },
        
        methods: {
            addTask() {
                if (this.newTask.text.trim() !== '') {
                    this.tasks.push({
                        text: this.newTask.text,
                        done: false
                    });
                    this.newTask.text = '';
                }
            },
            removeTask(index) {
                if (this.tasks[index] != undefined) {
                    this.tasks.splice(index, 1);
                }
            },
            clearAllTasks() {
                this.tasks = [];
            },
            completeTask(task) {
                if (this.tasks[index] != undefined) {
                this.task.done = !this.task.done;
                }
            }
        }
    }
);
