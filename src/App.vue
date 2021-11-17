<template>
  <div>
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <b-navbar toggleable="lg" type="light" variant="light" class="fixed-top shadow" v-if="$route.path !== '/404.html'">
        <div class="container">
          <b-navbar-brand>
            <router-link to='/' class="logo">
              <img :src="logo" :alt="NameSite" width="24" height="24">
              {{ NameSite }}
            </router-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto">
              <router-link tag="li" to='/about' class="nav-item" active-class="active">
                <a class="nav-link">{{$t('About_us')}}</a>
              </router-link>
              <router-link tag="li" to='/сourses' class="nav-item" active-class="active">
                <a class="nav-link">{{$t('Courses')}}</a>
              </router-link>
              <router-link tag="li" to='/live' class="nav-item" active-class="active">
                <a class="nav-link">{{$t('live')}}</a>
              </router-link>
              <router-link tag="li" to='/contacts' class="nav-item" active-class="active">
                <a class="nav-link">{{ $t('Contacts') }}</a>
              </router-link>

            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <!--
                    <b-nav-item-dropdown text="Lang" right>
                      <b-dropdown-item href="#">EN</b-dropdown-item>
                      <b-dropdown-item href="#">ES</b-dropdown-item>
                      <b-dropdown-item href="#">RU</b-dropdown-item>
                      <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                      <template v-slot:button-content>
                        <em>User</em>
                      </template>
                      <b-dropdown-item href="#">Profile</b-dropdown-item>
                      <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
            -->
              <b-nav-item-dropdown text="langues" right>
                <template v-slot:button-content>
                  <img :src="('/src/assets/flags/' + $i18n.locale + '.svg')" class="flag border">
                </template>
                <b-dropdown-item @click="setLocale('en')">English</b-dropdown-item>
                <b-dropdown-item @click="setLocale('ru')">Русский</b-dropdown-item>
              </b-nav-item-dropdown>
              <router-link to='/login' class="btn btn-warning my-2 my-sm-0 mr-2">{{$t('login')}}</router-link>
              <router-link to='/register' class="btn btn-outline-dark my-2 my-sm-0">{{$t('signup')}}</router-link>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
      <b-navbar v-else></b-navbar>
    </transition>

    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view :NameSite="NameSite" :email="email" :phone="phone" :skype="skype"></router-view>
    </transition>

    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <app-footer :NameSite="NameSite" :email="email" :phone="phone" :skype="skype" :logo="logo"></app-footer>
    </transition>

  </div>
</template>

<script>
    //import(`../langs/${locale}.json`).then((msgs);
    export default {
        data () {
            return {
                NameSite: 'My Courses',
                email: 'support@defina.ru',
                phone: '+7 800 100 200 4',
                skype: 'definaru',
                logo: '/src/assets/img/favicon-128.png'
            }
        },
        methods: {
            setLocale(locale) {
                //this.$i18n.setLocaleMessage(locale, msgs)
                this.$i18n.locale = locale
            },
            afterLeave() {
                this.$root.$emit('triggerScroll')
            }
        },
    }
</script>


<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');
    html {
        font-size: 14px;
        font-family: 'Roboto Condensed', sans-serif;
    }
    .flag {
      width:20px;
    }
    .hr-light {
        border-top: 1px solid #fff;
    }
    li.breadcrumb-item a {color:#e95252}
    li.breadcrumb-item a:hover {color:#333}
    a.logo {color:#e95252 !important}
    a:hover.logo {
        color: #333 !important;
        text-decoration: none;
    }
    .navbar-light .navbar-nav .active > .nav-link {color: rgb(233, 82, 82);}
    @media (min-width: 768px) {
        html {
            font-size: 16px;
        }
    }
    .container {
        max-width: 960px;
    }
    .pricing-header {
        max-width: 700px;
    }
    .card-deck .card {
        min-width: 220px;
    }
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }
</style>
