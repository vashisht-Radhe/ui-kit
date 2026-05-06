import Input from "./components/form/Input";
import Textarea from "./components/form/Textarea";
import Select from "./components/form/Select";
import Checkbox from "./components/form/Checkbox";
import Radio from "./components/form/Radio";
import FileInput from "./components/form/FileInput";
import Button from "./components/ui/Button";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 space-y-5">
        <h1 className="text-xl font-semibold text-gray-800">Form Example</h1>
        <Input label="Name" placeholder="Enter name" />
        <Textarea label="Message" placeholder="Write your message..." />
        <Select
          label="Country"
          options={[
            { label: "India", value: "in" },
            { label: "USA", value: "us" },
          ]}
        />
        <Radio
          label="Gender"
          name="gender"
          options={[
            { label: "Male", value: "m" },
            { label: "Female", value: "f" },
          ]}
        />
        <FileInput label="Upload File" />

        <div className="space-y-2">
          <Checkbox label="Accept Terms" />
        </div>

        <Button sizeType="large" className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
