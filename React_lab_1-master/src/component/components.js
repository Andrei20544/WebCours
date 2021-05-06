const app = Vue.createApp({})

app.component('component_header', {
  template: `<header class="header">
                <div class="header__darkbg">
                    <div class="container">
                        <div class="header__content header--open">
                            <a class="logo" href="index.html">
                                <img class="logo__img" src="images/logo.png" alt="logo">
                            </a>
                            <div class="header__content-center menu--open">
                                <a class="header__link" href="news.html">Услуги</a>
                                <a class="header__link" href="#">Новости</a>
                                <a class="header__link" href="#">Расписание</a>
                                <a class="header__link" href="#">Клубные карты</a>
                                <a class="header__link" href="#">О клубе</a>
                                <a class="header__link" href="contacts.html">Контакты</a>
                            </div>
                            <button class="button_menu">МЕНЮ</button>
                            <button class="button_call">ЗАПИСЬ ОНЛАЙН</button>
                        </div>
                    </div>
                </div>
            </header>`
})
app.component('component_footer', {
    template: `<div class="footer">
                    <div class="container">
                        <div class="footer__top">
                            <p class="footer__text">г. Калининград, ул. Олега Кошевого 58</p>
                            <div class="footer__text">
                                <p class="footer__text">Ежедневно с 7:00 до 23:00</p>
                                <p class="footer__text">Бассейн и сауна:</p>
                                <p class="footer__text">Пн с 11:00 до 22:00</p>
                                <p class="footer__text">Вт-Вс с 7:00 до 22:00</p>
                            </div>
                            <p class="footer__text">
                                <a class="footer__text-a" href="">+7 (4012) 61-40-61</a>
                            </p>
                        </div>
                        <div class="footer__center">
                            <div class="footer__social">
                                <a class="footer__social-link" href="">
                                    <img class="footer__social-ico" src="images/ico/ico-facebook.svg" alt="">
                                </a>
                                <a class="footer__social-link" href="">
                                    <img class="footer__social-ico" src="images/ico/ico-vk.svg" alt="">
                                </a>
                                <a class="footer__social-link" href="">
                                    <img class="footer__social-ico" src="images/ico/icons8-instagram.svg" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="footer__bottom">
                            <p class="footer__text">Пользовательское соглашение Договор оферты</p>
                            <p class="footer__text">© 2020–2021 ОOO «FitKld фитнес»</p>
                        </div>
                    </div>
                </div>`
  })


app.mount('#comp')