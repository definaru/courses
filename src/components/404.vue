<template>
    <div class="container" style="padding-top:50px;">
        <div class="row">
            <div class="col-md-12 my-5 py-5  text-center">
                <i class="fa fa-compass text-muted" style="font-size: 100px;opacity: 0.1;"></i>
                <h3 class="display-3">Whoops 404!!! </h3>
                <h4><small>The page is not available.</small></h4>
                <br/>
                <router-link to="/" class="btn btn-sm btn-dark">На главную</router-link>
                <a href="#" @click.prevent="back" class="btn btn-sm btn-secondary">Go back</a>
                <!-- $route.path -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>
html, body {background: #333;color:#dfdfdf}
</style>