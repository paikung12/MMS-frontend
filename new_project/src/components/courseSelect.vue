<template>
    <div v-if="couseMS">
        <v-select
                label="Course"
                v-model="selectC"
                :items="couseMS"
                item-text="CourseID"
                item-value="id"
                @change="$emit('change',selectC)"
        >
        </v-select>

    </div>
</template>

<script>
    export default {
        name: "courseSelect",
        data () {
            return {
                selectC : null,
                couseMS : null,
            }
        },
        created() {
            this.loadData()
        },methods :{
            async loadData (){
                this.couseMS  = await axios.get('CourseManagementSystem/')
                    .then(function (response) {
                        return response.data
                    }).catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>

</style>