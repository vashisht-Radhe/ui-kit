import { useState } from "react";

export type TabItem = {
  id: number;
  label: string;
  content: string;
};

type TabsProps = {
  tabs: TabItem[];
  defaultTabId?: number;
};

const Tabs = ({ tabs, defaultTabId }: TabsProps) => {
  const [activeTabId, setActiveTabId] = useState<number>(
    defaultTabId || tabs[0].id,
  );

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              activeTabId === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="`min-h-[100px]` rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700">
        {activeTab?.content}
      </div>
    </div>
  );
};

export default Tabs;
