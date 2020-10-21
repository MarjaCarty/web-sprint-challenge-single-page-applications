import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be two characters long"),
  size: yup.string().required("Size is required"),
  sauce: yup.boolean(),
  cheese: yup.boolean(),
  meat: yup.boolean(),
  veggie: yup.boolean(),
  special: yup.string(),
});
