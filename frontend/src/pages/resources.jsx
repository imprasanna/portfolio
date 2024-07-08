import React from "react";
import Nav from "../components/home/nav";
import "../styles/resources.scss";

const Resources = () => {
  return (
    <div>
      <Nav />
      <div style={{ width: "80%", margin: "0 auto", paddingTop: "3rem" }}>
        <h1>My documentations</h1>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Content</th>
              <th>Link</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hacking tools</td>
              <td>
                <a href="https://prasannas-organization-1.gitbook.io/hacking-tools/">
                  https://prasannas-organization-1.gitbook.io/hacking-tools
                </a>
              </td>
              <td>
                It is a repository of curated list of hacking tools like nmap,
                metasploit, hydra, etc. with their proper description and
                commands.
              </td>
            </tr>
            <tr>
              <td>OSINT</td>
              <td>
                <a href="https://prasannas-organization-1.gitbook.io/osint/">
                  https://prasannas-organization-1.gitbook.io/osint
                </a>
              </td>
              <td>
                OSINT (Open Source Intelligence) is a way of investigating
                through information and resources available publicly. It
                contains a well organized list of OSINT tools.
              </td>
            </tr>
            <tr>
              <td>eJPTv2 notes</td>
              <td>
                <a href="https://www.notion.so/oasis1x1/eJPTv2-ac2ca5313b4d40cdab867485d6e6cbea">
                  https://www.notion.so/oasis1x1/eJPTv2-ac2ca5313b4d40cdab867485d6e6cbea
                </a>
              </td>
              <td>
                eJPT (e-learning Jr Penetration Tester) is a well-recognized
                certification for getting entry level job in offensive security.
                This repository contains the notes for preparing for and passing
                the eJPT exam.
              </td>
            </tr>
            <tr>
              <td>100DaysOfLearning Bug Hunting</td>
              <td>
                <a href="https://oasis1x1.notion.site/Bug-hunting-e628dcd682d14ae3b125de1f38c32f3d">
                  https://oasis1x1.notion.site/Bug-hunting-e628dcd682d14ae3b125de1f38c32f3d
                </a>
              </td>
              <td>
                It contains different tools, resources, methodologies that I
                followed throughout the journey of learning bug hunting for 100
                days.
              </td>
            </tr>
          </tbody>
        </table>

        <h1 className="topic">Bug hunting resources</h1>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Content</th>
              <th>Link</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nahamsec's github repository</td>
              <td>
                <a href="https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters">
                  https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters
                </a>
              </td>
              <td>Overall resources</td>
            </tr>

            <tr>
              <td>Bug bounty blueprint: a beginner's guide</td>
              <td>
                <a href="https://www.bugbountyhunter.com/disclosed">
                  https://www.bugbountyhunter.com/disclosed
                </a>
              </td>
              <td>Overall resources</td>
            </tr>

            <tr>
              <td>Portswigger labs</td>
              <td>
                <a href="https://hackerone.com/hacktivity/overview">
                  https://hackerone.com/hacktivity/overview
                </a>
              </td>
              <td>Practice labs</td>
            </tr>

            <tr>
              <td>Pentester land</td>
              <td>
                <a href="https://drive.google.com/drive/folders/1R7CePdLAjJXFKLaCUYR691mP7vEwQ3Ra">
                  https://drive.google.com/drive/folders/1R7CePdLAjJXFKLaCUYR691mP7vEwQ3Ra
                </a>
              </td>
              <td>Writeups</td>
            </tr>

            <tr>
              <td>Bug bounty hunting search engine</td>
              <td>
                <a href="https://www.bugbountyhunting.com/">
                  https://www.bugbountyhunting.com/
                </a>
              </td>
              <td>Writeups</td>
            </tr>

            <tr>
              <td>Hackerone hactivity</td>
              <td>
                <a href="https://hackerone.com/hacktivity/overview">
                  https://hackerone.com/hacktivity/overview
                </a>
              </td>
              <td>Bug reports</td>
            </tr>

            <tr>
              <td>Bug reader</td>
              <td>
                <a href="https://drive.google.com/drive/folders/1R7CePdLAjJXFKLaCUYR691mP7vEwQ3Ra">
                  https://drive.google.com/drive/folders/1R7CePdLAjJXFKLaCUYR691mP7vEwQ3Ra
                </a>
              </td>
              <td>Bug reports</td>
            </tr>

            <tr>
              <td>Bugbountyhunter disclosed reports</td>
              <td>
                <a href="https://www.bugbountyhunter.com/disclosed">
                  https://www.bugbountyhunter.com/disclosed
                </a>
              </td>
              <td>Bug reports</td>
            </tr>

            <tr>
              <td>Hackerone hactivity</td>
              <td>
                <a href="https://hackerone.com/hacktivity/overview">
                  https://hackerone.com/hacktivity/overview
                </a>
              </td>
              <td>Bug reports</td>
            </tr>

            <tr>
              <td>Hacking and bug hunting books</td>
              <td>
                <a href="https://drive.google.com/drive/folders/1R7CePdLAjJXFKLaCUYR691mP7vEwQ3Ra">
                  https://drive.google.com/drive/folders/1R7CePdLAjJXFKLaCUYR691mP7vEwQ3Ra
                </a>
              </td>
              <td>Books</td>
            </tr>

            <tr>
              <td>Youtube channels</td>
              <td>
                <ul>
                  <li>
                    <a href="https://youtube.com/@NahamSec">
                      https://youtube.com/@NahamSec
                    </a>{" "}
                    (NahamSec)
                  </li>
                  <li>
                    <a href="https://youtube.com/@jhaddix">
                      https://youtube.com/@jhaddix
                    </a>{" "}
                    (jhaddix)
                  </li>
                  <li>
                    <a href="https://youtube.com/@STOKfredrik">
                      https://youtube.com/@STOKfredrik
                    </a>{" "}
                    (STÖK)
                  </li>
                  <li>
                    <a href="https://youtube.com/@codingo">
                      https://youtube.com/@codingo
                    </a>{" "}
                    (codingo)
                  </li>
                  <li>
                    <a href="https://youtube.com/@InsiderPhD">
                      https://youtube.com/@InsiderPhD
                    </a>{" "}
                    (InsiderPhD)
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@PwnFunction">
                      https://www.youtube.com/@PwnFunction
                    </a>{" "}
                    (PwnFunction)
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@BugBountyReportsExplained">
                      https://www.youtube.com/@BugBountyReportsExplained
                    </a>
                    (BugBountyReportsExplained)
                  </li>
                </ul>
              </td>
              <td>Youtube</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resources;
