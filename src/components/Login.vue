<template>

  <div class="container">
    <div class="row">
        <div class="col-md-12 mt-5 pt-5 text-center">
            <h2>Вход в личный кабинет</h2>
            <hr/>
        </div>
        <div class="col-md-4 offset-md-4">
    <form class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <input
          type="email"
          id="email"
          placeholder="Ваш E-mail"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is already exists</div>
      </div>

      <div class="form-group">
        <input
          type="password"
          id="password"
          placeholder="Ваш пароль"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}.
        </div>
        <div class="invalid-feedback" v-if="!$v.password.required">Password field is required</div>
      </div>

        <button 
            id="loading"
            class="btn btn-success btn-lg btn-block mb-4" 
            type="submit" 
            :disabled="$v.$invalid"
            @click="changeText()"
            
        >
            <span v-if="!canShowTopMessage">
                <i class="fa fa-key"></i> Войти
            </span>
            <span v-else><i class="spinner-border spinner-border-sm mrg"></i> Загружается...</span>
        </button>
    </form>
    </div>
    </div>
  </div>

</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            email: '',
            password: '',
            text: 'Зарегистрироваться',
            canShowTopMessage: false
        }
    },
    methods: {
        onSubmit () {
            console.log('Email', this.email)
            console.log('Password', this.password)
        },
        changeText() {
            this.canShowTopMessage = true;

            setTimeout(() => {
                this.canShowTopMessage = false;
            }, 1000);
        },
    },
    computed: {

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
        password: {
            required,
            minLength: minLength(6)
        }
    }
}
</script>

<style>
    .mrg {position: relative;top:-4px;}
</style>