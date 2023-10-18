<template>
  <div class="p-5">
    <b-form @submit="onSubmit" v-if="show">
      <div class="row">
        <div class="col-md-6">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
            <p class="text-danger" v-show="invalidEmail">Invalid email</p>
          </b-form-group>
        </div>
        <div class="col-md-6">
          <b-form-group
            id="input-group-2"
            label="Enter Password"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Enter password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="text-center">
        <b-button type="submit" variant="primary">Log In</b-button>
      </div>
    </b-form>
  </div>
</template>


<script lang="ts">
import _ from "lodash";

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      show: true,
      invalidEmail: false,
    };
  },
  methods: {
    onSubmit(event: any) {
      event.preventDefault();
      const getPassword = this.$store.getters.getPassword(this.form.email);
      if (_.isUndefined(getPassword)) {
        this.invalidEmail = true;
      } else {
        console.log(getPassword, this.form.password);
        console.log( this.form.password);
        if (_.isEqual(getPassword, this.form.password)) {
          console.log("login");
          this.$store.commit("setLogin", true);
          this.$store.commit("setThisUserByEmail", this.form.email);
          this.$router.push("/");
        }
      }
    },
  },
};
</script>
