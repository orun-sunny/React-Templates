import React from 'react';

const Templates = () => {


    return (
        <>

            <div role="article" aria-roledescription="email" lang="en"
                 style={{textSizeAdjust: "100%", backgroundColor: "#FDF8F4"}}>
                <table role="presentation" style={{width: "100%", border: "none", borderSpacing: "0"}}>
                    <tr>
                        <td align="center" style={{padding: "0"}}>

                            <table role="presentation" align="center" style={{width: "600px"}}>
                                <tr>
                                    <td>

                                        <table role="presentation" style={{
                                            width: "94%",
                                            maxWidth: "600px",
                                            border: "none",
                                            borderSpacing: "0",
                                            textAlign: "left",
                                            fontFamily: 'Basier Circle',
                                            fontSize: "1em",
                                            lineHeight: "1.37em",
                                            color: "#384049"
                                        }}>

                                            <tr>
                                                <td style={{
                                                    padding: "40px 30px 30px 30px",
                                                    textAlign: "center",
                                                    fontSize: "1.5em",
                                                    fontWeight: "bold"
                                                }}>

                                                </td>
                                            </tr>
                                            {/* <!--      Intro Section --> */}
                                            <tr>
                                                <td style={{padding: "30px", backgroundColor: "#ffffff"}}>
                                                    <h1 style={{
                                                        marginTop: "0",
                                                        marginBottom: "1.38em",
                                                        fontSize: "1.953em",
                                                        lineHeight: "1.3",
                                                        fontWeight: "bold",
                                                        letterSpacing: "-0.02em"
                                                    }}> We Want Your Feedback</h1>
                                                    <p style={{margin: "0"}}>Hi,</p>
                                                    <p>We hope you're enjoying your experience with the selopia
                                                        app! We're always looking for ways to improve and make the app
                                                        even more helpful for you.</p>
                                                    <p>We would greatly appreciate it if you could take a few minutes to
                                                        complete our feedback survey. Your input will help us understand
                                                        how we can better serve you and make the app even more
                                                        useful.</p>
                                                    <p>To access the survey, please click on this link:</p>

                                                    <p>Thank you for your time and for using this app. Your
                                                        feedback is invaluable to us.</p>
                                                    <p>Thanks,</p>
                                                    <p>The selopia Team</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{
                                                    padding: "30px",
                                                    textAlign: "center",
                                                    fontSize: "0.75em",
                                                    backgroundColor: "#ffeada",
                                                    color: "#384049",
                                                    border: "1em solid #fff"
                                                }}>
                                                    <p style={{margin: "0 0 0.75em 0", lineHeight: "0"}}>
                                                        {/* <!--      LinkedIn logo            --> */}
                                                        {/* <a href="https://www.linkedin.com/company/doppler-health" style="display:inline-block;text-decoration:none;margin: 0 5px;">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIyLjUgMi44NzMgMjAgMjAiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi41IDIuODcyNTYpIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KICAgIDxwYXRoIGQ9Ik0yMS42MjUgMi44NzI1NkgzLjM3NUMyLjg3NSAyLjg3MjU2IDIuNSAzLjI0NzU2IDIuNSAzLjc0NzU2VjIyLjEyMjZDMi41IDIyLjQ5NzYgMi44NzUgMjIuODcyNiAzLjM3NSAyMi44NzI2SDIxLjc1QzIyLjI1IDIyLjg3MjYgMjIuNjI1IDIyLjQ5NzYgMjIuNjI1IDIxLjk5NzZWMy43NDc1NkMyMi41IDMuMjQ3NTYgMjIuMTI1IDIuODcyNTYgMjEuNjI1IDIuODcyNTZaTTguMzc1IDE5Ljg3MjZINS41VjEwLjM3MjZIOC41VjE5Ljg3MjZIOC4zNzVaTTcgOS4xMjI1NkM2IDkuMTIyNTYgNS4yNSA4LjI0NzU2IDUuMjUgNy4zNzI1NkM1LjI1IDYuMzcyNTYgNiA1LjYyMjU2IDcgNS42MjI1NkM4IDUuNjIyNTYgOC43NSA2LjM3MjU2IDguNzUgNy4zNzI1NkM4LjYyNSA4LjI0NzU2IDcuODc1IDkuMTIyNTYgNyA5LjEyMjU2Wk0xOS41IDE5Ljg3MjZIMTYuNVYxNS4yNDc2QzE2LjUgMTQuMTIyNiAxNi41IDEyLjc0NzYgMTUgMTIuNzQ3NkMxMy41IDEyLjc0NzYgMTMuMjUgMTMuOTk3NiAxMy4yNSAxNS4yNDc2VjE5Ljk5NzZIMTAuMjVWMTAuMzcyNkgxMy4xMjVWMTEuNjIyNkMxMy41IDEwLjg3MjYgMTQuNSAxMC4xMjI2IDE1Ljg3NSAxMC4xMjI2QzE4Ljg3NSAxMC4xMjI2IDE5LjM3NSAxMi4xMjI2IDE5LjM3NSAxNC42MjI2VjE5Ljg3MjZIMTkuNVoiIHN0eWxlPSJmaWxsOiByZ2IoMTc3LCAxODgsIDIwMSk7Ii8+CiAgPC9nPgo8L3N2Zz4=" width="30px" height="30px"/>
                  </a> */}
                                                        {/* <!--      Facebook logo            --> */}
                                                        {/* <a href="https://www.facebook.com/Dopplerhealth" style="display:inline-block;text-decoration:none;margin: 0 5px;">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIzNzIuMjUyIC0yNzkuNTEzIDE5NC4yIDE5MyIgd2lkdGg9IjE5NC4yIiBoZWlnaHQ9IjE5MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTA2MC44LDEwMC44YzAtNTMuNi00My41LTk3LjEtOTcuMS05Ny4xcy05Ny4xLDQzLjUtOTcuMSw5Ny4xYzAsNDguNSwzNS41LDg4LjcsODIsOTUuOXYtNjcuOWgtMjQuOHYtMjhoMjQuOFY3OS40IGMwLTI0LjMsMTQuNC0zNy44LDM2LjYtMzcuOGMxMC42LDAsMjEuNiwyLDIxLjYsMnYyMy43aC0xMi4yYy0xMi4xLDAtMTUuOSw3LjYtMTUuOSwxNS4ydjE4LjJoMjdsLTQuMywyOGgtMjIuN3Y2Ny45IEMxMDI1LjMsMTg5LjUsMTA2MC44LDE0OS4zLDEwNjAuOCwxMDAuOHoiIHN0eWxlPSJmaWxsOiByZ2IoMTc3LCAxODgsIDIwMSk7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAtNDk0LjM0NzcxNywgLTI4My4yMTMyNTcpIi8+Cjwvc3ZnPg==" width="30px" height="30px">
                  </a> */}
                                                        {/* <!--     Instagram logo               --> */}
                                                        <a href="https://www.instagram.com/dopplerhealth/" style={{
                                                            display: "inline-block",
                                                            textDecoration: "none",
                                                            margin: "0 5px"
                                                        }}>

                                                        </a>
                                                    </p>
                                                    <p style={{
                                                        margin: "0",
                                                        fontSize: ".75rem",
                                                        lineHeight: "1.5em",
                                                        textAlign: "center"
                                                    }}>
                                                        Doppler Health, 800 Woodlands Parkway, Suite 118, Ridgeland, MS
                                                        39157
                                                        {/* <br> */}
                                                        <a className="unsub" href="http://selopia.com/" style={{
                                                            color: "#384049",
                                                            textDecoration: "underline"
                                                        }}>Unsubscribe</a>
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


            <hr/>
            <h1>This is forget password</h1>

            <table border="0" cellPadding="0" cellSpacing="0" width="100%">

                <tr>
                    <td bgcolor="#FDF8F4" align="center">
                        <table border="0" cellPadding="0" cellSpacing="0" width="480">
                            <tr>
                                <td align="center" valign="top" style={{padding: "40px 10px 40px 10px"}}>
                                    <a href="http://selopia.com">
                                        <img alt="Logo"
                                             src="https://png.pngtree.com/png-vector/20200921/ourmid/pngtree-red-and-black-logo-png-image_2348180.jpg"
                                             width="100" height="100"
                                             style={{
                                                 display: "block",
                                                 fontFamily: "Lato",
                                                 color: "#ffffff",
                                                 fontSize: "18px",
                                                 border: "0"
                                             }}/>
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                {/*HERO*/}
                <tr>
                    <td bgcolor="#FDF8F4" align="center" style={{padding: "0px 10px 0px 10px"}}>
                        <table border="0" cellPadding="0" cellSpacing="0" width="480">
                            <tr>
                                <td bgcolor="#ffffff" align="center" valign="top"
                                    style={{
                                        padding: "40px",
                                        borderRadius: "4px",
                                        color: "#211f1f",
                                        fontFamily: "Lato",
                                        fontSize: "48px",
                                        fontWeight: "400",
                                        letterSpacing: "4px",
                                        lineHeight: "48px"
                                    }}>
                                    <h1 style={{fontSize: "32px", fontWeight: "400", margin: "0"}}>Trouble signing
                                        in?</h1>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                {/*COPY BLOCK*/}
                <tr>
                    <td bgcolor="#FDF8F4" align="center" style={{padding: " 0px 10px 0px 10px"}}>
                        <table border="0" cellPadding="0" cellSpacing="0" width="480">
                            {/*copy*/}
                            <tr>
                                <td bgcolor="#ffffff" align="left"
                                    style={{
                                        padding: "20px 30px 40px 30px",
                                        color: "#666666",
                                        fontFamily: 'Lato',
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        lineHeight: "25px"
                                    }}>
                                    <p style={{margin: " 0"}}>Resetting your password is easy. Just press the button
                                        below
                                        and follow the instructions. We'll have you up and running in no time. </p>
                                </td>
                            </tr>
                            {/*BULLETPROOF BUTTON*/}
                            <tr>
                                <td bgcolor="#ffffff" align="left">
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tr>
                                            <td bgcolor="#ffffff" align="center"
                                                style={{padding: "20px 30px 60px 30px"}}>
                                                <table border="0" cellSpacing="0" cellPadding="0">
                                                    <tr>
                                                        <td align="center" style={{
                                                            borderRadius: "3px",
                                                            backgroundColor: "#6d6dab"
                                                        }}><a href="https://orun-sunny.github.io/"
                                                            // target="_blank"
                                                              style={{
                                                                  fontSize: "20px",
                                                                  fontFamily: "Helvetica, Arial, sans-serif",
                                                                  color: "#ffffff",
                                                                  textDecoration: "none",
                                                                  padding: "15px 25px",
                                                                  borderRadius: "2px",
                                                                  border: "1px solid #7c72dc",
                                                                  display: "inline-block"
                                                              }}>Reset
                                                            Password</a></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td bgcolor="#f4f4f4" align="center" style={{padding: "30px 10px 0px 10px"}}>
                        <table border="0" cellPadding="0" cellSpacing="0" width="480">
                            {/*HEADLINE*/}
                            <tr>
                                <td bgcolor="#ffeada" align="center"
                                    style={{
                                        padding: "30px 30px 30px 30px",
                                        borderRadius: "4px 4px 4px 4px",
                                        color: "#ffffff",
                                        fontFamily: 'Lato, Helvetica, Arial, sans-serif',
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        lineHeight: "25px"
                                    }}>
                                    <h2 style={{
                                        fontSize: "20px",
                                        fontWeight: "400",
                                        color: "#111111",
                                        margin: "0"
                                    }}>Need more
                                        help?</h2>
                                    <p style={{margin: "0"}}><a href="http://selopia.com"
                                                                style={{color: "#111111"}}>We&rsquo;re here, ready to
                                        talk</a>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                {/*FOOTER */}
                <tr>
                    <td bgcolor="#f4f4f4" align="center" style={{padding: "0px 10px 0px 10px"}}>
                        <table border="0" cellPadding="0" cellSpacing="0" width="480">

                            {/*PERMISSION REMINDER */}
                            <tr>
                                <td bgcolor="#f4f4f4" align="left"
                                    style={{
                                        padding: "0px 30px 30px 30px",
                                        color: "#666666",
                                        fontFamily: 'Lato, Helvetica, Arial, sans-serif',
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "18px"
                                    }}>
                                    <p style={{margin: "0"}}>You received this email because you requested a password
                                        reset. If you did not, <a href="http://selopia.com"
                                                                  style={{color: "#111111", fontWeight: "700"}}>please
                                            contact us.</a>.</p>
                                </td>
                            </tr>

                            {/*ADDRESS */}
                            <tr>
                                <td bgcolor="#f4f4f4" align="left"
                                    style={{
                                        padding: "0px 30px 30px 30px",
                                        color: "#666666",
                                        fontFamily: 'Lato, Helvetica, Arial, sans-serif',
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "18px"
                                    }}>

                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <h1>Order confirmation part</h1>


            <table width="100%" align="center" border="0" cellPadding="0" cellSpacing="0"
                   style={{borderCollapse: "collapse", borderSpacing: " 0", margin: "0", padding: "0", width: "100%"}}
                   className="background">
                <tr>
                    <td align="center" valign="top"
                        style={{
                            borderCollapse: "collapse",
                            borderSpacing: "0",
                            margin: "0",
                            padding: "0",
                            backgroundColor: "#F0F0F0"
                        }}>
                        <table border="0" cellPadding="0" cellSpacing="0" align="center" bgcolor="#FFFFFF" width="560"
                               style={{
                                   borderCollapse: "collapse", borderSpacing: "0", padding: "0", width: "inherit",
                                   maxWidth: "560px"
                               }} className="container">
                            <tr>
                                <td align="center" valign="top" style={{
                                    borderCollapse: "collapse",
                                    borderSpacing: "0",
                                    margin: "0",
                                    padding: "0",
                                    paddingLeft: "6.25%",
                                    paddingRight: "6.25%",
                                    width: "87.5%",
                                    fontFamily: "Lato",
                                    fontSize: "22px",
                                    fontWeight: "200",
                                    letterSpacing: "4px",
                                    lineHeight: "38px"
                                }} className="header">
                                    <h3>Confirmed Order !!!</h3>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style={{
                                    borderCollapse: "collapse",
                                    borderSpacing: "0",
                                    margin: "0",
                                    padding: "0",
                                    paddingLeft: "6.25%",
                                    paddingRight: "6.25%",
                                    width: "87.5%",
                                    paddingTop: "25px"
                                }} className="line">
                                    <hr color="#E0E0E0" align="center" width="100%" size="1" noshade
                                        style={{margin: "0", padding: "0"}}/>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style={{
                                    borderCollapse: "collapse",
                                    borderSpacing: "0",
                                    margin: "0",
                                    padding: "0",
                                    paddingLeft: "6.25%",
                                    paddingRight: "6.25%",
                                    width: "87.5%",
                                    fontSize: "17px",
                                    fontWeight: 400,
                                    lineHeight: "160%",
                                    paddingTop: "25px",
                                    color: "#000000",
                                    fontFamily: "sans-serif"
                                }} className="paragraph">
                                    Thank for Your order!!! <p> In order to start check your cart, you need click
                                    here.</p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style={{
                                    borderCollapse: "collapse",
                                    borderSpacing: "0",
                                    margin: "0",
                                    padding: "0",
                                    paddingLeft: "6.25%",
                                    paddingRight: "6.25%",
                                    width: "87.5%",
                                    paddingTop: "25px",
                                    paddingBottom: "5px"
                                }} className="button">
                                    <a href="https://github.com/orun-sunny"
                                       style={{textDecoration: "underline"}}>
                                        <table border="0" cellPadding="0" cellSpacing="0" align="center"
                                               style={{
                                                   maxWidth: "240px",
                                                   minWidth: "120px",
                                                   borderCollapse: "collapse",
                                                   borderSpacing: "0",
                                                   padding: "0"
                                               }}>
                                            <tr>
                                                <td align="center" valign="middle"
                                                    style={{
                                                        padding: "12px 24px",
                                                        margin: "0",
                                                        textDecoration: "none",
                                                        borderCollapse: "collapse",
                                                        borderSpacing: "0",
                                                        borderRadius: "4px",
                                                        backgroundColor: "#6d6dab"
                                                    }}><a style={{
                                                    color: "#ffffff",
                                                    textDecoration: "none",
                                                    fontFamily: "sans-serif",
                                                    fontSize: " 17px",
                                                    fontWeight: "400",
                                                    lineHeight: "120%"
                                                }}
                                                          href="https://github.com/orun-sunny">
                                                    Verify Your Order
                                                </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style={{
                                    borderCollapse: "collapse",
                                    borderSpacing: "0",
                                    margin: "0",
                                    padding: "0",
                                    paddingLeft: "6.25%",
                                    paddingRight: "6.25%",
                                    width: " 87.5%",
                                    paddingTop: "25px"
                                }} className="line">
                                    <hr color="#E0E0E0" align="center" width="100%" size="1" noshade
                                        style={{margin: "0", padding: "0"}}/>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style={{
                                    borderCollapse: "collapse",
                                    borderSpacing: "0",
                                    margin: "0",
                                    padding: "0",
                                    paddingLeft: "6.25%",
                                    paddingRight: "6.25%",
                                    width: "87.5%",
                                    fontSize: "17px",
                                    fontWeight: "400",
                                    lineHeight: "160%",
                                    paddingTop: "20px",
                                    paddingBottom: "25px",
                                    color: "#000000",
                                    fontFamily: "sans-serif"
                                }} className="paragraph">
                                    If you did not sign up for this account you can ignore this email and the account
                                    will be deleted.
                                </td>
                            </tr>
                        </table>
                        <table border="0" cellPadding="0" cellSpacing="0" align="center" width="560" style={{
                            borderCollapse: "collapse", borderSpacing: "0", padding: "0", width: "inherit",
                            maxWidth: "560px"
                        }} className="wrapper">
                            <tr>
                                <td align="center" valign="top" style={{
                                    borderCollapse: "collapse",
                                    borderSpacing: "0",
                                    margin: "0",
                                    padding: "0",
                                    paddingLeft: "6.25%",
                                    paddingRight: "6.25%",
                                    width: "87.5%",
                                    fontSize: "13px",
                                    fontWeight: "400",
                                    lineHeight: "150%",
                                    paddingTop: "20px",
                                    paddingBottom: "20px",
                                    color: "#999999",
                                    fontFamily: "sans-serif"
                                }} className="footer">
                                    Check out our extensive <a href="https://selopia.com/"
                                                               style={{
                                                                   textDecoration: "underline",
                                                                   color: "#999999",
                                                                   fontFamily: "sans-serif",
                                                                   fontSize: "13px",
                                                                   fontWeight: "400",
                                                                   lineHeight: "150%"
                                                               }}>FAQ</a> for
                                    more information
                                    or contact us through our <a href="https://selopia.com/"
                                                                 style={{
                                                                     textDecoration: "underline",
                                                                     color: "#999999",
                                                                     fontFamily: "sans-serif",
                                                                     fontSize: "13px",
                                                                     fontWeight: "400",
                                                                     lineHeight: "150%"
                                                                 }}>Contact
                                    Form</a>. Our support
                                    team is available to help you 24 hours a day, seven days a week.
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            
            <h1>this is invoice part</h1>


        </>
    );
};

export default Templates;