<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props : ['name']
    }
</script>

<style scoped>

</style>