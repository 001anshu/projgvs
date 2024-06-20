import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";


export default function Collapsable() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (

    <Accordion defaultExpandedKeys={["1"]}
    className=""
    >
      <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Database entry"
      className="">
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle="press to expand"
        title="Registration"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accomodation Booking">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
