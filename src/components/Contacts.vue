<template>
  <div>
    <vue-headful :title="$t('Contacts')"
                 description="Description from vue-headful" />
    <div class="container">
      <div class="row">
        <div class="col-md-12 py-5 mt-5">
          <h1>{{ $t('Contacts') }}</h1>
          <b-breadcrumb class="bg-white pl-0">
            <router-link tag="li" to='/' class="breadcrumb-item">
              <a>Home</a>
            </router-link>
            <router-link tag="li" to='/about' class="breadcrumb-item">
              <span aria-current="location">{{ $t('Contacts') }}</span>
            </router-link>
          </b-breadcrumb>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3>Ut enim ad minim veniam</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col-md-6">
          <h3>Ut enim ad minim veniam</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
