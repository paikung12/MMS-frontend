<template>
        <div class="fill-height d-flex flex-row">
            <v-navigation-drawer permanent>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            MMS Syatems : Admin
                        </v-list-item-title>
                        <v-list-item-subtitle>

                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list
                        dense
                        nav
                >

                    <v-list-item
                            :to="{name : 'MMSIndex'}"

                    >
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>MemberManagement</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item
                            :to="{name : 'CMSIndex'}"

                    >
                        <v-list-item-icon>
                            <v-icon>mdi-pencil</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>CourseManagement</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>


                </v-list>
            </v-navigation-drawer>
            <v-main>
                <router-view></router-view>
            </v-main>
        </div>
</template>

<script>

    export default {
        name: "Template"
    }
</script>

<style scoped>

</style>