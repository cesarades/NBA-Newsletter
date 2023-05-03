import './styles/Auth.css';

function SignIn() {
  return (
    <html lang="en" dir="ltr">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="./styles/Auth.css"/>
    </head>
    <body class="layout">
        <div class="wrapper">
            <header class="header">
                <img src={require('./NBA.png')} alt="NBA" height="80"/>
            </header>
            <main class="widget">
                <section class="section">
                    <div class="outer1">
                        <div class="outer2">
                            <header class="header2">
                                <h1 class="h">Enter your password</h1>
                            </header>
                            <div class="inner-widget">
                                <div>
                                    <div>
                                        <form method="post" class="form">
                                            <div>
                                                <div>
                                                    <div>
                                                        <div class="email-wrapper2">
                                                            <span class="signin-email">
                                                                youremail@gmail.com
                                                            </span>
                                                            <a class="signin-edit" 
                                                            href="javascript:history.back()"
                                                            link-name="edit-username"
                                                            aria-label="Edit email address">
                                                                Edit
                                                            </a>
                                                            <input class="signin-input"
                                                            name="username"
                                                            value="youremail@gmail.com"
                                                            autocomplete="username"
                                                            readonly/>
                                                            <div class="email"
                                                            aria-hidden="true"></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="signin-password">
                                                            <label class="label"
                                                            for="password">
                                                            Password</label>
                                                            <input class="signin-password-input"
                                                            name="password"
                                                            id="password" type="password"
                                                            autocapitalize="none"
                                                            spellcheck="'false" autofocus/>
                                                            <div class="email"
                                                            aria-hidden="true">
                                                            Password</div>
                                                            <button class="signin-eye">
                                                                <img alt="Show Password" class="signin-eye-inner" src="https://img.icons8.com/material-outlined/24/null/visible--v1.png"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="signup">
                                                <a class="link" href="/home">Forgot password?</a>
                                            </p>
                                            <div>
                                                <button type="submit" value="default"
                                                class="cont-btn">
                                                    <a href="/home">Continue</a>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="alternate-action">
                                    <p class="signup">
                                        Don't have an account?
                                        <a class="link" href="login">Sign up</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </body>
    </html>
  );
}

export default SignIn;