import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
 function Example() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="mt-28 mx-20">
      <h1 className="text-4xl mx-64 font-advent-pro text-pink-500 ">Still want to know more about this?
</h1>
<p  className="mx-64 mb-20 text-pink-300" > Here’s a selection of the most common questions we get asked.
</p>
    <Fragment  >
      <Accordion open={open === 1}>
        <AccordionHeader  className="text-pink-500" onClick={() => handleOpen(1)}>
        How often will I need to take the test?
        </AccordionHeader>
        <AccordionBody className=" ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader  className="text-pink-500"onClick={() => handleOpen(2)}>
        What do you do with my data?
        </AccordionHeader>
        <AccordionBody  className=" ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader className="text-pink-500" onClick={() => handleOpen(3)}>
        Is the self-examination feature suitable for all individuals?
        </AccordionHeader>
        <AccordionBody  className=" ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader className="text-pink-500" onClick={() => handleOpen(4)}>
        Why should I choose B-Care over others?
        </AccordionHeader>
        <AccordionBody  className=" ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader className="text-pink-500" onClick={() => handleOpen(5)}>
        Is it backed by real science?
        </AccordionHeader>
        <AccordionBody  className=" ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
    </div>
  );
}

export default  Example