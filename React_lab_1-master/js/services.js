
Vue.createApp({
    data() {
      return {
        services: [
            {title: "Тренажёрный зал"},
            {title: "Кардиозона"},
            {title: "Functional zone"},
            {title: "Зона тяжелой атлетики"},
            {title: "Залы групповых программ"}
        ],
        notes: ['Заметка 1', 'Заметка 2'],
        lul: 'dsdsdsds',
        lul_2: '22222dsdsdsds',
      }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNote(){
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(index, event){
            this.notes.splice(index, 1)
        }
    }
  }).mount('#array-rendering')

