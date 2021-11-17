<template>
    <div>

        <vue-headful
            :title="(NameSite + ' | Повышай свою квалификацию')"
            description="Description from vue-headful"
        />

<header class="mt-5">
    <div class="view" style="background-image: url('/src/assets/img/christmas-gifts-on-brown-parquet-floor-1303086.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
        <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                      <h1 class="h1-responsive font-weight-bold mt-sm-5 text-white">{{$t('hello')}}</h1>
                        <hr class="hr-light">
                        <h6 class="mb-4 text-white">{{$t('hello_text')}}</h6>
                        <p>
                          <!--
                          <i18n path="guide_txt">
                            <a href="!#" place="link">{{//$t('hello_action')}}</a>
                          </i18n>
                          -->
                        </p>
                        <router-link to='/register' class="btn btn-light mr-2">&#160; <i class="fa fa-angle-double-right"></i> {{$t('hello_action')}} &#160;</router-link>
                        <router-link to='/сourses' class="btn btn-outline-light">&#160; Подробнее &#160;</router-link>
                    </div>
                    <div class="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight" data-wow-delay="0.3s">
                        <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div style="margin-top: -108px;width: 100%;height: 117px;">
    <svg height="210" width="100%" viewBox="0 0 100 29" preserveAspectRatio="none">
        <path width="100%" fill="#dc3545" opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z"></path> 
        <path width="100%" fill="#dc3545" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"></path>
    </svg>
</div>

        <div class="container-fluid py-4 bg-danger" style="position: relative;z-index: 10;">
            <div class="row">
                <div class="col-md-4">
                    <div class="d-flex justify-content-center col-md-10 offset-md-1">
                        <div class="media text-white p-3">
                            <i class="fa fa-mouse-pointer mr-3 mt-3"></i>
                            <div class="media-body">
                                <strong>100 000 онлайн-курсов</strong>
                                <p>Исследуйте разнообразные актуальные темы</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-center col-md-10 offset-md-1">
                        <div class="media text-white p-3">
                            <i class="fa fa-user-graduate mr-3 mt-3"></i>
                            <div class="media-body">
                                <strong>Преподавание от экспертов</strong>
                                <p>Найдите преподавателя, который вам подходит</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-center col-md-10 offset-md-1">
                        <div class="media text-white p-3">
                            <i class="fa fa-history mr-3 mt-3"></i>
                            <div class="media-body">
                                <strong>Пожизненный доступ</strong>
                                <p>Учитесь в собственном темпе</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="pricing-header px-3 py-3 pt-5 pb-md-4 mt-5 mx-auto text-center">
            <h1 class="display-4">{{$t('Pricing')}}</h1>
            <p class="lead">{{$t('Pricing_text')}}</p>
        </div>

        <div class="container">
            <div class="card-deck mb-3 text-center">

                <div class="card mb-4 shadow-sm" v-for="col in ($i18n.locale == 'ru' ? priceListru : priceListen)">
                    <div class="card-header">
                      <h4 class="my-0 font-weight-normal">{{col.card_header}}</h4>
                    </div>
                    <div class="card-body">
                      <h1 class="card-title pricing-card-title">
                        {{$i18n.locale == 'en' ? '$' : ''}}
                        {{priceNow === $t('priceNowM') ? col.pricing_card : col.pricing_card * 12}}
                        {{$i18n.locale == 'ru' ? ' &#8381;' : ''}}
                        <br />
                        <small class="text-muted" style="font-size: 13px;">
                          {{ priceNow }}
                        </small>
                      </h1>
                        <div v-html="col.list"></div>
                        <router-link to="/register" class="btn btn-lg btn-block" :class="col.button_color">
                            {{col.button_text}}
                        </router-link>
                    </div>
                </div>

            </div>
            <div class="row">
              <div class="col-md-4 offset-md-4 text-center">
                <button @click="riseCountDown($t('priceNowM'), $event)"
                        class="btn"
                        :class="(priceNow === $t('priceNowM') ? 'btn-danger' : '')">
                      {{$t('For_a_month')}}
                </button>
                  <button @click="riseCountUp($t('priceNowY'), $event)" class="btn" :class="(priceNow === $t('priceNowY') ? 'btn-danger' : '')">
                      {{$t('For_a_year')}}
                  </button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['NameSite'],
        data() {
          return {
            counter: 0,
            priceNow: this.$i18n.t('priceNowM'),
            priceListru: [
              { card_header: 'Базовый', pricing_card: 0, list: '<ul class="list-unstyled mt-3 mb-4"><li>10 пользователи включены</li><li>2 GB хранения</li><li>Поддержка по Email</li><li>Доступ в справочный центр</li></ul>', button_text: 'Подписаться', button_color: 'btn-outline-dark', lins: ''},
              { card_header: 'Профессиональный', pricing_card: 930, list: '<ul class="list-unstyled mt-3 mb-4"><li>20 пользователи включены</li><li>10 GB хранения</li><li>VIP поддержка по email</li><li>Доступ в справочный центр</li></ul>', button_text: 'Начать Сейчас', button_color: 'btn-secondary', lins: ''},
              { card_header: 'Премиум', pricing_card: 1800, list: '<ul class="list-unstyled mt-3 mb-4"><li>30 пользователи включены</li><li>15 GB хранения</li><li>Поддержка по телефону и email</li><li>Доступ в справочный центр</li></ul>', button_text: 'Начать Сейчас', button_color: 'btn-warning', lins: ''}
            ],
            priceListen: [
                {card_header: 'Free', pricing_card: 0, list: '<ul class="list-unstyled mt-3 mb-4"><li>10 users included</li><li>2 GB of storage</li><li>Email support</li><li>Help center access</li></ul>', button_text: 'Sign up for free', button_color: 'btn-outline-dark', lins: ''},
                {card_header: 'Pro', pricing_card: 15, list: '<ul class="list-unstyled mt-3 mb-4"><li>20 users included</li><li>10 GB of storage</li><li>Priority email support</li><li>Help center access</li></ul>', button_text: 'Get started', button_color: 'btn-secondary', lins: ''},
                {card_header: 'Enterprise', pricing_card: 29, list: '<ul class="list-unstyled mt-3 mb-4"><li>30 users included</li><li>15 GB of storage</li><li>Phone and email support</li><li>Help center access</li></ul>', button_text: 'Get started', button_color: 'btn-warning', lins: ''}
            ]
          }
        },
        methods: {
            riseCountUp: function (str, event) {
                this.priceNow = str
            },
            riseCountDown: function (str, event) {
                this.priceNow = str
            }
        }
    }
</script>

<style>
.btn-outline-light {
    color: #f8f9fa !important;
    border-color: #f8f9fa;
}
.btn-outline-light:hover {
    color: #555 !important;
    border-color: #f8f9fa;
}
header,
.view {
  height: 100%;
}

@media (max-width: 740px) {
  html,
  body,
  header,
  .view {
    height: 1000px;
  }
}
@media (min-width: 800px) and (max-width: 850px) {
  html,
  body,
  header,
  .view {
    height: 600px;
  }
}

.btn .fa {
  margin-left: 3px;
}

.top-nav-collapse {
  background-color: #424f95 !important;
}


h6 {
  line-height: 1.7;
}

.rgba-gradient {
  background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
  background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
}
</style>
