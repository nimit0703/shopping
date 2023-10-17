<template>
    <div class="card">
      <div class="card-header">{{ item.name }}</div>
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div>
            <p class="card-text">
              {{ item.desc }}
            </p>
            <p class="card-text">
              {{ item.price }}
            </p>
          </div>
  
          <div>
            <b-form-spinbutton
              v-model="item.amount"
            ></b-form-spinbutton>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: ["item"],
  };
  </script>
  