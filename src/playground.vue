<script setup>
import { h } from "vue";
import Toast from "@/ui/element/Toast/Toast.vue";
import Button from "@/ui/element/Button/Button.vue";
import { useToast } from '@/composable/useToast.js';

const { add } = useToast();

const success = () => {
  add({
    themeColor: "success",
    position: "bottom-right",
    title: "Notification Title",
    content: "Content",
    prefix: "SvgSuccessCircle",
    duration: 5000,
    action: () => h ("div", {
      onClick: () => window.alert("action")
    }, "Action"),
  });
};

const error = () => {
  add({
    themeColor: "error",
    position: "bottom-center",
    title: "Notification Title",
    content: "Content",
    prefix: "SvgErrorCircle",
    duration: 50000,
    action: () => h ("div", {
      onClick: () => window.alert("action"),
    }, "Action"),
  });
};

</script>

<template>
  <Toast/>
  <Button themeColor="primary" variant="filled" radius="4px" @click="success">
    bottom-right
  </Button>

  <Button themeColor="error" variant="filled" radius="4px" @click="error">
    bottom-center
  </Button>
</template>


