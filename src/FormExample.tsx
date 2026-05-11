import { useState, type ChangeEvent, type FormEvent } from "react";

import { Checkbox, Input, Radio, Select, Textarea } from "./components/form";
import { Button } from "./components/ui/buttons";

type FormData = {
  name: string;
  email: string;
  password: string;
  gender: string;
  country: string;
  bio: string;
  terms: boolean;
};

type ErrorData = {
  name?: string;
  email?: string;
  password?: string;
  gender?: string;
  country?: string;
  bio?: string;
  terms?: string;
};

const FormExample = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    gender: "male",
    country: "",
    bio: "",
    terms: false,
  });

  const [formError, setFormError] = useState<ErrorData>({});

  const [loading, setLoading] = useState(false);

  const handleError = (
    name: keyof FormData,
    value: string | boolean,
  ): string => {
    let error = "";

    if (name === "name") {
      if (!value) {
        error = "Name is required";
      }
    }

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (typeof value === "string" && !/\S+@\S+\.\S+/.test(value)) {
        error = "Invalid email";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (typeof value === "string" && value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    if (name === "gender") {
      if (!value) {
        error = "Please select gender";
      }
    }

    if (name === "terms") {
      if (!value) {
        error = "Please accept terms";
      }
    }

    return error;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, type, value } = e.target;

    const formValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: formValue,
    }));

    setFormError((prev) => ({
      ...prev,
      [name]: handleError(name as keyof FormData, formValue),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: ErrorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      const error = handleError(key as keyof FormData, value);

      if (error) {
        errors[key as keyof ErrorData] = error;
      }
    });

    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        console.log("Form Submitted:", formData);

        setLoading(false);

        alert("Login Successful!");
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full min-w-xl space-y-5 rounded-2xl bg-white p-6 shadow-lg"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Form Example</h2>

          <p className="mt-1 text-sm text-gray-500">Enter your credentials</p>
        </div>

        <Input
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={formError.name}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={formError.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={formError.password}
        />

        <Radio
          label="Gender"
          name="gender"
          value={formData.gender}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          onChange={handleChange}
          error={formError.gender}
        />

        <Select
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          options={[
            { label: "India", value: "india" },
            { label: "USA", value: "usa" },
          ]}
          error={formError.country}
        />

        <Textarea
          label="Bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          error={formError.bio}
        />

        <Checkbox
          label="Terms & Conditions"
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          error={formError.terms}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default FormExample;
