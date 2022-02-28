import "styles/Main.css";
import { ReactComponent as ImageGrow } from "assets/images/illustration-grow-together.svg";
import { ReactComponent as ImageFlow } from "assets/images/illustration-flowing-conversation.svg";
import { ReactComponent as ImageUsers } from "assets/images/illustration-your-users.svg";
import Button from "./Button";

export interface ListFeatInterface {
  title?: string;
  desc?: string;
}
interface MainPropsInterface {
  listFeat: Array<ListFeatInterface>;
}

const Main = (props: MainPropsInterface) => {
  return (
    <section className="container-main">
      {props.listFeat.map((data, index) => (
        <div
          style={{ flexDirection: index === 1 ? "row-reverse" : undefined }}
          key={index}
          className="card-main"
        >
          <div className="text-image">
            <h2 className="font-open-sans-700 very-dark-cyan">{data.title}</h2>
            <h2 className="font-open-sans-400 grayish-blue mt-16">
              {data.desc}
            </h2>
          </div>
          <div className="container-image">
            {index === 0 ? (
              <ImageGrow />
            ) : index === 1 ? (
              <ImageFlow />
            ) : (
              <ImageUsers />
            )}
          </div>
        </div>
      ))}

      <div className="container-ready">
        <h2 className="font-open-sans-700 very-dark-cyan">
          Ready To Build Your Community?
        </h2>
        <div className="mt-16">
          <Button isPink label="Get Started For Free" />
        </div>
      </div>
    </section>
  );
};

export default Main;
