import { createApp } from "https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.esm-browser.js";

const app = {
  data() {
    return {
      scenes: [],
      newScene: { image: "", description: "", timing: "", narration: "", text: "" },
    };
  },
  methods: {
    addScene() {
      this.scenes.push({ ...this.newScene });
      this.newScene = { image: "", description: "", timing: "", narration: "", text: "" };
    },
  },
  template: `
    <div class="container">
      <h1>Storyboard Creator</h1>
      <div>
        <input type="file" @change="e => newScene.image = URL.createObjectURL(e.target.files[0])" />
        <textarea v-model="newScene.description" placeholder="תיאור הסצנה"></textarea>
        <input v-model="newScene.timing" placeholder="טיימינג" />
        <textarea v-model="newScene.narration" placeholder="קריינות"></textarea>
        <textarea v-model="newScene.text" placeholder="טקסט"></textarea>
        <button @click="addScene">הוסף סצנה</button>
      </div>
      <div v-for="(scene, index) in scenes" :key="index" class="scene">
        <img :src="scene.image" alt="Scene Image" />
        <p>{{ scene.description }}</p>
        <p>{{ scene.timing }}</p>
        <p>{{ scene.narration }}</p>
        <p>{{ scene.text }}</p>
      </div>
    </div>
  `,
};

createApp(app).mount("#app");
