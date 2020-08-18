<template>
    <v-container>
        <div v-if="MMS">
            <h1 class="text-center">Member management systems</h1>
            <v-btn color="primary" @click="$router.push({name : 'MMSAdd'})">
                <v-icon>mdi-plus</v-icon>
                Add</v-btn>
            <v-data-table
                    :headers="headers"
                    :items="MMS"
                    class="elevation-1"
                    hide-default-footer
            >

                <template v-slot:item.action="{ item }">
                    <v-btn color="yellow" @click="$router.push({name : 'MMSedit' , params : {id : item.id}})">
                        <v-icon>mdi-pencil</v-icon>
                        Edit
                    </v-btn>
                    <v-btn @click="deletedata(item.id)" color="red">
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
        name: "index-MemberManagementSystem",
        components: {Template},
        data: () =>({
            MMS : null,
            headers: [
                {
                    text: 'StudenID ',
                    align: 'start',
                    sortable: false,
                    value: 'StudenID',
                },
                {text: 'CourseIDEnroll', value: 'CourseIDEnroll'},
                {text: 'Enrolldate', value: 'Enrolldate'},
                {text: 'Name', value: 'Name'},
                {text: 'Address', value: 'Address'},
                {text: 'ContactDetails', value: 'ContactDetails'},
                {text: 'ParentContac', value: 'ParentContac'},
                {text: 'Action', value: 'action'},
            ]


        }),

        created() {
            this.loadData()
        },
        methods :{
            async deletedata(id) {
                if(confirm("DELETE THIS ITEM ???")) {
                    let data = await axios.delete('MemberManagementSystem/' + id + '/')
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
            async loadData(){
               this.MMS =  await axios.get('MemberManagementSystem/')
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