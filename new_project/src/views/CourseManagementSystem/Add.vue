<template>
    <v-container>
        <div>
            <p>ADD: Course</p>
            <v-text-field label="CourseID" v-model="form.CourseID" :error-messages="error.CourseID"/>
            <v-text-field label="NameCourse" v-model="form.NameCourse" :error-messages="error.NameCourse"/>
            <v-text-field label="TeachingPeriod" v-model="form.TeachingPeriod" type="datetime-local"/>
            <v-text-field label="TeacherName" v-model="form.TeacherName"/>
            <v-select
                    v-model="form.CourseStatus"
                    item-value="id"
                    item-text="text"
                    :items="[{id : true , text : 'Available'},{id : false , text : 'Unavailable'}]"
                    label="CourseStatus"
            ></v-select>
            <v-btn color="cyan" @click="savedata">Save</v-btn>

        </div>
    </v-container>
</template>

<script>
    import  {mapGetters} from 'vuex'
    export default {
        name: "Add",
        data: () =>({
            form : {
                CourseID : null,
                NameCourse :null,
                TeachingPeriod: null,
                TeacherName: null,
                CourseStatus: null
            }
        }),
        computed : {
            ...mapGetters({
                error: "error/getError",
            }),
        },
        methods :{
            async savedata() {
                let self = this
                let data  = await axios.post('CourseManagementSystem/',this.form)
                    .then(function (response) {
                        return response.data
                    }).catch(function (error) {
                        console.log(error,'ee')
                        self.$store.dispatch('error/setError',error.response.data)
                    })
                if(data) {
                    await this.$router.push({name : 'CMSIndex'})
                }
            }
        }
    }
</script>

<style scoped>

</style>