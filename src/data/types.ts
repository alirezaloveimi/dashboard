type InputType = {
  id: string;
  placeholder: string;
  labelText: string;
  type: string;
};

export type RegisterInputsType = (InputType & {
  name: "userName" | "email" | "password" | "confirmPassword";
})[];

export type LoginInputsType = (InputType & {
  name: "password" | "email";
})[];

