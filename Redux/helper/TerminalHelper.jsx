export const handleOnTerminalClick = (InputRef) => {
  if (InputRef.current) {
    InputRef.current.focus();
  }
};

export const CommandMap = (command) => {
  switch (command) {
    case "initialCommand":
      return ` 
██████╗  █████╗ ███╗   ██╗     ██╗██╗████████╗    ██████╗  █████╗ ███████╗
██╔══██╗██╔══██╗████╗  ██║     ██║██║╚══██╔══╝    ██╔══██╗██╔══██╗██╔════╝
██████╔╝███████║██╔██╗ ██║     ██║██║   ██║       ██║  ██║███████║███████╗
██╔══██╗██╔══██║██║╚██╗██║██   ██║██║   ██║       ██║  ██║██╔══██║╚════██║
██║  ██║██║  ██║██║ ╚████║╚█████╔╝██║   ██║       ██████╔╝██║  ██║███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝ ╚═╝   ╚═╝       ╚═════╝ ╚═╝  ╚═╝╚══════╝
Welcome! type help -> Get All the available Commands :
           `;

    case "whoami":
      return `
Hi there! My name is Ranjit Das and
I’m a B.TECH CSE student. 
I am a fullstack web developer as well as 
Flutter Developer and Blog Writer.

More about me:
'<b>about</b>' - short summary.
'<b>resume</b>' - my latest resume.
'<b>github</b>' - my github link.`;

    case "about":
      return `
Hi there! My name is Ranjit Das and
I’m a B.TECH CSE student. 
I am a fullstack web developer as well as 
Flutter Developer and Blog Writer,

About:
Ranjit Das
Nepal,
Mail : technicalranjit@gmail.com
Linkedin : <a href="https://www.linkedin.com/in/techincalranjit"  target="_blank" >linkedin.com/in/techincalranjit</a>
Resume : <a href="https://google.com" target="_blank" >download</a>
Github : <a href="https://github.com/technicalranjitofficial" target="_blank" >github.com/technicalranjitofficial</a>
`;

      {
        /* <a href="" ref="noreferer" target="_blank"></a> */
      }

    case "github":
      window.open("https://github.com/technicalranjitofficial", "_blank");
      return `
 Opening Github if not click <a href="https://github.com/technicalranjitofficial" target="_blank" >manually</a>;       
    `;
    case "linkedin":
      window.open("https://www.linkedin.com/in/techincalranjit", "_blank");
      return `
Opening Linkedin if not click <a href="https://github.com/technicalranjitofficial" target="_blank" >manually</a>;`;
    case "resume":
      window.open("https://www.linkedin.com/in/techincalranjit", "_blank");
      return `
Opening resume if not click <a href="https://github.com/technicalranjitofficial" target="_blank" >manually</a>;       
       `;

       case "help":
        return `
Here is the list of available commands,
'<b>help</b>'   - get help
'<b>whoami</b>'   - know about me
'<b>about</b>'  - short summary.
'<b>resume</b>' - my latest resume.
'<b>github</b>' - my github link.
        `

    

    default:
      return `command not found : ${command}    
`;
  }
};
