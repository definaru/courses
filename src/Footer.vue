<template>
    <div v-if="$route.path !== '/404.html'">
        <div style="width: 100%;height: 100px;">
            <svg height="290" width="100%" viewBox="0 0 100 29" preserveAspectRatio="none">
                <path width="100%" fill="#343a40 " opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z"></path> 
                <path width="100%" fill="#343a40 " d="M0 30 V12 Q30 17 55 12 T100 11 V30z"></path>
            </svg>
        </div>
        <section class="bg-dark text-light py-md-5 mt-5" >
    <!--  style="position: absolute;width: 100%;bottom: 0;"-->

            <div class="container">
                <footer class="pt-4 pt-md-5">
                    <div class="row">
                        <div class="col-12 col-md">
                          <img class="mb-2" :src="logo" alt="" width="24" height="24">
                            <small class="d-block mb-3">
                                &copy; {{ NameSite }}&trade; {{ date.getFullYear() }}<br/>
                                All right recerved<br/>
                                <p class="mt-3"><a :href="('tel:' + phone)" class="text-warning">{{ phone }}</a></p>
                            </small>
                        </div>
                        <div class="col-6 col-md">
                          <h5>Features</h5>
                          <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Cool stuff</a></li>
                            <li><a class="text-muted" href="#">Random feature</a></li>
                            <li><a class="text-muted" href="#">Team feature</a></li>
                            <li><a class="text-muted" href="#">Stuff for developers</a></li>
                          </ul>
                        </div>
                        <div class="col-6 col-md">
                          <h5>Resources</h5>
                          <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Resource</a></li>
                            <li><a class="text-muted" href="#">Resource name</a></li>
                            <li><a class="text-muted" href="#">Another resource</a></li>
                            <li><a class="text-muted" href="#">Final resource</a></li>
                          </ul>
                        </div>
                        <div class="col-6 col-md">
                          <h5>{{$t('About_us')}}</h5>
                          <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Team</a></li>
                            <li><a class="text-muted" href="#">Locations</a></li>
                            <li><router-link to='/privacy' class="text-muted">{{$t('security')}}</router-link></li>
                            <li><a class="text-muted" href="#">Terms</a></li>
                          </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    </div>
    <div v-else></div>
</template>

<script>
    export default {
        props: ['NameSite', 'email', 'phone', 'skype', 'logo'],
        data () {
            return {
                date: new Date()
            }
        }
    }
</script>

<style>

</style>
