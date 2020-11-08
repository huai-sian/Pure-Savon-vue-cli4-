<template>
    <div class='progressStep'>
        <div class="row">
            <div class="col-4">
                <div class='step' :class="{'now':current===1}">
                    <p>01確認購買Check Order</p>
                </div>
            </div>
            <div class="col-4">
                <div class='step' :class="{'now':current===2}">
                    <p>02填寫資料Billing Info</p>
                </div>
            </div>
            <div class="col-4">
                <div class='step' :class="{'now':current===3}">
                    <p>03完成訂單Accomplish</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ProgressStep',
  props: ['current']
}
</script>
