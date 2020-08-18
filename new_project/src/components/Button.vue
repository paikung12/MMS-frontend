<template>
    <div>
        <button class="btn_loginmms"   @click="$emit('click')" >{{text}}</button>
    </div>
</template>
<script>
    export default {
        name : "Button",
        props: ['text','color']
    }
</script>
<style lang="postcss">
    .btn_loginmms{
        @apply bg-blue-500  text-white font-bold py-2 px-4 rounder;
    }
    .btn_loginmms:hover{
        @apply bg-blue-700
    }

</style>
