<script setup>
import ButtonBase from "@/components/button/ButtonBase.vue";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Textarea from "primevue/textarea";

import { ref } from "vue";

const firstname = ref("");
const lastname = ref("");
const email = ref("");
const questionType = ref("");
const message = ref("");
const acceptContact = ref("");
</script>
<template>
  <div class="contact-page">
    <div class="bg-white rounded-3xl mb-14">
      <div class="container mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-center justify-center"
        >
          <div class="col-span-1 md:col-span-3">
            <div
              class="bg-[url('@/assets/img/dots.png')] bg-no-repeat bg-[left_1rem_top_1rem] md:bg-left-top bg-[length:250px]"
            >
              <div class="flex flex-col items-start justify-end gap-4 p-16">
                <h1 class="font-bold text-4xl mb-4">How can we help you ?</h1>
                <p class="text-xl text-balance">
                  Thank you for your interest in
                  <b class="text-violet-800">Mailinks</b>. Please use this form
                  to contact us. We will get back to you as soon as we can.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1 md:col-span-2">
            <div
              class="bg-[url('@/assets/img/dots.png')] bg-no-repeat bg-[right_0_bottom_2rem] bg-[length:250px]"
            >
              <div class="flex items-end justify-center p-8">
                <form
                  action="necati.can@ottoo.com"
                  method="post"
                  enctype="text/plain"
                  class="md:max-w-lg bg-white rounded-3xl p-6 shadow-2xl md:max-h-full border-violet-800 border-2"
                >
                  <div class="form-wrapper flex flex-col gap-4">
                    <div class="flex flex-col md:flex-row gap-2">
                      <div class="contact-form-control w-full">
                        <label for="firstname">First Name </label>
                        <InputText
                          type="text"
                          id="firstname"
                          v-model="firstname"
                        />
                      </div>

                      <div class="contact-form-control w-full">
                        <label for="lastname">Last Name </label>
                        <InputText
                          type="text"
                          id="lastname"
                          v-model="lastname"
                        />
                      </div>
                    </div>

                    <div class="contact-form-control">
                      <label for="email">Email Address </label>
                      <InputText type="email" id="email" v-model="email" />
                    </div>

                    <div class="contact-form-control">
                      <label for="">Query Type</label>
                      <div
                        class="flex flex-col md:flex-row items-center justify-center gap-4"
                      >
                        <div
                          class="flex items-center w-full border p-4 rounded-md border-gray-200"
                        >
                          <RadioButton
                            v-model="questionType"
                            inputId="generalEnquiry"
                            name="General Enquiry"
                            value="General Enquiry"
                          />
                          <label
                            for="generalEnquiry"
                            class="ml-2 w-full cursor-pointer"
                            >General Enquiry</label
                          >
                        </div>
                        <div
                          class="flex items-center w-full border p-4 rounded-md border-gray-200"
                        >
                          <RadioButton
                            v-model="questionType"
                            inputId="supportRequest"
                            name="Support Request"
                            value="Support Request"
                          />
                          <label
                            for="supportRequest"
                            class="ml-2 w-full cursor-pointer"
                            >Support Request</label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="contact-form-control">
                      <label for="message">Message</label>
                      <Textarea
                        id="message"
                        v-model="message"
                        rows="5"
                        cols="30"
                        class="resize-none"
                      />
                    </div>

                    <div class="flex gap-4">
                      <Checkbox
                        v-model="acceptContact"
                        inputId="acceptContact"
                        :binary="true"
                        class="text-violet-800"
                      />
                      <label for="acceptContact"
                        >I consent to being contacted by the team</label
                      >
                    </div>
                    <ButtonBase :label="'Submit'" class="!rounded-md" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
