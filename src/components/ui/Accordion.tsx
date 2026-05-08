import { useState } from "react";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const [activeIds, setActiveIds] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (allowMultiple) {
      setActiveIds((prevIds) =>
        prevIds.includes(id)
          ? prevIds.filter((itemId) => itemId !== id)
          : [...prevIds, id],
      );
    } else {
      setActiveId((prevId) => (prevId === id ? null : id));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = allowMultiple
          ? activeIds.includes(item.id)
          : activeId === item.id;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-gray-200"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full bg-white px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-50"
            >
              {item.title}
            </button>

            {isOpen && (
              <div className="border-t bg-gray-50 px-4 py-3 text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
