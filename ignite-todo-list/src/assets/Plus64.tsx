import React from "react";

const Plus64 = ({ appTheme }: { appTheme: string }) => {
   const iconAdd = {
    backgroundImage: `url(' data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIzLjkwMiA0LjM2MzNjLTUuMjAxNyAwLjAyMDExMS0xMC4xODUgMi4wOTUyLTEzLjg2MyA1Ljc3MzQtMy42NzgyIDMuNjc4Mi01Ljc1MzMgOC42NjE2LTUuNzczNCAxMy44NjMgMCAzLjg4MzcgMS4xNTA5IDcuNjgxIDMuMzA4NiAxMC45MSAyLjE1NzcgMy4yMjkyIDUuMjI0NCA1Ljc0NjIgOC44MTI1IDcuMjMyNCAzLjU4ODEgMS40ODYyIDcuNTM2NiAxLjg3NDcgMTEuMzQ2IDEuMTE3MiAzLjgwOTItMC43NTc4NSA3LjMwODYtMi42Mjg5IDEwLjA1NS01LjM3NSAyLjc0NjEtMi43NDY0IDQuNjE1NS02LjI0NTcgNS4zNzMtMTAuMDU1IDAuNzU3ODUtMy44MDkxIDAuMzY5MDUtNy43NTU2LTEuMTE3Mi0xMS4zNDQtMS40ODYyLTMuNTg4MS00LjAwMzItNi42NTQ4LTcuMjMyNC04LjgxMjUtMy4yMjkyLTIuMTU3Ny03LjAyNDUtMy4zMTA1LTEwLjkwOC0zLjMxMDV6IiBmaWxsPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMy42NDcyIi8+PHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMy4wMDYxIDAgMCAzLjAwNjEgLS4wOTgzNDUgMy42Njg3ZS04KSIgZD0ibTExLjcwNyA3LjM4MTNoLTMuMjExNnYtMy4yMTE2aC0xLjA4MTR2My4yMTE2aC0zLjIxNTJ2MS4wODE0aDMuMjE1MnYzLjIxMTZoMS4wODE0di0zLjIxMTZoMy4yMTE2eiIvPjxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDMuMDA2MSAwIDAgMy4wMDYxIC0uMDk4MzQ1IDMuNjY4N2UtOCkiIGQ9Im03Ljk4MzcgMS40NTE2YzEuMjkxOSAwIDIuNTU0OSAwLjM4MzEgMy42MjkxIDEuMTAwOSAxLjA3NDIgMC43MTc3NSAxLjkxMTQgMS43Mzc5IDIuNDA1OCAyLjkzMTUgMC40OTQ0IDEuMTkzNiAwLjYyMzggMi41MDcgMC4zNzE3IDMuNzc0MS0wLjI1MiAxLjI2NzEtMC44NzQyIDIuNDMxLTEuNzg3NyAzLjM0NDYtMC45MTM1IDAuOTEzNS0yLjA3NzQgMS41MzU2LTMuMzQ0NSAxLjc4NzctMS4yNjcxIDAuMjUyLTIuNTgwNSAwLjEyMjYtMy43NzQxLTAuMzcxOC0xLjE5MzYtMC40OTQ0LTIuMjEzOC0xLjMzMTYtMi45MzE1LTIuNDA1OHMtMS4xMDA5LTIuMzM3MS0xLjEwMDktMy42MjljMC4wMDY2OS0xLjczMDQgMC42OTcwNC0zLjM4NzkgMS45MjA2LTQuNjExNXMyLjg4MTEtMS45MTM5IDQuNjExNS0xLjkyMDZ6bTAtMS40NTE2Yy0xLjU3NzYgMC4wMDY0NTM5LTMuMTE4IDAuNDgwMTctNC40MjY2IDEuMzYxMy0xLjMwODYgMC44ODExOC0yLjMyNjggMi4xMzAzLTIuOTI2MSAzLjU4OTctMC41OTkyNiAxLjQ1OTQtMC43NTI3MSAzLjA2MzYtMC40NDA5OCA0LjYxMDEgMC4zMTE3MyAxLjU0NjYgMS4wNzQ3IDIuOTY2MSAyLjE5MjUgNC4wNzkzIDEuMTE3OCAxLjExMzMgMi41NDA0IDEuODcwNCA0LjA4ODIgMi4xNzU4IDEuNTQ3OCAwLjMwNTUgMy4xNTE0IDAuMTQ1NSA0LjYwODMtMC40NTk4IDEuNDU2OS0wLjYwNTIgMi43MDE5LTEuNjI4NSAzLjU3NzctMi45NDA2IDAuODc1OC0xLjMxMjIgMS4zNDMyLTIuODU0NSAxLjM0MzMtNC40MzIxIDAtMS4wNTEyLTAuMjA3Ni0yLjA5Mi0wLjYxMDktMy4wNjI4LTAuNDAzMi0wLjk3MDc1LTAuOTk0Mi0xLjg1MjMtMS43MzktMi41OTQxLTAuNzQ0OS0wLjc0MTc4LTEuNjI4OC0xLjMyOTItMi42MDEyLTEuNzI4NS0wLjk3MjQtMC4zOTkyOS0yLjAxNDEtMC42MDI2Mi0zLjA2NTMtMC41OTgzMnoiLz48L3N2Zz4=')`,
    width: "48px",
    height: "48px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
   };

   const addDark = {
    backgroundImage: `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjQ4IgogICBoZWlnaHQ9IjQ4IgogICB2aWV3Qm94PSIwIDAgNDggNDgiCiAgIGZpbGw9Im5vbmUiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzEzIgogICBzb2RpcG9kaTpkb2NuYW1lPSJwbHVzSWNvbi1kay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yICg3MzJhMDFkYTYzLCAyMDIyLTEyLTA5KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzE1IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBpbmtzY2FwZTp6b29tPSIxMi43MTg3NSIKICAgICBpbmtzY2FwZTpjeD0iMzcuNzc4ODciCiAgICAgaW5rc2NhcGU6Y3k9IjIxLjg1NzQ5NCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTkxIgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxMyIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiIC8+CiAgPHBhdGgKICAgICBpZD0icGF0aDQ2NSIKICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO3N0cm9rZS13aWR0aDozLjY0NzI0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIKICAgICBpbmtzY2FwZTpsYWJlbD0iYmdkaXNrMSIKICAgICBkPSJNIDIzLjkwMjM0NCA0LjM2MzI4MTIgQyAxOC43MDA2MzMgNC4zODMzOTIzIDEzLjcxNzI1OSA2LjQ1ODUyMzQgMTAuMDM5MDYyIDEwLjEzNjcxOSBDIDYuMzYwODY1NiAxMy44MTQ5MTQgNC4yODU3MzYxIDE4Ljc5ODI5MiA0LjI2NTYyNSAyNCBDIDQuMjY1NjI1IDI3Ljg4MzY5NSA1LjQxNjUyOTIgMzEuNjgwOTU4IDcuNTc0MjE4OCAzNC45MTAxNTYgQyA5LjczMTkwODMgMzguMTM5MzU0IDEyLjc5ODY0NiA0MC42NTYzNDEgMTYuMzg2NzE5IDQyLjE0MjU3OCBDIDE5Ljk3NDgyMiA0My42Mjg4MTUgMjMuOTIzMzM3IDQ0LjAxNzMxMyAyNy43MzI0MjIgNDMuMjU5NzY2IEMgMzEuNTQxNTk2IDQyLjUwMTkxNyAzNS4wNDA5OTcgNDAuNjMwODc3IDM3Ljc4NzEwOSAzNy44ODQ3NjYgQyA0MC41MzMyMjEgMzUuMTM4MzU0IDQyLjQwMjYwOCAzMS42MzkxMDEgNDMuMTYwMTU2IDI3LjgzMDA3OCBDIDQzLjkxODAwNSAyNC4wMjA5OTUgNDMuNTI5MjA2IDIwLjA3NDQyOSA0Mi4wNDI5NjkgMTYuNDg2MzI4IEMgNDAuNTU2NzMxIDEyLjg5ODI1NyAzOC4wMzk3NDYgOS44MzE0ODY3IDM0LjgxMDU0NyA3LjY3MzgyODEgQyAzMS41ODEzNDggNS41MTYxMzk1IDI3Ljc4NjA0MSA0LjM2MzI4MTIgMjMuOTAyMzQ0IDQuMzYzMjgxMiB6ICIgLz4KICA8cGF0aAogICAgIGQ9Ik0gMTEuNzA3LDcuMzgxMjcgSCA4LjQ5NTQgViA0LjE2OTY2IEggNy40MTM5NyBWIDcuMzgxMjcgSCA0LjE5ODczIFYgOC40NjI3IGggMy4yMTUyNCB2IDMuMjExNiBIIDguNDk1NCBWIDguNDYyNyBoIDMuMjExNiB6IgogICAgIGZpbGw9IiMwMDAwMDAiCiAgICAgaWQ9InBhdGg0IgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiCiAgICAgaW5rc2NhcGU6bGFiZWw9ImFkZHNpZ24xIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDMuMDA2MTQ2NSwwLDAsMy4wMDYxNDUyLC0wLjA5ODM0NTIyLDMuNjY4NzEzM2UtOCkiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczExIiAvPgogIDxwYXRoCiAgICAgZD0ibSA3Ljk4MzczLDEuNDUxNTggYyAxLjI5MTkyLDAgMi41NTQ4NywwLjM4MzEgMy42MjkwNywxLjEwMDg2IDEuMDc0MiwwLjcxNzc1IDEuOTExNCwxLjczNzkzIDIuNDA1OCwyLjkzMTUxIDAuNDk0NCwxLjE5MzU5IDAuNjIzOCwyLjUwNjk3IDAuMzcxNywzLjc3NDA3IC0wLjI1MiwxLjI2NzA4IC0wLjg3NDIsMi40MzA5OCAtMS43ODc3LDMuMzQ0NTggLTAuOTEzNSwwLjkxMzUgLTIuMDc3NCwxLjUzNTYgLTMuMzQ0NTMsMS43ODc3IEMgNy45OTA5NywxNC42NDIzIDYuNjc3NTksMTQuNTEyOSA1LjQ4NCwxNC4wMTg1IDQuMjkwNDIsMTMuNTI0MSAzLjI3MDI1LDEyLjY4NjkgMi41NTI0OSwxMS42MTI3IDEuODM0NzMsMTAuNTM4NSAxLjQ1MTYzLDkuMjc1NiAxLjQ1MTYzLDcuOTgzNjggMS40NTgzMiw2LjI1MzMyIDIuMTQ4NjcsNC41OTU3NCAzLjM3MjIzLDMuMzcyMTggNC41OTU3OSwyLjE0ODYyIDYuMjUzMzcsMS40NTgyNyA3Ljk4MzczLDEuNDUxNTggWiBtIDAsLTEuNDUxNTc0MjIzNTIgQyA2LjQwNjExLDAuMDA2NDU5NzEgNC44NjU3OCwwLjQ4MDE3NCAzLjU1NzE3LDEuMzYxMzQgMi4yNDg1NywyLjI0MjUyIDEuMjMwMzcsMy40OTE2NCAwLjYzMTEwNiw0Ljk1MTAyIDAuMDMxODQ2LDYuNDEwNCAtMC4xMjE2MDUsOC4wMTQ2MSAwLjE5MDEyNSw5LjU2MTE0IDAuNTAxODU1LDExLjEwNzcgMS4yNjQ3OSwxMi41MjcyIDIuMzgyNjIsMTMuNjQwNCBjIDEuMTE3ODIsMS4xMTMzIDIuNTQwNDIsMS44NzA0IDQuMDg4MiwyLjE3NTggMS41NDc3OSwwLjMwNTUgMy4xNTEzNiwwLjE0NTUgNC42MDgyOCwtMC40NTk4IDEuNDU2OSwtMC42MDUyIDIuNzAxOSwtMS42Mjg1IDMuNTc3NywtMi45NDA2IEMgMTUuNTMyNiwxMS4xMDM2IDE2LDkuNTYxMyAxNi4wMDAxLDcuOTgzNjggMTYuMDAwMSw2LjkzMjQ5IDE1Ljc5MjUsNS44OTE2NSAxNS4zODkyLDQuOTIwODkgMTQuOTg2LDMuOTUwMTQgMTQuMzk1LDMuMDY4NTcgMTMuNjUwMiwyLjMyNjc5IDEyLjkwNTMsMS41ODUwMSAxMi4wMjE0LDAuOTk3NjE4IDExLjA0OSwwLjU5ODMyNyAxMC4wNzY2LDAuMTk5MDM1IDkuMDM0OSwtMC4wMDQyOTQ1MiA3Ljk4MzczLDUuNzc2NDhlLTYgWiIKICAgICBmaWxsPSIjZjJmMmYyIgogICAgIGlkPSJwYXRoNDY3IgogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOiNmZmZmZmYiCiAgICAgaW5rc2NhcGU6bGFiZWw9ImNpcmNsZTEiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMy4wMDYxNDY1LDAsMCwzLjAwNjE0NTIsLTAuMDk4MzQ1MjIsMy42Njg3MTMzZS04KSIgLz4KPC9zdmc+Cg==')`,
    width: "48px",
    height: "48px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

   };
return appTheme === "dark" ? <div style={iconAdd}></div> : <div style={addDark}></div>;
          
      
}
export default Plus64;