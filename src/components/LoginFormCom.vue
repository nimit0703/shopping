<template>
    <div class="p-5">
      <b-form @submit="onSubmit" v-if="show">
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
        </b-form-group>
        <b-form-group id="input-group-2" label="Enter Password" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"  
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        
  
        <b-button type="submit" class="d-flex m-auto" variant="primary">LogIn</b-button>
      </b-form>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        form: {
          email: "",
          name: "",
          password:""
        },
        show: true,
      };
    },
    methods: {
      onSubmit(event: any) {
        event.preventDefault();
        alert(JSON.stringify(this.form));
      },
    },
  };
  </script>
  