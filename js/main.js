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
                done: true
            },
        },
        tasks: [],

        methods: {
            addTask() {
                // if (this.newTask.text == '') {
                //     this.newTask.push({
                //         text: this.newTask.text,
                //         done: false
                //     });
                // } else {
                //     this.newTask.text = '';
                // }
            },

            removeTask(index) {
                this.tasks.splice(index, 1);
            },
        }
    }
);
