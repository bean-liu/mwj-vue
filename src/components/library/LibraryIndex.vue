<template>
    <div>
        <el-container>
            <el-aside style="width: 200px; margin-top:20px">
                <!-- <switch></switch> -->
                <SideMenu></SideMenu>
            </el-aside>
            <el-main>
                <Books class="books-area"></Books>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import SideMenu from './SideMenu.vue'
import Books from './Books.vue'
    export default {
        name: 'AppLibrary',
        components: {SideMenu, Books}
    }
</script>

<style scoped>
.books-area{
    width:990px;
    margin-left:auto;
    margin-right:auto;
}
</style>