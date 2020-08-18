<template>
    <v-container>
        <div>
            <h1>Edit: Course</h1>
            <v-text-field label="CourseID" v-model="form.CourseID"/>
            <v-text-field label="NameCourse" v-model="form.NameCourse"/>
            <v-text-field label="TeachingPeriod" v-model="form.TeachingPeriod" type="datetime-local"/>
            <v-text-field label="TeacherName" v-model="form.TeacherName"/>
            <v-select
                    v-model="form.CourseStatus"
                    :items="[true,false]"
                    label="CourseStatus"
            ></v-select>
            <v-btn color="cyan" @click="savedata">Save</v-btn>
        </div>
    </v-container>


</template>

<script>
    export default {
        name: "CMSedit",
        data: () => ({
            form: {
                CourseID: null,
                NameCourse: null,
                TeachingPeriod: null,
                TeacherName: null,
                CourseStatus: null
            }
        }),
        created() {
            this.loadData()
        },
        methods: {
            async loadData() {
                let id = this.$route.params.id
                this.form = await axios.get('CourseManagementSystem/' + id + '/')
                    .then(function (r) {
                        return r.data
                    }).catch(function (e) {
                        return null
                    })
                this.form.TeachingPeriod =  this.form.TeachingPeriod.substring(0,this.form.TeachingPeriod.length -1)

            },

            async savedata() {
                let id = this.$route.params.id 
                let data = await axios.put('CourseManagementSystem/' + id + '/', this.form)
                    .then(function (response) {
                        return response.data
                    }).catch(function (error) {
                        console.log(error);
                    })
                if (data) {
                    await this.$router.push({name: 'CMSIndex'})
                }
            }
        }
    }
</script>

<style scoped>

</style>