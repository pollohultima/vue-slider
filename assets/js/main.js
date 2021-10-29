const app = new Vue({

    el: '#root',

    data: {

        contatore: 0,

        slides:
            [
                {
                    item: 'assets/img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    item: 'assets/img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.'
                },
                {
                    item: 'assets/img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    item: 'assets/img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
                {
                    item: 'assets/img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                }
            ]
    },

    methods: {

        scroll_down: function () {
            if (this.contatore == this.slides.length - 1) {
                this.contatore = 0;
            }
            else {
                this.contatore = this.contatore + 1;
            }

        },

        scroll_up: function () {
            if (this.contatore == 0) {
                this.contatore = this.slides.length - 1;
            }
            else {
                this.contatore = this.contatore - 1;
            }
        }
    }


})