<template>
    <v-container>
        <div>
            <h1>Edit : Member</h1>
            <v-text-field disabled label="CourseID" v-model="form.course_data.CourseID"/>
            <v-text-field label="StudenID" v-model="form.StudenID"/>
            <v-text-field label="NameCourse" v-model="form.CourseIDEnroll"/>
            <v-text-field label="TeachingPeriod" v-model="form.Enrolldate" type="datetime-local"/>
            <v-text-field label="TeacherName" v-model="form.Name"/>
            <v-text-field label="TeacherName" v-model="form.Address"/>
            <v-text-field label="TeacherName" v-model="form.ContactDetails"/>
            <v-text-field label="TeacherName" v-model="form.ParentContac"/>
            <v-btn  color="cyan" @click="savedata">Save</v-btn>
        </div>
    </v-container>

</template>

<script>
    export default {
        name: "MMSedit",
        data: () => ({
            form: {
                StudenID : null,
                CourseIDEnroll :null,
                Enrolldate: null,
                Name: null,
                Address: null,
                ContactDetails: null,
                ParentContac: null,
            }
        }),
        created() {
            this.loadData()
        },
        methods: {
            async loadData() {
                let id = this.$route.params.id
                this.form = await axios.get('MemberManagementSystem/' + id + '/')
                    .then(function (r) {
                        return r.data
                    }).catch(function (e) {
                        return null
                    })
                this.form.TeachingPeriod =  this.form.TeachingPeriod.substring(0,this.form.TeachingPeriod.length -1)

            },

            async savedata() {
                let id = this.$route.params.id
                let data = await axios.put('MemberManagementSystem/' + id + '/', this.form)
                    .then(function (response) {
                        return response.data
                    }).catch(function (error) {
                        console.log(error);
                    })
                if (data) {
                    await this.$router.push({name: 'MMSIndex'})
                }
            }
        }
    }
</script>

<style scoped>

</style>