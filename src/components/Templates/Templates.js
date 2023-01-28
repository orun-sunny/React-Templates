import React from 'react';

const Templates = () => {



  return (
    <>

      <div role="article" aria-roledescription="email" lang="en" style={{ textSizeAdjust: "100%", backgroundColor: "#FDF8F4" }}>
        <table role="presentation" style={{ width: "100%", border: "none", borderSpacing: "0" }}>
          <tr>
            <td align="center" style={{ padding: "0" }}>

              <table role="presentation" align="center" style={{ width: "600px" }}>
                <tr>
                  <td>
                    {/* <![endif]--> */}
                    <table role="presentation" style={{ width: "94%", maxWidth: "600px", border: "none", borderSpacing: "0", textAlign: "left", fontFamily: 'Basier Circle', fontSize: "1em", lineHeight: "1.37em", color: "#384049" }}>
                      {/* <!--      Logo headder --> */}
                      <tr>
                        <td style={{ padding: "40px 30px 30px 30px", textAlign: "center", fontSize: "1.5em", fontWeight: "bold" }}>
                          {/* <a href="http://dopplerhealth.com/" style="text-decoration:none;"> 
                  <img width="2170" alt="Doppler Health" style="width:2170px;max-width:80%;height:auto;border:none;text-decoration:none;color:#ffffff;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjM3IiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIwIDAgMjM3IDQ0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNTUuOTIwMSA3LjYwMDFINTkuOTUyMVYzMC4wMDAxSDU1LjkyMDFWMjcuNzYwMUM1NS40NTA4IDI4LjU3MDggNTQuNzc4OCAyOS4yMjE0IDUzLjkwNDEgMjkuNzEyMUM1My4wMjk1IDMwLjIwMjggNTIuMDM3NSAzMC40NDgxIDUwLjkyODEgMzAuNDQ4MUM0OC42ODgxIDMwLjQ0ODEgNDYuODMyMSAyOS42OTA4IDQ1LjM2MDEgMjguMTc2MUM0My44NjY4IDI2LjY4MjggNDMuMTIwMSAyNC42NDU0IDQzLjEyMDEgMjIuMDY0MUM0My4xMjAxIDE5LjU0NjggNDMuOTA5NSAxNy41MjAxIDQ1LjQ4ODEgMTUuOTg0MUM0Ny4wNDU1IDE0LjQ0ODEgNDguODU4OCAxMy42ODAxIDUwLjkyODEgMTMuNjgwMUM1My4yNTM1IDEzLjY4MDEgNTQuOTE3NSAxNC40ODAxIDU1LjkyMDEgMTYuMDgwMVY3LjYwMDFaTTQ4LjQ5NjEgMjUuMzYwMUM0OS4zNzA4IDI2LjIzNDggNTAuNDM3NSAyNi42NzIxIDUxLjY5NjEgMjYuNjcyMUM1Mi45NTQ4IDI2LjY3MjEgNTQuMDIxNSAyNi4yMzQ4IDU0Ljg5NjEgMjUuMzYwMUM1NS43NDk1IDI0LjUwNjggNTYuMTc2MSAyMy40MDgxIDU2LjE3NjEgMjIuMDY0MUM1Ni4xNzYxIDIwLjY5ODggNTUuNzQ5NSAxOS41ODk0IDU0Ljg5NjEgMTguNzM2MUM1NC4wNDI4IDE3Ljg4MjggNTIuOTc2MSAxNy40NTYxIDUxLjY5NjEgMTcuNDU2MUM1MC40MTYxIDE3LjQ1NjEgNDkuMzQ5NSAxNy44ODI4IDQ4LjQ5NjEgMTguNzM2MUM0Ny42NDI4IDE5LjU4OTQgNDcuMjE2MSAyMC42OTg4IDQ3LjIxNjEgMjIuMDY0MUM0Ny4yMTYxIDIzLjQwODEgNDcuNjQyOCAyNC41MDY4IDQ4LjQ5NjEgMjUuMzYwMVoiIGZpbGw9IiNERTREM0IiLz4KPHBhdGggZD0iTTc2LjI3MjkgMTUuODg4MUM3Ny45Nzk1IDE3LjQwMjggNzguODMyOSAxOS40NjE0IDc4LjgzMjkgMjIuMDY0MUM3OC44MzI5IDI0LjY4ODEgNzcuOTc5NSAyNi43MzYxIDc2LjI3MjkgMjguMjA4MUM3NC41NjYyIDI5LjcwMTQgNzIuNTI4OSAzMC40NDgxIDcwLjE2MDkgMzAuNDQ4MUM2Ny43OTI5IDMwLjQ0ODEgNjUuNzY2MiAyOS43MDE0IDY0LjA4MDkgMjguMjA4MUM2Mi4zNTI5IDI2LjczNjEgNjEuNDg4OSAyNC42ODgxIDYxLjQ4ODkgMjIuMDY0MUM2MS40ODg5IDE5LjQ2MTQgNjIuMzUyOSAxNy40MDI4IDY0LjA4MDkgMTUuODg4MUM2NS43ODc1IDE0LjQxNjEgNjcuODE0MiAxMy42ODAxIDcwLjE2MDkgMTMuNjgwMUM3Mi41MDc1IDEzLjY4MDEgNzQuNTQ0OSAxNC40MTYxIDc2LjI3MjkgMTUuODg4MVpNNjYuOTYwOSAyNS4zOTIxQzY3LjgzNTUgMjYuMjQ1NCA2OC45MDIyIDI2LjY3MjEgNzAuMTYwOSAyNi42NzIxQzcxLjM5ODIgMjYuNjcyMSA3Mi40NzU1IDI2LjI0NTQgNzMuMzkyOSAyNS4zOTIxQzc0LjI4ODkgMjQuNTYwMSA3NC43MzY5IDIzLjQ1MDggNzQuNzM2OSAyMi4wNjQxQzc0LjczNjkgMjAuNjk4OCA3NC4yODg5IDE5LjU3ODggNzMuMzkyOSAxOC43MDQxQzcyLjQ3NTUgMTcuODcyMSA3MS4zOTgyIDE3LjQ1NjEgNzAuMTYwOSAxNy40NTYxQzY4LjkyMzUgMTcuNDU2MSA2Ny44NTY5IDE3Ljg3MjEgNjYuOTYwOSAxOC43MDQxQzY2LjA0MzUgMTkuNTU3NCA2NS41ODQ5IDIwLjY3NzQgNjUuNTg0OSAyMi4wNjQxQzY1LjU4NDkgMjMuNDUwOCA2Ni4wNDM1IDI0LjU2MDEgNjYuOTYwOSAyNS4zOTIxWiIgZmlsbD0iI0RFNEQzQiIvPgo8cGF0aCBkPSJNODQuNDEwNiAzNi41MjgxSDgwLjM3ODZWMTQuMTI4MUg4NC40MTA2VjE2LjQwMDFDODQuOTg2NiAxNS41NjgxIDg1Ljc2NTMgMTQuOTA2OCA4Ni43NDY2IDE0LjQxNjFDODcuNzI4IDEzLjkyNTQgODguNzg0IDEzLjY4MDEgODkuOTE0NiAxMy42ODAxQzkxLjk4NCAxMy42ODAxIDkzLjcyMjYgMTQuNDM3NCA5NS4xMzA2IDE1Ljk1MjFDOTYuNTE3MyAxNy40NjY4IDk3LjIxMDYgMTkuNTA0MSA5Ny4yMTA2IDIyLjA2NDFDOTcuMjEwNiAyNC41NjAxIDk2LjQ3NDYgMjYuNTc2MSA5NS4wMDI2IDI4LjExMjFDOTMuNTMwNiAyOS42Njk0IDkxLjcxNzMgMzAuNDQ4MSA4OS41NjI2IDMwLjQ0ODFDODcuNDA4IDMwLjQ0ODEgODUuNjkwNiAyOS42NDgxIDg0LjQxMDYgMjguMDQ4MVYzNi41MjgxWk05MS44MzQ2IDE4Ljc2ODFDOTAuOTU5OSAxNy44OTM0IDg5Ljg5MzMgMTcuNDU2MSA4OC42MzQ2IDE3LjQ1NjFDODcuMzc1OSAxNy40NTYxIDg2LjMwOTMgMTcuODkzNCA4NS40MzQ2IDE4Ljc2ODFDODQuNTgxMyAxOS42NDI4IDg0LjE1NDYgMjAuNzQxNCA4NC4xNTQ2IDIyLjA2NDFDODQuMTU0NiAyMy4zODY4IDg0LjU4MTMgMjQuNDc0OCA4NS40MzQ2IDI1LjMyODFDODYuMzA5MyAyNi4yMjQxIDg3LjM3NTkgMjYuNjcyMSA4OC42MzQ2IDI2LjY3MjFDODkuODkzMyAyNi42NzIxIDkwLjk1OTkgMjYuMjI0MSA5MS44MzQ2IDI1LjMyODFDOTIuNjg4IDI0LjQ3NDggOTMuMTE0NiAyMy4zODY4IDkzLjExNDYgMjIuMDY0MUM5My4xMTQ2IDIwLjc0MTQgOTIuNjg4IDE5LjY0MjggOTEuODM0NiAxOC43NjgxWiIgZmlsbD0iI0RFNEQzQiIvPgo8cGF0aCBkPSJNMTAyLjc3OSAzNi41MjgxSDk4Ljc0NzRWMTQuMTI4MUgxMDIuNzc5VjE2LjQwMDFDMTAzLjM1NSAxNS41NjgxIDEwNC4xMzQgMTQuOTA2OCAxMDUuMTE1IDE0LjQxNjFDMTA2LjA5NyAxMy45MjU0IDEwNy4xNTMgMTMuNjgwMSAxMDguMjgzIDEzLjY4MDFDMTEwLjM1MyAxMy42ODAxIDExMi4wOTEgMTQuNDM3NCAxMTMuNDk5IDE1Ljk1MjFDMTE0Ljg4NiAxNy40NjY4IDExNS41NzkgMTkuNTA0MSAxMTUuNTc5IDIyLjA2NDFDMTE1LjU3OSAyNC41NjAxIDExNC44NDMgMjYuNTc2MSAxMTMuMzcxIDI4LjExMjFDMTExLjg5OSAyOS42Njk0IDExMC4wODYgMzAuNDQ4MSAxMDcuOTMxIDMwLjQ0ODFDMTA1Ljc3NyAzMC40NDgxIDEwNC4wNTkgMjkuNjQ4MSAxMDIuNzc5IDI4LjA0ODFWMzYuNTI4MVpNMTEwLjIwMyAxOC43NjgxQzEwOS4zMjkgMTcuODkzNCAxMDguMjYyIDE3LjQ1NjEgMTA3LjAwMyAxNy40NTYxQzEwNS43NDUgMTcuNDU2MSAxMDQuNjc4IDE3Ljg5MzQgMTAzLjgwMyAxOC43NjgxQzEwMi45NSAxOS42NDI4IDEwMi41MjMgMjAuNzQxNCAxMDIuNTIzIDIyLjA2NDFDMTAyLjUyMyAyMy4zODY4IDEwMi45NSAyNC40NzQ4IDEwMy44MDMgMjUuMzI4MUMxMDQuNjc4IDI2LjIyNDEgMTA1Ljc0NSAyNi42NzIxIDEwNy4wMDMgMjYuNjcyMUMxMDguMjYyIDI2LjY3MjEgMTA5LjMyOSAyNi4yMjQxIDExMC4yMDMgMjUuMzI4MUMxMTEuMDU3IDI0LjQ3NDggMTExLjQ4MyAyMy4zODY4IDExMS40ODMgMjIuMDY0MUMxMTEuNDgzIDIwLjc0MTQgMTExLjA1NyAxOS42NDI4IDExMC4yMDMgMTguNzY4MVoiIGZpbGw9IiNERTREM0IiLz4KPHBhdGggZD0iTTEyMS4xNDggMzAuMDAwMUgxMTcuMTE2VjcuNjAwMUgxMjEuMTQ4VjMwLjAwMDFaIiBmaWxsPSIjREU0RDNCIi8+CjxwYXRoIGQ9Ik0xMzguNzc5IDIxLjYxNjFWMjMuMDI0MUgxMjYuNTU1QzEyNi42ODMgMjQuMjQwMSAxMjcuMTQxIDI1LjIxMDggMTI3LjkzMSAyNS45MzYxQzEyOC43MiAyNi42NDAxIDEyOS43MTIgMjYuOTkyMSAxMzAuOTA3IDI2Ljk5MjFDMTMyLjg2OSAyNi45OTIxIDEzNC4zMzEgMjYuMDIxNCAxMzUuMjkxIDI0LjA4MDFMMTM4LjI5OSAyNS44MDgxQzEzNi44MDUgMjguOTAxNCAxMzQuMzIgMzAuNDQ4MSAxMzAuODQzIDMwLjQ0ODFDMTI4LjU4MSAzMC40NDgxIDEyNi42NjEgMjkuNjU4OCAxMjUuMDgzIDI4LjA4MDFDMTIzLjQ4MyAyNi41MDE0IDEyMi42ODMgMjQuNDk2MSAxMjIuNjgzIDIyLjA2NDFDMTIyLjY4MyAxOS41ODk0IDEyMy40OTMgMTcuNTczNCAxMjUuMTE1IDE2LjAxNjFDMTI2LjY5MyAxNC40NTg4IDEyOC42NjcgMTMuNjgwMSAxMzEuMDM1IDEzLjY4MDFDMTMzLjI5NiAxMy42ODAxIDEzNS4xNTIgMTQuNDE2MSAxMzYuNjAzIDE1Ljg4ODFDMTM4LjA1MyAxNy40MDI4IDEzOC43NzkgMTkuMzEyMSAxMzguNzc5IDIxLjYxNjFaTTEzMC45MDcgMTYuNzUyMUMxMjkuODgzIDE2Ljc1MjEgMTI4Ljk3NiAxNy4wNjE0IDEyOC4xODcgMTcuNjgwMUMxMjcuNDE5IDE4LjI5ODggMTI2Ljg3NSAxOS4wOTg4IDEyNi41NTUgMjAuMDgwMUgxMzUuMDY3QzEzNC44NzUgMTkuMDM0OCAxMzQuNDE2IDE4LjIyNDEgMTMzLjY5MSAxNy42NDgxQzEzMi45NjUgMTcuMDUwOCAxMzIuMDM3IDE2Ljc1MjEgMTMwLjkwNyAxNi43NTIxWiIgZmlsbD0iI0RFNEQzQiIvPgo8cGF0aCBkPSJNMTUwLjIwOSAxMy44NzIxTDE0OS41NjkgMTcuNjgwMUMxNDkuMTg1IDE3LjUzMDggMTQ4Ljc0OCAxNy40NTYxIDE0OC4yNTcgMTcuNDU2MUMxNDcuMTA1IDE3LjQ1NjEgMTQ2LjE3NyAxNy44OTM0IDE0NS40NzMgMTguNzY4MUMxNDQuNzY5IDE5LjY0MjggMTQ0LjQxNyAyMC43NzM0IDE0NC40MTcgMjIuMTYwMVYzMC4wMDAxSDE0MC4zODVWMTQuMTI4MUgxNDQuNDE3VjE2LjY1NjFDMTQ1LjQyIDE0LjY3MjEgMTQ2Ljg5MiAxMy42ODAxIDE0OC44MzMgMTMuNjgwMUMxNDkuMzI0IDEzLjY4MDEgMTQ5Ljc4MiAxMy43NDQxIDE1MC4yMDkgMTMuODcyMVoiIGZpbGw9IiNERTREM0IiLz4KPHBhdGggZD0iTTE3MC4wMzIgMTkuMjgwMVYzMC4wMDAxSDE2Ny41MzZWMTkuNzI4MUMxNjcuNTM2IDE4LjUzMzQgMTY3LjE4NCAxNy42MDU0IDE2Ni40OCAxNi45NDQxQzE2NS43NzYgMTYuMjYxNCAxNjQuODM3IDE1LjkyMDEgMTYzLjY2NCAxNS45MjAxQzE2Mi4zODQgMTUuOTIwMSAxNjEuMjc1IDE2LjQwMDEgMTYwLjMzNiAxNy4zNjAxQzE1OS4zOTcgMTguMzYyOCAxNTguOTI4IDE5LjY0MjggMTU4LjkyOCAyMS4yMDAxVjMwLjAwMDFIMTU2LjQzMlY3LjYwMDFIMTU4LjkyOFYxNi45MTIxQzE1OS40NCAxNS45MzA4IDE2MC4xODcgMTUuMTUyMSAxNjEuMTY4IDE0LjU3NjFDMTYyLjE0OSAxMy45Nzg4IDE2My4yMDUgMTMuNjgwMSAxNjQuMzM2IDEzLjY4MDFDMTY1LjkxNSAxMy42ODAxIDE2Ny4yNjkgMTQuMTQ5NCAxNjguNCAxNS4wODgxQzE2OS40ODggMTYuMDQ4MSAxNzAuMDMyIDE3LjQ0NTQgMTcwLjAzMiAxOS4yODAxWiIgZmlsbD0iI0RFNEQzQiIvPgo8cGF0aCBkPSJNMTg3LjUxNiAyMS42MTYxVjIyLjQ4MDFIMTc0LjM5NkMxNzQuNDgyIDI0LjIwODEgMTc1LjAxNSAyNS42MTYxIDE3NS45OTYgMjYuNzA0MUMxNzYuOTk5IDI3Ljc5MjEgMTc4LjI5IDI4LjMzNjEgMTc5Ljg2OCAyOC4zMzYxQzE4MS4xNyAyOC4zMzYxIDE4Mi4yMzYgMjguMDM3NCAxODMuMDY4IDI3LjQ0MDFDMTgzLjkgMjYuODQyOCAxODQuNjE1IDI1LjkzNjEgMTg1LjIxMiAyNC43MjAxTDE4Ny4wMzYgMjUuODA4MUMxODUuNDc5IDI4LjkwMTQgMTgzLjA1OCAzMC40NDgxIDE3OS43NzIgMzAuNDQ4MUMxNzcuNTU0IDMwLjQ0ODEgMTc1LjY5OCAyOS42NDgxIDE3NC4yMDQgMjguMDQ4MUMxNzIuNjY4IDI2LjQ5MDggMTcxLjkgMjQuNDk2MSAxNzEuOSAyMi4wNjQxQzE3MS45IDE5LjY1MzQgMTcyLjY2OCAxNy42NDgxIDE3NC4yMDQgMTYuMDQ4MUMxNzUuNzQgMTQuNDY5NCAxNzcuNjI4IDEzLjY4MDEgMTc5Ljg2OCAxMy42ODAxQzE4Mi4yMzYgMTMuNjgwMSAxODQuMTAzIDE0LjQxNjEgMTg1LjQ2OCAxNS44ODgxQzE4Ni44MzQgMTcuMzM4OCAxODcuNTE2IDE5LjI0ODEgMTg3LjUxNiAyMS42MTYxWk0xNzkuODY4IDE1Ljc5MjFDMTc4LjUwMyAxNS43OTIxIDE3Ny4zNjIgMTYuMjA4MSAxNzYuNDQ0IDE3LjA0MDFDMTc1LjUyNyAxNy44NzIxIDE3NC45MDggMTkuMDAyOCAxNzQuNTg4IDIwLjQzMjFIMTg1LjAyQzE4NC45MzUgMTkuMDAyOCAxODQuMzggMTcuODcyMSAxODMuMzU2IDE3LjA0MDFDMTgyLjMzMiAxNi4yMDgxIDE4MS4xNyAxNS43OTIxIDE3OS44NjggMTUuNzkyMVoiIGZpbGw9IiNERTREM0IiLz4KPHBhdGggZD0iTTIwMy4xNDEgMzAuMDAwMUgyMDAuNjQ1QzIwMC4wMDUgMjkuMjMyMSAxOTkuNjg1IDI4LjE4NjggMTk5LjY4NSAyNi44NjQxQzE5OS4xOTQgMjguMDE2MSAxOTguNDY5IDI4LjkwMTQgMTk3LjUwOSAyOS41MjAxQzE5Ni41NyAzMC4xMzg4IDE5NS40OTMgMzAuNDQ4MSAxOTQuMjc3IDMwLjQ0ODFDMTkyLjY3NyAzMC40NDgxIDE5MS4zODYgMzAuMDAwMSAxOTAuNDA1IDI5LjEwNDFDMTg5LjQyNCAyOC4xODY4IDE4OC45MzMgMjcuMDI0MSAxODguOTMzIDI1LjYxNjFDMTg4LjkzMyAyNC4yMDgxIDE4OS40MjQgMjMuMDU2MSAxOTAuNDA1IDIyLjE2MDFDMTkxLjQwOCAyMS4yNjQxIDE5Mi43NDEgMjAuNjg4MSAxOTQuNDA1IDIwLjQzMjFMMTk5LjY4NSAxOS41NjgxVjE4Ljg2NDFDMTk5LjY4NSAxNi44MTYxIDE5OC40MzcgMTUuNzkyMSAxOTUuOTQxIDE1Ljc5MjFDMTk0Ljc2OCAxNS43OTIxIDE5My44NSAxNi4wMjY4IDE5My4xODkgMTYuNDk2MUMxOTIuNTI4IDE2Ljk0NDEgMTkyLjE5NyAxNy41MzA4IDE5Mi4xOTcgMTguMjU2MUMxOTIuMTk3IDE4LjM2MjggMTkyLjIxOCAxOC41MjI4IDE5Mi4yNjEgMTguNzM2MUwxOTAuMDg1IDE5LjQ3MjFDMTg5LjkxNCAxOS4wMjQxIDE4OS44MjkgMTguNTk3NCAxODkuODI5IDE4LjE5MjFDMTg5LjgyOSAxNi45NTQ4IDE5MC4zOTQgMTUuODg4MSAxOTEuNTI1IDE0Ljk5MjFDMTkyLjY1NiAxNC4xMTc0IDE5NC4xMjggMTMuNjgwMSAxOTUuOTQxIDEzLjY4MDFDMTk3Ljk2OCAxMy42ODAxIDE5OS41MTQgMTQuMTI4MSAyMDAuNTgxIDE1LjAyNDFDMjAxLjY0OCAxNS45MjAxIDIwMi4xODEgMTcuMjAwMSAyMDIuMTgxIDE4Ljg2NDFWMjYuMDMyMUMyMDIuMTgxIDI2Ljk0OTQgMjAyLjI0NSAyNy42ODU0IDIwMi4zNzMgMjguMjQwMUMyMDIuNTAxIDI4Ljc3MzQgMjAyLjc1NyAyOS4zNjAxIDIwMy4xNDEgMzAuMDAwMVpNMTk0LjU2NSAyOC4yMDgxQzE5Ni4xNDQgMjguMjA4MSAxOTcuNDAyIDI3LjYwMDEgMTk4LjM0MSAyNi4zODQxQzE5OS4yMzcgMjUuMjEwOCAxOTkuNjg1IDIzLjc2MDEgMTk5LjY4NSAyMi4wMzIxVjIxLjU1MjFMMTk0Ljg1MyAyMi4zODQxQzE5Mi42MTMgMjIuNzg5NCAxOTEuNDkzIDIzLjgyNDEgMTkxLjQ5MyAyNS40ODgxQzE5MS40OTMgMjYuMzIwMSAxOTEuNzcgMjYuOTgxNCAxOTIuMzI1IDI3LjQ3MjFDMTkyLjg4IDI3Ljk2MjggMTkzLjYyNiAyOC4yMDgxIDE5NC41NjUgMjguMjA4MVoiIGZpbGw9IiNERTREM0IiLz4KPHBhdGggZD0iTTIwNy41MDMgMzAuMDAwMUgyMDUuMDA3VjcuNjAwMUgyMDcuNTAzVjMwLjAwMDFaIiBmaWxsPSIjREU0RDNCIi8+CjxwYXRoIGQ9Ik0yMTEuOTM0IDE2LjExMjFIMjA5LjI3OFYxNC4xMjgxSDIxMS45MzRWOS44NDAxSDIxNC40M1YxNC4xMjgxSDIxOC4wNzhWMTYuMTEyMUgyMTQuNDNWMjUuNzEyMUMyMTQuNDMgMjYuNjUwOCAyMTQuNTc5IDI3LjMxMjEgMjE0Ljg3OCAyNy42OTYxQzIxNS4xNzcgMjguMDgwMSAyMTUuNzUzIDI4LjI3MjEgMjE2LjYwNiAyOC4yNzIxQzIxNi45OSAyOC4yNzIxIDIxNy4zODUgMjguMjA4MSAyMTcuNzkgMjguMDgwMUwyMTguMDE0IDMwLjE2MDFDMjE3LjQ1OSAzMC4zNTIxIDIxNi43NTUgMzAuNDQ4MSAyMTUuOTAyIDMwLjQ0ODFDMjE0LjY4NiAzMC40NDgxIDIxMy43MTUgMzAuMDk2MSAyMTIuOTkgMjkuMzkyMUMyMTIuMjg2IDI4LjY4ODEgMjExLjkzNCAyNy42MjE0IDIxMS45MzQgMjYuMTkyMVYxNi4xMTIxWiIgZmlsbD0iI0RFNEQzQiIvPgo8cGF0aCBkPSJNMjMzLjY1NyAxOS4yODAxVjMwLjAwMDFIMjMxLjE2MVYxOS43MjgxQzIzMS4xNjEgMTguNTMzNCAyMzAuODA5IDE3LjYwNTQgMjMwLjEwNSAxNi45NDQxQzIyOS40MDEgMTYuMjYxNCAyMjguNDYyIDE1LjkyMDEgMjI3LjI4OSAxNS45MjAxQzIyNi4wMDkgMTUuOTIwMSAyMjQuOSAxNi40MDAxIDIyMy45NjEgMTcuMzYwMUMyMjMuMDIyIDE4LjM2MjggMjIyLjU1MyAxOS42NDI4IDIyMi41NTMgMjEuMjAwMVYzMC4wMDAxSDIyMC4wNTdWNy42MDAxSDIyMi41NTNWMTYuOTEyMUMyMjMuMDY1IDE1LjkzMDggMjIzLjgxMiAxNS4xNTIxIDIyNC43OTMgMTQuNTc2MUMyMjUuNzc0IDEzLjk3ODggMjI2LjgzIDEzLjY4MDEgMjI3Ljk2MSAxMy42ODAxQzIyOS41NCAxMy42ODAxIDIzMC44OTQgMTQuMTQ5NCAyMzIuMDI1IDE1LjA4ODFDMjMzLjExMyAxNi4wNDgxIDIzMy42NTcgMTcuNDQ1NCAyMzMuNjU3IDE5LjI4MDFaIiBmaWxsPSIjREU0RDNCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi4yODU3MSAxQzEuMDIzMzUgMSAwIDIuMDIzMzUgMCAzLjI4NTcxQzAgNC41NDgwOCAxLjAyMzM1IDUuNTcxNDMgMi4yODU3MSA1LjU3MTQzSDExLjQyODZDMjAuMjY1MSA1LjU3MTQzIDI3LjQyODYgMTIuNzM0OSAyNy40Mjg2IDIxLjU3MTRDMjcuNDI4NiAzMC40MDggMjAuMjY1MSAzNy41NzE0IDExLjQyODYgMzcuNTcxNEgyLjI4NTcxQzEuMDIzMzUgMzcuNTcxNCAwIDM4LjU5NDggMCAzOS44NTcxQzAgNDEuMTE5NSAxLjAyMzM1IDQyLjE0MjkgMi4yODU3MSA0Mi4xNDI5SDExLjQyODZDMjIuNzg5OSA0Mi4xNDI5IDMyIDMyLjkzMjcgMzIgMjEuNTcxNEMzMiAxMC4yMTAxIDIyLjc4OTkgMSAxMS40Mjg2IDFIMi4yODU3MVpNNS43MTQyNyAxMC4xNDI4QzQuNDUxOTEgMTAuMTQyOCAzLjQyODU2IDExLjE2NjIgMy40Mjg1NiAxMi40Mjg1QzMuNDI4NTYgMTMuNjkwOSA0LjQ1MTkxIDE0LjcxNDMgNS43MTQyNyAxNC43MTQzSDExLjQyODZDMTUuMjE1NyAxNC43MTQzIDE4LjI4NTcgMTcuNzg0MyAxOC4yODU3IDIxLjU3MTRDMTguMjg1NyAyNS4zNTg1IDE1LjIxNTcgMjguNDI4NSAxMS40Mjg2IDI4LjQyODVINS43MTQyN0M0LjQ1MTkxIDI4LjQyODUgMy40Mjg1NiAyOS40NTE5IDMuNDI4NTYgMzAuNzE0M0MzLjQyODU2IDMxLjk3NjYgNC40NTE5MSAzMyA1LjcxNDI3IDMzSDExLjQyODZDMTcuNzQwNCAzMyAyMi44NTcxIDI3Ljg4MzIgMjIuODU3MSAyMS41NzE0QzIyLjg1NzEgMTUuMjU5NiAxNy43NDA0IDEwLjE0MjggMTEuNDI4NiAxMC4xNDI4SDUuNzE0MjdaTTEzLjcxNDMgMjEuNTcxNEMxMy43MTQzIDIzLjQ2NSAxMi4xNzkzIDI1IDEwLjI4NTcgMjVDOC4zOTIxOSAyNSA2Ljg1NzE2IDIzLjQ2NSA2Ljg1NzE2IDIxLjU3MTRDNi44NTcxNiAxOS42Nzc5IDguMzkyMTkgMTguMTQyOCAxMC4yODU3IDE4LjE0MjhDMTIuMTc5MyAxOC4xNDI4IDEzLjcxNDMgMTkuNjc3OSAxMy43MTQzIDIxLjU3MTRaIiBmaWxsPSIjREU0RDNCIi8+Cjwvc3ZnPgo=">
                </a> */}
                        </td>
                      </tr>
                      {/* <!--      Intro Section --> */}
                      <tr>
                        <td style={{ padding: "30px", backgroundColor: "#ffffff" }}>
                          <h1 style={{ marginTop: "0", marginBottom: "1.38em", fontSize: "1.953em", lineHeight: "1.3", fontWeight: "bold", letterSpacing: "-0.02em" }}> We Want Your Feedback</h1>
                          <p style={{ margin: "0" }}>Hi,</p>
                          <p>We hope you're enjoying your experience with the Doppler Health app! We're always looking for ways to improve and make the app even more helpful for you.</p>
                          <p>We would greatly appreciate it if you could take a few minutes to complete our feedback survey. Your input will help us understand how we can better serve you and make the app even more useful.</p>
                          <p>To access the survey, please click on this link:</p>
                          {/* <p style="text-align: center;margin: 2.5em auto;">
                  <a className="button" href="https://dopplerhealth.com/" style="background: #DE4D3B; 
                       text-decoration: none; 
                       padding: 1em 1.5em;
                       color: #ffffff; 
                       border-radius: 48px;
                       mso-padding-alt:0;
                       text-underline-color:#ff3884">
                    {/* <!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%;mso-text-raise:20pt">&nbsp;</i><![endif]--> */}
                          {/* <span style="mso-text-raise:10pt;font-weight:bold;">Start Survey!</span> */}
                          {/* <!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%">&nbsp;</i><![endif]--> */}
                          {/* </a>
                </p> */}
                          <p>Thank you for your time and for using Doppler Health. Your feedback is invaluable to us.</p>
                          <p>Thanks,</p>
                          <p>The Doppler Health Team</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "30px", textAlign: "center", fontSize: "0.75em", backgroundColor: "#ffeada", color: "#384049", border: "1em solid #fff" }}>
                          <p style={{ margin: "0 0 0.75em 0", lineHeight: "0" }}>
                            {/* <!--      LinkedIn logo            --> */}
                            {/* <a href="https://www.linkedin.com/company/doppler-health" style="display:inline-block;text-decoration:none;margin: 0 5px;">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIyLjUgMi44NzMgMjAgMjAiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi41IDIuODcyNTYpIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KICAgIDxwYXRoIGQ9Ik0yMS42MjUgMi44NzI1NkgzLjM3NUMyLjg3NSAyLjg3MjU2IDIuNSAzLjI0NzU2IDIuNSAzLjc0NzU2VjIyLjEyMjZDMi41IDIyLjQ5NzYgMi44NzUgMjIuODcyNiAzLjM3NSAyMi44NzI2SDIxLjc1QzIyLjI1IDIyLjg3MjYgMjIuNjI1IDIyLjQ5NzYgMjIuNjI1IDIxLjk5NzZWMy43NDc1NkMyMi41IDMuMjQ3NTYgMjIuMTI1IDIuODcyNTYgMjEuNjI1IDIuODcyNTZaTTguMzc1IDE5Ljg3MjZINS41VjEwLjM3MjZIOC41VjE5Ljg3MjZIOC4zNzVaTTcgOS4xMjI1NkM2IDkuMTIyNTYgNS4yNSA4LjI0NzU2IDUuMjUgNy4zNzI1NkM1LjI1IDYuMzcyNTYgNiA1LjYyMjU2IDcgNS42MjI1NkM4IDUuNjIyNTYgOC43NSA2LjM3MjU2IDguNzUgNy4zNzI1NkM4LjYyNSA4LjI0NzU2IDcuODc1IDkuMTIyNTYgNyA5LjEyMjU2Wk0xOS41IDE5Ljg3MjZIMTYuNVYxNS4yNDc2QzE2LjUgMTQuMTIyNiAxNi41IDEyLjc0NzYgMTUgMTIuNzQ3NkMxMy41IDEyLjc0NzYgMTMuMjUgMTMuOTk3NiAxMy4yNSAxNS4yNDc2VjE5Ljk5NzZIMTAuMjVWMTAuMzcyNkgxMy4xMjVWMTEuNjIyNkMxMy41IDEwLjg3MjYgMTQuNSAxMC4xMjI2IDE1Ljg3NSAxMC4xMjI2QzE4Ljg3NSAxMC4xMjI2IDE5LjM3NSAxMi4xMjI2IDE5LjM3NSAxNC42MjI2VjE5Ljg3MjZIMTkuNVoiIHN0eWxlPSJmaWxsOiByZ2IoMTc3LCAxODgsIDIwMSk7Ii8+CiAgPC9nPgo8L3N2Zz4=" width="30px" height="30px"/>
                  </a> */}
                            {/* <!--      Facebook logo            --> */}
                            {/* <a href="https://www.facebook.com/Dopplerhealth" style="display:inline-block;text-decoration:none;margin: 0 5px;">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIzNzIuMjUyIC0yNzkuNTEzIDE5NC4yIDE5MyIgd2lkdGg9IjE5NC4yIiBoZWlnaHQ9IjE5MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTA2MC44LDEwMC44YzAtNTMuNi00My41LTk3LjEtOTcuMS05Ny4xcy05Ny4xLDQzLjUtOTcuMSw5Ny4xYzAsNDguNSwzNS41LDg4LjcsODIsOTUuOXYtNjcuOWgtMjQuOHYtMjhoMjQuOFY3OS40IGMwLTI0LjMsMTQuNC0zNy44LDM2LjYtMzcuOGMxMC42LDAsMjEuNiwyLDIxLjYsMnYyMy43aC0xMi4yYy0xMi4xLDAtMTUuOSw3LjYtMTUuOSwxNS4ydjE4LjJoMjdsLTQuMywyOGgtMjIuN3Y2Ny45IEMxMDI1LjMsMTg5LjUsMTA2MC44LDE0OS4zLDEwNjAuOCwxMDAuOHoiIHN0eWxlPSJmaWxsOiByZ2IoMTc3LCAxODgsIDIwMSk7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAtNDk0LjM0NzcxNywgLTI4My4yMTMyNTcpIi8+Cjwvc3ZnPg==" width="30px" height="30px">
                  </a> */}
                            {/* <!--     Instagram logo               --> */}
                            <a href="https://www.instagram.com/dopplerhealth/" style={{ display: "inline-block", textDecoration: "none", margin: "0 5px" }}>

                            </a>
                          </p>
                          <p style={{ margin: "0", fontSize: ".75rem", lineHeight: "1.5em", textAlign: "center" }}>
                            Doppler Health, 800 Woodlands Parkway, Suite 118, Ridgeland, MS 39157
                            {/* <br> */}
                            <a className="unsub" href="http://dopplerhealth.com/" style={{ color: "#384049", textDecoration: "underline" }}>Unsubscribe</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                    {/* <!--[if mso]> */}
                  </td>
                </tr>
              </table>
              {/* <![endif]--> */}
            </td>
          </tr>
        </table>
      </div>


      {/* <table border="0" cellpadding="0" cellspacing="0" width="100%" style={{tableLayout: "fixed",
           backgroundColor: "DodgerBlue",}} id="bodyTable">
                <tbody>
                    <tr>
                        <td style={{paddingRight:"10px",paddingLeft: "10px" }}align="center" valign="top" id="bodyCell">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" classNameName="wrapperWebview" style={{maxWidth:"600px"}}>
                                <tbody>
                                    <tr>
                                        <td align="center" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td style={{paddingTop: "20px", paddingBottom: "20px", paddingRight: "0px"}} align="right" valign="middle" classNameName="webview"> <a href="#" style="color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:right;text-decoration:underline;padding:0;margin:0" target="_blank" classNameName="text hideOnMobile">Oh wait, there's more! →</a>
                                                        </td>
                                                   
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                     
                  
                        </td>
                    </tr>
                </tbody>
            </table> */}
    </>
  );
};

export default Templates;