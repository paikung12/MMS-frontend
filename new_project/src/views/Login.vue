<template>
  <v-app id="inspire">
    <v-main>
      <v-container
              class="fill-height"
              fluid
      >
        <v-row
                align="center"
                justify="center"
        >
          <v-col
                  cols="12"
                  sm="8"
                  md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                      color="primary"
                      dark
                      flat
              >
                <v-toolbar-title>Login:Management systems</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                            :href="source"
                            icon
                            large
                            target="_blank"
                            v-on="on"
                    >
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                          class="text-center"
                          v-model="form.username"
                          label="Username"
                  >
                  </v-text-field>
                  <v-text-field
                          class="text-center"
                          v-model="form.password"
                          label="Password"
                          type="password"
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        text="Login"
                        @click="login"
                        color="success"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<!--  <div class="">-->
<!--    <v-card class="mx-auto"-->
<!--            max-width="344"-->
<!--            outlined>-->
<!--      <h1 class="text-center">Admin: MMS Login</h1>-->
<!--      <div>-->
<!--        <InputText  class="text-center" type="text" @change="user.username = $event.text" label="Username" ></InputText>-->
<!--        <InputText  class="text-center" type="password" @change="user.password = $event.text" label="Password"></InputText>-->
<!--        <div class="text-center">-->
<!--          <v-btn  text="Login" @click="login"  color="success" dark>Login</v-btn>-->
<!--        </div>-->

<!--      </div>-->
<!--    </v-card>-->
<!--  </div>-->
<script>
  import Button from "../components/Button";
  import InputText from "../components/InputText";
  export default {
    name : "Login",
    components: {Button, InputText,},
    comments: {
      InputText,
      Button,
    },
    data : () => ({
      user: {
        username : null,
        password : null,
      },
      form:{
        username : null,
        password : null,
      }

    }),
    methods: {
       login (){
          if(this.form.username === "admin" && this.form.password === "password"){
            this.$router.push({name:"CMSIndex"})
          }else {
            alert("Login Error")
          }
          console.log('login')
        },
        Changeusername(e){
         console.log(e)
      }
    },
  }
</script>