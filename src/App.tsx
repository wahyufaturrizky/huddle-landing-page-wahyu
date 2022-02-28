import Footer from "components/Footer";
import Header from "components/Header";
import Main, { ListFeatInterface } from "components/Main";
import React from "react";
import "./App.css";

const listFeat: Array<ListFeatInterface> = [
  {
    title: "Grow Together",
    desc: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
  },
  {
    title: "Flowing Conversations",
    desc: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },
  {
    title: "Your Users",
    desc: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  },
];

function App() {
  return (
    <main>
      <Header
        labelButton="Try It Free"
        desc="Huddle re-imagines the way we build communities. You have a voice, but so
        does your audience. Create connections with your users as you engage in
        genuine discussion."
      />
      <Main listFeat={listFeat} />
      <Footer />
    </main>
  );
}

export default App;
