<template>
    <v-container>
        <div>
            <p>ADD: Studen</p>
            <course-select @change="courseChange"/>
            <v-text-field label="StudenID" v-model="form.StudenID" :error-messages="error.StudenID"/>
            <v-text-field label="CourseIDEnroll" v-model="form.CourseIDEnroll " :error-messages="error.CourseIDEnroll"/>
            <v-text-field label="Enrolldate" v-model="form.Enrolldate" type="datetime-local" />
            <v-text-field label="Name" v-model="form.Name" :error-messages="error.Name"/>
            <v-text-field label="Address" v-model="form.Address" />
            <v-text-field label="ContactDetails" v-model="form.ContactDetails"/>
            <v-text-field label="ParentContac" v-model="form.ParentContac"/>
            <v-btn color="cyan" @click="savedata">Save</v-btn>
        </div>
    </v-container>
</template>

<script>
    import CourseSelect from "../../components/courseSelect";
    import {mapGetters} from "vuex";
    export default {
        name: "Add",
        components: {CourseSelect},
        data: () =>({
            form : {
                course : null,
                StudenID : null,
                CourseIDEnroll :null,
                Enrolldate: null,
                Name: null,
                Address: null,
                ContactDetails: null,
                ParentContac: null,
            }
        }),
        computed : {
            ...mapGetters({
                error: "error/getError",
            }),
        },
        methods :{
            courseChange (e) {
                this.form.course = e
            },
            async savedata() {
                let self = this
                let data  = await axios.post('MemberManagementSystem/',this.form)
                    .then(function (response) {
                        return response.data
                    }).catch(function (error) {
                        console.log( error.response.data,'ee');
                        self.$store.dispatch('error/setError',error.response.data)
                    })
                if(data) {
                    await this.$router.push({name : 'MMSIndex'})
                }
            }
        }
    }
</script>

<style scoped>

</style>