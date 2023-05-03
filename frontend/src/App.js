import './styles/App.css';

function App() {
  return (
    <html lang="en" dir="ltr">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet"/>
        <title>NBA Newsletter</title>
    </head>
    <body class="app-body">
        <div class="flex h-full w-full flex-col items-center justify-center">
            <div class="w-96 flex flex-col flex-auto justify-center items-center">
                <div class="mb-5">
                    <img src={require('./NBA.png')} alt="NBA" height="80"/>
                </div>
                <div class="mb-2 text-center">Welcome to NBANewsletter</div>
                <div class="mb-4 text-center">Log in to continue</div>
                <div class="flex flex-row gap-3">
                    <button class="btn relative btn-primary">
                        <a href="/login">
                          <div class="flex w-full items-center justify-center gap-2">Log in</div>
                        </a>
                    </button>
                    <button class="btn relative btn-primary">
                        <a href="/signup">
                          <div class="flex w-full items-center justify-center gap-2">Sign up</div>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </body>
    </html>
  );
}

export default App;