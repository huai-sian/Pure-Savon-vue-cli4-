<template>
    <div>
        <div class='container-fluid layout px-0'>
            <Navbar/>
            <Alert/>
            <router-view></router-view>
            <Totop/>
            <Footer/>
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navigation_bar'
import Footer from '../components/Footer'
import Alert from '../components/AlertMessage'
import Totop from '../components/Totop'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Alert,
    Footer,
    Totop
  }
}
</script>
<style lang="scss" scoped>
.layout{
    min-width:320px;
}
.input{
    outline:0;
}
</style>
