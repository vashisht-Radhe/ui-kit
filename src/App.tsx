import { useState } from "react";

import Tabs, { type TabItem } from "./components/Tabs";

import Accordion from "./components/ui/Accordion";

import { Button } from "./components/ui/buttons";
import Modal from "./components/ui/Modal";
import FormExample from "./FormExample";

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
      <Modal />

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

      <FormExample />
    </div>
  );
};

export default App; 