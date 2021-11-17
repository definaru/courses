<template>
  <div>
    <vue-headful :title="$t('Courses')"
                 description="Description from vue-headful" />
    <div class="container">
      <div class="row">
        <div class="col-md-12 py-5 mt-5">
          <h1>{{ $t('Courses') }}</h1>
          <b-breadcrumb class="bg-white pl-0">
            <router-link tag="li" to='/' class="breadcrumb-item">
              <a>Home</a>
            </router-link>
            <router-link tag="li" to='/about' class="breadcrumb-item">
              <span aria-current="location">{{ $t('Courses') }}</span>
            </router-link>
          </b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <b-card img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 100%"
                  class="mb-2">
            <b-card-body class="p-0 text-center">
              <b-card-title><a href="#" class="card-link text-dark">Мезотерапия лица и тела</a></b-card-title>
              <div class="row">
                <div class="col-12 text-center bg-light py-2 mt-3"><small><i class=" fa fa-circle text-success"></i> online</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-users"></i><br /> <small>4 места</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-clock"></i><br /> <small>25 часов</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-comment-dollar"></i><br /> <small>24 месяца</small></div>
              </div>
            </b-card-body>
            <b-card-footer class="card-footer pt-3 pl-0 pr-0 pb-0 bg-white">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-2 pr-md-1"><a href="#" class="btn btn-warning btn-block">Записаться</a></div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-2 pl-md-0"><a href="#" class="btn btn-outline-dark btn-block">подробнее</a></div>
              </div>
            </b-card-footer>
          </b-card>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <b-card img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 100%"
                  class="mb-2">
            <b-card-body class="p-0 text-center">
              <b-card-title><a href="#" class="card-link text-dark">Мезотерапия лица и тела</a></b-card-title>
              <div class="row">
                <div class="col-12 text-center bg-light py-2 mt-3"><small><i class=" fa fa-circle text-success"></i> online</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-users"></i><br /> <small>4 места</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-clock"></i><br /> <small>25 часов</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-comment-dollar"></i><br /> <small>24 месяца</small></div>
              </div>
            </b-card-body>
            <b-card-footer class="card-footer pt-3 pl-0 pr-0 pb-0 bg-white">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-2 pr-md-1"><a href="#" class="btn btn-warning btn-block">Записаться</a></div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-2 pl-md-0"><a href="#" class="btn btn-outline-dark btn-block">подробнее</a></div>
              </div>
            </b-card-footer>
          </b-card>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <b-card img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 100%"
                  class="mb-2">
            <b-card-body class="p-0 text-center">
              <b-card-title><a href="#" class="card-link text-dark">Мезотерапия лица и тела</a></b-card-title>
              <div class="row">
                <div class="col-12 text-center bg-light py-2 mt-3"><small><i class=" fa fa-circle text-success"></i> online</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-users"></i><br /> <small>4 места</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-clock"></i><br /> <small>25 часов</small></div>
                <div class="col-4 text-center pt-3 pb-3"><i class="fa fa-comment-dollar"></i><br /> <small>24 месяца</small></div>
              </div>
            </b-card-body>
            <b-card-footer class="card-footer pt-3 pl-0 pr-0 pb-0 bg-white">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-2 pr-md-1"><a href="#" class="btn btn-warning btn-block">Записаться</a></div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-2 pl-md-0"><a href="#" class="btn btn-outline-dark btn-block">подробнее</a></div>
              </div>
            </b-card-footer>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>
