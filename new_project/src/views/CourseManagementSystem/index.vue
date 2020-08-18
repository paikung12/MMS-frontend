<template>
    <v-container>
        <div v-if="CMS">
            <h1 class="text-center">CourseManagementSystem</h1>
            <v-btn  color="primary" @click="$router.push({name : 'CMSAdd'}) ">
                <v-icon> mdi-plus</v-icon>
                Add</v-btn>

            <v-data-table
                    :headers="headers"
                    :items="CMS"
                    class="elevation-1"
                    hide-default-footer
            >
                <template v-slot:item.CourseStatus="{item}">
                    {{ item.CourseStatus ? 'Available':'Unavailable' }}
                </template>

                <template v-slot:item.action="{ item }">
                    <v-btn  color="yellow" @click="$router.push({name : 'CMSedit' , params : {id : item.id}})">
                        <v-icon>
                            mdi-pencil
                        </v-icon>
                        Edit
                    </v-btn>
                    <v-btn color="red" @click="deletedata(item.id)">
                        <v-icon>
                            mdi-delete
                        </v-icon>
                        Delete
                    </v-btn>
                </template>
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
    import Template from "../Template";

    export default {
        name: "index-CourseManagementSystem",
        components: {Template},
        data: () => ({
            CMS: null,
            headers: [
                {
                    text: 'CourseID',
                    align: 'start',
                    sortable: false,
                    value: 'CourseID',
                },
                {text: 'NameCourse', value: 'NameCourse'},
                {text: 'TeachingPeriod', value: 'TeachingPeriod'},
                {text: 'TeacherName', value: 'TeacherName'},
                {text: 'CourseStatus', value: 'CourseStatus'},
                {text: 'Action', value: 'action'},
            ]
        }),
        created() {
            this.loadData()
        },
        methods: {
            async deletedata(id) {

                if(confirm("DELETE THIS ITEM ???")){
                    let data = await axios.delete('CourseManagementSystem/' + id + '/')
                        .then(function (response) {
                            return response.data
                        }).catch(function (error) {
                            console.log(error);
                        })
                    if (data != null) {
                        await this.loadData()
                    }

                }

            },
            async loadData() {
                this.CMS = await axios.get('CourseManagementSystem/')
                    .then(function (response) {
                        console.log(response.data)
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