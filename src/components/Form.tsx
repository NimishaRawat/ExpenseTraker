import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  Name: z.string().min(3, { message: "Name must be atleast 3 characters." }),
  Age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be 18 or above 18" }),
});

type FormData = z.infer<typeof schema>; //to define the shape of an object

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors ,isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          {...register("Name")}
          id="Name"
          type="text"
          className="form-control"
        />
        {errors.Name && <p className="text-danger">{errors.Name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="form-label">
          Age
        </label>
        <input
          {...register("Age", { valueAsNumber: true })}
          id="Age"
          type="number"
          className="form-control"
        />
        {errors.Name && <p className="text-danger">{errors.Age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
