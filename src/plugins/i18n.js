import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ru',
  messages: {
      'en': {
          hello: 'Learn at your own pace',
          hello_text: 'Study any topic at any time. We offer thousands of courses every day.',
          hello_action: 'Get started',
          Pricing: 'Pricing',
          Pricing_text: 'Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.',
          signup: 'Sign Up',
          yourname: 'Your name',
          youremail: 'Your E-mail',
          What_is_your_name: 'What is your name?',
          Email_field_is_required: 'Email field is required',
          This_field_should_be_an_email: 'This field should be an email',
          This_email_is_already_exists: 'This email is already exists',
          Create_a_password: 'Create a password',
          live: 'Live',
          login: 'Login',
          signup: 'Sign up',
          guide_txt: 'Here i`st your can click {link}, go action start',
          About_us: 'About us',
          Courses: 'Courses',
          Free: 'Free',
          Teachers: 'Teachers',
          security: 'Security',
          Contacts: 'Contacts',
          priceNowM: 'Price per month',
          priceNowY: 'Price per year',
          For_a_month: 'For a month',
          For_a_year: 'For a year'
      },
      'ru': {
          hello: 'Учитесь в собственном темпе',
          hello_text: 'Изучайте любые темы в любое время. Мы предлагаем тысячи курсов на каждый день.',
          hello_action: 'Начать',
          Pricing: 'Наши расценки',
          Pricing_text: 'Быстро создайте эффективную таблицу цен для ваших потенциальных клиентов на этом примере Bootstrap. Он построен с использованием компонентов и утилит Bootstrap по умолчанию без особых настроек.',
          signup: 'Регистрация',
          yourname: 'Ваше имя',
          youremail: 'Ваш E-mail',
          What_is_your_name: 'Как вас зовут?',
          Email_field_is_required: 'Поле электронной почты обязательно для заполнения',
          This_field_should_be_an_email: 'Это поле должно быть электронным адресом',
          This_email_is_already_exists: 'Этот электронный адрес уже существует',
          Create_a_password: 'Придумайте пароль',
          live: 'Прямой эфир',
          login: 'Вход',
          signup: 'Регистрация',
          guide_txt: 'Здесь вы можете нажать {link}, иди начинать действие',
          About_us: 'О Нас',
          Courses: 'Курсы',
          Free: 'Бесплатно',
          Teachers: 'Преподаватели',
          security: 'Конфиденциальность',
          Contacts: 'Контакты',
          priceNowM: 'Цена за месяц',
          priceNowY: 'Цена за год',
          For_a_month: 'На месяц',
          For_a_year: 'На год'
      }
    }
})
