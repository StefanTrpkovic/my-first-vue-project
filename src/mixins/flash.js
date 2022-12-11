import swal from "sweetalert";

export default {
  methods: {
    flash(param) {
      return swal("Success", `Clicked in ${param}`, "success");
    },
  },
  mounted() {
    alert("Hi");
  },
};
