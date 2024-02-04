import "./static/css/tailwind.css";
import Form from "./Form";
import githubLogo from "./static/images/github.png";
import Background from "./Background";
import { useState } from "react";
import AcceptedPage from "./AcceptedPage";
function App() {
  const [accepted, setAccepted] = useState(false);
  return (
    <>
      {accepted ? <Background accepted={accepted} /> : <></>}
      {accepted ? <AcceptedPage /> : <Form setAccepted={setAccepted}></Form>}

      <div className="watermark flex items-center justify-center fixed bottom-3 gap-x-2 left-1/2 transform -translate-x-1/2 text-center text-black text-[13px] font-semibold tracking-widest">
        <img src={githubLogo} alt="" className="w-5" />
        <a
          href="https://github.com/abhinna1/valentines"
          target="_blank"
          rel="noopener noreferrer"
        >
          abhinna1/valentines
        </a>
      </div>
    </>
  );
}

export default App;
