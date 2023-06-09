import './styles/Chat.css';

function Chat() {
    const text = [
        "Kevin Durant Over 28.5 Points - WON",
        "Kevin Durant scored 29 points, 14 rebounds, and 1 assist on 63.0% shooting. His season averages are 29.1 points, 6.7 rebounds, and 5.0 assists. Durant's points were slightly above the line you bet on, which was expected based on his season average. His teammates, such as Devin Booker and Deandre Ayton, also had strong performances, which likely contributed to Durant's ability to score more points. With their assistance on the court, Durant had more opportunities to score.\n",
        "Chris Paul Under 8.5 Assists - WON",
        "Chris Paul had 11 points, 0 rebounds, and 5 assists on 45.0% shooting. His season averages are 13.9 points, 4.3 rebounds, and 8.9 assists. Paul's assists were under the line you bet on. One potential reason for this outcome could be his teammates' higher-than-average performances, particularly Kevin Durant and Devin Booker, who both had a high number of assists in this game. These additional assists may have reduced the opportunities for Paul to get assists himself.\n",
        "Nikola Jokic Over 12.5 Rebounds - WON",
        "Nikola Jokic scored 24 points, 19 rebounds, and 5 assists on 43.0% shooting. His season averages are 24.5 points, 11.8 rebounds, and 9.8 assists. Jokic's rebound numbers exceeded the line you bet on. A possible explanation for his outstanding performance could be the absence of strong rebounders in his teammates. For instance, Aaron Gordon had 0 rebounds, which may have provided Jokic with more opportunities to collect rebounds.\n",
        "Devin Booker Over 5.5 Assists - WON",
        "Devin Booker scored 27 points, 4 rebounds, and 8 assists on 53.0% shooting. His season averages are 27.8 points, 4.5 rebounds, and 5.5 assists. Booker's assists exceeded the line you bet on. His teammates, especially Kevin Durant and Deandre Ayton, had strong scoring performances in this game. This likely created more opportunities for Booker to make successful passes and increase his assist numbers.\n",
        "In conclusion, your bets hit mainly due to the players performing close to or better than their season averages, as well as the performances of their teammates. Good job on your bets and best of luck in future games!"
    ];
    
    let lineIndex = 0;
    let wordIndex = 0;
    
    function renderText() {
        const container = document.getElementById("text-container");
        container.innerHTML = "";
        // Render each line of text word by word
        for (let i = 0; i <= lineIndex; i++) {
            const line = text[i];
            let words = line.split(" ");
            if (i === lineIndex) {
                // Only render words up to the current word index for the current line
                words = words.slice(0, wordIndex);
            }
            for (let j = 0; j < words.length; j++) {
                const word = words[j];
                const span = document.createElement("span");
                span.innerText = word + " ";
                container.appendChild(span);
            }
            const br = document.createElement("br");
            container.appendChild(br);
        }
        // Increment the word index, or move to the next line if at the end of the current line
        if (wordIndex < text[lineIndex].split(" ").length) {
            wordIndex++;
        } else {
            lineIndex++;
            wordIndex = 0;
        }
        // Stop rendering text when all lines have been rendered
        if (lineIndex >= text.length) {
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(renderText, 50);
    return (
        <html lang="en" dir="ltr">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="./styles/Home.css"/>
            <title>NBA Newsletter</title>
        </head>
        <body class="home-body">
            <div class="home-h-full">
                <div class="home-overflow-hidden home-w-full home-h-full home-relative home-flex">
                    <div class="home-flex-shrink-0 home-bg-gray-900 home-md-flex home-md-w-260 home-md-flex-col">
                        <div class="home-flex home-h-full home-min-h-0 home-flex-col">
                            <div class="home-relative home-h-full home-w-full home-flex-1 home-items-start home-border-white">
                                <nav class="home-flex home-h-full home-w-nav home-flex-col home-p-2">
                                    <a class="home-flex home-py-3 home-px-3 home-items-center home-gap-3 home-transition-colors home-duration-200 home-text-white home-cursor-pointer home-text-sm home-rounded-md home-border home-border-white-20 home-hover-bg-gray-500 home-mb-1 home-flex-shrink-0 home-new-chat">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="home-h-4 home-w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="12" y1="7" x2="12" y2="21"></line>
                                            <line x1="5" y1="14" x2="19" y2="14"></line>
                                        </svg>
                                        New chat
                                    </a>
                                    <div class="sidebar home-flex-col home-flex-1 home-transition-opacity home-duration-500 home-overflow-y-auto home-mr-2">
                                        <div class="home-flex home-flex-col home-gap-2 home-pb-2 home-text-gray-100 home-text-sm">
                                            <div>
                                                <span>
                                                    <div class="home-relative" style={{ height: 'auto', opacity: 1 }}>
                                                        <div class="home-sticky home-top-0 home-z-16" style={{opacity: 1}}>
                                                            <div class="home-h-9 home-pb-2 home-pt-3 home-px-3 home-test-xs home-text-gray-500 home-font-medium
                                                            home-text-ellipsis home-overflow-hidden home-break-all home-bg-gray-900">Today</div>
                                                        </div>
                                                        <ol style={{padding: 0}}>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div class="home-relative" style={{ height: 'auto', opacity: 1 }}>
                                                        <div class="home-sticky home-top-0 home-z-14" style={{opacity: 1}}>
                                                            <div class="home-h-9 home-pb-2 home-pt-3 home-px-3 home-test-xs home-text-gray-500 home-font-medium
                                                            home-text-ellipsis home-overflow-hidden home-break-all home-bg-gray-900">Yesterday</div>
                                                        </div>
                                                        <ol style={{padding: 0}}>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div class="home-relative" style={{ height: 'auto', opacity: 1 }}>
                                                        <div class="home-sticky home-top-0 home-z-14" style={{opacity: 1}}>
                                                            <div class="home-h-9 home-pb-2 home-pt-3 home-px-3 home-test-xs home-text-gray-500 home-font-medium
                                                            home-text-ellipsis home-overflow-hidden home-break-all home-bg-gray-900">Previous 7 Days</div>
                                                        </div>
                                                        <ol style={{padding: 0}}>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="relative" style={{opacity: 1, height: 'auto', transform: 'none', transformOrigin: '50% 50% 0px',}}>
                                                                <a class="home-flex home-py-3 home-px-3 home-items-center home-gap3 home-relative home-rounded-md home-hover-bg- home-cursor-pointer home-break-all home-hover-pr-4 home-bg-gray-900 home-group">
                                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-mr-4 home-h-4 home-w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                    <div class="home-flex-1 home-text-ellipsis home-max-h-5 home-overflow-hidden home-break-all home-relative">
                                                                        Previous Chat.
                                                                        <div class="home-absolute home-inset-y-0 home-right-0 home-w-8 home-z-10 home-bg-gradient-to-l home-from-gray-900"></div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </span>
                                            </div>
                                            <button class="home-btn home-relative home-btn-dark home-btn-small home-m-auto home-mb-2">
                                                <div class="home-flex home-w-full home-items-center home-justify-center home-gap-2">Show more</div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="home-border-t home-border-white-20 home-pt-2 bottom">
                                        <div class=" home-relative">
                                            <button class="home-flex home-w-full home-items-center home-gap-2-5 home-rounded-md home-py-3 home-px-3 home-text-sm home-transition-colors home-duration-200 home-hover-bg-gray-800"
                                            type="button">
                                                <div class="home-ml-0-5 home-w-5 home-flex-shrink-0">
                                                    <div class="home-relative home-flex">
                                                        <span>
                                                            <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                                            </span>
                                                            <img alt="User" src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxbnQa7uxZDuemB3AFLfVqp9NqIJoxPxnSBp5ves%3Ds96-c&w=48&q=75"
                                                            decoding="async" class="home-rounded-sm" style={{position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%',}}>
                                                            </img>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="home-grow home-overflow-hidden home-text-ellipsis home-whitespace-nowrap home-text-left home-text-white">Zain Jerath</div>
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                                stroke-linecap="round" stroke-linejoin="round" class="home-h-4 home w-4 home-flex-shrink-0 home-text-gray-500"
                                                height="1em" width="1em" xmlns="https://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="home-flex home-h-full home-max-w-full home-flex-1 home-flex-col home-overflow-hidden">
                        <main class="home-main home-relative home-h-full home-w-full home-transition-width home-flex home-flex-col home-overflow-hidden home-items-streth home-flex-1">
                            <div class="home-flex-1 home-overflow-hidden">
                                <div class="home-scroll-to-bottom home-h-full home-bg-gray-800">
                                    <div class="home-scroll-to-bottom-2">
                                        <div class="home-flex home-flex-col home-items-center home-text-sm home-bg-gray-800">
                                            <div class="home-w-full home-dark-text-gray-100 home-border-b home-dark-border-gray-900-50 home-dak-bg-gray-800">
                                                <div class="home-flex home-text-base home-md-gap-6 home-lg-max-w-xl home-md-py-6 home-lg-px-0 home-m-auto">
                                                    <div class="home-flex-shrink-0 home-flex home-flex-col home-relative home-items-end home-img-main">
                                                        <div class="home=relative home-flex">
                                                        <img alt="User" src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxbnQa7uxZDuemB3AFLfVqp9NqIJoxPxnSBp5ves%3Ds96-c&w=48&q=75"
                                                                decoding="async" class="home-rounded-sm" 
                                                                style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '50px', height: '50px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}></img>
                                                        </div>
                                                    </div>
                                                    <div class="home-relative home-flex home-flex-col home-md-gap-3 home-lg-w-calc">
                                                        <div class="home-flex home-flex-grow home-flex-col home-gap-3">
                                                            <div class="home-min-h-20 home-flex home-flex-col home-items-start home-gap-4 home-whitespace-pre-wrap home-break-words">
                                                                analyze my bets
                                                            </div>
                                                        </div>
                                                        <div class="home-flex home-lg-block"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="home-w-full home-dark-text-gray-100 home-border-b home-dark-border-gray-900-50 home-dark-bg-444654">
                                                <div class="home-flex home-text-base home-md-gap-6 home-lg-max-w-xl home-md-py-special home-lg-px-0 home-m-auto">
                                                    <div class="home-flex-shrink-0 home-flex home-flex-col home-relative home-items-end">
                                                        <div class="home-relative home-p1 home-rounded-sm home-h-30px home-w-30px home-text-white home-flex home-items-center home-justify-center">
                                                        <img class="home-nba-img" src={require('./NBA.png')} alt="NBA" height="50"/>
                                                        </div>
                                                    </div>
                                                    <div class="home-relative home-flex home-flex-col home-md-gap-3 home-lg-w-calc">
                                                        <div class="home-flex home-flex-grow home-flex-col home-gap-3">
                                                            <div class="home-min-h-20 home-flex home-flex-col home-items-start home-gap-4 home-whitespace-pre-wrap home-break-words">
                                                                <div class="home-markdown home-prose home-w-full home-break-words home-dark-prose-invert">
                                                                    <div id="text-container"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="home-w-full home-md-h-48 home-flex-shrink-0"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="home-absolute home-bottom-0 home-left-0 home-w-full home-md-border-t-0 home-md-dark-border-transparent home-dark-md-bg-vert-dark-gradient home-pt-2">
                                <form class="home-flex home-flex-row home-gap-3 home-lg-mx-auto home-lg-max-w-2xl">
                                    <div class="home-relative home-flex home-h-full home-flex-1 home-items-stretch home-md-flex-col">
                                        <div>
                                            <div class="home-h-full home-flex home-md-w-full home-md-m-auto home-md-mb-2 home-md-gap-2 home-justify-center"> 
                                            </div>
                                        </div>
                                        <div class="home-flex home-flex-col home-w-full home-flex-grow home-md-py-3 home-md-pl-4 home-relative home-border home-dark-border-gray-900-50 home-dark-text-white home-dark-bg-gray-700 home-rounded-md home-dark-shadow-0-0-15">
                                            <textarea style={{ maxHeight: '200px', height: '24px', overflowY: 'hidden' }} rows="1"
                                            placeholder="Send a message" class="home-m-0 home-w-full home-resize-none home-border-0 home-p-0 home-pr-7 home-focus-visible-ring-0 home-dark-bg-transparent home-md-pl-0"></textarea>
                                            <button class="home-absolute home-p-1 home-rounded-md home-text-gray-500 home-md-bottom-2-5 home-hover-text-gray-400 home-hover-bg-gray-900 home-md-right-2">
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="home-h-4 home-w-4 home-mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div class="home-text-center home-text-xs home-dark-text-gray-300 home-md-px-4 home-md-pt-3 home-md-pb-6">
                                    <span>
                                        NBANewsletter is not liable for any bets you place as a result of using our application
                                    </span>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </body>
        </html>
    );
}

export default Chat;
