import { defineComponent } from "vue";

export default defineComponent({
  name: "MyButtonTsx",
  setup() {
    return () => {
      return <div>这是一个Tsx按钮</div>;
    };
  },
});
