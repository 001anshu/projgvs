import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";
import React from "react";

export default function Collapsable() {
  const defaultContent = "Will be announced soon";

  return (
    <Accordion defaultExpandedKeys={["1"]} className="">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={<div className="text-center text-2xl p-2 ">Database Entry </div>}
        className="p-2 "
      >
        {
          <div className="bg-gray-700 items-center flex flex-col p-6">
          <div className="bg-gray-700 p-4 max-h-[370px] overflow-y-auto scrollbar-hide scroll-smooth  rounded-lg border border-white  ">
            <p className="p-2 border-b">
              For new member database entry{"  "}
              <Link href={"https://db.gaurangavedic.org.in/"} passHref>
                {" "}
                <span className="text-blue-500 underline text-xl">click here</span>
              </Link>
            </p>
            <div>
              {"Note "}
              <ul className="p-2 ">
                * Those who already have an HLZ ID do not need to re-enter it into
                the database.
              </ul>
              <ul className="p-2">
                * Only authorized (Alumni, Area Co-ordinators, etc.) persons are
                allowed to add new devotees.
              </ul>
              <ul className="p-2 ">
                * For non-authorized persons please contact to below location head
                to get yourself added
              </ul>
            </div>

            <div className="overflow-x-auto flex scrollbar-hide ">
              <table className="border border-solid p-1">
                <thead className="border border-solid p-1">
                  <tr className="border border-solid p-1">
                    <th className="border border-solid p-1">Center</th>
                    <th className="border border-solid p-1">Location Head</th>
                    <th className="border border-solid p-1">Contact</th>
                  </tr>
                </thead>
                <tbody className="border border-solid p-1">
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      I. All Alumnus their family members including connected
                      devotees
                    </td>
                    <td className="border border-solid p-1">
                      Alumnus themselves
                    </td>
                    <td></td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      II. Haldia Voice students
                    </td>
                    <td className="border border-solid p-1">Satyam pr</td>
                    <td className="border border-solid p-1">9473034907</td>
                  </tr>

                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      III. Asansol Devotees (apart from I &II)
                    </td>
                    <td className="border border-solid p-1">Ashesh Nitai Pr</td>
                    <td className="border border-solid p-1">8759125750</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      IV. Delhi, Amethi Devotees (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Prem Prakash Pr</td>
                    <td className="border border-solid p-1">9923903893</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      V. Dhanbad Devotees (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Rajiv Soni Pr</td>
                    <td className="border border-solid p-1">7001065808</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      VI. Gaya Devotees (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Purushottam Pr</td>
                    <td className="border border-solid p-1">7028925090</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      VII. Haldia Congregation (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Gaurav Pr 19</td>
                    <td className="border border-solid p-1">9775261038</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      VIII. Haldia Gurukul (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Viswajit pr</td>
                    <td className="border border-solid p-1">8007259135</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      IX. Meghalaya (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Rupesh pr</td>
                    <td className="border border-solid p-1">7098822819</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      X. Nawada Devotees (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Vikash Pr</td>
                    <td className="border border-solid p-1">7739109605</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      XI. Patna Devotees (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Neeraj Pr</td>
                    <td className="border border-solid p-1">8210707682</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      XII. Sitamarhi Devotees (apart from I&II)
                    </td>
                    <td className="border border-solid p-1">Neelmadhav Pr</td>
                    <td className="border border-solid p-1">8368616297</td>
                  </tr>
                  <tr className="border border-solid p-1">
                    <td className="border border-solid p-1">
                      XII. Other centres (except all above)
                    </td>
                    <td className="border border-solid p-1">Shailesh pr</td>
                    <td className="border border-solid p-1">8986472757</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
        Registration hasn't started yet.
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title={<div className="text-center  text-2xl p-2 ">Accommodation</div>}
        className="p-2"
      >
        <div className="bg-gray-600 text-xl p-2 rounded-lg">
        Accommodation hasn't started yet.
        </div>
      </AccordionItem>
    </Accordion>
  );
}
