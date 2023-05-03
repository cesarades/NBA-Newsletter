import './styles/Auth.css';

function SignUp() {
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
                                <h1 class="h">Create your account</h1>
                            </header>
                            <div class="inner-widget">
                                <div>
                                    <div>
                                        <form method="post" class="form">
                                            <div>
                                                <div>
                                                    <div>
                                                        <div class="email-wrapper">
                                                            <label class="label"
                                                            for="username">
                                                            Email address</label>
                                                            <input class="input"
                                                            inputmode="email"
                                                            name="username"
                                                            id="username" type="text"
                                                            autocapitalize="none"
                                                            spellcheck="'false" autofocus/>
                                                            <div class="email"
                                                            aria-hidden="true">
                                                            Email address</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" value="default"
                                                class="cont-btn">
                                                    <a href="/signin">Continue</a>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="alternate-action">
                                    <p class="signup">
                                        Already have an account?
                                        <a class="link" href="login">Log in</a>
                                    </p>
                                </div>
                                <div class="or">
                                    <span>Or</span>
                                </div>
                                <div class="providers">
                                    <form method="post" class="gmail">
                                        <button type="submit" class="google-btn"
                                        data-provider="google">
                                            <span class="google"
                                            data-provider="google"></span>
                                            <span class="google-txt"
                                            data-provider="google">
                                                Continue with Google</span>
                                        </button>
                                    </form>
                                    <form method="post" class="microsoft-acnt">
                                        <button type="submit" class="microsoft-btn"
                                        data-provider="microsoft">
                                            <span class="microsoft"
                                            data-provider="microsoft"></span>
                                            <span class="microsoft-txt"
                                            data-provider="microsoft">
                                                Continue with Microsoft</span>
                                        </button>
                                    </form>
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

export default SignUp;