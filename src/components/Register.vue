<template>
  <div>
    <vue-headful :title="$t('signup')"
                 description="Description from vue-headful" />
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-5 pt-5 text-center">
          <h2>{{$t('signup')}}</h2>
          <hr />
        </div>
        <div class="col-md-6 offset-md-3">
          <form class="pt-3" @submit.prevent="onSubmit">
            <div class="form-group">
              <input type="text" id="name" :placeholder="$t('yourname')" class="form-control"
                     :class="{'is-invalid': $v.name.$error}"
                     @blur="$v.name.$touch()"
                     v-model="name" autocomplete="off">
              <div class="invalid-feedback" v-if="!$v.name.required">{{$t('What_is_your_name')}}</div>
              <div class="invalid-feedback" v-if="!$v.name.minLength">
                Имя не может быть меньше {{ $v.name.$params.minLength.min }}-х букв. Вы ввели {{ name.length }}.
              </div>
            </div>
            <div class="form-group">
              <input type="email" id="email" :placeholder="$t('youremail')" class="form-control"
                     :class="{'is-invalid': $v.email.$error}"
                     @blur="$v.email.$touch()"
                     v-model="email" autocomplete="off">
              <div class="invalid-feedback" v-if="!$v.email.required">{{$t('Email_field_is_required')}}</div>
              <div class="invalid-feedback" v-if="!$v.email.email">{{$t('This_field_should_be_an_email')}}</div>
              <div class="invalid-feedback" v-if="!$v.email.uniqEmail">{{$t('This_email_is_already_exists')}}</div>
            </div>
            <div class="form-group">
              <input type="password" id="password" :placeholder="$t('Create_a_password')" class="form-control"
                     :class="{'is-invalid': $v.password.$error}"
                     @blur="$v.password.$touch()"
                     v-model="password">
              <div class="invalid-feedback" v-if="!$v.password.minLength">
                Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}.
              </div>
            </div>
            <div class="form-group">
              <input type="password" id="confirm" placeholder="Повторите пароль" class="form-control"
                     :class="{'is-invalid': $v.confirmPassword.$error}"
                     @blur="$v.confirmPassword.$touch()"
                     v-model="confirmPassword">
              <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Пароли не совпадают</div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <button class="btn btn-success btn-block" type="submit" :disabled="$v.$invalid"><i class="fa fa-angle-right"></i> Отправить</button>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <button class="btn btn-dark btn-block"><i class="fab fa-google-plus-g"></i> Sign with Google</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {
    data () {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        onSubmit () {
            console.log('Email', this.email)
            console.log('Password', this.password)
        },
        setLocale(locale) {
            this.$i18n.locale = locale
        }
    },
    validations: {
        email: {
            required,
            email,
            uniqEmail: function(newEmail) {
                if (newEmail === '') return true

                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const value = newEmail !== 'test@mail.ru'
                        resolve(value)
                    }, 1000)
                })
            }
        },
        name: {
            required,
            minLength: minLength(6)
        },
        password: {
            minLength: minLength(6)
        },
        confirmPassword: {
            sameAs: sameAs('password')
        }
    }
}
</script>
