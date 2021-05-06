const App = {
    data() {
        return {
            backImg: [
                "images/one.jpg",
                "images/two.png"
            ],
            selectedImg: "images/one.jpg",
            slideMainText: [
                {up: "Тренажёрный зал", down: "850 квадратных метров первоклассного железа."},
                {up: "Кардиозона", down: "Движение – жизнь."}
            ],
            slideMainCurrentText: {up: "Тренажёрный зал", down: "850 квадратных метров первоклассного железа."},
            notes: ['Заметка 1', 'Заметка 2'],
            lul: 'dsdsdsds',
        }
    },
    computed: {
        computedImg: function () {
            return this.selectedImg;
        }
    },
    methods: {
        NextSlide: function () {
            this.ChangeSlide(1)
        },
        PrevSlide: function () {
            this.ChangeSlide(0)
        },


        ChangeSlide(index) {
            this.selectedImg = this.backImg[index];
            this.slideMainCurrentText.up = this.slideMainText[index].up
            this.slideMainCurrentText.down = this.slideMainText[index].down
        }
    }
}

Vue.createApp(App).mount('#app')