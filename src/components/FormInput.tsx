// react-hook-form / type
import {
  UseFormRegister,
  Path,
  FieldError,
  FieldValues,
} from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  inputData: {
    id: string;
    placeholder: string;
    labelText: string;
    type: string;
  };
  name: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
};

const FormInput = <T extends FieldValues>({
  inputData,
  name,
  register,
  error,
}: FormInputProps<T>) => {
  const { id, labelText, placeholder, type } = inputData;

  return (
    <div className="space-y-2">
      <label className="" htmlFor={id}>
        {labelText} :
      </label>

      <input
        autoComplete="off"
        {...register(name)}
        id={id}
        type={type}
        className="w-full rounded-xl p-4 bg-[#0f1535]"
        placeholder={placeholder}
      />

      {error && (
        <span className="text-red-600 text-sm block my-1.5">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
