import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";
import React from "react";

export default function Collapsable() {
  const defaultContent =
    "Will be announce soon";

  return (
    <Accordion defaultExpandedKeys={["1"]} className="">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={<div className="text-center text-2xl p-2 ">Database Entry </div>}
        className="p-2 "
      >
        {
          <div className="bg-gray-700 p-2 max-h-[580px] overflow-y-scroll rounded-lg ">
            <p className="p-2 border-b">
              Those who already have an HLZ ID do not need to re-enter it into
              the database.
            </p>
            <p className="p-2 border-b">
              For New member Database entry{" "}
             <Link href={"https://db.gaurangavedic.org.in/"} passHref> <span className="text-blue-500 underline">click here</span></Link>
            </p>
            <p className="p-2 border-b">
              NOTE-Only authorized(Alumines of Haldia Voice) persons are allowed
              to add new devotees
            </p>
            <p className="p-2 border-b">
              For Non-Autorized persons please contact to below locations head
              to get yourself added
            </p>
            <div className="overflow-x-scroll">
            <table className="border border-solid p-1">
              <thead className="border border-solid p-1">
                <tr className="border border-solid p-1">
                  <th className="border border-solid p-1">Center</th>
                  <th className="border border-solid p-1">Center Head</th>
                  <th className="border border-solid p-1">Contact Number</th>
                </tr>
              </thead>
              <tbody className="border border-solid p-1">
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Haldia Voice students</td>
                  <td className="border border-solid p-1">Satyam pr</td>
                  <td className="border border-solid p-1">9473034907.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">
                    All Alumnus their family members including connected
                    devotees
                  </td>
                  <td className="border border-solid p-1">Alumnus themselves</td>
                  <td></td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Asansol Devotees (apart from I &II)</td>
                  <td className="border border-solid p-1">Ashesh Nitai Pr</td>
                  <td className="border border-solid p-1">8759125750.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Delhi, Amethi Devotees (apart from I&II)</td>
                  <td className="border border-solid p-1">Prem Prakash Pr</td>
                  <td className="border border-solid p-1">9923903893.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Dhanbad Devotees (apart from I&II)</td>
                  <td className="border border-solid p-1">Rajiv Soni Pr</td>
                  <td className="border border-solid p-1">7001065808.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Gaya Devotees (apart from I&II)</td>
                  <td className="border border-solid p-1">Purushottam Pr</td>
                  <td className="border border-solid p-1">7028925090.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Haldia Congregation (apart from I&II)</td>
                  <td className="border border-solid p-1">Gaurav Pr 19</td>
                  <td className="border border-solid p-1">9775261038.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Haldia Gurukul (apart from I&II)</td>
                  <td className="border border-solid p-1">Viswajit pr</td>
                  <td className="border border-solid p-1">8007259135.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Meghalaya (apart from I&II)</td>
                  <td className="border border-solid p-1">Rupesh pr</td>
                  <td className="border border-solid p-1">7098822819.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Nawada Devotees (apart from I&II)</td>
                  <td className="border border-solid p-1">Vikash Pr</td>
                  <td className="border border-solid p-1">7739109605.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Patna Devotees (apart from I&II)</td>
                  <td className="border border-solid p-1">Neeraj Pr</td>
                  <td className="border border-solid p-1">8210707682.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Sitamarhi Devotees (apart from I&II)</td>
                  <td className="border border-solid p-1">Neelmadhav Pr</td>
                  <td className="border border-solid p-1">8368616297.0</td>
                </tr>
                <tr className="border border-solid p-1">
                  <td className="border border-solid p-1">Other centres (except all above)</td>
                  <td className="border border-solid p-1">Shailesh pr</td>
                  <td className="border border-solid p-1">8986472757.0</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        
        title={<div className="text-center text-2xl p-2 ">Registration</div>}
        className="p-2 "
      >
        <div className="bg-gray-600 text-xl p-2 rounded-lg">
          {defaultContent}
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
     
        title={<div className="text-center  text-2xl p-2 ">Accommodation</div>}
        className="p-2"
      >
        <div className="bg-gray-600 text-xl p-2 rounded-lg">
          {defaultContent}
        </div>
      </AccordionItem>
    </Accordion>
  );
}
