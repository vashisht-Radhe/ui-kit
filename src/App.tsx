import { useState } from "react";

import {
  Checkbox,
  FileInput,
  Input,
  Radio,
  Select,
  Textarea,
} from "./components/form";

import Tabs, { type TabItem } from "./components/Tabs";

import Accordion from "./components/ui/Accordion";

import { Button } from "./components/ui/buttons";

const faqItems = [
  {
    id: 1,
    title: "What is React?",
    content: "A frontend library.",
  },
  {
    id: 2,
    title: "What is TypeScript?",
    content: "Typed JavaScript.",
  },
];

const tabsData: TabItem[] = [
  {
    id: 1,
    label: "HTML",
    content: "HTML is structure.",
  },
  {
    id: 2,
    label: "CSS",
    content: "CSS is styling.",
  },
  {
    id: 3,
    label: "JavaScript",
    content: "JavaScript adds behavior.",
  },
];

const App = () => {
  const [isMultiOpen, setIsMultiOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-6">
      <Tabs tabs={tabsData} defaultTabId={1} />

      <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-md">
        <div className="mb-5 flex gap-3">
          <Button
            onClick={() => setIsMultiOpen(false)}
            className={!isMultiOpen ? "bg-blue-600 text-white" : ""}
          >
            Single
          </Button>

          <Button
            onClick={() => setIsMultiOpen(true)}
            className={isMultiOpen ? "bg-blue-600 text-white" : ""}
          >
            Multi
          </Button>
        </div>

        <Accordion items={faqItems} allowMultiple={isMultiOpen} />
      </div>

      <div className="w-full max-w-2xl space-y-5 rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-xl font-semibold text-gray-800">Form Example</h1>

        <Input label="Name" placeholder="Enter name" />

        <Textarea label="Message" placeholder="Write your message..." />

        <Select
          label="Country"
          options={[
            {
              label: "India",
              value: "in",
            },
            {
              label: "USA",
              value: "us",
            },
          ]}
        />

        <Radio
          label="Gender"
          name="gender"
          options={[
            {
              label: "Male",
              value: "m",
            },
            {
              label: "Female",
              value: "f",
            },
          ]}
        />

        <FileInput label="Upload File" />

        <Checkbox label="Accept Terms" />

        <Button sizeType="large" className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
