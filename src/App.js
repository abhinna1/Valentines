import "./static/css/tailwind.css";
import Form from "./Form";
import githubLogo from "./static/images/github.png";
function App() {
  return (
    <>
      <Form></Form>
      <div className="watermark flex items-center justify-center fixed bottom-3 gap-x-2 left-1/2 transform -translate-x-1/2 text-center text-black text-[13px] font-semibold tracking-widest">
        <img src={githubLogo} alt="" className="w-5" />
        <a
          href="https://github.com/abhinna1"
          target="_blank"
          rel="noopener noreferrer"
        >
          abhinna1
        </a>
      </div>
    </>
  );
}

export default App;
