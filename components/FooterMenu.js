import React from "react";
import { Grid } from "@mui/material";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
export default function FooterMenu() {
  const link1 = [
    "Features",
    "Plans & Pricing",
    "Product Updates",
    "How It Works",
    "Customers Review",
  ];
  const link2 = [
    "About Us",
    "Contact Us",
    "Press Kit",
    "Privacy Policy",
    "Help",
  ];
  const link3 = [
    "Rental Property Analysis",
    "BRRRR Analysis",
    "Fix & Flip Analysis",
    "Property Wholesaling",
    "Commercial Analysis",
  ];
  const link4 = [
    "Help Center",
    "Affiliate Program",
    "Deal Analyzer Blog",
    "Free Resources",
    "Terms of Use",
  ];
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          <div
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-down"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) => `flex w-full p-4 text-left`,
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out",
      }}
      panelProps={{ className: "p-4" }}
    />
  );
  return (
    <div>
      <Accordion>
        <AccordionItem header="MENU" className="border-b-2 m-2 mt-4">
          <Grid sx={{ opacity: "80%" }}>
            {link1.map((link) => {
              return (
                <div style={{ marginTop: 12 }}>
                  <a href="">{link}</a>
                  <br />
                </div>
              );
            })}
          </Grid>
        </AccordionItem>
        <AccordionItem header="COMPANY" className="border-b-2 m-2 mt-4">
          <Grid sx={{ opacity: "80%" }}>
            {link2.map((link) => {
              return (
                <div style={{ marginTop: 12 }}>
                  <a href="">{link}</a>
                  <br />
                </div>
              );
            })}
          </Grid>
        </AccordionItem>

        <AccordionItem header="USE CASES" className="border-b-2 m-2 mt-4">
          <Grid sx={{ opacity: "80%" }}>
            {link3.map((link) => {
              return (
                <div style={{ marginTop: 12 }}>
                  <a href="">{link}</a>
                  <br />
                </div>
              );
            })}
          </Grid>
        </AccordionItem>

        <AccordionItem header="RESOURCES" className="border-b-2 m-2 mt-4">
          <Grid sx={{ opacity: "80%" }}>
            {link4.map((link) => {
              return (
                <div style={{ marginTop: 12 }}>
                  <a href="">{link}</a>
                  <br />
                </div>
              );
            })}
          </Grid>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
